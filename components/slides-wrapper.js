// Transforms our content to a slide deck using a set of
// general purpose Web Components
class SlidesWrapper extends HTMLElement {
  connectedCallback() {
    // Use H2 to separate the content in slides, and put
    // each slide in a slide-content element
    const separatorTag = 'h2';
    this.querySelectorAll(separatorTag).forEach(separator => {
      const slide = document.createElement('one-slide');
      separator.parentElement.insertBefore(slide, separator);
      const toMove = [];
      for(var e = separator; e; e = e.nextSibling) {
        if(e != separator && e.tagName?.toLowerCase() == separatorTag) {
          break;
        }
        toMove.push(e);
      }
      for(let e of toMove) {
        slide.append(e);
      }
    })
  }
}
customElements.define('slides-wrapper', SlidesWrapper);