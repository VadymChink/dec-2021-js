 // - Дано змінну time яка рівна числу від 0 до 59.
 //  Потрібно написати код, який перевірить, до якої четверті години попадає число
 //  (в першу, другу, третю или четверту частину години).

  let time = Math.floor(Math.random()*60);
      if (time <= 14){
          console.log('the first quarter of an hour');
      }
      else if( time >= 15 && time <= 29){
          console.log('the second quarter of an hour');
      }
      else if( time >= 30 && time <= 44){
          console.log('the third quarter of an hour');
      }
      else if( time >= 45 && time < 59){
          console.log('the fourth quarter of an hour');
      }

// - У змінній day дано якесь число від 1 до 31.
//   Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

  let day = Math.floor(Math.random() * 31 + 1);
      if (day <= 10){
          console.log('this is the first decade of the week');
      }
      else if (day > 10 && day <= 20){
          console.log('this is the second decade of the week');
      }
      else {
          console.log('this is the third decade of the week');
      }

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)

  let test = !!prompt('Веди свої дані');
      if (test === true){
          console.log('Вірно');
      } else {
          console.log('Неправильно');
      }

  let test1 = !!prompt('Веди свої дані') ? 'Вірно' : 'Неправильно';
      console.log(test1);

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

 let a = +prompt('Введіть число 1, 0 , -3');
     if (a !== 0 ){
         console.log('Вірно');
     } else {
         console.log('Невірно');
     }

 // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
 // і на екрані відображається інфа що заплановано на цей день.

 let week = +prompt('Ведіть число від 1 до 7');
 switch(week){
         case 1:
             document.write('lecture on javaScript in Monday')
         break;
         case 2:
             document.write('Tuesday. Day for homework and classwork');
         break;
         case 3:
             document.write('lecture on javaScript in Wednesday');
         break;
         case 4:
             document.write('Thursday. Day for homework and classwork');
         break;
         case 5:
             document.write('lecture on javaScript in Friday');
         break;
         case 6:
             document.write('<ul>' +
                                 '<li>Day for homework and classwork.</li>' +
                                 '<li>Weekend evening.</li>' +
                             '</ul>');
         break;
         case 7:
             document.write('<ol>' +
                                 '<li>Sleep</li>' +
                                 '<li>Sleep</li>' +
                                 '<li>Sleep</li>' +
                                 '<li>Sleep</li>' +
                                 '<li>Sleep</li>' +
                                 '<li>Sleep</li>' +
                                 '<li>Sleep</li>' +
                             '</ol>');
         break;
         default:
             document.write('Не коректний ввід. Введіть число від 1 до 7');
 }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

  let year = prompt('Ведіть рік');
  let leapYear = year / 4;
  let leapYearTrue = Number.isInteger(leapYear);
      if (leapYearTrue === true) {
          console.log('Високосний')
      } else {
          console.log('Не високосний')
      }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме:
// „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!»,
// інакше – відобразити: «Не знаєте? ECMAScript!

 let jScript = prompt('Яка «офіційна» назва JavaScript?');
    if(jScript === 'ECMAScript'){
       alert('«Правильно!»');
    } else{
       alert('«Не знаєте? ECMAScript!');
    }