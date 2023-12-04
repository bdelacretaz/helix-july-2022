// one-slide component using shower.js
const setupShower = async () => {
  // Add shower classes to body
  const body = document.querySelector('body');
  if(body) {
    body.classList.add('shower','full');
  }

  // Add shower stylesheet
  const css = await fetch('/components/shower/shower-ribbon-theme-all.css').then(resp => resp.text());
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css);
  document.adoptedStyleSheets.push(sheet);

  // Add shower.js script (from https://shwr.me/) if not present
  const src = '/components/shower/shower.js';
  const selector = `script[src='${src}']`;
  if(!document.querySelector(selector)) {
    const script = document.createElement('script');
    script.setAttribute('src', src);
    document.querySelector('head')?.append(script);
  }
}

await setupShower();

class OneSlide extends HTMLElement {
  static idCounter = 0;

  async connectedCallback() {
    // Create a section per slide
    const section = document.createElement('section');
    section.setAttribute('class','slide');
    // TODO is id required?
    section.setAttribute('id',`slide${++OneSlide.idCounter}`);
    section.innerHTML = this.innerHTML;
    this.innerHTML = '';

    const control = document.createElement('slides-control');
    section.append(control);

    this.append(section);
  }
}
customElements.define('one-slide', OneSlide);
