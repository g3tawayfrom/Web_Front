$(document).ready(function(){
    //подключаем слайдер-карусель к элементу конкретного класса
    $('.hype_inner').slick({
        //включаем отображения кнопок перехода и точек слайдера
        arrows: true,
        dots: true,
        //поставим в зависимость к кнопкам "далее" и "назад" наши собственные структуры
        nextArrow: '<div class="arrow-2">\n' +
            '        <div class="arrow-2-top"></div>\n' +
            '        <div class="arrow-2-bottom"></div>\n' +
            '    </div>',
        prevArrow: '<div class="arrow-1">\n' +
            '        <div class="arrow-1-top"></div>\n' +
            '        <div class="arrow-1-bottom"></div>\n' +
            '    </div>',
        //выставляем количество слайдов на отображение и начальный слайд
        slidesToShow:1,
        initialSlide: 0,
        //включаем автоматический переход от одного слайда к другому и скорость перехода в 3000мс
        autoplay:true,
        autoplaySpeed:3000,
        //оставляем приостановку слайдера только при наведении на него, а не при прокликивании
        pauseOnFocus: false,
        pauseOnHover: true,
        //убираем возможность "перелистывать" слайды на ПК, но оставляем при просмотре страницы с мобильных устройств
        draggable:false,
        //напишем условия, при которых настройки нашего слайдера будут изменяться
        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1061,
                settings: {
                    arrows: true,
                    dots: false,
                }
            }
        ]
    });
});