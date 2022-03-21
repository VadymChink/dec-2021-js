// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись
// (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який
// відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let productName = document.forms[0].productName;
let quantity = document.forms[0].quantity;
let price = document.forms[0].price;
let image = document.forms[0].image;
let submit = document.getElementById('submit');
let key = 'product'
submit.onclick = function (ev) {
    ev.preventDefault()
    let arr = JSON.parse(localStorage.getItem(key)) ||[];
    function Obj(productName,quantity,price,image) {
        this.productName = productName
        this.quantity = quantity
        this.price = price
        this.image = image
    }
    let product = new Obj(productName.value,quantity.value,price.value,image.value);
    arr.push(product);
    localStorage.setItem(key, JSON.stringify(arr));
}
let list = document.getElementById('list');
