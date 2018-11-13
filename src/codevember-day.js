import {LitElement, html} from '@polymer/lit-element';

class CodevemberDay extends LitElement {
  render() {
    return html`
    <style>
      :host {        
        position: relative;
        background-color: #39364b;
        border-radius: 10px;
        overflow: hidden;
        transition: transform 0.4s ease;
        transform: scaleX(1.0);
      }

      :host(:hover) {
        transform: scaleX(1.02);
      }

      #animation{
        width: var(--animation-width, 100%);
        height: var(--animation-height, 100%);
        transform: scale(var(--animation-scale, 1.0));
      }

      .card_info{
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 16px 24px;
        padding-top: 24px;
        bottom: 0;
        box-sizing: border-box;
        color: white;
        z-index: 1;
        pointer-events: none;
      }

      :host(.dark) .card_info {
        color: black;
      }
      
      h3{
        margin: 0;
        font-size: 40px;
        font-weight: 600;
        line-height: 40px;
        opacity: 0.08;
      }

      h4{
        margin: 0;
        font-size: 18px;
        font-weight: 400;
        transition: transform 0.4s ease;
        opacity: 0.8;
        transform: translateX(150px);
      }
      :host(:hover) h4{
        transform: translateX(0px);
      }
      
      .flex{
        flex: 1;
      }

      #C,#D,#E,#F,#G,#A,#B{
        cursor: pointer;
      }
    </style>
    <div class="card_info">
      <h3>${this._formattedDay}</h3>
      <span class="flex"></span>
      <h4>${this.description}</h4>
    </div>
    <div id="animation"></div>
    `;
  }

  static get properties() {
    return {
      day: {type: String},
      description: {type: String},
      _formattedDay: {type: String},
      animation: {type: Object}
    };
  }

  firstUpdated() {
    this._formattedDay = ('0' + this.day).slice(-2);   
   
    switch (this.day) {
      case "2":
        fetch(`animations/${this._formattedDay}.json`)
          .then(response => response.json())
          .then(json => {
            let day02Data = json;

            let date = new Date();
            let minutesRotation = 6 * date.getMinutes();
            let hoursRotation = 30 * ((date.getHours() + 24) % 12 || 12);

            day02Data.layers[1].ks.r.k = minutesRotation;
            day02Data.layers[2].ks.r.k = hoursRotation;
            
            this.animation = lottie.loadAnimation({
              container: this.shadowRoot.getElementById('animation'),
              renderer: 'svg',
              loop: true,
              animationData: day02Data
            });
          });
        break;
      case "5":      
        this.animation = lottie.loadAnimation({
          container: this.shadowRoot.getElementById('animation'),
          renderer: 'svg',
          loop: true,
          path: `animations/${this._formattedDay}.json`
        });

        this.animation.addEventListener("DOMLoaded", () => {
          import("/node_modules/tone/build/Tone.min.js").then(() => {
            this._synth = new Tone.Synth().toMaster();
          });

          this.shadowRoot.querySelector("svg #C").addEventListener("mouseenter", () => {
            this.animation.playSegments([0,30], true);           
            this._synth.triggerAttackRelease('C4', '8n');                   
          });
          this.shadowRoot.querySelector("svg #D").addEventListener("mouseenter", () => {
            this.animation.playSegments([30,60], true);           
            this._synth.triggerAttackRelease('D4', '8n');                   
          });
          this.shadowRoot.querySelector("svg #E").addEventListener("mouseenter", () => {
            this.animation.playSegments([60,90], true);           
            this._synth.triggerAttackRelease('E4', '8n');                   
          });
          this.shadowRoot.querySelector("svg #F").addEventListener("mouseenter", () => {
            this.animation.playSegments([90,120], true);           
            this._synth.triggerAttackRelease('F4', '8n');                   
          });
          this.shadowRoot.querySelector("svg #G").addEventListener("mouseenter", () => {
            this.animation.playSegments([120,150], true);           
            this._synth.triggerAttackRelease('G4', '8n');                   
          });
          this.shadowRoot.querySelector("svg #A").addEventListener("mouseenter", () => {
            this.animation.playSegments([150,180], true);           
            this._synth.triggerAttackRelease('A4', '8n');                   
          });
          this.shadowRoot.querySelector("svg #B").addEventListener("mouseenter", () => {
            this.animation.playSegments([180,210], true);           
            this._synth.triggerAttackRelease('B4', '8n');                   
          });

          this.addEventListener("mouseout", () => {
            this.animation.playSegments([0,210], false);
          });          
        });

        break;
      default:      
        this.animation = lottie.loadAnimation({
          container: this.shadowRoot.getElementById('animation'),
          renderer: 'svg',
          loop: true,
          path: `animations/${this._formattedDay}.json`
        });
    }    
  }
}

window.customElements.define('codevember-day', CodevemberDay);