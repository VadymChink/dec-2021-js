    //1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
    // Скласти результат цих чисел в змінній result.

    let number = [ 10,20,30,40,50,60,70,80,90,100]
    console.log(number);
    let  result = number[0] + number[1] + number[2] + number[3] + number[4] + number[5] + number[6] + number[7]+ number[8]+ number[9];
    console.log(result);

    //2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

    let book ={
        name :'1984',
        quantity : 328,
        genre : 'novel'
    };
    console.log(book);


    //3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

    let book1 ={
        name :'1984',
        numberOfPages : 328,
        genre : 'novel',
        Author:'George Orwell'
   };
    console.log(book1);

    //4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
    // Вивести кожну книгу як окремий об'єкт

    let bookList = [
        {
            name :'1984',
            numberOfPages : 328,
            genre : 'novel',
            Author:'George Orwell'
        },
        {
            name :'Fahrenheit 451',
            numberOfPages : 249,
            genre : 'novel',
            Author:'Ray Bradbury'
        },
        {
            name :'Catch-22',
            numberOfPages : 544,
            genre : 'novel',
            Author:'Joseph Heller'
        }
    ];

    console.log(bookList[0]);
    console.log(bookList[1]);
    console.log(bookList[2]);

    //5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height)
    // та шириною 10см (змінна width). Значення площі зберігати в змінній s.

    let height = 23;
    let width = 10;
    let s = height * width;
    console.log(s);

    //6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC)
    // та діаметром основи 4м (dC), результат помістіть у змінну v.

    let heightC = 10;
    let dC = 4;
    let rC= dC / 2;
    let PI = 3.141;
    let v = PI * heightC * rC**2;
    console.log(v);

    //7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
    //Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію
    // Math.pow (число, ступінь) або оператор зведення в ступінь **).

    let n = 3;
    let m = 4;
    let k = Math.sqrt((Math.pow(n,2) + Math.pow(m,2) ));
    console.log(k);