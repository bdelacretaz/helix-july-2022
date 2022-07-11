export default async function decorate(block) {
  block.innerHTML = `<div class='decorated'>Decorated on ${new Date()}</div> ${block.innerHTML}`;
}