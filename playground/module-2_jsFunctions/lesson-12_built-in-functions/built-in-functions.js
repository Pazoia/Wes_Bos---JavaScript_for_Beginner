console.log('Built in Funtions');

const max = Math.max(10, 15);
console.log(`Math.max returns the higher number: ${max}`);

const wholeNum = Math.floor(2.4444);
console.log(`Math.floor on 2.4444 returns: ${wholeNum}`);

const p = document.querySelector('p');
const scrollToTop = document.querySelector('button');

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
