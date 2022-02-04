// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3,
// то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

    let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira",];

    if (friends.length >= 3){
        console.log('Це великий масив, в якому  3 і більше елементи');
    } else {
        console.log('Це маленький масив, в якому менше 3-х елементів.');
    }

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше).
//     Перевірити, чи знаходиться перше число між двома іншими.

// Якщо дані ведені з клавіатури

     let number1 = +prompt('Ведіть число');
     let number2 = +prompt('Ведіть число');
     let number3 = +prompt('Ведіть число');
         if (number1 < number2 && number2 < number3){
             console.log(number2);
         }
         else if (number1 > number2 && number2 > number3){
             console.log(number2);
         }
         else if (number1 < number2 && number2 > number3 && number1 > number3) {
             console.log(number1);
         }
         else if (number1 < number2 && number2 > number3 && number1 < number3) {
             console.log(number3);
         }
         else if (number1 > number2 && number2 < number3 && number1 < number3){
             console.log(number1);
         }
         else if (number1 > number2 && number2 < number3 && number1 > number3){
             console.log(number3);
         }
         else {
             console.log('Ведіть різні числа')
         }
// Якщо нам дані числа

    let n1 = 2;
    let n2 = 3;
    let n3 = 1;
    if (n1 > n3 && n1< n2){
        console.log('Перше число знаходиться між двома іншими.')
    }else {
        console.log('Не знаходиться')
    }

  //- Перепишіть конструкцію if з використанням умовного оператора '?':
  // let result;
  // if (a + b < 4) {
  //     result = 'Мало';
  // } else {
  //     result = 'Багато';
  // }

let a = 1;
let b = 2;
let result =  (a + b < 4)  ? 'Мало' : 'Багато';
console.log(result)

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним,
// негативним або нулем напишіть це тернарним оператором

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let anyNumber = randomNumber(-100, 100);
let result2 = anyNumber === 0 ? 'Число є нулем' : anyNumber > 0 ? 'Число є позитивним' : 'Число є негативним';
console.log(anyNumber);
console.log(result2);


















