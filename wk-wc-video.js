import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
//import videojs from 'video.js/dist/video.es';

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
      <h2>Hello [[wkProp.video.test]]!</h2>
    `;
  }

  static get properties() {
    return {
      wkProp: {
        type: Object,
        notify: true
      },
    };
  }

  static get observers() {
    return [
      '_initProp(wkProp)'
    ];
  }

  _appendElement(parent, typeElement, keysElement) {
    let newElement = document.createElement(typeElement);
  
      switch (typeElement) {
        case "props":
          map.forEach((value, key) => newElement.setAttribute(key, value));
          break;
        case "childs":
          let map = new Map(Object.entries(elObj));
          map.forEach((keysElement, typeElement) => this._appendElement(newElement, typeElement, keysElement));
          break;
        default:
          ///////////////////////////////
          break;
      }
      if (parent.shadowRoot) {
        parent.shadowRoot.appendChild(newElement);
      }
      else {
        parente.appendChild(newElement);
      }
  } 

  _renderElement(elObj, whereAppend){
    let map = new Map(Object.entries(elObj));

    map.forEach((keysEleme1nt, typeElement) => this._appendElement(this, typeElement, keysElement));
  }
  
  _initProp(wkProp) {
    let prop = wkProp.video.prop;
    prop.width = prop.width || this.offsetWidth;
    this._renderElement(wkProp, this.shadowRoot);
  }

  // Captura de eventos de recepción
}

window.customElements.define('wk-wc-video', WkWcVideo);