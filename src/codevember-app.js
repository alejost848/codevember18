import {LitElement, html} from '@polymer/lit-element';
import {until} from 'lit-html/directives/until';

import {alejostIcon} from './icons.js';
import './codevember-day.js';

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
        grid-auto-rows: 112px;
        grid-auto-flow: row;
        transition: padding 0.3s ease;
      }
      
      #intro {
        grid-column: span 3;
        grid-row: span 3;
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
        grid-row: span 3;
      }
      codevember-day:nth-of-type(1){
        grid-column: span 3;
        grid-row: span 3;
      }
      codevember-day:nth-of-type(2){
        grid-column: span 3;
        grid-row: span 3;
      }
      codevember-day:nth-of-type(3){
        grid-column: span 3;
        grid-row: span 3;
      }
      codevember-day:nth-of-type(4){
        grid-column: span 5;
        grid-row: span 3;
        --animation-width: auto;
        --animation-height: 120%;
      }
      codevember-day:nth-of-type(5){
        grid-column: span 4;
        grid-row: span 3;
      }
      codevember-day:nth-of-type(7){
        grid-column: span 4;
        grid-row: span 3;
        --animation-width: 100%;
        --animation-height: auto;
      }
      codevember-day:nth-of-type(9){
        grid-column: span 5;
        grid-row: span 3;
      }

      @media(max-width: 1700px){
        #grid{
          padding: 138px 32px;
        }
      }
      @media(max-width: 1500px){
        #grid{
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 86px;
        }
      }
    </style>

    <div id="grid">
      <div id="intro">
        <div id="title_box">
          <a id="logo" href="https://alejo.st" target="_blank">${alejostIcon}</a>
          <span class="flex"></span>
          <h1>
            Code
            vember
          </h1>
        </div>
        <span class="flex"></span>
        <h2>'18</h2>
      </div>

      ${this.data.map((description, index) => html`
        <codevember-day day="${index + 1}" description="${description}"></codevember-day>
      `)}
    </div>
    `;
  }

  static get properties() {
    return {
      data: {type: Array}
    };
  }

  constructor(){
    super();
    this.data = [
      "Infinity",
      "Time",
      "Carrot",
      "Sky",
      "Music",
      "Web",
      "Sea",
      "Cat",
      "Green",
      "Apple",
      "RGB",
      "Bread",
      "Black Hole",
      "Coffee",
      "Fire",
      "Star",
      "Crown",
      "Paper",
      "Eggs",
      "Socks",
      "Skate",
      "Keys",
      "Lollipop",
      "Printer",
      "Screwdriver",
      "Bed",
      "Man Bun",
      "Speakers",
      "Supermarket",
      "Computer"
    ];
  }
}

window.customElements.define('codevember-app', CodevemberApp);