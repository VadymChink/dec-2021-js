// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let form1 = document.createElement('form');

let inputName = document.createElement('input');
inputName.setAttribute('name', 'inputName');
inputName.setAttribute('type', 'text');

let inputAge = document.createElement('input');
inputAge.setAttribute('name', 'inputAge');
inputAge.setAttribute('type', 'number');

let button1 = document.createElement('button');
button1.innerText = 'click';

document.body.appendChild(form1);
form1.append(inputName, inputAge, button1);

let obj = (name, age) => {
    let user = {
        name: name, age: age
    };
    localStorage.setItem('key', JSON.stringify(user));
}
button1.onclick = function () {
    Obj(inputName.value, inputAge.value);
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let forms = document.forms
let form = forms.cars
let model = form.model;
let type = form.type;
let volume = form.volume;
let btn = form.submit;

let arr = (model, type, volume) => {
    let newArr = [];
    newArr.push(model, type, volume);
    localStorage.setItem('keyCar',JSON.stringify(newArr) );
}

btn.onclick = function (e) {
    e.preventDefault();
    arr(model.value, type.value, volume.value);
}