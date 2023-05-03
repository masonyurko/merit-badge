import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MeritBadge extends LitElement {
  static properties = {
    date: { type: String},
    title1: { type: String},
    buttonText: { type: String},
    activeNode: { type: Object},
    skillsOpened: { type: Boolean},
    icon: {type: String},
    iconcolor: {type: String},
    newcolor: {
      type: String,
      reflect: true,
      attribute: 'newcolor'
    },
  };

  static styles = css`
    :host {
      display: block;
    }

    .badge {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: blue;
      border: solid black;
      position: relative;
      margin: 10px;
      font-size: 21px;
      font-weight: bold;
      line-height: 1.3em;
      border: 2px dashed white;
      box-shadow: 0 0 0 4px #188eff, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      text-shadow: -1px -1px #0C19FB;
      font-weight: normal;
    }

    .badge-icon {
      position: absolute;
      top: -100px;
      left: 3px;
    }

    .date {
      position: relative;
      width: 400px;
      height: 400px;
    }

    .badge-lock {
      width: 210px;
      height: 210px;
      border-radius: 50%;
      background-color: grey;
      position: relative;
      top: -87.5px;
      left: -5px;
    }

    .lock-icon {
      position: relative;
      top: 95px;
      left: 95px;
    }

    .date span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg) skewY(30deg);
    }

    .h1 span {
      height: 200px;
      position: absolute;
      width: 20px;
      left: -15px;
      top: 0;
      transform-origin: bottom center;
      transform: rotate(10deg);
    }

    .button {
      position: absolute;
      left: 75px;
      top: 230px;
      width: 65px;
      padding-bottom: 0px;
      border: solid black;
      background-color: white;
    }

    .button-text {
      text-align: center;
    }

    .text {
      position: relative;
      top: 10px;
      padding-bottom: 0px;      
      text-align: center;
      }

    .text1 {
      position: relative;
      text-align: center;
      top: 110px;
    }

    :host([newcolor="red"]) .badge {
      background-color: var (--badge-accent-color, red);
      background-color: red;
      color: white;
      box-shadow: 0 0 0 4px red;
    }

    :host([newcolor="yellow"]) .badge {
      background-color: var (--badge-accent-color, yellow);
      background-color: yellow;
      color: white;
      box-shadow: 0 0 0 4px yellow;
    }

      :host([newcolor="grey"]) .badge {
      background-color: var (--badge-accent-color, grey);
      background-color: grey;
      color: white;
      box-shadow: 0 0 0 4px grey;
    }

    :host([newcolor="blue"]) .badge {
      background-color: var (--badge-accent-color, blue);
      background-color: blue;
      color: white;
      box-shadow: 0 0 0 4px blue;
    }

    :host([newcolor="green"]) .badge {
      background-color: var (--badge-accent-color, green);
      background-color: green;
      color: white;
      box-shadow: 0 0 0 4px green;
    }
  `;

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector('#badge');
    this.lettering( 
      this.shadowRoot.querySelector('#text'),
      this.date
    );
  }

  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
  }

  lettering(node, text) {
    var str = typeof text=='undefined'
        ?node.textContent
        :text;
    node.innerHTML='';
    var openTag = '<span>';
    var closeTag = '</span>';
    var newHTML = openTag;
    var closeTags = closeTag;
    for(var i=0,iCount=str.length;i<iCount;i++) {
      newHTML+=str[i]+openTag;
      closeTags+=closeTag;
    }
    node.innerHTML = newHTML+closeTags;
  }

  constructor() {
    super();
    this.title1 = 'Badge Name';
    this.date = 'Date Received';
    this.buttonText = 'Unlock';
    this.icon = 'apple';
    this.iconcolor = 'grey'
  }

  render() {
    return html`
      <main>
        <div class="badge">
          <div class="icon"></div>
          <div class="badge-text">
            <div class='hText'>
              <h1 id="text">Custom Text</h1>
            </div>

            <div class="badge-icon">
              <simple-icon accent-color="black" icon="android">
              </simple-icon>
            </div>
            <div class="title1"><span>${this.title1}</span></div>
            </div>
          </div>
          </div>

          <div class="badge-lock" ?hidden="${this.skillsOpened}">
              <simple-icon class="lock-icon" accent-color="black" icon="lock">
              </simple-icon>
          </div>

          <simple-icon-button
          icon="cancel"
          class="button"
          @click="${this.skillClick}">

          <div class="button-text">Unlock</div>
          </simple-icon-button>

          <absolute-position-behavior
          justify
          position="bottom"
          allow-overlap
          sticky
          auto
          .target="${this.activeNode}"
          ?hidden="${!this.skillsOpened}"
          >
          </absolute-position-behavior>
        
      </main>
    `;
  }
}

customElements.define('merit-badge', MeritBadge);