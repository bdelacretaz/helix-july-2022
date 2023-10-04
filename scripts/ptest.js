class PTest extends HTMLElement {
  connectedCallback() {
    const p = document.createElement('p');
    p.innerHTML = "This is a PTest compoment with marker=" + this.getAttribute('marker');
    this.appendChild(p);
  }
}
customElements.define('p-test', PTest);