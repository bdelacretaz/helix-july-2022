export default function decorate(block) {
  const ptest = document.createElement('p-test');
  ptest-setAttribute('marker', "42");
  block.append(ptest);
}
