/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';

class SnackBar extends LitElement {
  render() {
    return html`
      <style>
      :host {
        position: fixed;
        flex-direction: row;
        align-items: center;
        top: 0;
        right: 0;
        min-width: 160px;
        box-sizing: border-box;
        margin: 24px;
        padding: 12px 32px;
        border-radius: 50px;
        font-size: 14px;
        background-color: #955df3;
        color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        will-change: transform;
        transform: translate3d(0, -100px, 0);
        transition-property: visibility, transform;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        visibility: hidden;
      }
      :host([active]) {
        visibility: visible;
        transform: translate3d(0, 0, 0);
      }
      #label {
        margin-right: 32px;
      }

      @media (max-width: 700px) {
        :host {
          min-width: 0;
          margin: 0;
          width: 100%;
          border-radius: 0;
          text-align: center;
          min-height: 0px;
          padding: 8px 16px;
          font-size: 13px;
        }
      }
    </style>
    <span id="label">${this.text}</span>
    <slot></slot>
    `;
  }

  static get properties() { return {
    active: { type: Boolean },
    text: { type: String }
  }}

  firstUpdated() {
    this.dispatchEvent(new CustomEvent('loaded', {detail: true}));
  }
}

window.customElements.define('snack-bar', SnackBar);
