// Все робити за допомоги js.
// - створити блок,
let block = document.createElement('div');
// - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.background = 'red';
block.style.color = 'blue';
block.style.fontSize = '24px';
block.style.height = '240px';
// - додати цей блок в body.
document.body.append(block);
// - клонувати його повністю, та додати клон в body.
let cloneBlock = block.cloneNode(true);
document.body.appendChild(cloneBlock)

// - Є масив:
  let arr = ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu Завдання робити через цикли.
let menu = document.getElementsByClassName('menu')[0];
for (let string of arr) {
    let li = document.createElement('li');
    li.append(string);
    menu.append(li);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let elementArray of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.append(elementArray.title,elementArray.monthDuration);
    document.body.appendChild(block);
}

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу. Завдання робити через цикли.

for (let arrayElement of coursesAndDurationArray2) {
    let block = document.createElement('div');
    block.classList.add('item');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.classList.add('heading');
    h2.innerText = arrayElement.title;
    p.innerText = arrayElement.monthDuration;
    p.classList.add('description');
    block.append(h2, p);
    document.body.append(block);
}