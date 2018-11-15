import {LitElement, html} from '@polymer/lit-element';
import {until} from 'lit-html/directives/until';
import { installOfflineWatcher } from 'pwa-helpers/network.js';

import {alejostIcon} from './icons.js';
import './codevember-day.js';
import './snack-bar.js';

class CodevemberApp extends LitElement {

  render() {
    return html`
    <style>
      #grid{
        display: grid;
        margin: 0 auto;
        width: 100%;
        max-width: 1644px;
        box-sizing: border-box;
        padding: 138px 0;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 24px;
        grid-auto-rows: 300px;
        transition: padding 0.3s ease;
      }
      
      #intro {
        color: white;
        display: flex;
        flex-direction: row;
        padding: 16px;
      }
      #logo{
        width: 40px;
        height: 40px;
      }
      #logo svg{
        width: 100%;
        height: 100%;
      }
      #title_box{
        display: flex;
        flex-direction: column;
      }
      .title_mask{
        overflow: hidden;
        align-self: flex-end;
      }
      .flex{
        flex: 1;
      }
      h1 {
        margin: 0;
        width: 240px;
        font-size: 60px;
        line-height: 50px;
      }
      h2 {
        margin: 0;
        font-size: 40px;
        align-self: flex-end;
        line-height: 38px;
        color: rgba(255,255,255,0.2);
      }
      codevember-day{
        grid-column: span 3;
        grid-row: span 1;
        opacity: 0;
      }
      .small{
        grid-column: span 3;
      }
      .medium{
        grid-column: span 4;
      }
      .large{
        grid-column: span 5;
      }
      
      codevember-day:nth-of-type(4){
        --animation-scale: 1.7;
      }
      codevember-day:nth-of-type(7){
        --animation-width: 100%;
        --animation-height: auto;
        --animation-scale: 1.3;
      }
      codevember-day:nth-of-type(9){
        --animation-scale: 1.5;
      }
      codevember-day:nth-of-type(13){
        --animation-scale: 1.3;
      }

      #toast{
        display: none;
      }

      button{
        margin: 0;
        font: inherit;
        border: none;
        outline: inherit;
        box-sizing: border-box;
        padding: 12px 24px;
        border-radius: 50px;
        font-size: inherit;
        text-transform: none;
        color: white;
        cursor: pointer;
        font-weight: 600;    
        background-color: transparent;
        padding: 0;
      }

      @media(max-width: 1700px){
        #grid{
          padding: 138px 32px;
        }
      }
      @media(max-width: 1500px){
        #grid{
          grid-template-columns: repeat(6, 1fr);
        }
        .small{
          grid-column: span 2;
        }
        .medium{
          grid-column: span 4;
        }
        .large{
          grid-column: span 4;
        }
      }
      @media(max-width: 1100px){
        #grid{
          grid-template-columns: repeat(4, 1fr);
        }
        .small{
          grid-column: span 2;
        }
        .medium{
          grid-column: span 2;
        }
        .large{
          grid-column: span 2;
        }
      }
      @media(max-width: 768px){
        #grid{
          grid-template-columns: repeat(2, 1fr);
          padding: 48px 24px;
        }
        .small{
          grid-column: span 2;
        }
        .medium{
          grid-column: span 2;
        }
        .large{
          grid-column: span 2;
        }
        h1 {
          width: 180px;
          font-size: 40px;
          line-height: 34px;
        }
        h2 {
          font-size: 30px;
          line-height: 26px;
        }
      }
      @media(max-width: 480px){
        #grid{
          padding: 24px 8px;
        }
      }
    </style>

    <div id="grid">
      <div id="intro" class="small">
        <div id="title_box">
          <a id="logo" href="https://alejo.st" target="_blank" rel="noopener" title="Logo">${alejostIcon}</a>
          <span class="flex"></span>
          <h1>
            <div class="title_mask">
              <div>Code</div>
            </div>
            <div class="title_mask">
              <div>vember</div>
            </div>
          </h1>
        </div>
        <span class="flex"></span>
        <div class="title_mask">
          <h2>'18</h2>
        </div>
      </div>

      ${this.data.map((day, index) => html`
        <codevember-day day="${index + 1}" description="${day.description}" class="${day.size} ${day.theme}"></codevember-day>
      `)}
    </div>

    <snack-bar id="toast" ?active="${this._snackbarOpened}" @loaded="${this._snackbarLoaded}">
      <span class="flex"></span>
      <button id="toastAction" @click="${this._handleToastAction}"></button>
    </snack-bar>
    `;
  }

  static get properties() {
    return {
      data: {type: Array},
      _snackbarOpened: { type: Boolean }
    };
  }

