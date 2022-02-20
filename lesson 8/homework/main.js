// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let contentId = document.getElementById('content').innerText;
console.log(contentId);

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules').innerText;
console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший
let newTxt = document.getElementById('content');
newTxt.innerText = 'Зовсім новий текст'

// -- замініть текст параграфа з id 'rules' на будь-який інший
let txtNew = document.getElementById('rules');
txtNew.innerText = 'Тут також новий';

// -- змініть кожному елементу колір фону на червоний
let color = document.body.children;

for (let colorElement of color) {
    colorElement.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій
for (let colorElement of color) {
    colorElement.style.background = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classList = document.getElementById('rules').classList;
console.log(classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let red = document.getElementsByClassName('fc_rules');
for (let redElement of red) {
    redElement.style.background = 'red';
}