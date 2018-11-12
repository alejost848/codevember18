import {LitElement, html} from '@polymer/lit-element';

class CodevemberDay extends LitElement {
  render() {
    return html`
    <style>
      :host {        
        position: relative;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        overflow: hidden;
        transition: transform 0.4s ease;
        transform: translateX(0px);
      }

      :host(:hover) {
        transform: translateX(5px);
      }

      #animation{
        width: var(--animation-width, 100%);
        height: var(--animation-height, 100%);
      }

      .card_info{
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 24px;
        padding-right: 48px;
        box-sizing: border-box;
        opacity: 0;
        color: white;
        z-index: 1;
        transition: opacity 0.4s ease;
        background-image: linear-gradient(to right, #ff6668, rgba(220,40,60,0.2) );
      }

      :host(:hover) .card_info{
        opacity: 1;
      }
      
      h3{
        margin: 0;
        font-size: 80px;
        font-weight: 600;
        line-height: 80px;
        transition: transform 0.4s ease;
        transform: translateX(-100px);
      }
      :host(:hover) h3{
        transform: translateX(0px);
      }

      h4{
        margin: 0;
        font-size: 30px;
        font-weight: 400;
        transition: transform 0.45s ease;
        transform: translateX(-150px);
      }
      :host(:hover) h4{
        transform: translateX(0px);
      }
      
      .flex{
        flex: 1;
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
      _formattedDay: {type: String}
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
            
            lottie.loadAnimation({
              container: this.shadowRoot.getElementById('animation'),
              renderer: 'svg',
              loop: true,
              autoplay: true,
              animationData: day02Data
            });
          });
        break;    
      default:      
    lottie.loadAnimation({
      container: this.shadowRoot.getElementById('animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `animations/${this._formattedDay}.json`
    }); 
  }
}
}

window.customElements.define('codevember-day', CodevemberDay);