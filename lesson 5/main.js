// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let rectangleArea = (a, b) => a * b;
console.log(rectangleArea(2, 5));
// - створити функцію яка обчислює та повертає площу кола
let PI = 3.14
let areaCircle = (r) => PI * r ** 2;
console.log(areaCircle(10));
// - створити функцію яка обчислює та повертає площу циліндру
let cylinderArea = (r, h) => 2 * PI * h * r;
console.log(cylinderArea(5, 2));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayFoo = (arr) => {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}
let array = [1, 2, 3, 5, 6, 4, 7, 9]
arrayFoo(array);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraph = (p) => document.write(`<p> ${p} </p>`);
paragraph('hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let unorderedList = (txt) => {
    document.write(`<ul><li>${txt}</li><li>${txt}</li><li>${txt}</li> </ul>`);
}
unorderedList('lists');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let unorderedListFor = (txt, n) => {
    document.write('<ul>');
    for (let i = 0; i < n; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write('</ul>');
}
unorderedListFor('hell', 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array1 = [20, true, 'hello']
let arrayList = (arr) => {
    document.write('<ul>');
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write('</ul>');
}
arrayList(array1);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.
let array2 = [{id: 1, name: 'Vasia', age: 20},
              {id: 2, name: 'Burtek', age: 25},
              {id: 3, name: 'Inna', age: 29},
              {id: 4, name: 'Vika', age: 30},
              {id: 5, name: 'Vadym', age: 15}];
let arrayObjects = (arr) =>{
    document.write(`<div>id name age </div>`)
    for (let arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age} </div>`)
    }
}
arrayObjects(array2);