import { createOptimizedPicture } from '../../scripts/scripts.js';

// TODO recommended way of loading the component scripts ?
import '../../components/hlx-card.js'

export default function decorate(block) {
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    // convert each row to a custom hlx-card element
    const li = document.createElement('li');
    const card = document.createElement('hlx-card');

    row.querySelectorAll('picture').forEach(p => {
      p.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
      p.setAttribute("slot", "picture");
      card.append(p);
    });

    row.querySelectorAll('p').forEach(p => {
      const strong = p.querySelector('strong');
      if(strong) {
        p.setAttribute('slot', 'title');
        p.innerHTML = strong.innerHTML;
      }
      card.append(p);
    });
    li.append(card);
    ul.append(li);
  });
  //
  block.textContent = '';
  block.append(ul);
}
