let newArray = [1, 'd', {key:'value'}, [2, 7, 9], "peace", 5, '8', 'test', 'ua', 19];
console.log(newArray[0]);
console.log(newArray[1]);
console.log(newArray[2]);
console.log(newArray[3]);
console.log(newArray[4]);
console.log(newArray[5]);
console.log(newArray[6]);
console.log(newArray[7]);
console.log(newArray[8]);
console.log(newArray[9]);

////////////////////////////

const book1 = {
    title: 'Harry Potter',
    pageCount: 600,
    genre: "fantasy"
}

const book2 = {
    title: '1984',
    pageCount: 250,
    genre: "utophia"
}

const book3 = {
    title: 'SCRUM',
    pageCount: 300,
    genre: "Computers"
}

////////////////////////////

const book1_1 = {
    title: 'Harry Potter and Half blood Prince',
    pageCount: 650,
    genre: "fantasy",
    authors: ['Joan Rowling', 57]
}

const book2_1 = {
    title: '1984',
    pageCount: 250,
    genre: "utophia",
    authors: ['George Orwell', 46]
}

const book3_1 = {
    title: 'Essential Scrum',
    pageCount: 340,
    genre: "Computers",
    authors: ['Kenneth Rubin', 50]
}

////////////////////////////

const users = [
    {
        name: 'Viktor',
        username: 'userVik',
        password: 'hgfiuwehugifwh'
    },
    {
        name: 'Petro',
        username: 'userPet',
        password: 'hrt,hrthtrth'
    },
    {
        name: 'Mykola',
        username: 'userMyk',
        password: 'hlrt[rh,rtl;h,l;rt'
    },
    {
        name: 'Anna',
        username: 'userAnn',
        password: 'LMlkemwkg'
    },
    {
        name: 'Iryna',
        username: 'userIry',
        password: 'gmewrgregpoer'
    },
    {
        name: 'Pavlo',
        username: 'userPav',
        password: 'gemgl;ergre'
    },
    {
        name: 'Roman',
        username: 'userRom',
        password: 'ewm,gl;mewmlgf'
    },
    {
        name: 'Halyna',
        username: 'userHal',
        password: 'mvwkmewk'
    },
    {
        name: 'Iva',
        username: 'userIva',
        password: 'f,wq,f[wf,eew'
    },
    {
        name: 'Andrii',
        username: 'userAnd',
        password: '.fwe.f;erwgfe'
    },
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

////////////////////////////

let x = 15;

if (x !=0){
    console.log('Вірно')
} else {
    console.log('Невірно')
}

////////////////////////////

let time = 15;
if (time > 0 && time <= 15){
    console.log('Перша')
} else if (time > 15 && time <= 30){
    console.log('Друга')
} else if (time > 30 && time <= 45){
    console.log('Третя')
} else if (time > 45 && time <= 59){
    console.log('Четверта')
} else {
    console.log('Incorrect value')
}

////////////////////////////

let day = 15;
if (day > 0 && day <= 10){
    console.log('Перша декада')
} else if (day > 10 && day <= 20){
    console.log('Друга декада')
} else if (day > 20 && day <= 31){
    console.log('Третя декада')
} else {
    console.log('Incorrect value')
}

////////////////////////////

let dayOfWeek = +prompt('Put number of weekDay')

switch (dayOfWeek) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Sorry, incorrect value");
  }

////////////////////////////

let numberOne = +prompt('Set the first number');
let numberTwo = +prompt('Set the secong number');

if (numberOne===numberTwo){
    console.log('Numbers one and two are equal')
} else if (numberOne > numberTwo){
    console.log('Number one is bigger than number two')
} else if (numberOne < numberTwo){
    console.log('Number two is bigger than number one')
} else {
    console.log('Incorrect value')
}

////////////////////////////

let varX 
if (!varX) {
    varX = 'default'
    console.log(varX);
} 

// OR

let varY 
if (varY === undefined || varY === null) {
    varY = 'default'
    console.log(varY);
} 

////////////////////////////

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('super')
}
