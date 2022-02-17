// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, v){
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.v = v;
        this.drive = function (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        }
        this.info = function (){
            for (let key in this) {
                if (typeof this[key] !== 'function') {
                    console.log(`${key} - ${this[key]}`)
                }
            }
        }
        this.increaseMaxSpeed = function (newSpeed){
            this.maxSpeed += newSpeed;
        }
        this.changeYear = function (newValue){
            this.year = newValue;
        }
        this.addDriver = function (driver){
            this.driver = driver;
        }
}
let car = new Car('SSC Ultimate Aero TT', 'Shelby Super Cars', 2009, 421, 6.4);
console.log(car)
car.drive();
car.info();
car.increaseMaxSpeed(79);
console.log(car.maxSpeed);
car.changeYear(2020);
console.log(car.year);
let driver = {name: 'Vadym', age: 26};
car.addDriver(driver);
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, manufacturer, year, maxSpeed, v) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.v = v;
        this.drive = function (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        }
        this.info = function (){
            for (let key in this) {
                if (typeof this[key] !== 'function'){
                    console.log(`${key} - ${this[key]}`)
                }
            }
        }
        this.increaseMaxSpeed = function (newSpeed){
            this.maxSpeed += newSpeed;
        }
        this.changeYear =function (newValue){
            this.year = newValue;
        }
        this.addDriver = function (driver){
            this.driver = driver;
        }
    }
}
let car2 = new Car2('Bugatti Veyron Super Sport','Bugatti', 2010,431,'8.0' )
car2.drive();
car2.info();
car2.increaseMaxSpeed(20);
console.log(car2.maxSpeed);
car2.changeYear(2015);
console.log(car2.year);
car2.addDriver(driver);
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, year, size) {
        this.name = name;
        this.year = year;
        this.size = size;
    }
}
let cinderella1 = new Cinderella('Zoe',20,38);
let cinderella2 = new Cinderella('Isabel',18,36);
let cinderella3 = new Cinderella('Jacqueline',25,40);
let cinderella4 = new Cinderella('Lauren',26,41);
let cinderella5 = new Cinderella('Destiny',27,36);
let cinderella6 = new Cinderella('Savannah',20,40);
let cinderella7 = new Cinderella('Taylor',30,38);
let cinderella8 = new Cinderella('Amelia',32,37);
let cinderella9 = new Cinderella('Susan',33,39);
let cinderella10 = new Cinderella('Caroline',19,38);
let cinderellas = [cinderella1,cinderella1,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10,];
console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, year, size) {
        this.name = name;
        this.year = year;
        this.size = size;
    }
}
let prince = new Prince('Harry',37,37);
console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let cinderella of cinderellas) {
    if (cinderella.size === prince.size){
        console.log(`wedding with ${cinderella.name}`)
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let princess = cinderellas.find(item=>item.size=== prince.size)
console.log(`wedding with ${princess.name}`)
