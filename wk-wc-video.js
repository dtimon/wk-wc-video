import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

//console.log(videojs);
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
    
    let map = new Map(Object.entries(keysElement));

    map.forEach((value, key) => {
      let map = new Map(Object.entries(value));
      switch (key) {
        case "$":          
          map.forEach(
            (value, key) => {
              if (value) {
                newElement.setAttribute(key, value);
              }
            }
          );
          break;
        case "$$": //childs (is array)
          map.forEach(
            (keysElement, index) => {
              typeElement = Object.keys(keysElement)[0];
              this._appendElement(newElement, typeElement, keysElement[typeElement]);
            }
          );
          break;
        default:
          ///////////////////////////////
          break;
      }
    })

    if (parent.shadowRoot) {
      parent.shadowRoot.appendChild(newElement);
    }
    else {
      parent.appendChild(newElement);
    }
  } 

  _renderElement(elObj, whereAppend){
    let map = new Map(Object.entries(elObj));
    map.forEach((keysElement, typeElement) => { this._appendElement(this, typeElement, keysElement)});
  }
  
  _initProp(wkProp) {
    let prop = wkProp.video.$;
    prop.width = prop.width || this.offsetWidth;
    this._renderElement(wkProp, this.shadowRoot);
  }

  // Captura de eventos de recepción
}

window.customElements.define('wk-wc-video', WkWcVideo);