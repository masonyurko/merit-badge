import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MeritBadge extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    .badge {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: blue;
      border: solid black;
      margin: 15px;
      font-size: 22px;
      font-weight: bold;
      line-height: 1.3em;
      border: 2px dashed white;
      box-shadow: 0 0 0 4px #188eff, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      text-shadow: -1px -1px #0C19FB;
      font-weight: normal;
    }

    .date {
      position: relative;
      width: 400px;
      height: 400px;
    }

    .date span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg) skewY(30deg);
    }

    .title {
      position: relative;
      width: 400px;
      height: 400px;
    }

    .title span {
      position: absolute; 
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg) skewY(30deg);
    }
  `;

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector('#badge');
  }

  skillClick() {
    this.skillsOpened = !this.skillsOpened;
  }

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <div class="badge">
          <div class="badge-text">
            <div class="date"><span>date</span></div>
            <div class="title"><span>title</span></div>
          </div>
        </div>
        <absolute-position-behavior
          justify
          position="bottom"
          allow-overlap
          sticky
          auto
          .target="${this.activeNode}"
          ?hidden="${!this.skillsOpened}">
        </absolute-position-behavior>
        <simple-icon-button
          icon="cancel"
          @click="${this.skillClick}">
        </simple-icon-button>
      </main>
    `;
  }
}

customElements.define('merit-badge', MeritBadge);