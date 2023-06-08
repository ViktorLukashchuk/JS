/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/

function rectangle (a,b){
    let rectanglearea = a*b;
    return rectanglearea;
}

console.log("Rectangle area is " + rectangle(15, 14));

/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
*/

function circle (r){
    let circlearea = Math.PI*Math.pow(r, 2);
    return circlearea;
}

console.log("Circle area is " + circle(15));

/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

2πR(H + R), де R, Н — радіус і висота циліндра
*/

function cylinder (r, h){
    let cylinderarea = 2*Math.PI*r*(h+r);
    return cylinderarea;
}

console.log("cylinder area is " + cylinder(15, 45));

/*
- створити функцію яка приймає масив та виводить кожен його елемент
*/

let sampleArr = [15, 4, [4, 'd'], 'fjewbhfew', {key: 5}, false];

function output (array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

output(sampleArr);

/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/

function paragraph (textOfParagraph){
    document.write(`<p>${textOfParagraph}</p>`)
}

paragraph('This is a test of my paragraph function...');

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/

function list (textOfList){
    document.write(`<ul>
            <li>${textOfList}</li>
            <li>${textOfList}</li>
            <li>${textOfList}</li>
        </ul>`)
}

list('This is a test of my list function...');

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/

function modifiedList (textOfList, i){
    document.write(`<ul>`)
        let index = 0;
            while (index < i){
                document.write(`<li>${textOfList}</li>`);
                index++;
            }            
    document.write(`</ul>`)
}

modifiedList('This is a test of my modified list function...', 4);

/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
*/

let primitiveArray = [5, 7, 'test', true, 8, false];

function arrayList (arr){
    document.write(`<ul>`)
        let index = 0;
            while (index < arr.length){
                document.write(`<li>${arr[index]}</li>`);
                index++;
            }            
    document.write(`</ul>`)
}

arrayList(primitiveArray);

/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/

let arrayOfObjects = [{id:1, name: 'Cindy', age:15},{id:2, name: 'Rob', age:11},{id:3, name: 'Daniel', age:14}];

function documentobj (arr){
    
    for(obj of arr){
        document.write(`<div>`);
            for (objKey in obj){
                document.write(`<p>${objKey}: ${obj[objKey]}</p>`)
            }
        document.write(`</div>`);
        document.write(`<br>`);
    }
   
}

documentobj(arrayOfObjects);

/*
- створити функцію яка повертає найменьше число з масиву
*/

let numArray = [7, 78, 8, 99, 45, 5];

function minOfArray (arr){
    let smallest = arr[0]
    for(let i = 0; i<arr.length; i++){
            if (smallest > arr[i]){
            smallest = arr[i]
        }
    }
    document.write(`<h3>The smallest of array is: ${smallest}</h3>`)
}

minOfArray(numArray);

/*
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
*/

function sumOfArray (arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];    
    }
    return sum;
}

document.write(`<h3>The sum of array is: ${sumOfArray(numArray)}</h3>`); // [7, 78, 8, 99, 45, 5];

/*
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
*/

let swapArray = [11,22,33,44];

function swap(array, indexA, indexB) {
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
    return array;
  }

console.log(swap(swapArray, 1, 3));



/*
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
*/

let currencyValues = [{currency:'USD',value:40},{currency:'EUR',value:42}];
let amount = 10000;
let cur = 'USD';
 
function exchange (amount, curVal, cur){
    let hrnAmount;
    let exchangeRate;
        for(obj of curVal){
            for (objKey in obj){
                 if (obj[objKey] === cur){
                    exchangeRate = 40 
                } else exchangeRate = 42;
        }
        hrnAmount = amount/exchangeRate;
    return hrnAmount;
}
}
console.log(exchange(amount, currencyValues, cur));

/// тут поки до кінця ще не розібрався, ввечері ще дивитимуся