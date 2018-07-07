import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `wk-wc-video`
 * Video component for polymer 3
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class WkWcVideo extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'wk-wc-video',
      },
    };
  }
}

window.customElements.define('wk-wc-video', WkWcVideo);
