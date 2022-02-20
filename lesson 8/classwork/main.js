// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let clas = document.getElementById('main_header');
clas.classList.add('dec-2021');

// b) робить ширину елементу ul 400px
clas.style.width = '400px';

// c) робить ширину всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (let linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let txt = prompt('Ведіть текст');
let elementsByClassName3 = document.getElementsByClassName('listElement2');
for (let element of elementsByClassName3) {
    element.innerHTML = `<a href = "#">${txt}</a>`
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let background = document.getElementsByTagName('li');
for (let backgroundElement of background) {
    backgroundElement.style.background = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let classAnchor = document.getElementsByTagName('a');
for (let classAnchorElement of classAnchor) {
    classAnchorElement.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
let byTagName = document.getElementsByTagName('a');
for (let byTagNameElement of byTagName) {
    if (byTagNameElement.innerText === 'link3'){
        byTagNameElement.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let tagName = document.getElementsByTagName('a');
for (let tagNameElement of tagName) {
    let XXX = tagNameElement.innerText;
    tagNameElement.classList.add(`element_${XXX}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let byClassName = document.getElementsByClassName('sub-header');
    let prompts = prompt('enter color');
for (let byClassNameElement of byClassName) {
    byClassNameElement.style.background = prompts
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let elementsByClassName = document.getElementsByClassName('sub-header');
let colors = prompt('enter color')
for (let elementsByClassNameElement of elementsByClassName) {
    console.log(elementsByClassNameElement)
    if (elementsByClassNameElement.innerText === 'content 2 segment'){
        elementsByClassNameElement.style.background = colors;
    }
}
// k) отримує елемент з класом content_1 та заміняє в ньому тест на довільний. Текст отримати з prompt()
let classContent1 = document.getElementsByClassName('content_1');
    let innerText = prompt('enter text');
for (let classContent1Element of classContent1) {
    classContent1Element.innerHTML = `<p>${innerText}</p>`;
}
// l) отримати елементи p та змінити їм padding на 20px
let elementsByTagName = document.getElementsByTagName('p');
for (let elementsByTagNameElement of elementsByTagName) {
    elementsByTagNameElement.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let elementsByClassName2 = document.getElementsByClassName('text2');
for (let elementsByClassNameElement of elementsByClassName2) {
    elementsByClassNameElement.innerText = 'dec-2021';
}