//- Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write

let h = 'hello';
console.log(h);
alert(h);
document.write(h);

let o = 'own';
console.log(o);
alert(o);
document.write(o);

let com = 'com';
console.log(com);
alert(com);
document.write(com);

let d = 'ua';
console.log(d);
alert(d);
document.write(d);

let one = 1;
console.log(one);
alert(one);
document.write(one);

let ten = 10;
console.log(ten);
alert(ten);
document.write(ten);

let e = -999;
console.log(e);
alert(e);
document.write(e);

let number = 123;
console.log(number);
alert(number);
document.write(number);

let PI = 3.14;
console.log(PI);
alert(PI);
document.write(PI);

let number2 = 2.7;
console.log(number2);
alert(number2);
document.write(number2);

let sixteen = 16;
console.log(sixteen);
alert(sixteen);
document.write(sixteen);

let bool = true;
console.log(bool);
alert(bool);
document.write(bool);

let boolean = false;
console.log(boolean);
alert(boolean);
document.write(boolean);

//- Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

h = ' hello world ';
console.log(h);
alert(h);
document.write(h);

o = ' own ';
console.log(o);
alert(o)
document.write(o);

com = ' com ';
console.log(com);
alert(com);
document.write(com);

d = ' ua ';
console.log(d);
alert(d);
document.write(d);

e = 999;
console.log(e);
alert(e);
document.write(e);

number = 124;
console.log(number);
alert(number);
document.write(number);

PI = 3.1416
console.log(PI);
alert(PI);
document.write(PI);

number2 = 2.7367;
console.log(number2);
alert(number2);
document.write(number2);

one = 10 - 9;
console.log(one);
alert(one);
document.write(one);

ten = 9 + 1;
console.log(ten);
alert(ten);
document.write(ten);

sixteen = 15 + 1;
console.log(sixteen);
alert(sixteen);
document.write(sixteen);

bool = false;
console.log(bool);
alert(bool);
document.write(bool);

boolean = true;
console.log(boolean);
alert(boolean);
document.write(boolean);

//  Створити 3 змінних firstName, middleName, lastName,
//  наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Vinnichuk';
let middleName = 'Vadym';
let lastName = 'Viktorovych';
let person = firstName +' ' + middleName + ' ' + lastName;
console.log(person);

//  За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

 let name = prompt( 'Тебе звуть?', 'Vadym');
 let nameLast = prompt( 'Тебе по-Батькові', 'Viktorovych');
 let age = prompt( 'Тобі років', '26');
 alert(`Вітаю ${name} ${nameLast}. Тобі ${age} років`);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

//Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!

console.log(5 < 6)//-> true
console.log(5 > 6) //-> false
console.log(5 === 6) //-> false
console.log(5 >= 6)//-> false
console.log(10 === 10) //-> true
console.log(10 >= 10)//-> true
console.log(10 !== 10) //-> false
console.log(10 > 10) //-> false
console.log(10 < 10) //-> false
console.log(123 === '123') //-> false
console.log(123 !== '123') //-> true

//- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str = "20";
let i = 5;
document.write(str + i + "<br/>");      //  205  Тому що, приводиться до строк ('20'+ '5'= '205' + перенос на наступний рядок )
document.write(str - i + "<br/>");      //  15    Тому що, приводиться до чисел при відніманні + перенос на наступний рядок
document.write(str * "2" + "<br/>");    //  40   Тому що, приводиться до чисел при множенні + перенос на наступний рядок
document.write(str / 2 + "<br/>");      //  10   Тому що, приводиться до чисел при діленні + перенос на наступний рядок



















