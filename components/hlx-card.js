class Card extends HTMLElement {
  static template = document.createElement('template');
  static {
    Card.template.innerHTML = `
      <style>
        h2 { font-size:120%; margin: 1em; }
        .text { color:gray; margin: 1em; }
      </style>
      <slot name='picture'></slot>
      <h2><slot name='title'></slot></h2>
      <div class='text'><slot></slot></div>
    `;
  }
  connectedCallback() {
    const shadow = this.attachShadow({'mode':'open'});
    shadow.append(Card.template.content.cloneNode(true));
  }
}
customElements.define('hlx-card', Card);