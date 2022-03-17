// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі
//  висота*ширина

document.onclick = function (ev) {
    let first = ev.composedPath();
    let arrEl;
    for (let i = first.length - 1; i >= 0; i--) {
        arrEl = first[i];
    }
    console.log('Назва тегу -', arrEl.localName);
    console.log('список класів', arrEl.classList);
    console.log('id -', arrEl.attributes.id)
    console.log('висота', arrEl.offsetHeight);
    console.log('ширина', arrEl.offsetWidth);
}

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі
//     висота*ширина

let block = document.createElement('div');
block.style.background = 'grey';
block.style.height = '200px';
block.style.width = '300px';
block.style.color = 'white';
block.style.position = 'absolute';
block.style.left = '40%';
block.style.padding = '40px';
block.style.display = 'none';

document.body.appendChild(block);

document.onclick = function (ev) {
    let info = ev.composedPath();
    let infoOne = info[0];
    // block.style.display = 'block'
    block.innerText = `Назва тегу - ${infoOne.localName} 
    Список класів - ${infoOne.classList}
    Список id - ${infoOne.id}
    висота - ${infoOne.offsetHeight}
    ширина - ${infoOne.offsetWidth}`;
}

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 28, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут
// работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let chbox1 = document.getElementById('chbox1');

let chbox2 = document.getElementById('chbox2');

let chbox3 = document.getElementById('chbox3');

let blockCh = document.getElementById('block');

function remove() {
    let arr = document.getElementById('block').children;
    let byIdChildren = document.getElementById('block').children;
    let i = 0;
    while (byIdChildren.length) {
        blockCh.removeChild(byIdChildren[0]);
        i++;
    }
}

document.onclick = function () {
    if (chbox1.checked && chbox2.checked && !chbox3.checked) {
        remove();
        let filter = usersWithAddress.filter(value => {
            return value.status === false && value.age > 29;
        })
        for (let user of filter) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city}`;
            blockCh.appendChild(div);
        }
    } else if (chbox1.checked && chbox3.checked && !chbox2.checked) {
        remove();
        let filter = usersWithAddress.filter(value => {
            return value.status === false && value.address.city === 'Kyiv';
        })
        for (let user of filter) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city}`;
            blockCh.appendChild(div);
        }
    } else if (chbox2.checked && chbox3.checked && !chbox1.checked) {
        remove();
        let filter = usersWithAddress.filter(value => {
            return value.age > 29 && value.address.city === 'Kyiv';
        })
        for (let user of filter) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city}`;
            blockCh.appendChild(div);
        }
    } else if (chbox1.checked && chbox2.checked && chbox3.checked) {
        remove();
        let filter = usersWithAddress.filter(value => {
            return value.status === false && value.age > 29 && value.address.city === 'Kyiv';
        })
        for (let user of filter) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city}`;
            blockCh.appendChild(div);
        }
    } else if (chbox1.checked) {
        remove();
        if (chbox1.checked) {
            let filter1 = usersWithAddress.filter(value => !value.status);
            for (let user of filter1) {
                let ch1 = document.createElement('div');
                ch1.classList.add('ch1');
                ch1.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city}`;
                blockCh.append(ch1);
            }
        }
        if (!chbox1.checked) {
            let className = document.getElementsByClassName('ch1');
            let i = 0
            while (className.length) {
                blockCh.removeChild(className[0]);
                i++
            }
        }
    } else if (chbox2.checked) {
        remove();
        if (chbox2.checked) {
            let filter2 = usersWithAddress.filter(value => value.age > 29);
            for (let user of filter2) {
                let divElement = document.createElement('div');
                divElement.classList.add('ch2');
                divElement.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city}`;
                blockCh.appendChild(divElement);
            }
        }
        if (!chbox2.checked) {
            let elementsByClassName = document.getElementsByClassName('ch2');
            let i = 0
            while (elementsByClassName.length) {
                blockCh.removeChild(elementsByClassName[0]);
                i++;
            }
        }
    } else if (chbox3.checked) {
        remove();
        let filter3 = usersWithAddress.filter(value => value.address.city === 'Kyiv');
        if (chbox3.checked) {
            for (let user of filter3) {
                let div = document.createElement('div');
                div.classList.add('ch3');
                div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city}`;
                blockCh.appendChild(div);
            }
        }
        if (!chbox3.checked) {
            let elementsByClassName = document.getElementsByClassName('ch3');
            let i = 0;
            while (elementsByClassName.length) {
                blockCh.removeChild(elementsByClassName[0]);
                i++;
            }
        }
    } else {
        remove();
    }
}

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
