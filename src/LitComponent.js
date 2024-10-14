import { LitElement, html, css } from 'lit'

class LitComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Maven Pro', sans-serif;
      color: #ffffff;
    }
    h1 {
      color: #a0a0ff;
      font-size: 2.5em;
      margin-bottom: 20px;
    }
    p {
      color: #d0d0ff;
      font-size: 1.2em;
      line-height: 1.6;
      margin-bottom: 15px;
    }
    .glassmorphic {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      padding: 20px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      margin-bottom: 20px;
    }
  `

  render() {
    return html`
      <div class="glassmorphic">
        <h1>Welcome to FutureBrowser</h1>
        <p>Experience the web like never before with our cutting-edge, glassmorphic interface.</p>
      </div>
      <div class="glassmorphic">
        <p>Navigate through cyberspace with unparalleled style and efficiency.</p>
        <p>The future of browsing is here, and it's crystal clear.</p>
      </div>
    `
  }
}

customElements.define('lit-component', LitComponent)