class Card extends HTMLElement {
  static template = document.createElement('template');
  static {
    Card.template.innerHTML = `
      <style>
        h2 {
          font-size:120%; margin: 1em;
        }
        .text {
          color:gray; margin: 1em;
        }
        article {
          height: 100%;
          border: 1px solid var(--highlight-background-color);
          background-color: var(--background-color)
        }
      </style>
      <article>
        <slot class='picture' name='picture'></slot>
        <h2 part='title'><slot name='title'></slot></h2>
        <div part='text' class='text'><slot></slot></div>
      </article>
    `;
  }
  connectedCallback() {
    const shadow = this.attachShadow({'mode':'open'});
    shadow.append(Card.template.content.cloneNode(true));
  }
}
customElements.define('hlx-card', Card);