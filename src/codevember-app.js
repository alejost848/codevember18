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
        --animation-scale: 1.7;
      }
      codevember-day:nth-of-type(7){
        --animation-width: 100%;
        --animation-height: auto;
        --animation-scale: 1.3;
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
        <codevember-day day="${index + 1}" description="${day.description}" class="${day.size} ${day.theme}"></codevember-day>
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
}

window.customElements.define('codevember-app', CodevemberApp);