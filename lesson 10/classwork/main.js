// - створити 2 форми по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let block1 = document.createElement('div');
block1.innerText = 'block1';

let block2 = document.createElement('div');
block2.innerText = 'block2';

document.body.append(block1, block2);

let formOne = document.createElement('form');
formOne.setAttribute('name', 'formOne');

let formTwo = document.createElement('form');
formTwo.setAttribute('name', 'formTwo');

let one = document.createElement('input');
one.setAttribute('name', 'inputOne');

let two = document.createElement('input');
two.setAttribute('name', 'inputTwo');

let three = document.createElement('input');
three.setAttribute('name', 'inputThree');

let four = document.createElement('input');
four.setAttribute('name', 'inputFour');

let btn = document.createElement('button');
btn.innerText = 'send';

block1.appendChild(formOne);
block2.appendChild(formTwo);

formOne.append(one, two);
formTwo.append(three, four);

document.body.appendChild(btn);

btn.onclick = function (e) {
    console.log(document.forms.formOne.inputOne.value);
    console.log(document.forms.formOne.inputTwo.value)
    console.log(document.forms.formTwo.inputThree.value)
    console.log(document.forms.formTwo.inputFour.value)
}

//-Створити 3 инпута та кнопку. Один визначає кількість рядків, другий-кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let block21 = document.createElement('div');

let inputOne = document.createElement('input');
inputOne.setAttribute('name', 'inputOne');
inputOne.setAttribute('type', 'number');

let inputTwo = document.createElement('input');
inputTwo.setAttribute('name', 'inputTwo');
inputTwo.setAttribute('type', 'number');

let inputThree = document.createElement('input');
inputThree.setAttribute('name', 'inputThree')
inputThree.setAttribute('type', 'text')

let btn2 = document.createElement('button');
btn2.innerText = 'click';

document.body.appendChild(block21);
block21.append(inputOne, inputTwo, inputThree, btn2);

btn2.onclick = function (e) {
    let tr = inputOne.value;
    let td = inputTwo.value;
    let innerText = inputThree.value;

    function createTable(tr, td, inner) {
        let table = document.createElement('table');
        let divTable = document.createElement('div');

        table.style.border = '1px solid red';
        divTable.appendChild(table);
        document.body.appendChild(divTable);

        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            tr.style.border = '1px solid red'
            for (let j = 0; j < td; j++) {
                let td = document.createElement('td');
                td.style.border = '1px solid red';
                td.innerText = `${inner}`;
                table.appendChild(tr);
                tr.appendChild(td);
            }
        }
    }

    createTable(2, 5, 'text');
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let container = document.createElement('div');
document.body.appendChild(container);

let badWords = ['Fuck', 'Shit', 'Dick', 'Asshole', 'Bastard', 'Bitch', 'Damn', 'Bollocks'];

let inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('name', 'inputElement');

let button = document.createElement('button');
button.innerText = 'click';

container.append(inputElement, button);

button.onclick = function (e) {
    let valueInput = inputElement.value;
    for (let badWordsEl of badWords) {
        if (badWordsEl === valueInput) {
            alert('bad word');
            inputElement.value = '';
        }
    }
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let badWords2 = ['Fuck', 'Shit', 'Dick', 'Asshole', 'Bastard', 'Bitch', 'Damn', 'Bollocks'];
let container2 = document.createElement('div');

let input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('name', 'input2');

let button2 = document.createElement('button');
button2.innerText = 'click';

document.body.append(input2, button2);

button2.onclick = function (e) {
    let inputTolC = input2.value.toLowerCase();
    for (let i = 0; i < badWords2.length; i++) {
        let badWords2Element = badWords2[i];
        if (inputTolC.includes(badWords2Element.toLowerCase())) {
            alert('atatata');
            input2.value = '';
            return;
        }
    }
    if (inputTolC){
        alert('nice');
        input2.value = '';
    }
}
























