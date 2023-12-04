// Component that turns slides on/off
class SlidesControl extends HTMLElement {
  static showerClass = 'shower';

  connectedCallback() {
    const button = document.createElement('button');
    this.replaceChildren(button);
    button.addEventListener('click', this.clicked.bind(this));
    window.addEventListener('slides:control', this.render.bind(this));
    this.render();
  }

  clicked() {
    document.body.classList.toggle(SlidesControl.showerClass);
    window.dispatchEvent(new CustomEvent('slides:control'));
  }

  render() {
    const button = this.querySelector('button');
    if(button) {
      button.textContent = document.body.classList.contains(SlidesControl.showerClass) ? 'Turn slides OFF' : 'Turn slides ON';
    }
  }
}
customElements.define('slides-control', SlidesControl);
