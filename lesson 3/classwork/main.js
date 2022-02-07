// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let i = 0;
while (i < array.length){
    console.log(array[i]);
    i++;
}
// 2. перебрати його циклом for
for (let number of array) {
    console.log(number);
}
// 3. перебрати циклом while та вивести числа тільки з непарним індексом
let p = 0;
while (p<array.length){
    if (p%2 !== 0){
    console.log(array[p]);
    }
        p++;
}

// 4. перебрати циклом for та вивести числа тільки з непарним індексом
for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0){
        console.log(array[i]);
    }
}
// 5. перебрати циклом while та вивести числа тільки парні значення
k=0;
while (k<array.length){
    if (array[k] % 2 === 0){
    console.log(array[k]);
    }
    k++;
}
// 6. перебрати циклом for та вивести числа тільки парні значення
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
        console.log(array[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0){
        array[i] =  'okten';

    }
}
    console.log(array)
// 8. вивести масив в зворотньому порядку.
let arrayBack = [2,17,13,6,22,31,45,66,100,-18];
console.log(arrayBack.reverse());


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
let s = arrayBack.length-1;
while (s >= 0){
    console.log(arrayBack[s]);
    s--;
}
// 2. перебрати його циклом for
for (let i = arrayBack.length - 1; i >= 0; i--) {
    console.log(arrayBack[i]);
}
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
let t = arrayBack.length-1;
while (t >= 0){
    if (t % 2 !==0 ){
        console.log(arrayBack[t]);
    }
    t--;
}
//4. перебрати циклом for та вивести числа тільки з непарним індексом
for (let i = arrayBack.length - 1; i >= 0; i--) {
    const arElement = arrayBack[i];
    if (i % 2 !== 0){
        console.log(arElement);
    }
}
//5. перебрати циклом while та вивести числа тільки парні значення
let c =  arrayBack.length-1;
while (c >= 0){
    if (arrayBack[c] % 2 === 0 ){
        console.log(arrayBack[c]);
    }
    c--;
}
//6. перебрати циклом for та вивести числа тільки парні значення
for (let i = arrayBack.length - 1; i >= 0; i--) {
    let arrayBackElement = arrayBack[i];
    if (arrayBackElement % 2 === 0){
        console.log(arrayBackElement);
    }

}
//7. замінити кожне число кратне 3 на слово "okten"
for (let i = arrayBack.length - 1; i >= 0; i--) {
    let arrayBackElement = arrayBack[i];
    if (arrayBackElement % 3 === 0 ){
        arrayBack[i] = 'okten';
    }
}
console.log(arrayBack);

























