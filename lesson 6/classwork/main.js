// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let validName = n => {
    let newName = n.replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ')
    console.log(newName);
}
validName(n2);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomNumber = (arr,num) =>{
    for (let i = 0; i < num; i++) {
        arr.push(Math.round(Math.random()*100))
    }
    console.log(arr)
    // return arr;
}
let array = [];
randomNumber(array,15)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
let arraySort =[];
randomNumber(arraySort,10);
let sorts = arraySort.sort((a , b) => a - b );
console.log(sorts);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати його за допомоги filter, залишивши тільки парні числа
let arrayFilter =[];
randomNumber(arrayFilter,10);
let filter = arrayFilter.filter(a => (a %2 === 0));
console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrayMap =[];
randomNumber(arrayMap,15);
let map = arrayMap.map((array)=>{
    return array + '';
});
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = (arr, direction) => {
    let minToMax;
    let maxToMin;
    if (direction === 'ascending'){
       minToMax = arr.sort((a, b) => a - b);
      return minToMax;
    }else if (direction === 'descending'){
        maxToMin = arr.sort((a, b) => b - a);
        return maxToMin;
    }else {
        return arr;
    }
}
console.log(sortNums(nums, 'descending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonthDuration = coursesAndDurationArray.sort((a,b)=>
    a.monthDuration - b.monthDuration);
console.log(sortMonthDuration);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterMonthDuration = coursesAndDurationArray.filter(a =>a.monthDuration > 5);
console.log(filterMonthDuration);