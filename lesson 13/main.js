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

function newPromise(point) {
    return new Promise((resolve, reject) => {
               setTimeout(() => {
                    console.log(point);
                    resolve();
                },2000)
            });
}

let point1 = 'Прокинусь'
let point2 = 'Встати'
let point3 = 'Ранкова гігієна'
let point4 = 'Ранкова кава'
let point5 = 'Сніданок'
let point6 = 'Прибирання кімнати та робочого місця'
let point7 = 'Зробити домашню роботу по лекції 13'
let point8 = 'Обід'
let point9 = 'Прогулянка на свіжому повітрі. Закупи продуктів'
let point10 = 'Зробити класну роботу по лекції 13'
let point11 = 'Вечеря'
let point12 = 'Читати книгу мінімум годину'
let point13 = 'Подивитись відео з запланованого списку'
let point14 = 'Вечірні гігієнічні процедури'
let point15 = 'Фільм або серіальчик перед сном'
let point16 = 'Заснути'

new Promise((resolve) => {
    setTimeout(() => {
        console.log(point1);
        resolve();
    }, 1000)
})
    .then(() => {
        return newPromise(point2)
    })
    .then(() => {
        return newPromise(point3)
    }).then(() => {
        return newPromise(point4)
    }).then(() => {
        return newPromise(point5)
    }).then(() => {
        return newPromise(point6)
    }).then(() => {
        return newPromise(point7)
    }).then(() => {
        return newPromise(point8)
    }).then(() => {
        return newPromise(point9)
    }).then(() => {
        return newPromise(point10)
    }).then(() => {
        return newPromise(point11)
    }).then(() => {
        return newPromise(point12)
    }).then(() => {
        return newPromise(point13)
    }).then(() => {
        return newPromise(point14)
    }).then(() => {
        return newPromise(point15)
    }).then(() => {
        return newPromise(point16)
    });