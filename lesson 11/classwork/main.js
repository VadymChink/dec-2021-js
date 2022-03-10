// є масив -
let users = [{name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт
// потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на
// попередньому етапі.
for (let user of users) {
    let block = document.createElement('div');
    document.body.appendChild(block);

    let button = document.createElement('button');
    button.innerText = 'додати до улюблених';
    block.append(user.name, user.age, user.status, button);

    let item = 'key'

    let constructor = function () {
        let newArr = JSON.parse(localStorage.getItem(item)) || [];
        newArr.push(user);
        localStorage.setItem(item, JSON.stringify(newArr));
    }

    button.onclick = function () {
        constructor();
    }
}

let favorites = document.createElement('button');
favorites.innerText = 'favorites';
document.body.appendChild(favorites);
favorites.onclick = function () {
    location.href = 'favorites.html';
}
