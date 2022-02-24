// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при
// клике на кнопку исчезал элемент с id="text".

let h2 = document.createElement('h2');
h2.innerText = 'text';

let buttonClick = document.createElement('button');
buttonClick.innerText = 'click';

document.body.append(h2,buttonClick)
buttonClick.onclick = ()=> h2.innerText = '';

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let buttonElement = document.createElement('button');
buttonElement.innerText = 'button';
document.body.appendChild(buttonElement);
buttonElement.onclick = () => buttonElement.style.display = 'none';

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


let form = document.createElement('form');
let inputElement = document.createElement('input');
inputElement.type = 'number';

let buttonAge = document.createElement('button');
buttonAge.innerText = 'button';

form.append(inputElement,buttonAge);
document.body.appendChild(form);

buttonAge.onclick = function (e) {
    e.preventDefault();
    if (inputElement.value < 18){
        alert('Вам немає 18 років');
    }else{
    console.log(inputElement.value);
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('btn')[0];

let menuList = document.getElementById('menu');
menu.onclick = () => menuList.classList.toggle('menu');

// - Создать список комментариев, пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.







