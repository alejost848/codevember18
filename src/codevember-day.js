import {LitElement, html} from '@polymer/lit-element';

class CodevemberDay extends LitElement {
  render() {
    return html`
    <style>
      :host {        
        position: relative;
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 10px;
        overflow: hidden;
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
        transition: opacity 0.4s ease;
      }
      :host(:hover) h3{
        transform: translateX(0px);
        opacity: 0.5;
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

      #day24{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
      }
      #day24 input{
        border: none;
        width: 50%;
        max-width: 190px;
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        padding: 12px 16px;
        background: none;
      }
    </style>
    <div class="card_info">
      <h3>${this._formattedDay}</h3>
      <span class="flex"></span>
      <h4>${this.description}</h4>
    </div>
    <div id="animation"></div>

    ${this.day == 24 ?
      html`
        <div id="day24">
          <input id="day24_input" type="text" placeholder="Type (or not) and hit enter" maxlength="15">
        </div>
      `:
      html``
    }
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

    fetch(`animations/${this._formattedDay}.json`)
      .then(response => response.json())
      .then(animationJson => {
        switch (this.day) {
          case "2":
            let day02Data = animationJson;
    
            let date = new Date();
            let minutesRotation = 6 * date.getMinutes();
            let hoursRotation = 30 * ((date.getHours() + 24) % 12 || 12) + minutesRotation/12;
    
            day02Data.layers[1].ks.r.k = minutesRotation;
            day02Data.layers[2].ks.r.k = hoursRotation;

            this.loadAnimation(day02Data);
            break;
          case "5":      
            this.loadAnimation(animationJson);
    
            this.animation.addEventListener("DOMLoaded", () => {
              this._synth = new Tone.Synth().toMaster();
    
              this.shadowRoot.querySelector("svg #C").addEventListener("mouseenter", () => {
                this.animation.loop = false;
                this.animation.playSegments([0,30], true);           
                this._synth.triggerAttackRelease('C4', '8n');
              });
              this.shadowRoot.querySelector("svg #D").addEventListener("mouseenter", () => {
                this.animation.loop = false;
                this.animation.playSegments([30,60], true);           
                this._synth.triggerAttackRelease('D4', '8n');
              });
              this.shadowRoot.querySelector("svg #E").addEventListener("mouseenter", () => {
                this.animation.loop = false;
                this.animation.playSegments([60,90], true);           
                this._synth.triggerAttackRelease('E4', '8n');
              });
              this.shadowRoot.querySelector("svg #F").addEventListener("mouseenter", () => {
                this.animation.loop = false;
                this.animation.playSegments([90,120], true);           
                this._synth.triggerAttackRelease('F4', '8n');
              });
              this.shadowRoot.querySelector("svg #G").addEventListener("mouseenter", () => {
                this.animation.loop = false;
                this.animation.playSegments([120,150], true);           
                this._synth.triggerAttackRelease('G4', '8n');
              });
              this.shadowRoot.querySelector("svg #A").addEventListener("mouseenter", () => {
                this.animation.loop = false;
                this.animation.playSegments([150,180], true);           
                this._synth.triggerAttackRelease('A4', '8n');
              });
              this.shadowRoot.querySelector("svg #B").addEventListener("mouseenter", () => {
                this.animation.loop = false;
                this.animation.playSegments([180,210], true);           
                this._synth.triggerAttackRelease('B4', '8n');
              });
    
              this.addEventListener("mouseout", () => {
                this.animation.stop();
              });
            });
    
            break;
          case "8":
            this.loadAnimation(animationJson);
            this.animation.addEventListener("DOMLoaded", () => {
              // this.addEventListener("mousemove", (event) => {
              window.addEventListener("mousemove", (event) => {
                let rect = this.getBoundingClientRect();
                // React to mouse inside the card only
                // let posXRelativeToCenter = event.pageX - rect.left - rect.width / 2;
                // let posYRelativeToCenter = event.pageY - rect.top - window.pageYOffset - rect.height / 2;
                // Map from -250 to 250
                // let xClamp = 500 * posXRelativeToCenter / rect.width;
                // let yClamp = 500 * posYRelativeToCenter / rect.height; 

                //React to mouse in the whole website
                let posXRelativeToCenter = event.pageX - window.innerWidth / 2;
                let posYRelativeToCenter = event.pageY - window.innerHeight / 2 - window.pageYOffset;
                let xClamp = 500 * posXRelativeToCenter / window.innerWidth;
                let yClamp = 500 * posYRelativeToCenter / window.innerHeight;               
                

                this.animation.animationData.layers[0].ks.p.k[0].s = [xClamp, yClamp, 0];
                this.animation.animationData.layers[0].ks.p.k[0].e = [xClamp, yClamp, 0];                
              });
            });
            break;
          case "24":
            this.loadAnimation(animationJson);
            this.animation.addEventListener("DOMLoaded", () => {
              this.animation.stop();
            });

            this.animation.addEventListener("complete", () => {
              input.style.display = "block";
              this.animation.goToAndStop(0);
            });

            let input = this.shadowRoot.getElementById('day24_input');
            input.addEventListener("keydown", (event) => {                 
              if(event.key === 'Enter') {
                if (input.value != "") {                  
                  this.animation.renderer.elements[2].updateDocumentData({t:input.value});
                } else {
                  this.animation.renderer.elements[2].updateDocumentData({t:"YOU’RE FIRED!!!"});                  
                }

                input.style.display = "none";
                this.animation.loop = false;
                this.animation.play();
                input.value = "";             
              }
            });
            break;
          default:      
            this.loadAnimation(animationJson);
        }
      });
    
    // Play animations on hover only
    // this.addEventListener("mouseenter", () => {
    //   if (this.animation) {        
    //     this.animation.play();
    //   }
    // });
    // this.addEventListener("mouseout", () => {
    //   this.animation.pause();
    // });
  }

  loadAnimation(data){
    this.animation = lottie.loadAnimation({
      container: this.shadowRoot.getElementById('animation'),
      autoplay: true,
      loop: true,
      animationData: data
    });
  }
}

window.customElements.define('codevember-day', CodevemberDay);