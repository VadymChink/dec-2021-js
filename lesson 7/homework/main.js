// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}
let newArray = [];
let user7 = new User (7,'Michael','Parson','Parson@gmail.com','0966147154');
let user9 = new User (9,'Brad','Flatcher','Flatcher@gmail.com','0966141430');
let user3 = new User (3,'Edgar','Evans','Evans@gmail.com','0966141444');
let user5 = new User (5,'Steve','Davies','Davies@gmail.com','0966141444');
let user2 = new User (2,'Raymond','Aldridge','Aldridge@gmail.com','0966142867');
let user8 = new User (8,'Chris','Ellington','Ellington@gmail.com','0966145725');
let user1 = new User (1,'Tom','Adamson','tom_adamson@gmail.com','0966142862');
let user6 = new User (6,'Dave','Wilson','Wilson@gmail.com','0966140015');
let user4 = new User (4,'Douglas','Johnson','Johnson@gmail.com','0966141444');
let user10 =new User (10,'Bill','Gilbert','Gilbert@gmail.com','0966140001');
newArray.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
console.log(newArray);

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з
// парними id (filter)
let filterArray = newArray.filter(a=>a.id % 2 === 0);
console.log(filterArray);

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortArray = newArray.sort((a,b)=> a.id-b.id);
console.log(sortArray);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone,
// order(поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let newAnyArray = [];
let client1 = new Client(1,'Alicia','Hill', 'hill@gmail','0966147156',['milk','apple','juice']);
let client2 = new Client(2,'Ariadne','Henderson','Henderson@gmail','0966144350', ['bread','eggs','flour','sugar','bananas','chips']);
let client3 = new Client(3,'Chris','Hernandez','Hernandez@gmail','0966144352', ['sausages','sugar','water','bananas']);
let client4 = new Client(4,'Cassius','James','James@gmail','0966144354', ['tea','sausages','beer','chips']);
let client5 = new Client(5,'Raymond','James','Raymond@gmail','0966144354', ['tea','sausages','beer','chips']);
let client6 = new Client(6,'Gareth','Ramirez','Ramirez@gmail','0966144384', ['wine','sugar','chips']);
let client7 = new Client(7,'Isaac','Labert','Labert@gmail','0966144385', ['beer','chips']);
let client8 = new Client(8,'Jade','Smith','Smith@gmail','0966144387', ['water','flour','eggs','bananas']);
let client9 = new Client(9,'Paulina','Webb','Webb@gmail','0966141527', ['salt','chips','beer','sausages','bananas']);
let client10 = new Client(10,'Phebe','Young','Young@gmail','0966141529', ['wine','cheese']);

newAnyArray.push( client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(newAnyArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order
// по зростанню. (sort)
let sortAnyArray = newAnyArray.sort((a, b)=>{
  return a.order.length - b.order.length;
});
console.log(sortAnyArray);