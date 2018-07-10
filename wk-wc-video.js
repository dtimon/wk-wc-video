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
      <h2>Hello [[wkProp.video.test]]!</h2>
      <dom-if if="[[isVideo]]">
        <template>
          <video width="{{prop.width}}" id="[[prop.id]]"
            class="[[prop.class]]"
            preload="[[prop.preload]]"
            poster="[[prop.poster]]"
            data-setup="[[prop.data-setup]]"
            controls="[[attr.controls]]">
            <dom-repeat items="{{sources}}">
              <template>
                <source src="{{item.src}}" type="{{item.type}}"></source>
              </template>
            </dom-repeat>
              <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://video.com/html5-video-support/" target="_blank"> supports HTML5 video</a>
              </p>
          </video>
        </template>
      </dom-if>
    `;
  }
  constructor() {
    super();
    this.isVideo = false;
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

  _initProp(wkProp) {
    this.prop = wkProp.video.prop;
    this.prop.width = this.prop.width || this.offsetWidth;
    this.attr = wkProp.video.attr;
    this.sources = wkProp.video.sources;

    // Render
    this.isVideo = true;
  
    // @TODO: Add and render video with properties, attributes and sources programatically
    // const video = this.shadowRoot.getElementById(wkProp.video.prop.id);
    // video.play()

  }

  // Captura de eventos de recepción
}

window.customElements.define('wk-wc-video', WkWcVideo);