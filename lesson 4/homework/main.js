// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a * b ;
}
console.log(rectangleArea(2, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return 3.14 * r**2;
}
console.log(areaCircle(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(h,r) {
    return 2 * 3.14 * r * h;
}
console.log(cylinderArea(2, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [20,30,40,50,80];
function arrElement(arguments) {
    for (let argument of arguments) {
        console.log(argument);
    }
}
arrElement(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(p) {
    document.write(`<p> ${p} </p>`);
}
paragraph('Hello world');

// - створити функцію яка створює ul з трьома елементами li. 
// Текст li задати через аргумент всім однаковий
function unorderedList(li) {
    document.write(`<ul>
<li>${li}</li>
<li>${li}</li>
<li>${li}</li>
</ul>`)
}
unorderedList("list");

// - створити функцію яка створює ul з трьома елементами li.Текст li задати через аргумент всім однаковий. 
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function unorderedListFor(li, c) {
    document.write('<ul>')
    for (let i = 0; i < c; i++) {
        const cElement = c[i];
        document.write(`<li> ${li} </li>`);
    }
    document.write('</ul>')
}
unorderedListFor('Hello', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список
function arrList(a) {
    document.write('<ol>')
    for (let aElement of a) {
        document.write(`<li>${aElement}</li>`);
    }
    document.write('</ol>')
}
arrList(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , ' +
// 'та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrObjectBlock(a) {
    for (let aElement of a) {
        let a = aElement.id;
        document.write(`<div>${a} ${aElement.name} ${aElement.age} ${aElement.status}</div> `)
    }
}
let users = [
    {id: 1,name: 'vasya', age: 31, status: false},
    {id: 2,name: 'petya', age: 30, status: true},
    {id: 3,name: 'kolya', age: 29, status: true},
    {id: 4,name: 'olya', age: 28, status: false},
    {id: 5,name: 'max', age: 30, status: true},
    {id: 6,name: 'anya', age: 31, status: false},
    {id: 7,name: 'oleg', age: 28, status: false},
    {id: 8,name: 'andrey', age: 29, status: true},
    {id: 9,name: 'masha', age: 30, status: true},
    {id: 10,name: 'olya', age: 31, status: false},
    {id: 11,name: 'max', age: 31, status: true}
];
console.log(users);
arrObjectBlock(users);