const header = document.querySelector('.header');
const firstScreen = document.querySelector('.first-screen');

const headerHeight = header.offsetHeight;
const firstHeight = firstScreen.offsetHeight;

window.addEventListener('scroll', () => {
   let scrollDistance = Math.floor(window.scrollY);
   console.log(scrollDistance);

   if (scrollDistance >= firstHeight / 2) {
      header.classList.add('header__active')
      firstScreen.style.marginTop = `${headerHeight}px`
   } else {
      header.classList.remove('header__active');
      firstScreen.style.marginTop = null;
   }
})

