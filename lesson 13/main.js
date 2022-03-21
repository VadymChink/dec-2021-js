// setTimeout(() => {
//     console.log('Прокинусь');
//     setTimeout(() => {
//         console.log('Встати');
//         setTimeout(() => {
//             console.log('Ранкова гігієна');
//             setTimeout(() => {
//                 console.log('Ранкова кава');
//                 setTimeout(() => {
//                     console.log('Сніданок');
//                     setTimeout(()=>{
//                         console.log('Прибирання кімнати та робочого місця');
//                         setTimeout(()=>{
//                             console.log('Зробити домашню роботу по лекції 13');
//                             setTimeout(()=>{
//                                 console.log('Обід');
//                                 setTimeout(()=>{
//                                     console.log('Прогулянка на свіжому повітрі. Закупи продуктів');
//                                     setTimeout(()=>{
//                                         console.log('Зробити класну роботу по лекції 13');
//                                         setTimeout(()=>{
//                                             console.log('Вечеря');
//                                             setTimeout(()=>{
//                                                 console.log('Читати книгу мінімум годину');
//                                                 setTimeout(()=>{
//                                                     console.log('Подивитись відео з запланованого списку');
//                                                     setTimeout(()=>{
//                                                         console.log('Вечірні гігієнічні процедури');
//                                                         setTimeout(()=>{
//                                                             console.log('Фільм або серіальчик перед сном');
//                                                             setTimeout(()=>{
//                                                                 console.log('Заснути');
//                                                             },2000)
//                                                         },2000)
//                                                     },2000)
//                                                 })
//                                             },2000)
//                                         })
//                                     },2000)
//                                 })
//                             },2000)
//                         },2000)
//                     },2000)
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)

// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Прокинусь');
//         resolve();
//     }, 2000)
// })
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('Встати');
//                 resolve();
//             }, 2000)
//         })
//     })
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('Ранкова гігієна');
//                 resolve();
//             }, 2000)
//         })
//     })
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('Ранкова кава');
//                 resolve();
//             }, 2000)
//         })
//     })
//     .then(() => {
//         return new Promise(((resolve) => {
//             setTimeout(() => {
//                 console.log('Сніданок');
//                 resolve();
//             }, 2000)
//         }))
//     })
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('Прибирання кімнати та робочого місця');
//                 resolve();
//             }, 2000)
//         })
//     })
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('Зробити домашню роботу по лекції 13');
//                 resolve();
//             }, 2000)
//         })
//     })
//     .then(()=>{
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log('Обід');
//                 resolve();
//             },2000)
//         })
//     })
//     .then(()=>{
//         return new  Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log('Прогулянка на свіжому повітрі. Закупи продуктів');
//                 resolve();
//             },2000)
//         })
//     })
//     .then(()=>{
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log('Зробити класну роботу по лекції 13');
//                 resolve()
//             },2000)
//         })
//     })
//     .then(()=>{
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log('Вечеря');
//                 resolve()
//             },2000)
//         })
//     })
//     .then(()=>{
//         return new  Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log('Читати книгу мінімум годину');
//                 resolve();
//             },2000)
//         })
//     })
//     .then(()=>{
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log('Подивитись відео з запланованого списку');
//                 resolve();
//             },2000)
//         })
//     }).then(()=>{
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log('Вечірні гігієнічні процедури');
//                 resolve();
//             },2000)
//         })
//     }).then(()=>{
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log('Фільм або серіальчик перед сном');
//                 resolve();
//             },2000)
//         })
//     }).then(()=>{
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log('Заснути');
//                 resolve();
//             },2000)
//         })
//     })
//

// =========Promise===============

// let point1 = 'Прокинусь'
// let point2 = 'Встати'
// let point3 = 'Ранкова гігієна'
// let point4 = 'Ранкова кава'
// let point5 = 'Сніданок'
// let point6 = 'Прибирання кімнати та робочого місця'
// let point7 = 'Зробити домашню роботу по лекції 13'
// let point8 = 'Обід'
// let point9 = 'Прогулянка на свіжому повітрі. Закупи продуктів'
// let point10 = 'Зробити класну роботу по лекції 13'
// let point11 = 'Вечеря'
// let point12 = 'Читати книгу мінімум годину'
// let point13 = 'Подивитись відео з запланованого списку'
// let point14 = 'Вечірні гігієнічні процедури'
// let point15 = 'Фільм або серіальчик перед сном'
// let point16 = 'Заснути'

// function newPromise(point) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(point);
//             resolve();
//         }, 2000)
//     });
// }
//
// newPromise(point1)
// .then(() => newPromise(point2))
// .then(() => newPromise(point3))
// .then(() => newPromise(point4))
// .then(() => newPromise(point5))
// .then(() => newPromise(point6))
// .then(() => newPromise(point7))
// .then(() => newPromise(point8))
// .then(() => newPromise(point9))
// .then(() => newPromise(point10))
// .then(() => newPromise(point11))
// .then(() => newPromise(point12))
// .then(() => newPromise(point13))
// .then(() => newPromise(point14))
// .then(() => newPromise(point15))
// .then(() => newPromise(point16));


// ====================async/await=====================

function newPromise(point) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(point);
            resolve();
        }, 2000)
    });
}
let point1 = ['Прокинусь',
    'Встати',
    'Ранкова гігієна',
    'Ранкова кава',
    'Сніданок',
    'Прибирання кімнати та робочого місця',
    'Зробити домашню роботу по лекції 13',
    'Обід',
    'Прогулянка на свіжому повітрі. Закупи продуктів',
    'Зробити класну роботу по лекції 13',
    'Вечеря',
    'Читати книгу мінімум годину',
    'Подивитись відео з запланованого списку',
    'Вечірні гігієнічні процедури',
    'Фільм або серіальчик перед сном',
    'Заснути']

async function fun(arg) {
    for (let string of arg) {
        await newPromise(string)
    }
}
    fun(point1);