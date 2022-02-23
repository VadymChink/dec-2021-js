
let users = [
    {
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
},
    {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в
// інший порожній масив.
let address = [];
for (let user of users) {
    address.push(user.address);
}
console.log(address);

// - За допомоги циклу проітерувати масив users, записати кожного юзера у свій блок за допомоги
// document.createElement. Всі данні в одному блоці.

for (let user of users) {
    let block = document.createElement('div');
    block.append(user.name, user.age, user.status, user.address.city, user.address.country, user.address.street, user.address.houseNumber);
}
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (let user of users) {
    let block = document.createElement('div');

    let blockName = document.createElement('div');
    blockName.append(user.name);

    let blockAge = document.createElement('div');
    blockAge.append(user.age);

    let blockStatus = document.createElement('div');
    blockStatus.append(user.status);

    let blockAddress = document.createElement('div');
    blockAddress.append(user.address.city, user.address.country, user.address.street, user.address.houseNumber);

    block.append(blockName, blockAge, blockStatus, blockAddress);
}


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам, блок з адресою зробити окремим
// блоком, з блоками для кожної властивості
for (let user of users) {
    let block = document.createElement('div');

    let blockName = document.createElement('div');
    blockName.append(user.name);

    let blockAge = document.createElement('div');
    blockAge.append(user.age);

    let blockStatus = document.createElement('div');
    blockStatus.append(user.status);

    let blockAddress = document.createElement('div');
    let addressCity = document.createElement('div');
    addressCity.append(user.address.city);
    let addressCountry = document.createElement('div');
    addressCountry.append(user.address.city);
    let addressStreet = document.createElement('div');
    addressStreet.append(user.address.street);
    let addressHouseNumber = document.createElement('div');
    addressHouseNumber.append(user.address.houseNumber);
    blockAddress.append(addressCity, addressCountry, addressStreet, addressHouseNumber);

    block.append(blockName, blockAge, blockStatus, blockAddress);
}


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують
// тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let contentBlock = document.getElementById('content');
let ul = document.createElement('ul');
contentBlock.append(ul);

let titleH2 = document.getElementsByTagName('h2');

for (let titleH2Element of titleH2) {
    let li = document.createElement('li');
    ul.append(li);
    li.append(titleH2Element.innerText);
}

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило
// в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

function rulesF(arr) {
    let wrap = document.createElement('div');
    for (let arrElement of arr) {
    let block = document.createElement('div');
    wrap.append(block);

    let h2 = document.createElement('h2');
    h2.append(arrElement.title);

    let p = document.createElement('p');
    p.append(arrElement.body);

    block.append(h2, p)
    }
    console.log(wrap);
}
rulesF(rules);











