// wrap sections which have a section-wrapper metadata value
// using a component of the specified name

// HACK: there's probably a better place for loading Web Components scripts
[ 
  'slides-wrapper',
  'slides-control',
  'one-slide' ].forEach(component => {
    const script = document.createElement('script');
    script.setAttribute('type','module');
    script.setAttribute('src',`/components/${component}.js`);
    document.head.append(script);
  });

export const addSectionWrappers = () => {
  // Wrap the content of divs having a data-page-wrapper attribute
  document.querySelectorAll('div[data-section-wrapper]')?.forEach(div => {
    const wrapperName = div.dataset?.sectionWrapper;
    if(wrapperName) {
      // Wrap the div contents with the wrapper element
      const wrapper = document.createElement(wrapperName);
      wrapper.innerHTML = div.innerHTML;
      div.innerHTML = '';
      div.append(wrapper);
    }
  })
}