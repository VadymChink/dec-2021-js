// Всі функції повинні бути описані стрілочним типом!!!!
//  - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNumber = ( n1, n2, n3) => {
    let array =[];
    array.push(n1,n2,n3);
    let min = array[0];
    for (let arrayElement of array) {
        if (min > arrayElement){
            min = arrayElement
        }
    }
        return min
}
console.log(minNumber(1000, 200, 30));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNumber = (n1,n2 ,n3) => {
    let array = [];
    array.push(n1,n2,n3);
    let max = array[0];
    for (let arrayElement of array) {
        if (max < arrayElement){
            max = arrayElement
        }
    }
    return max
}
console.log(maxNumber(20,35,5));
// - створити функцію яка повертає найбільше число з масиву
let array2 = [100,20,50,80,90,40,3,15,22,25]
// - створити функцію яка повертає найменьше число з масиву
let minNumberArray = (arr) =>{
    let min = arr[0];
    for (let arrElement of arr) {
        if (min > arrElement){
            min = arrElement
        }
    }return min;
}
console.log(minNumberArray(array2));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
let sumaArray = (arr) => {
    let suma = 0;
    for (let arrElement of arr) {
        suma += arrElement;
    }
    return suma;
}
console.log(sumaArray(array2));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arithmeticMean = (arr) =>{
    let suma = 0;
    for (let arrElement of arr) {
        suma += arrElement;
    }
    suma/=arr.length;
    return suma;
}
console.log(arithmeticMean(array2));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
let anyNumber = (...arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let arrElement of arr) {
        if (min > arrElement){
            min = arrElement
        }
        if (max < arrElement){
            max = arrElement
        }
    }
    console.log(max);
    return min;
}
anyNumber(100,200,3,5,4)
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomNumberArray = (n) => {
    let array5 =[];
    for (let i = 0; i < n; i++) {
        array5.push(Math.round(Math.random()*100));
    }
    console.log(array5)
}
randomNumberArray(5);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomNumberArrayLimit = (n, limit) =>{
    let array6 = [];
    for (let i = 0; i < n; i++) {
        array6.push(Math.round(Math.random()* limit))
    }
    console.log(array6);
}
randomNumberArrayLimit(7, 20)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array4= [1,2,3]
let newArrayReverse = (arr) => {
    let newArray = [];
    for (let i = 0, j = arr.length-1; i <arr.length ; i++, j--) {
        newArray[j] = arr[i];
    }
    console.log(newArray);
}
newArrayReverse(array4);