var button = document.querySelector('#modalbtn');
//document - ищем в документе
//querySelector('') - функция для нахождения определенного элемента

var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click',function(){
    modal.classList.add('modal_active');
});
//addEventListener - отслеживние события
//add - добавление класса

close.addEventListener('click',function(){
    modal.classList.remove('modal_active');
});
//remove - удаление класса
