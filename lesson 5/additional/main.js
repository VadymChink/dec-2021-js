// - Дано натуральное число n. Выведите все числа от 1 до n.
let numberN = (n) => {
    for (let i = 1; i < n; i++) {
        console.log(i);
    }
}
// numberN(5);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let twoNumbers = (a, b) => {
    if (a < b ){
        for (let i = a; i <= b ; i++) {
            console.log(i);
        }
    }
    else{
        for (let j = a; j >= b; j--) {
                console.log(j);
        }
    }
}
twoNumbers(5, 10);
twoNumbers(10, 5);
// - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
console.log('dflsjdfhfl')
let foo = (arr, i) =>{
    let indexI = arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=indexI;
    console.log(arr)
}

foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// - Створити функцію яка буде переносити елементи з значенням 0 у кінець масиву.
// Зберігаючи при цьому порядок не нульових значень.Довжина масиву від 2 до 100

// Варіант 1
let arrZeroBack = (arr) => {
    let array10 =[];
    for (let arrElement of arr) {
        if (arrElement !== 0){
            array10.push(arrElement);
        }
    }
    for (let arrElement of arr)
        if (arrElement === 0){
            array10.push(arrElement);
        }
    console.log(array10);
}
// EXAMPLE:
let array11 = [1,0,6,0,3] //=> [1,6,3,0,0]
let array22 = [0,1,2,3,4] //=> [1,2,3,4,0]
let array33 = [0,0,1,0]   //=> [1,0,0,0]
arrZeroBack(array11);
arrZeroBack(array22);
arrZeroBack(array33);


// Варіант 2
let arrZeroBack2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 ){
           let index = arr.indexOf(arr[i]);
            arr.splice(index, 1);
            arr.push(0);
        }
    }
    console.log(arr)
}
// EXAMPLE:
let array1 = [1,0,6,0,3] //=> [1,6,3,0,0]
let array2 = [0,1,2,3,4] //=> [1,2,3,4,0]
let array3 = [0,0,1,0]   //=> [1,0,0,0]
let array4 = [0,2,3,5,0,0,1,0]   //=> [1,0,0,0]
arrZeroBack2(array1);
arrZeroBack2(array2);
arrZeroBack2(array3);
arrZeroBack2(array4);
