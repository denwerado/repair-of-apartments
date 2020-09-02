//Подключение wow.min.js
new WOW().init();
$(document).ready(function () {
    //Валидация формы
    $('#brif-form').validate({
        rules: {
            name: "required",
            phone: {
                required: true
            }
        },
        messages: {
            name: "Укажите имя",
            phone: "Укажите телефон"
        }
    });
    /*Обработка и отправка формы через технологию Ajax*/
    $('#brif-form').on('submit',function(event){
        event.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data){
                $('.sucmod-dialog__text').text(data);
            },
            error: function(jqXHR, textStatus){
                console.log(jqXHR + ':' + textStatus);
                $('.sucmod-dialog__text').text('Извините, по техническим причинам сервер недоступен, если ошибка повторится, то позвоните в службу поддержки');
            }
        });
    });
    $('#form-design').on('submit',function(event){
        event.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data){
                $('.sucmod-dialog__text').text(data);
            },
            error: function(jqXHR, textStatus){
                console.log(jqXHR + ':' + textStatus);
                $('.sucmod-dialog__text').text('Извините, по техническим причинам сервер недоступен, если ошибка повторится, то позвоните в службу поддержки');
            }
        });
    });
    //Маска для телефона
    $('.phone').mask('+7 (999) 999-99-99');
    //Настройка слайдера
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});