// -створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let number = [21, 22, 23, 24, 25];
// console.log(number);
// let fruits = ['Яблоко', 'Апельсин', 'Слива', 'Банан', 'Груша'];
// console.log(fruits);
// let students = [
//     {name: 'vasya', age: 18, stipend: false},
//     {name: 'petya', age: 19, stipend: true},
//     {name: 'kolya', age: 21, stipend: true},
//     {name: 'olya', age: 20, stipend: false},
//     {name: 'max', age: 17, stipend: true}
// ];
// console.log(students);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

// let array = [];
// array[0] = 20;
// array[1] = 21;
// array[2] = 22;
// array[3] = 23;
// array[4] = 24;
// array[5] = 25;
// console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>Lorem ipsum.</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>Lorem ' + (i) + ' ipsum.</div>');
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (  i <= 19 ) {
//     document.write('<h1>Lorem ipsum dolor.</h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let p = 0;
// while (  p <= 19 ) {
//     document.write('<h1>Lorem ' + (p) + ' ipsum.</h1>');
//     p++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

//  let array1 = [105, 104, 106, 107, 110, 112, 113, 154, 468, 123];
// for (let number1 of array1) {
//     console.log(number1);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array2 = ['Aaron','Badger','Ariadne','Charlotte','Daphne','Elias','Fannie','Gideon','Hank','Jocelyn'];
// for (let string of array2) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array2 = ['Vadym', 26, 'years', 'old', 'you', 'smoke', '?', false, 20, 22];
// for (let array2Element of array2) {
//     console.log(array2Element);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array3 = ['John', 'age', 30, 'likes birds', true, 20, {}, [], 15, false];
// for (let i = 0; i < array3.length; i++) {
//     if (typeof array3[i] === 'boolean'){
//         console.log( array3[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

// let array4 = ['John', 'age', 30, 'likes birds', true, 20, {}, [], 15, false];
// for (let i = 0; i < array4.length; i++) {
//     if (typeof array4[i] === 'number'){
//         console.log(array4[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

// let array5 = ['John', 'age', 30, 'likes birds', true, 20, {}, [], 15, false];
//
// for (let i = 0; i < array5.length; i++) {
//     if (typeof array5[i] === 'string'){
//         console.log(array5[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення
// до конкретних індексів.Вивести в консоль всі його елементи в циклі.

// let array6 = [];
// array6[0] = 'Zhanna';
// array6[1] = 32 ;
// array6[2] = true;
// array6[3] = 'Antonina';
// array6[4] = 'Margaryta';
// array6[5] = false ;
// array6[6] = 25;
// array6[7] = 'Galagan';
// array6[8] = 50;
// array6[9] = true;
//
// for (let array6Element of array6) {
//     console.log(array6Element);
//
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write






let array33 = [ {name: 'John', age: 30, likesBbirds: true},
    {name: 'Antonina', age: 35, likesBbirds: false},
    {name: 'Borys', age: 32, likesBbirds: false},
    {name: 'Halyna', age: 39, likesBbirds: true},
    {name: 'Galagan', age: 31, likesBbirds: false},
    {name: 'Elvira', age: 25, likesBbirds: true},
    {name: 'Margaryta', age: 16, likesBbirds: true},
    {name: 'Zhanna' , age: 12, likesBbirds: false},
    {name: 'Larysa', age: 10, likesBbirds: true},
    {name: 'Zakhar', age: 50, likesBbirds: true}
];