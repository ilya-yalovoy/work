const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    speed: 700,
    autoplay: {
        delay: 1400,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        700: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        
      }
  });

var answer = document.querySelectorAll('.answer');
answer.forEach(item => {
    item.querySelector('.answer__button').addEventListener('click', () => {
            item.classList.toggle('active')        
    })
})

document.querySelector('.header__menuBar').addEventListener('click', () => {
    document.querySelector('.header__menuBar').classList.toggle('active');
    document.querySelector('.header__menuBlock').classList.toggle('active');
})

function navBar() {
    document.querySelector('.header__menuBar').classList.toggle('active');
    document.querySelector('.header__menuBlock').classList.toggle('active');
}

$(document).ready(function(){

   $(".menu").on("click","a", function (event) {

       //отменяем стандартную обработку нажатия по ссылке
         event.preventDefault();
            //забираем идентификатор бока с атрибута href
         var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
             top = $(id).offset().top;
          
         //анимируем переход на расстояние - top за 1500 мс
         $('body,html').animate({scrollTop: top}, 1000);
     });
    });
  
var iLoad = 0;
var rotate = 0;
setInterval(() => {
  iLoad++;
    var a = 440 - ((440/440) * iLoad);
    document.querySelectorAll('circle')[1].style.strokeDashoffset = Math.round(a);
}, 0.5);

window.onload = () => {
  document.querySelector('body').classList.remove('load')
  document.querySelector('body').classList.add('loaded')
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none'
  }, 7000);
}
