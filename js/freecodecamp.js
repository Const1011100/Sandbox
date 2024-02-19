"use strict"
// ================================================================================================
/*
Написати функцію яка отримує два агрументи array, target.
array - масив чисел,
target - число.
В нас є дві операції "+" та "-"
Потрібно розставити ці операції між числами в масиві так щоб отримати число target
Варіанти відповіді:
1. Повертаємо true якщю це можливо або false якщо ні.
2. Повертаємо масив з разставленними операціями.
*/
// ================================================================================================
// ================================================================================================
/*
Напишіть функцію, яка проглядає масив об’єктів (перший аргумент) і повертає масив усіх об’єктів,
які мають однакові пари імен та значень (другий аргумент). Кожна пара імен та значень вихідного об'єкта
повинна бути в об’єкті з колекції, якщо він необхідний у повернутому масиві.

Наприклад, якщо першим аргументом є
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
та другим аргументом є { last: "Capulet" }, тоді потрібно повернути третій об’єкт з масиву (перший аргумент),
оскільки він містить ім’я та його значення, яке було передане до другого аргументу.
*/

const collection2 = [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }];
const source2 = { "apple": 1, "bat": 2 };

function whatIsInAName(collection, source) {
    const keys = Object.keys(source);
    return collection.filter(obj => {
        for (let i = 0; i < keys.length; i++) {
            if(obj[keys[i]] !== source[keys[i]]) {
                return false;
            }
        }
        return true;
    })
}
// Цікаве рішення з freeCodeCamp
function whatIsInAName_(collection, source) {
    const sourceKeys = Object.keys(source);

    return collection
        .filter(obj => sourceKeys
            .every(key => obj[key] === source[key]));
}
// ================================================================================================
// ================================================================================================
/*
Пропущені літери:
Знайдіть пропущену літеру в переданому діапазоні літер та поверніть її.
Якщо у діапазоні наявні всі літери, поверніть undefined.
*/
function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        let letterNumber = str[i].charCodeAt();
        if (str[i + 1].charCodeAt() !== letterNumber + 1) {
            return String.fromCharCode(letterNumber + 1)
        }
    }
    return undefined;
}
// ================================================================================================
// ================================================================================================
/*
Сортування масиву
Напишіть функцію, яка приймає два або більше масивів та повертає новий масив унікальних значень у
порядку наданих початкових масивів.
Іншими словами, усі значення, що є в масиві, повинні бути в початковому порядку, але в кінцевому
масиві не повинно бути повторень.
Унікальні числа повинні бути відсортовані за початковим порядком, але кінцевий масив не повинен бути
відсортованим за числовим порядком.
*/
function uniteUnique(arr) {
    let newArr = [].concat(...arguments);
    console.log(newArr);
    let result = [];
    for(let i = 0; i < newArr.length; i++) {
        if(!result.includes(newArr[i])) {
            result.push(newArr[i]);
        }
    }
    return result;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// ================================================================================================
// ================================================================================================