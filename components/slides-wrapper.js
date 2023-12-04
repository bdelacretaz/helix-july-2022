/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// Transforms our content to a slide deck using a set of
// general purpose Web Components
class SlidesWrapper extends HTMLElement {
  connectedCallback() {
    // Use H2 to separate the content in slides, and put
    // each slide in a slide-content element
    const separatorTag = 'h2';
    this.querySelectorAll(separatorTag).forEach(separator => {
      const slide = document.createElement('slide-content');
      separator.parentElement.insertBefore(slide, separator);
      const toMove = [];
      for(var e = separator; e; e = e.nextSibling) {
        if(e != separator && e.tagName?.toLowerCase() == separatorTag) {
          break;
        }
        toMove.push(e);
      }
      console.log('toMove', toMove);
      for(let e of toMove) {
        slide.append(e);
      }
    })
  }
}
customElements.define('slides-wrapper', SlidesWrapper);

// TODO use a better slide content element!
class SlideContent extends HTMLElement {
  connectedCallback() {
    this.setAttribute('style', 'display: block; margin-left:4em; padding-left: 1em; border-left: solid grey 1px;');
    const marker = document.createElement('p');
    marker.setAttribute('style', 'font-size: 80%; color:grey;');
    marker.textContent = '-- This marks the end of a slide --';
    this.append(marker);
  }
}
customElements.define('slide-content', SlideContent);
