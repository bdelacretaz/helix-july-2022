// Component that turns slides on/off
class SlidesControl extends HTMLElement {
  static showerClass = 'shower';
  static controlEvent = 'slides:control';

  connectedCallback() {
    const button = document.createElement('button');
    this.replaceChildren(button);
    button.addEventListener('click', this.clicked.bind(this));
    window.addEventListener(SlidesControl.controlEvent, this.render.bind(this));
    this.render();
  }

  clicked() {
    document.body.classList.toggle(SlidesControl.showerClass);
    // there might be multiple instances of this element on
    // the page, let them know of the change
    window.dispatchEvent(new CustomEvent(SlidesControl.controlEvent));
  }

  render() {
    const button = this.querySelector('button');
    if(button) {
      button.textContent = document.body.classList.contains(SlidesControl.showerClass) ? 'Turn slides OFF' : 'Turn slides ON';
    }
  }
}
customElements.define('slides-control', SlidesControl);
