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
        --animation-width: auto;
        --animation-height: 120%;
      }
      codevember-day:nth-of-type(7){
        --animation-width: 100%;
        --animation-height: auto;
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
            Code
            vember
          </h1>
        </div>
        <span class="flex"></span>
        <h2>'18</h2>
      </div>

      ${this.data.map((day, index) => html`
        <codevember-day day="${index + 1}" description="${day.description}" class="${day.size}"></codevember-day>
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
      {description: "Infinity", size: "small"},
      {description: "Time", size: "small"},
      {description: "Carrot", size: "small"},
      {description: "Sky", size: "large"},
      {description: "Music", size: "small"},
      {description: "Web", size: "medium"},
      {description: "Sea", size: "medium"},
      {description: "Cat", size: "small"},
      {description: "Green", size: "large"},
      {description: "Apple", size: "small"},
      {description: "RGB", size: "small"},
      {description: "Bread", size: "small"},
      {description: "Black Hole", size: "small"},
      {description: "Coffee", size: "small"},
      {description: "Fire", size: "small"},
      {description: "Star", size: "small"},
      {description: "Crown", size: "small"},
      {description: "Paper", size: "small"},
      {description: "Eggs", size: "small"},
      {description: "Socks", size: "small"},
      {description: "Skate", size: "small"},
      {description: "Keys", size: "small"},
      {description: "Lollipop", size: "small"},
      {description: "Printer", size: "small"},
      {description: "Screwdriver", size: "small"},
      {description: "Bed", size: "small"},
      {description: "Man Bun", size: "small"},
      {description: "Speakers", size: "small"},
      {description: "Supermarket", size: "small"},
      {description: "Computer", size: "small"}
    ];
  }
}

window.customElements.define('codevember-app', CodevemberApp);