  constructor(){
    super();
    this.data = [
      {description: "Infinity", size: "small", theme: "light"},
      {description: "Time", size: "small", theme: "light"},
      {description: "Carrot", size: "small", theme: "light"},
      {description: "Sky", size: "large", theme: "light"},
      {description: "Music", size: "small", theme: "light"},
      {description: "Web", size: "medium", theme: "light"},
      {description: "Sea", size: "medium", theme: "dark"},
      {description: "Cat", size: "small", theme: "light"},
      {description: "Green", size: "large", theme: "light"},
      {description: "Apple", size: "small", theme: "light"},
      {description: "RGB", size: "small", theme: "light"},
      {description: "Bread", size: "small", theme: "light"},
      {description: "Black Hole", size: "small", theme: "light"},
      {description: "Coffee", size: "small", theme: "light"},
      {description: "Fire", size: "small", theme: "light"},
      {description: "Star", size: "small", theme: "light"},
      {description: "Crown", size: "small", theme: "light"},
      {description: "Paper", size: "small", theme: "light"},
      {description: "Eggs", size: "small", theme: "light"},
      {description: "Socks", size: "small", theme: "light"},
      {description: "Skate", size: "small", theme: "light"},
      {description: "Keys", size: "small", theme: "light"},
      {description: "Lollipop", size: "small", theme: "light"},
      {description: "Printer", size: "small", theme: "light"},
      {description: "Screwdriver", size: "small", theme: "light"},
      {description: "Bed", size: "small", theme: "light"},
      {description: "Man Bun", size: "small", theme: "light"},
      {description: "Speakers", size: "small", theme: "light"},
      {description: "Supermarket", size: "small", theme: "light"},
      {description: "Computer", size: "small", theme: "light"}
    ];
  }

  firstUpdated() {
    installOfflineWatcher((offline) => this._offlineChanged(offline));
    this._installServiceWorker();

    anime.timeline()
      .add({
        targets: this.shadowRoot.getElementById("logo"),
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200
      })
      .add({
        targets: this.shadowRoot.querySelectorAll("h1 div, h2"),
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        offset: 300,
        delay: function(el, i) {
          return 70 * i;
        }
      })
      .add({
        targets: this.shadowRoot.querySelectorAll("codevember-day"),
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        offset: 1400,
        delay: function(el, i) {
          return 90 * i;
        }
      });
  }

  _offlineChanged(offline) {
    const previousOffline = this._offline;
    this._offline = offline;

    // Don't show the snackbar on the first load of the page if it is connected.
    if (previousOffline === undefined && offline === false) {
      return;
    }    
    
    this._showToast({
      detail: {
        text: `${this._offline ? 'Offline' : 'Back online 😃'}`,
        duration: `${this._offline ? 0 : 3000}`
      }                   
    });
  }

  _installServiceWorker() {    
    // Load and register pre-caching Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js', {
          scope: '/',
        }).then((registration) => {
          registration.onupdatefound = () => {
            // The updatefound event implies that registration.installing is set; see
            // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
              switch (installingWorker.state) {
                case 'installed':
                  if (!navigator.serviceWorker.controller) {
                    this._showToast({
                      detail: {
                        text: 'Caching complete. Site will work offline.',
                        duration: 5000
                      }                   
                    });
                  }
                  break;
                case 'redundant':
                  throw Error('The installing service worker became redundant.');
              }
            };
          };
        }).catch((error) => {
          console.error('Service worker registration failed:', error);
        });

        // Check to see if the service worker controlling the page at initial load
        // has become redundant, since this implies there's a new service worker with fresh content.
        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.onstatechange = (event) => {
            if (event.target.state === 'redundant') {
              this._showToast({
                detail: {
                  text: 'New version available',
                  duration: 0,
                  buttonText: 'Update',
                  buttonTapHandler: function() {
                    window.location.reload();
                  }
                }                   
              });
            }
          };
        }    
      });
    }
  }

  _showToast(e) {
    //Hide previous toast if opened and show the new toast after waiting for the other to close
    this._newToast = e.detail;

    let currentToast = this.shadowRoot.getElementById('toast');
    let currentToastAction = this.shadowRoot.getElementById('toastAction');

    let waitTime = 0;
    if (this._snackbarOpened) {
      this._snackbarOpened = false;
      waitTime = 300;
    }
    setTimeout(() => {
      if (this._newToast.buttonText != undefined) {
        currentToastAction.removeAttribute('hidden');
        currentToastAction.textContent = this._newToast.buttonText;
      } else {
        currentToastAction.setAttribute('hidden', '');
      }      
      currentToast.text = this._newToast.text;

      //Timer to hide the toast after it's visible
      clearTimeout(this.__snackbarTimer);
      this._snackbarOpened = true;
      //If the duration is 0, don't hide it
      this.__snackbarTimer = setTimeout(() => {
        if (this._newToast.duration != 0) {      
          this._snackbarOpened = false;
        }
      }, this._newToast.duration);
    }, waitTime);
  }

  _snackbarLoaded(){
    this.shadowRoot.getElementById("toast").style.display = "flex";
  }

  _handleToastAction() {
    if (!this._newToast || !this._newToast.buttonTapHandler){
      return;
    }
    this._newToast.buttonTapHandler();
  }
}

window.customElements.define('codevember-app', CodevemberApp);