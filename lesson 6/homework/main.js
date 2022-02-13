// - Знайти та вивести довижину настипних стрінгових значень
let a = 'hello world';
let aLength = a.length;
console.log(aLength);
let b = 'lorem ipsum';
let bLength = b.length;
console.log(bLength)
let c = 'javascript is cool';
let cLength = c.length;
console.log(cLength);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let aUpperCase = a.toUpperCase();
console.log(aUpperCase);
let bUppercase = b.toUpperCase();
console.log(bUppercase);
let cUpperCase = c.toUpperCase();
console.log(cUpperCase);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let aLowerCase = a.toLowerCase();
console.log(aLowerCase);
let blowerCase = b.toLowerCase();
console.log(blowerCase);
let cLowerCase = c.toLowerCase();
console.log(cLowerCase);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let strClean = str.trim()
console.log(strClean);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str2 = 'Каждый охотник желает знать';
let stringToArray = str =>{
    let newArray = str.split(' ');
    console.log(newArray);
};
stringToArray(str2);
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let deleteCharacters = (str, length) =>{
    let subString = str.substring(str, length);
    console.log(subString);
}
deleteCharacters(str2, 7);
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str3 = "HTML JavaScript PHP";
let insertDash = str => {
    let newStr = str.replaceAll(' ', '-').toUpperCase();
    console.log(newStr);
}
insertDash(str3)
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з
// нижнього регістру у верхній.
let firstLetterToUpperCase = str =>{
    let firstLetter = str[0].toUpperCase();
    let nextLetter = str.slice(1, str.length)
    let concat = firstLetter.concat(nextLetter);
    console.log(concat);
}
firstLetterToUpperCase(c);
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з
// великої літери.

let capitalize = str =>{
    let array = str.split(' ');
    let newArray =[];
    for (let arrayElement of array) {
        let firstLetterToUpperCase = arrayElement[0].toUpperCase();
        let nexLetter = arrayElement.slice(1, arrayElement.length);
        let concat = firstLetterToUpperCase.concat(nexLetter);
        newArray.push(concat);
    }
    let newString = newArray.join(' ');
        console.log(newString);
}
capitalize(c)


