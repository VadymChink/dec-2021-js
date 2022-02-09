// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи
// - складає або конкатенує їх між собою.
function oneTwoArguments(a,b) {
    let c;
    if (b === undefined){
        console.log(a);
    }else{
        c = a + b;
    }
    return c;
}
oneTwoArguments( 5);
console.log(oneTwoArguments(5, 5));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат   [3,5,7,9]
//
let array1 =[1,2,3,4]
let array2 =[2,3,4,5]
function twoArray(arr, array) {
    let array3 = [];
    for (let i = 0, j = 0; i < arr.length, j < array.length; i++, j++) {
        let arrElement = arr[i] +array[j];
        array3.push(arrElement);
    }
        console.log(array3);
}
twoArray(array1,array2);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let array4 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
function arrayObjectKey(arr) {
    let array5 = [];
    for (let arrElement of arr) {
        for (let array5Key in arrElement) {
            array5.push(array5Key);
        }
    }
    console.log(array5);
}
arrayObjectKey(array4);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function arrayObjectValue(arr) {
    let array6 = [];
    for (let i = 0; i < arr.length; i++) {
        let arrElement = arr[i];
        if (arrElement.name !== undefined && arrElement.age !== undefined){
            array6.push(arrElement.name, arrElement.age);
        }else if (arrElement.model !== undefined){
            array6.push(arrElement.model);
        }
    }
    console.log(array6);
}
arrayObjectValue(array4);

function arrayObjectValue2(arr) {
    let array7 = [];
    for (let arrElement of arr) {
        for (let array5Key in arrElement) {
            array7.push(arrElement[array5Key]);
        }
    }
    console.log(array7);
}
arrayObjectValue2(array4);