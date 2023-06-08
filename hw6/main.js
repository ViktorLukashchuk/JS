/*
- Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'
*/

const str1 = "hello world";
const str2 = "lorem ipsum";
const str3 = "javascript is cool";

let strLen = (str) => str.length;

console.log(strLen(str1));
console.log(strLen(str2));
console.log(strLen(str3));

/*
- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'
*/

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

/*
- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
*/

const str1_1 = "HELLO WORLD";
const str2_1 = "LOREM IPSUM";
const str3_1 = "JAVASCRIPT IS COOL";

console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());

/*
- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
*/

let str = " dirty string   ";

console.log(str.trim());

/*
- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
*/

let strToarr = "Ревуть воли як ясла повні";

let stringToArray = (str) => str.split(" ");

console.log(stringToArray(strToarr));

/*
- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
*/

let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let numToStr = numArr.map((num) => num.toString());

console.log(numToStr);

/*
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
*/

let nums = [11, 21, 3];

let sortNums = (numArr, direction) => {
  let newArr = [];
  if (direction === "ascending") {
    newArr = numArr.sort((a, b) => a - b);
    return newArr;
  } else if (direction === "descending") {
    let newArr = [];
    newArr = numArr.sort((a, b) => b - a);
    return newArr;
  }
};

console.log(sortNums(nums, "ascending"));

/*
- є масив
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 */

let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

let coursesArr = coursesAndDurationArray.sort(
  (a, b) => b.monthDuration - a.monthDuration
);
console.log(coursesArr);

let courseFilter = coursesAndDurationArray.filter((a) => a.monthDuration > 5);
console.log(courseFilter);

let mapOfCourses = coursesAndDurationArray.map((item, index) => ({
  ...item,
  id: index + 1,
}));

console.log(mapOfCourses);

/*
описати колоду карт (від 6 до туза без джокерів)
*/

let stack = [
  { cardSuit: "spade", value: 6, color: "black" },
  { cardSuit: "spade", value: 7, color: "black" },
  { cardSuit: "spade", value: 8, color: "black" },
  { cardSuit: "spade", value: 9, color: "black" },
  { cardSuit: "spade", value: 10, color: "black" },
  { cardSuit: "spade", value: "jack", color: "black" },
  { cardSuit: "spade", value: "queen", color: "black" },
  { cardSuit: "spade", value: "king", color: "black" },
  { cardSuit: "spade", value: "ace", color: "black" },

  { cardSuit: "diamond", value: 6, color: "red" },
  { cardSuit: "diamond", value: 7, color: "red" },
  { cardSuit: "diamond", value: 8, color: "red" },
  { cardSuit: "diamond", value: 9, color: "red" },
  { cardSuit: "diamond", value: 10, color: "red" },
  { cardSuit: "diamond", value: "jack", color: "red" },
  { cardSuit: "diamond", value: "queen", color: "red" },
  { cardSuit: "diamond", value: "king", color: "red" },
  { cardSuit: "diamond", value: "ace", color: "red" },

  { cardSuit: "heart", value: 6, color: "red" },
  { cardSuit: "heart", value: 7, color: "red" },
  { cardSuit: "heart", value: 8, color: "red" },
  { cardSuit: "heart", value: 9, color: "red" },
  { cardSuit: "heart", value: 10, color: "red" },
  { cardSuit: "heart", value: "jack", color: "red" },
  { cardSuit: "heart", value: "queen", color: "red" },
  { cardSuit: "heart", value: "king", color: "red" },
  { cardSuit: "heart", value: "ace", color: "red" },

  { cardSuit: "clubs", value: 6, color: "black" },
  { cardSuit: "clubs", value: 7, color: "black" },
  { cardSuit: "clubs", value: 8, color: "black" },
  { cardSuit: "clubs", value: 9, color: "black" },
  { cardSuit: "clubs", value: 10, color: "black" },
  { cardSuit: "clubs", value: "jack", color: "black" },
  { cardSuit: "clubs", value: "queen", color: "black" },
  { cardSuit: "clubs", value: "king", color: "black" },
  { cardSuit: "clubs", value: "ace", color: "black" },
];

/*
- знайти піковий туз
*/

let spadeAce = stack.filter(
  (card) => card.cardSuit === "spade" && card.value === "ace"
);

