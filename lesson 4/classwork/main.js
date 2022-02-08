// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function number1(a,b,c) {
    if (a < b && b < c){
        console.log(a);
    }
    else if (a > b && b < c) {
        console.log(b);
    }
    else if (a > b && b > c){
        console.log(c);
    }
    else if (a < b && b > c && c < a){
        console.log(c);
    }
    else if (a < b && b > c && c > a){
        console.log(a);
    }
    else {
        console.log('Ведіть різні числа')
    }
}
number1(3,2,1);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function number2(a,b,c) {
    if (a < b && b < c){
        console.log(c);
    }
    else if (a > b && b < c && a > c) {
        console.log(a);
    }
    else if (a > b && b < c && a < c) {
        console.log(c);
    }
    else if (a > b && b > c){
        console.log(a);
    }
    else if (a < b && b > c){
        console.log(b);
    }
    else {
        console.log('Ведіть різні числа')
    }
}
number2(3,2,1);

// - створити функцію яка повертає найбільше число з масиву
let array = [5,13,8,22,6];
function maxNumberArray(arr) {
    return Math.max.apply(null, arr) ;
}
console.log(maxNumberArray(array));
// - створити функцію яка повертає найменьше число з масиву
function minNumberArray(arr) {
    return Math.min.apply(null, arr) ;
}
console.log(minNumberArray(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
function sum(arr) {
        let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrElement = arr[i];
        result += arrElement;
    }
    console.log(result);
    return result;
}
sum(array);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMean(arr) {
    let result = 0;
    for (let arrElement of arr) {
        result += arrElement / arr.length
    }
    console.log(result);
    return result;
}
arithmeticMean(array);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
function anyNumber(...arr) {
    let min = arr[0];
    let max = arr[0];
    for (let arrElement of arr) {
        if (arrElement > max){
            max = arrElement;
        }
        if (arrElement < min ){
            min = arrElement;
        }
    }
    console.log("max", max);
        return  min
}
anyNumber(1,3,5,7,10);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.
function arrRandom(a) {
    let array = [];
    for (let i = 0; i < a; i++) {
        let arrayElement = Math.round(Math.random()*100);
        array.push(arrayElement);

    }
        console.log(array)
    return array;
}
arrRandom(10);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
function arrRandomAr(a, limit) {
    let array = [];
    for (let i = 0; i < a; i++) {
        let arrayElement = Math.round(Math.random()*limit);
        array.push(arrayElement);

    }
    console.log(array)
    return array;
}
arrRandomAr(10,100) ;
//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log(array)
function arrayBack(arr) {
    let newArray =[];
    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        newArray[j] = arr[i];
    }
    console.log(newArray)
    return newArray;
}
arrayBack(array);
