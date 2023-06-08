/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/

let rect = (a,b) => a*b

console.log("Rectangle area is " + rect(10,12));

/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
*/

let circle = r =>  Math.PI*Math.pow(r, 2);

console.log("Circle area is " + circle(15));

/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

2πR(H + R), де R, Н — радіус і висота циліндра
*/

let cylinder = (r, h) => 2*Math.PI*r*(h+r);

console.log("cylinder area is " + cylinder(15, 45));

/*
- створити функцію яка приймає масив та виводить кожен його елемент
*/

let sampleArr = [15, 4, [4, 'd'], 'fjewbhfew', {key: 5}, false];

let outputfunc = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

outputfunc(sampleArr);

/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/

const parFunc = textOfPar =>  document.write(`<p>${textOfPar}</p>`);

parFunc('This is a test of my paragraph function...');

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/

let listfunc = listTxt => {
    document.write(`<ul>
            <li>${listTxt}</li>
            <li>${listTxt}</li>
            <li>${listTxt}</li>
        </ul>`)
}

listfunc('This is a test of my list function...');

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/

let modifListFunc = (listTxt, index) =>{
    document.write(`<ul>`)
        let i = 0;
            while (i < index){
                document.write(`<li>${listTxt}</li>`);
                i++;
            }            
    document.write(`</ul>`)
}

modifListFunc('This is a test of my modified list function...', 15);

/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
*/

let primitiveArray = [5, 7, 'test', true, 8, false];

let arrListFunc = arr => {
    document.write(`<ul>`)
        let i = 0;
            while (i < arr.length){
                document.write(`<li>${arr[i]}</li>`);
                i++;
            }            
    document.write(`</ul>`)
}

arrListFunc(primitiveArray);

/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/

let arrOfObj = [{id:1, name: 'Cindy', age:15},{id:2, name: 'Rob', age:11},{id:3, name: 'Daniel', age:14}];

let docObjFunc = arr => {
    
    for(obj of arr){
        document.write(`<div>`);
            for (objKey in obj){
                document.write(`<p>${objKey}: ${obj[objKey]}</p>`)
            }
        document.write(`</div>`);
        document.write(`<br>`);
    }
   
}

docObjFunc(arrOfObj);

/*
- створити функцію яка повертає найменьше число з масиву
*/

let numArr = [7, 78, 8, 99, 45, 5];

let minOfArrFunc = arr => {
    let smallest = arr[0]
    for(let i = 0; i<arr.length; i++){
            if (smallest > arr[i]){
            smallest = arr[i]
        }
    }
    document.write(`<h3>The smallest of array is: ${smallest}</h3>`)
}

minOfArrFunc(numArr);

/*
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
*/

let sumOfArrFunc = arr =>{
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];    
    }
    document.write(`<h3>The sum of array is: ${sum}</h3>`); // [7, 78, 8, 99, 45, 5];
}

sumOfArrFunc(numArr);

/*
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
*/

let swapArr = [11,22,33,44];

let swap = (array, indexA, indexB) => {
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
    return array;
  }

console.log(swap(swapArr, 1, 3));


/*
- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
*/
const numArrayMin = [14,5,78];

let min = arr => {
    let minnumber = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<minnumber){
            minnumber=arr[i];
        }
    }
    console.log(minnumber);
}
min(numArrayMin);

let min1 = (a,b,c) => {
    let minnumber;
        if(b<a && b<c){
            minnumber=b;
        } else if (c<b && c<a){
            minnumber=c;
        } else minnumber = a;
    
    console.log(minnumber);
}
min1(4,50,10);

/*
- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
*/

const numArrayGeneral = [14,5,78,50];

let general = arr =>{
    let sum =0;
    for(let i= 0; i<arr.length; i++){
        sum = arr[i] + sum;
    }
    let general = sum/arr.length
    return general;
}

console.log(general(numArrayGeneral));

/*
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
*/

let randomMin = () => {
    let min = arguments[0];
    let max = arguments[0];
    for (let i =0; i<arguments.length; i++){
        if(arguments[i]<min)
        min = arguments[i]
    }
    for (let i =0; i<arguments.length; i++){
        if(arguments[i]>max)
        max = arguments[i]
    }
    console.log(min);
    return max;
    
}

console.log(randomMin(14,78,5,444));


/*
- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
*/

let random = () =>{
    let arr = [];
    let i = 0;
    while (i<10){
        arr[i] = Math.round(Math.random()*100);
        i++;
    }
    console.log(arr);
}

random();

/*
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
*/

let random1 = limit =>{
    let arr = [];
    let i = 0;
    while (i<10){
        arr[i] = Math.round(Math.random()*limit);
        i++;
    }
    console.log(arr);
}

random1(20);

/*
Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
*/

const arR = [1,2,3];

let reverse = arr => arr.toReversed();

console.log(reverse(arR));

/*
- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
*/

let test = () => {
    if (arguments.length <= 1){
        console.log(arguments[0]);
    } else {
        console.log(arguments[0]+arguments[1]);
    }
}

test(1,'cnewkjfew')

/*
- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  EXAMPLE:
  [1,2,3,4]
  [2,3,4,5]
  результат
  [3,5,7,9]
  */

  let arr1 = [1,2,3,4];
  let arr2 = [2,3,4,5];

  let addArr = (arr1, arr2) => {
    let arr3 = [];
    for(i=0; i<arr1.length; i++){
        arr3[i] = arr1[i]+arr2[i]
    }
    console.log(arr3);
  }

  addArr(arr1,arr2);

  /*
  - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
  EXAMPLE:
  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
  */

  let objArr = [{name: 'Dima', age: 13}, {model: 'Camry'}];

  let keyOutput = arr =>{
    for (obj of arr){
        for(objKey in obj){
            console.log(objKey);
        }
    }
  }

  let valueOutput = arr => {
    for (obj of arr){
        for(objKey in obj){
            console.log(obj[objKey]);
        }
    }
  }
  valueOutput(objArr);
