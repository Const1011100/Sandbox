"use strict"
// ================================================================================================
//**Task №1 Even or Odd (8kyu)
/*
Створіть функцію, яка приймає ціле число як аргумент і повертає «Even» для парних чисел
або «Odd» для непарних чисел.
*/

// Мій варіант
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}
// Цікаві варіанти з Codewars
const evenOrOdd_ = (number) => number % 2 ? "Odd" : 'Even';
// ================================================================================================
// ================================================================================================
//**Task №2 Return Negative (8kyu)
/*
У цьому простому завданні вам дано число, і ви повинні зробити його від’ємним. Але, може, число вже негативне?

Приклади:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Примітки:
Число вже може бути від’ємним, і в цьому випадку зміна не потрібна.
Нуль (0) не перевіряється на будь-який конкретний знак. Від’ємні нулі не мають математичного сенсу.
*/

// Мій варіант
function makeNegative(num) {
    return num > 0 ? num * -1 : num;
}

// Цікаві варіанти з Codewars
function makeNegative_(num) {
    return -Math.abs(num); // Такий варіант повертає -0. Дивне рішення.
}
/*
Метод Math.abs() возвращает абсолютное значение числа.
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
*/

//
function makeNegative__(num) {
    return num < 0 ? num : -num; // Такий варіант повертає -0 :)
}
console.log(makeNegative__(0));
console.log(makeNegative_(0));
// ================================================================================================
// ================================================================================================
//**Task №3 Sum of positive (8kyu)
/*
Ви отримуєте масив чисел, повертаєте суму всіх додатніх.
Приклад: [1,-4,7,12] => 1 + 7 + 12 = 20
Примітка: якщо немає нічого для додавання, сума за замовченням дорівнює 0.
*/

// Мій варіант
function positiveSum(arr) {
    let sum = arr.reduce(function (accumulator, element) {
        if (element > 0) {
            return accumulator + element;
        }
        return accumulator;
    }, 0);
    return sum;
}

// Цікаві варіанти з Codewars
function positiveSum_(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
//
function positiveSum__(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    return total;
}
// ================================================================================================
// ================================================================================================
//**Task №4 Convert boolean values to strings 'Yes' or 'No'. (8kyu)
/*
Завершіть метод, який приймає логічне значення та повертає рядок «Так» для істини
або рядок «Ні» для хибності.
*/

// Мій варіант
function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
}

// Цікаві варіанти з Codewars
let boolToWord_ = bool => bool ? 'Yes' : 'No';
// ================================================================================================
// ================================================================================================
//**Task №5 Convert a Number to a String! (8kyu)
/*
Нам потрібна функція, яка може перетворити число (ціле) у рядок.
Які шляхи досягнення цього ви знаєте?
Приклади (введення --> вихід):
123 --> "123"
999 --> "999"
-100 --> "-100"
*/

// Мій варіант
function numberToString(num) {
    return String(num);
}

// Цікаві варіанти з Codewars
function numberToString_(num) {
    return num.toString();
}
//
const numberToString__ = num => `${num}`;
//
function numberToString___(num) {
    return num + '';
}
// ================================================================================================