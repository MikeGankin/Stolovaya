const mySwiper = new Swiper('.swiper-container', {
  initialSlide: 1,

  pagination: {
    el: '.swiper-pagination',
  },
})

const infoItemEmail = document.querySelector('.info__item--email a');
const infoItemPhone = document.querySelector('.info__item--phone a');
const mailPopup = document.querySelector('.mail-popup');
const phonePopup = document.querySelector('.phone-popup');
const closeBtn = document.querySelector('.close--btn');
const warm = document.querySelector('.nav__link--warm');
const cold = document.querySelector('.nav__link--cold');
const warmMenu = document.querySelector('.warm-menu');
const coldMenu = document.querySelector('.cold-menu');

infoItemEmail.addEventListener('click', () => {
  mailPopup.classList.add('opened');
});
mailPopup.addEventListener('click', () => {
  mailPopup.classList.remove('opened');
  alert('Почта скопирована!')
});
infoItemPhone.addEventListener('click', () => {
  phonePopup.classList.add('opened');
})
closeBtn.addEventListener('click', () => {
  phonePopup.classList.remove('opened');
});

warm.addEventListener('click', () => {
  warmMenu.classList.toggle('opened');
  coldMenu.classList.remove('opened');
});
cold.addEventListener('click', () => {
  warmMenu.classList.remove('opened');
  coldMenu.classList.toggle('opened');
});




