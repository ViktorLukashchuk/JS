/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
*/


function User (id, name, surname , email, phone){
  this.id =id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phohe = phone;
}

let userArr = [];

for (let i= 0; i<10; i++){
  userArr.push(new User(Math.round(Math.random()*100), 'UserName', 'UserSurName', 'Useremail', 'UserPhone' ));
}

console.log(userArr);

/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
*/

let filterUserArr = userArr.filter(user => user.id%2 ===0);
console.log(filterUserArr);

/*
- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по спаданню (sort)
*/

let sortUserArr = userArr.sort((a,b)=> b.id- a.id);
console.log(sortUserArr);

/*
- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
*/

class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phohe = phone;
    this.order = order;
  }
}

let clientArr = [];

  clientArr.push(new Client(Math.round(Math.random()*100), 'petro', 'klk', 'petro@email.com', '+380955555', ['order1'] ));
  clientArr.push(new Client(Math.round(Math.random()*100), 'vasyl', 'gds', 'vasyl@email.com', '+38095257678', ['order1', 'order2', 'order3'] ));
  clientArr.push(new Client(Math.round(Math.random()*100), 'anna', 'gfdgdf', 'anna@email.com', '+380985875', ['order1', 'order2'] ));
  clientArr.push(new Client(Math.round(Math.random()*100), 'ira', 'dfgfdg', 'ira@email.com', '+38095287578', ['order1', 'order2'] ));
  clientArr.push(new Client(Math.round(Math.random()*100), 'diana', 'hrthrthr', 'diana@email.com', '+3809527852873', ['order1', 'order2', 'order3', 'order4'] ));
  clientArr.push(new Client(Math.round(Math.random()*100), 'andrii', 'kegslk', 'andrii@email.com', '+380928287', ['order1', 'order2', 'order3', 'order4', 'order5', 'order6'] ));
  clientArr.push(new Client(Math.round(Math.random()*100), 'pavlo', 'kgtykhuk', 'pavlo@email.com', '+3809287237', ['order1', 'order2'] ));
  clientArr.push(new Client(Math.round(Math.random()*100), 'viktor', 'fdewfw', 'viktor@email.com', '+3809287287', ['order1'] ));
  clientArr.push(new Client(Math.round(Math.random()*100), 'roman', 'htjnb', 'roman@email.com', '+38092872852', ['order1', 'order2', 'order3', 'order4', 'order5'] ));
  clientArr.push(new Client(Math.round(Math.random()*100), 'yura', 'fefger', 'yura@email.com', '+38097777', ['order1', 'order2', 'order3', 'order4', 'order5', 'order6', 'order7','order8'] ));


console.log(clientArr);

/*
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
*/

let sortClientArr = clientArr.sort((a,b)=>a.order.length - b.order.length);

console.log(sortClientArr);


/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    */


    function Car (model, producer, year, maxSpeed, engineCapacity){
      this.model = model;
      this.producer = producer;
      this.year = year;
      this.maxSpeed = maxSpeed;
      this.engineCapacity = engineCapacity;
      
      this.drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
      }

      this.info = () => {
        console.log(`
              model - ${this.model},
              producer - ${this.producer},
              year - ${this.year},
              max speed - ${this.maxSpeed} km/h,
              engine capasity - ${this.engineCapacity} l.
      `)
      }

      this.increaseMaxSpeed = newSpeed => console.log(`new max speed is ${this.maxSpeed + newSpeed} km/h`);

      this.changeYear = newValue => this.year = newValue;

      this.addDriver = 
      driver => {this.driverCar = driver }
    }

    let Lambo = new Car('Galardo', 'Italy', 2015, 300, 6.2);
   
    Lambo.drive();
    
    Lambo.info();
   
    Lambo.increaseMaxSpeed(20);
    
    Lambo.changeYear(2011);
    console.log(Lambo.year);

    let driver = {name: 'tolik', sex: 'male', age: 25}
    Lambo.addDriver(driver);
    console.log(Lambo.driverCar);


    /*
    - (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    */

    class CarClass {
  constructor(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = () => {
      console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };

    this.info = () => {
      console.log(`
              model - ${this.model},
              producer - ${this.producer},
              year - ${this.year},
              max speed - ${this.maxSpeed} km/h,
              engine capasity - ${this.engineCapacity} l.
      `);
    };

    this.increaseMaxSpeed = newSpeed => console.log(`new max speed is ${this.maxSpeed + newSpeed} km/h`);

    this.changeYear = newValue => this.year = newValue;

    this.addDriver =
      driver => { this.driverCar = driver; };
  }
}

let ferrari = new CarClass('F450', 'Italy', 2008, 290, 5.1);
   
ferrari.drive();

ferrari.info();

ferrari.increaseMaxSpeed(35);

ferrari.changeYear(2009);
console.log(ferrari.year);


ferrari.addDriver(driver);
console.log(ferrari.driverCar);

/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
*/

function cinderela (name, age, footSize){
  this.name = name;
  this.age = age;
  this.footSize = footSize;
}

let cinderelaArr = [];

 cinderelaArr.push(new cinderela('anna', 20, 35));
 cinderelaArr.push(new cinderela('katya', 21, 36));
 cinderelaArr.push(new cinderela('inna', 25, 38));
 cinderelaArr.push(new cinderela('diana', 26, 41));
 cinderelaArr.push(new cinderela('yulia', 24, 35));
 cinderelaArr.push(new cinderela('sasha', 27, 39));
 cinderelaArr.push(new cinderela('ira', 37, 38));
 cinderelaArr.push(new cinderela('stefa', 19, 36));
 cinderelaArr.push(new cinderela('halyna', 29, 38));
 cinderelaArr.push(new cinderela('paraska', 20, 37));

 console.log(cinderelaArr);

 class prince {
  constructor(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
  }
}

let ourPrince = new prince('Ignat', 30, 39);

// з циклом
for(let i = 0; i<cinderelaArr.length; i++){
  if(cinderelaArr[i].footSize === ourPrince.shoeSize){
    console.log(cinderelaArr[i].name)
  }
}

//з функц find


console.log(cinderelaArr.find(cinderella => cinderella.footSize === ourPrince.shoeSize));