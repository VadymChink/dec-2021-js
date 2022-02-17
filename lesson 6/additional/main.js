
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) =>{
   let array = [];
   while (str.length){
       array.push(str.substring(0,n));
       str = str.slice(n);
   }
    console.log(array);
}
cutString('наслаждение' ,3);
// document.writeln(cutString('наслаждение',3));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе:
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не
// меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
let eMail = str => {
    let lowerCaseStr = str.toLowerCase();
    let index =  lowerCaseStr.indexOf('.') - lowerCaseStr.indexOf('@') ;
    if (lowerCaseStr.includes('@') && !lowerCaseStr.startsWith('@') &&
        index > 2){
        console.log('Це валідний Email');
    }else {
        console.log('Це НЕ валідний Email');
    }
}
// Протестувати на значеннях
eMail('someemail@gmail.com');
eMail('someeMAIL@gmail.com');
eMail('someeMAIL@i.ua');
eMail('some.email@gmail.com');


// - є масивlet
coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css','js','mysql','mongodb','angular','aws','docker','git','java core','java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let sort = coursesArray.sort((previous,next)=> next.modules.length - previous.modules.length);
console.log(sort);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у
// рядку str. let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let symb = 'о';
let str = "Астрономия это наука о небесных объектах";
let count = (str, stringSearch) =>{
    let search
    let index = str.indexOf(stringSearch);
        if (str[index] === stringSearch){
            search = str.indexOf(stringSearch) + 1;
        }
    return search;
}
console.log(count(str, symb));
document.writeln(count(str, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str2 = "Сила тяжести приложена к центру масс тела";
let  cutString2 = (str, n) =>{
    let newString
    let arr = str.split(' ');
    newString = arr.slice(0, n).join(' ');
    return  newString;
}
document.writeln(cutString2(str2, 5)) // 'Сила тяжести приложена к центру'


