// function user(name, age) {
//     let object = {name: name, age:age};
//     return {
//         getName: function (){
//             return object.name;
//         },
//         getAge: function (){
//             return object.age;
//         },
//         setAge: function (age){
//             if (age < 0 || age < object.age){
//                 alert('not valid')
//             }else{
//                 object.age = age;
//             }
//         }
//     }
// }
//
// let manipulator = user('vadym',26);
// console.log(manipulator);
// console.log(manipulator.getName());
// console.log(manipulator.getAge());
// manipulator.setAge(27);
// console.log(manipulator.getAge());

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//

let obj ={
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
        lat: '-37.3159',
        lng: '81.1496'
    }
},
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
}
}

class User {
    constructor(id,name, username, email,street,suite,city,zipcode,lat, lng, phone, website,nameCompany, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        };
        this.phone = phone;
        this.website = website;
        this.company = {
                    name : nameCompany,
                    catchPhrase : catchPhrase,
                    bs : bs
            }

    }
}
let user1 = new User(1,'vasia','validol','validol@gmail.com',
     'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
    '-37.3159', '81.1496', '1-770-736-8031 x56442','hildegard.org',
    'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(user1);
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }