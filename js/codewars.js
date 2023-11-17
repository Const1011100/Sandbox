"use strict"
// ================================================================================================
//*-Task №1 Even or Odd (8kyu)
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
//*-Task №2 Return Negative (8kyu)
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
//*-Task №3 Sum of positive (8kyu)
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
//*-Task №4 Convert boolean values to strings 'Yes' or 'No'. (8kyu)
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
//*-Task №5 Convert a Number to a String! (8kyu)
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
// ================================================================================================
//*-Task №6 Opposite number (8kyu)
/*
Дуже просто, якщо дано ціле число або число з плаваючою комою, знайти його протилежність.
Приклади:
1: -1
14: -14
-34: 34
*/

// Мій варіант
function opposite(number) {
    return number * -1;
}

// Цікаві варіанти з Codewars
function opposite_(number) { // Такий варіант повертає -0 :)
    return (-number);
}
// ================================================================================================
// ================================================================================================
//*-Task №7 Square(n) Sum (8kyu)
/*
Завершіть функцію суми квадратів, щоб вона звела в квадрат кожне передане їй число, а потім підсумувала результати.
Наприклад, для [1, 2, 2] він має повернути 9
*/

// Мій варіант
function squareSum(numbers) {
    let squareSum = numbers.reduce(function (accumulator, element) {
        return accumulator + (element * element);
    }, 0);
    return squareSum;
}

// Цікаві варіанти з Codewars
function squareSum_(numbers) {
    return numbers.reduce((sum, num) => sum + (num * num), 0);
}
//
function squareSum__(numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += (numbers[i] * numbers[i]);
    }
    return result;
}
// ================================================================================================
// ================================================================================================
//*-Task №8 Reversed Strings (8kyu)
/*
Доповніть рішення так, щоб воно перевернуло переданий у нього рядок.
*/

// Мій варіант
function solution(str) {
    return str.split('').reverse().join('');
}

// Цікаві варіанти з Codewars
const solution__ = s => [...s].reverse().join('');
//
function solution___(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}
// ================================================================================================
// ================================================================================================
//*-Task №9 Remove First and Last Character (8kyu)
/*
Це досить просто. Ваша мета — створити функцію, яка видаляє перший і останній символи рядка.
Вам надається один параметр, вихідний рядок. Вам не потрібно турбуватися про рядки, які містять менше
двох символів.
'world'  =>  'orl'
*/

// Мій варіант
function removeChar(str) {
    let result = str.split('');
    result.pop();
    result.shift();
    return result.join('');
};

// Цікаві варіанти з Codewars
function removeChar_(str) {
    return str.slice(1, -1); // argument -1 is the same as 'str.length -1'
}
// ================================================================================================
// ================================================================================================
//*-Task №10 String repeat (8kyu)
/*
Напишіть функцію, яка приймає ціле число n і рядок s як параметри та повертає рядок s, повторений рівно n разів.
Приклад:
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// Мій варіант
function repeatStr(n, s) {
    let string = '';
    for (let i = 0; i < n; i++) {
        string += s;
    }
    return string;
}

// Цікаві варіанти з Codewars
function repeatStr_(n, s) {
    return s.repeat(n); // Подивитись як працює метод repeat()!
}
//
function repeatStr__(n, s) {
    return n > 1 ? s + repeatStr(--n, s) : s;
}
// ================================================================================================
// ================================================================================================
//*-Task №11 Grasshopper - Summation (8kyu)
/*
Напишіть програму, яка знаходить суму кожного числа від 1 до num. Число завжди буде додатнім цілим числом, більшим за 0.
Приклад:
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

// Мій варіант
var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// Цікаві варіанти з Codewars
function summation_(num) {
    return num * (num + 1) / 2
}
//
var summation__ = function f(num) {
    return num ? num + f(num - 1) : 0; // цікаве рішення через рекурсію!
}
// ================================================================================================
// ================================================================================================
//*-Task №12 Remove String Spaces (8kyu)
/*
Напишіть функцію, яка видаляє пробіли з рядка, а потім повертає отриманий рядок.
Приклади:
"8 j 8 mBliB8g imjB8B8 jl B" -> "8j8mBliB8gimjB8B8jlB"
"8aaaaa dddd r " -> "8aaaaaddddr"
*/

// Мій варіант
function noSpace(x) {
    return x.split(' ').join('');
}

// Цікаві варіанти з Codewars
function noSpace_(x) {
    return x.replaceAll(' ', '');
}
//
function noSpace__(x) {
    return x.replace(/\s/g, '');
}
// ================================================================================================
// ================================================================================================
//*-Task №13 Find the smallest integer in the array (8kyu)
/*
Для масиву цілих чисел ваше рішення має знайти найменше ціле число.
Наприклад:
[34, 15, 88, 2], ваше рішення поверне 2
[34, -345, -1, 100] ваше рішення поверне -345
Ви можете припустити, для цілей цієї ката, що наданий масив не буде порожнім.
*/

// Мій варіант
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let result = args[0];
        for (let i = 1; i < args.length; i++) {
            if (result > args[i]) {
                result = args[i];
            }
        }
        return result;
    }
}

// Цікаві варіанти з Codewars
class SmallestIntegerFinder_ {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}
//!: розібратися як працює ...args
//
class SmallestIntegerFinder__ {
    findSmallestInt(args) {
        return Math.min.apply(null, args);
    }
}
//!: розібратися як працює apply
//
class SmallestIntegerFinder___ {
    findSmallestInt(args) {
        return args.sort((a, b) => a - b)[0];
    }
}
//!: розібратися як працює sort
// ================================================================================================
// ================================================================================================
//*-Task №14 Counting sheep... (8kyu)
/*
Розгляньте масив/список овець, де деякі овець можуть бути відсутні на своєму місці. Нам потрібна функція,
яка підраховує кількість овець у масиві (true означає наявність).
Наприклад:

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
Правильною відповіддю буде 17.
Підказка: не забудьте перевірити наявність неправильних значень, наприклад null/undefined
*/

// Мій варіант
function countSheeps(sheep) {
    let count = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            count += 1;
        }
    }
    return count;
}

// Цікаві варіанти з Codewars
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length; // Дуже гарне рішення!
}
// ================================================================================================
// ================================================================================================
//*-Task №15 Convert a String to a Number! (8kyu)
/*
Нам потрібна функція, яка може перетворити рядок на число. Які шляхи досягнення цього ви знаєте?
Примітка: не хвилюйтеся, усі вхідні дані будуть рядками, і кожен рядок є цілком допустимим представленням цілого числа.
Приклади:
"1234" --> 1234
"605" --> 605
"1405" --> 1405
"-7" --> -7
*/

// Мій варіант
const stringToNumber = function (str) {
    return Number(str);
}
// Цікаві варіанти з Codewars
var stringToNumber_ = function (str) {
    return parseInt(str);
}
//!: Як працює parseInt()?
//
var stringToNumber__ = function (str) {
    return +str; // Не подобається таке рішення. Виглядає як погана практика.
}
// ================================================================================================
// ================================================================================================
//*-Task №16 Basic Mathematical Operations (8kyu)
/*
Ваше завдання — створити функцію, яка виконує чотири основні математичні операції.
Функція повинна приймати три аргументи - операція (рядок/символ), значення1 (число), значення2 (число).
Функція повинна повернути результат чисел після застосування вибраної операції.
Приклади (Оператор, значення1, значення2) --> вихід
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

// Мій варіант
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
    }
}

// Цікаві варіанти з Codewars
function basicOp_(operation, value1, value2) {
    return eval(value1 + operation + value2);
}
// ================================================================================================
// ================================================================================================