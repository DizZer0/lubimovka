import { toggleNav, closeNav, toggleHeader } from '../scripts/components/nav.js';

/* ---------------Запуск видео--------------- */
const videoPlayButton = document.querySelector('.video__play-button');
const video = document.querySelector('.video__element');

const playVideo = evt => {
  evt.target.classList.add('video__play-button_hide');
  video.play();
  video.controls = true;
}

videoPlayButton.addEventListener('click', playVideo);

new Swiper(".swiper", {
  //Стрелки
  navigation: {
    nextEl: ".slider-comments__button_next",
    prevEl: ".slider-comments__button_prev",
  },
  //Навигация
  //Буллеты, текущее положение, прогрессбар
  pagination: {
    el: ".swiper-pagination",
    //Буллиты
    clickable: true,
  },
  //Количество отображений слайдев
  //!!! Так же можно поставить не целой число, а 1.5 например
  //Данное решение можно будет использовать для реализации на десктопе первого слайдера
  slidesPerView: 1,
  //Делаем бесконечную прокрутку
  loop: true,
});