console.log(spadeAce);

/*
- всі шістки
*/

let allSix = stack.filter((card) => card.value === 6);

console.log(allSix);

/*
-
всі червоні карти
*/

let allRed = stack.filter((card) => card.color === "red");

console.log(allRed);

/*
- всі буби
*/

let allDiamonds = stack.filter((card) => card.cardSuit === "diamond");

console.log(allDiamonds);

/*
- всі трефи від 9 та більше
*/

let clubsMoreThan9 = stack.filter(
  (card) =>
    card.cardSuit === "clubs" &&
    (card.value > 9 || typeof card.value === "string")
);

console.log(clubsMoreThan9);

/*
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
*/

let sortedStack = stack.reduce(
  (acc, cur) => {
    switch (cur.cardSuit) {
      case "spade":
        acc.spades.push(cur);
        break;
      case "diamond":
        acc.diamonds.push(cur);
        break;
      case "clubs":
        acc.clubs.push(cur);
        break;
      case "heart":
        acc.hearts.push(cur);
        break;
    }
    return acc;
  },
  {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
  }
);

console.log(sortedStack);

/*
взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker
*/

let coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced",
    ],
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];

/*
відсортувати його в спадаючому порядку за кількістю елементів в полі modules
*/

let sortedArr = coursesArray.sort(
  (a, b) => b.modules.length - a.modules.length
);

console.log(sortedArr);

/*
--написати пошук всіх об'єктів, в який в modules є sass
*/

let saas = coursesArray.filter((course) => course.modules.includes("sass"));

console.log(saas);

/*
--написати пошук всіх об'єктів, в який в modules є sass
*/

let docker = coursesArray.filter((course) => course.modules.includes("docker"));

console.log(docker);

/*
- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
    document.writeln(delete_characters(str, 7)); // Каждый
    */
let strArr = "Каждый охотник желает знать";

let deleteCharacters = (str, numberOfSymbols) =>
  str.substring(0, numberOfSymbols);

console.log(deleteCharacters(strArr, 18));

/*
- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
   let str = "HTML JavaScript PHP";
   document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
   */

let input = "HTML JavaScript PHP";

let insert_dash = (str) => str.toUpperCase().replaceAll(" ", "-");

console.log(insert_dash(input));

/*
- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
*/
let iputStr = "Blabla car";

let lowStr = (str) => {
  let newStr = str[0].toLowerCase().concat(str.slice(1));
  return newStr;
};

console.log(lowStr(iputStr));

/*
- Дано список імен.

Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'
*/

let n1 = "Harry..Potter";
let n2 = "Ron---Whisley";
let n3 = "Hermione__Granger";

let normalizedStr = (str) =>
  console.log(
    str
      .replaceAll(".", " ")
      .replaceAll("-", " ")
      .replaceAll("_", " ")
      .replace(/\s+/g, " ")
  );

normalizedStr(n1);
normalizedStr(n2);
normalizedStr(n3);

/*
- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
*/

let arr = [];

for (let i = 0; i < 100; i++) {
  arr[i] = Math.round(Math.random() * 100);
}
console.log(arr.sort((a, b) => a - b));

console.log(arr.filter((i) => i % 2 == 0 && i != 0));

/*
- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
*/

let strOfNames = "harry potter ron whisley hermione granger";

let capitalizeFunc = (str) => {
  let newArr = str.split(" ");
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i][0].toUpperCase().concat(newArr[i].slice(1));
  }
  return newArr.join(" ");
};

console.log(capitalizeFunc(strOfNames));

/*
- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com
*/

/*
- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb)) // 5
*/

let symb = "а";
let searchStr = "Астрономия это наука о небесных объектах";

let searchFunc = (str, symb) => {
  let x = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === symb) {
      x = x + 1;
    }
  }
  return x;
};

console.log(searchFunc(searchStr, symb));

/*
- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
*/

let strExmpl = "Сила тяжести приложена к центру масс тела";

let cutString = (str, wordsQuantity)=> { 
  let newArr = str.split(" ");
  let newestArr = [];
  for (let i = 0; i < wordsQuantity; i++) {
    newestArr.push(newArr[i]);
  }
  return newestArr;  
};

console.log(cutString(strExmpl, 5));