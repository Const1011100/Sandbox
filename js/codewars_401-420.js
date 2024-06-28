//*-Task №401 Categorize New Member (7kyu)
/*
Крокетний клуб Western Suburbs має дві категорії членства: старше та відкрите.
Їм потрібна ваша допомога з аплікаційною формою, у якій потенційним членам буде вказано, до якої
категорії вони будуть призначені.

Щоб бути старшим, член повинен бути не менше 55 років і мати гандикап більше 7.
У цьому крокетному клубі гандикап коливається від -2 до +26; чим кращий гравець, тим нижчий гандикап.

Введення
Вхідні дані складатимуться зі списку пар. Кожна пара містить інформацію про одного потенційного члена.
Інформація складається з цілого числа для віку людини та цілого числа для вади людини.

Вихід
Вихідні дані складатимуться зі списку рядкових значень (у Haskell і C: Open або Senior),
які вказуватимуть, чи буде відповідний член поміщений у старшу чи відкриту категорію.

Приклад
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

// Мій варіант
function openOrSenior(data) {
    return data.map(elem => elem[0] >= 55 && elem[1] > 7 ? 'Senior' : 'Open');
}
// Цікаві варіанти з Codewars
function openOrSenior_(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
// ================================================================================================
// ================================================================================================
//*-Task №402 Find the next perfect square! (7kyu)
/*
Можливо, ви знаєте кілька досить великих ідеальних квадратів. Але як щодо НАСТУПНОГО?
Завершіть метод findNextSquare, який знаходить наступний інтегральний ідеальний квадрат після
переданого як параметра. Згадайте, що цілий повний квадрат — це таке ціле число n, що sqrt(n)
також є цілим числом.

Якщо аргумент сам по собі не є ідеальним квадратом, поверніть або -1, або порожнє значення,
наприклад None або null, залежно від вашої мови. Ви можете вважати, що аргумент невід’ємний.

Приклади: (Вхід --> Вихід)
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

// Мій варіант
function findNextSquare(sq) {
    const square = Math.sqrt(sq);
    return Number.isInteger(square) ? Math.pow(square + 1, 2) : -1;
}
// Цікаві варіанти з Codewars
function findNextSquare_(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
// ================================================================================================
// ================================================================================================
//*-Task №403 Printer Errors (7kyu)
/*
На фабриці принтер друкує етикетки для коробок. Для одного виду коробок принтер повинен
використовувати кольори, які для простоти позначаються літерами від a до m.

Кольори, які використовує принтер, записуються в контрольний рядок. Наприклад, «хороший» рядок
керування буде aaabbbbhaijjjm, що означає, що принтер використав тричі колір a, чотири рази b,
один раз колір h і один раз колір a...

Іноді виникають проблеми: відсутність кольорів, технічна несправність і "поганий" контрольний рядок,
напр. aaaxbbbbyyhwawiwjjjwwm з літерами не від a до m.

Ви повинні написати функцію printer_error, яка, заданий рядок, повертатиме частоту помилок принтера
як рядок, що представляє раціональне число, чисельник якого – це кількість помилок, а знаменник – довжину
контрольного рядка. Не зводьте цей дріб до більш простого виразу.

Рядок має довжину, більшу або рівну одиниці, і містить лише літери з a до z.

Приклади:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

// Мій варіант
function printerError(s) {
    let bad = s.match(/[n-z]/g);
    if (bad === null) { bad = 0 };
    return `${bad.length || 0}/${s.length}`;
}
// Цікаві варіанти з Codewars
function printerError_(s) {
    // your code
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] > "m") {
            count++;
        }
    }
    return count + "/" + s.length;
}
//
const printerError__ = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
// ================================================================================================
// ================================================================================================
//*-Task №404 Regex validate PIN code (7kyu)
/*
Банкомати дозволяють використовувати 4- або 6-значні PIN-коди, а PIN-коди можуть містити лише 4 або 6 цифр.
Якщо функція передає дійсний рядок PIN-коду, повертає true, інакше повертає false.
Приклади (введення --> вихід)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// Мій варіант
function validatePIN(pin) {
    return /^[0-9]*$/.test(pin) && (pin.length === 4 || pin.length === 6);
}
// Цікаві варіанти з Codewars
function validatePIN_(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}
// ================================================================================================
// ================================================================================================
//*-Task №405 String ends with? (7kyu)
/*
Завершіть розв’язання так, щоб воно повертало true, якщо перший переданий аргумент (рядок)
закінчувався другим аргументом (також рядком).

Приклади:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// Мій варіант
function solution(str, ending) {
    return ending === '' ? true : ending === str.slice(-ending.length);
}
// Цікаві варіанти з Codewars
function solution_(str, ending) {
    return str.endsWith(ending);
}
// ================================================================================================
// ================================================================================================
//*-Task №406 Binary Addition (7kyu)
/*
Реалізуйте функцію, яка додає два числа та повертає їхню суму в двійковому вигляді.
Перетворення можна виконати до або після додавання.
Повернуте двійкове число має бути рядком.

Приклади: (Input1, Input2 --> Output (пояснення)))
1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

// Мій варіант
function addBinary(a, b) {
    return (a + b).toString(2);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №407 Is this a triangle? (7kyu)
/*
Реалізуйте функцію, яка приймає 3 цілих значення a, b, c.
Функція має повертати true, якщо можна побудувати трикутник зі сторонами заданої довжини,
і false у будь-якому іншому випадку.
(У цьому випадку всі трикутники повинні мати поверхню більше 0, щоб бути прийнятими).

Приклади:
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false 
*/

// Мій варіант
function isTriangle(a, b, c) {
    return !(a + b <= c || a + c <= b || b + c <= a);
}
// Цікаві варіанти з Codewars
function isTriangle_(a, b, c) {
    return a + b > c && a + c > b && c + b > a;
}
//
var isTriangle__ = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;
// ================================================================================================
// ================================================================================================
//*-Task №408 Sum of odd numbers (7kyu)
/*
Дано трикутник послідовних непарних чисел:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Обчисліть суму чисел у n-му рядку цього трикутника (починаючи з індексу 1), наприклад: (Вхід --> Вихід)
1 -->  1
2 --> 3 + 5 = 8
*/

// Мій варіант
function rowSumOddNumbers(n) {
    const nums = [1];
    let lengthNums = 0;

    for (let i = 1; i <= n; i++) {
        lengthNums += i;
    }

    for (let i = 0; i < lengthNums - 1; i++) {
        nums.push(nums[i] + 2);
    }

    const resultArr = nums.slice(-n);
    const result = resultArr.reduce((sum, num) => { return sum + num });
    return result;
}
// Цікаві варіанти з Codewars
function rowSumOddNumbers_(n) {
    return Math.pow(n, 3);
}
//
function rowSumOddNumbers__(n) {
    return n * n * n;
}
// ================================================================================================
// ================================================================================================
//*-Task №409 Ones and Zeros (7kyu)
/*
Дано масив одиниць і нулів, перетворити еквівалентне двійкове значення в ціле число.
Наприклад: [0, 0, 0, 1] розглядається як 0001, що є двійковим представленням 1.
Приклади:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
*/

// Мій варіант
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
// Цікаві варіанти з Codewars
function binaryArrayToNumber_(arr) {
    return arr.reduce((a, b) => a << 1 | b);
}
// ================================================================================================
// ================================================================================================
//*-Task №410 Odd or Even? (7kyu)
/*
Дано список цілих чисел, визначте, парною чи непарною є сума його елементів.
Дайте свою відповідь у вигляді рядка, що відповідає «непарним» або «парним».
Якщо вхідний масив порожній, розглядайте його як: [0] (масив із нулем).

приклади:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

// Мій варіант
function oddOrEven(array) {
    if (array.length > 0) {
        const sum = array.reduce((sum, num) => sum + num);
        return sum % 2 === 0 ? 'even' : 'odd';
    } else {
        return 'even';
    }
}
// Цікаві варіанти з Codewars
function oddOrEven_(arr) {
    return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}
// ================================================================================================
// ================================================================================================
//*-Task №411 Growth of a Population (7kyu)
/*
У малому місті на початок року кількість населення p0 = 1000. Населення регулярно збільшується на
2 відсотки на рік, і більше того, 50 нових жителів щороку приїжджають жити в місто.
Скільки років потрібно місту, щоб його населення перевищувало або дорівнювало р = 1200 жителів?
Наприкінці першого року буде:
1000 + 1000 * 0,02 + 50 => 1070 мешканців
Наприкінці 2-го курсу буде:
1070 + 1070 * 0,02 + 50 => 1141 житель (** кількість жителів є цілим числом **)
Наприкінці 3-го курсу буде:
1141 + 1141 * 0,02 + 50 => 1213
На це знадобиться цілих 3 роки.

Більш загальні параметри:
p0, відсоток, aug (кількість жителів, які прибувають або виїжджають щороку),
p (населення дорівнює або перевищує)

функція nb_year має повернути n кількість цілих років, необхідних для отримання сукупності,
більшої або рівної p.
aug — ціле число, відсоток — додатне або нульове плаваюче число, p0 і p — додатні цілі числа (> 0)

приклади:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2,5, 10000, 2000000) -> 10

Примітка:
Не забудьте перетворити параметр percent як відсоток у тілі вашої функції: якщо параметр percent
дорівнює 2, ви повинні перетворити його на 0,02.

Немає фракцій людей. На кінець кожного року чисельність населення є цілим числом: 252,8 осіб округляється
до 252 осіб.
*/

// Мій варіант
function nbYear(p0, percent, aug, p) {
    let needYears = 0;
    let pStart = p0;
    while (pStart < p) {
        needYears++;
        pStart = parseInt(pStart + (pStart * (percent / 100)) + aug);
    }
    return needYears;
}
// Цікаві варіанти з Codewars
function nbYear_(p0, percent, aug, p) {
    for (var years = 0; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}
// ================================================================================================
// ================================================================================================
//*-Task №412 Reverse words (7kyu)
/*
Виконайте функцію, яка приймає параметр рядка та змінює кожне слово в рядку.
Усі пробіли в рядку мають бути збережені.

Приклади:
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

// Мій варіант
function reverseWords(str) {
    const wordsArary = str.split(' ');
    const reversedWordsArray = wordsArary.map(word => {
        return word
            .split('')
            .reverse()
            .join('');
    });
    return reversedWordsArray.join(' ');
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №413 Testing 1-2-3 (7kyu)
/*
Ваша команда пише новий чудовий текстовий редактор, і вам доручено реалізувати нумерацію рядків.
Напишіть функцію, яка приймає список рядків і повертає кожен рядок, перед яким стоїть правильне число.
Нумерація починається з 1. Формат: n: рядок. Зверніть увагу на двокрапку та пробіл між ними.

Приклади: (Вхід --> Вихід)
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// Мій варіант
var number = function (array) {
    if (array.length < 1) { return [] };
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        resultArray.push(`${i + 1}: ${array[i]}`)
    }
    return resultArray;
}
// Цікаві варіанти з Codewars
let number_ = (a) => a.map((v, i) => `${i + 1}: ${v}`);

// ================================================================================================
// ================================================================================================
//*-Task №414 Number of People in the Bus (7kyu)
/*
По місту рухається автобус, який підвозить і висаджує людей на кожній зупинці.
Вам надається список (або масив) пар цілих чисел. Елементи кожної пари представляють кількість людей,
які заходять в автобус (перший елемент) і кількість людей, які виходять з автобуса (другий елемент)
на автобусній зупинці.

Ваше завдання — повернути кількість людей, які ще залишаються в автобусі після останньої зупинки
(після останнього масиву). Незважаючи на те, що це остання автобусна зупинка, автобус може бути не
порожнім, і деякі люди все ще можуть бути в автобусі, вони, ймовірно, сплять там :D

Подивіться на тестові випадки.
Майте на увазі, що тестові випадки гарантують, що кількість людей в автобусі завжди >= 0.
Тому повернуте ціле число не може бути від’ємним.

Друге значення в першій парі в масиві дорівнює 0, оскільки автобус порожній на першій автобусній зупинці.
*/

// Мій варіант
var number = function (busStops) {
    return busStops.reduce((peopleLeft, people) => {
        return peopleLeft + people[0] - people[1];
    }, busStops[0][1]);
}
// Цікаві варіанти з Codewars
const number__ = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// ================================================================================================
// ================================================================================================
//*-Task №415 Find the divisors! (7kyu)
/*
Створіть функцію під назвою divisors/Divisors, яка приймає ціле число n > 1 і повертає масив із
усіма дільниками цілого числа (крім 1 і самого числа), від найменшого до найбільшого. Якщо число є
простим, поверніть рядок «(ціле число) є простим».

приклад:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

// Мій варіант
function divisors(integer) {
    const numbers = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) { numbers.push(i) };
    }
    return numbers.length > 0 ? numbers : `${integer} is prime`;
};
// Цікаві варіанти з Codewars


// ================================================================================================
// ================================================================================================
//*-Task №416 Find the stray number (7kyu)
/*
Вам надано масив цілих чисел непарної довжини, у якому всі вони однакові, за винятком одного числа.
Завершіть метод, який приймає такий масив і повертає одне інше число.
Вхідний масив завжди буде дійсним! (непарна довжина >= 3)

Приклади:
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// Мій варіант
function stray(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[0] === numbers[i]) {
            return numbers.find(num => num !== numbers[0]);
        }
    }
    return numbers[0];
}
// Цікаві варіанти з Codewars
function stray_(numbers) {
    for (var i in numbers) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) { return numbers[i] }
    }
}
//
function stray__(numbers) {
    var a = numbers.sort();

    if (a[0] != a[1]) {
        return a[0]
    }
    return a[a.length - 1]
}
//
const stray___ = nums => nums.reduce((a, b) => a ^ b);
// ================================================================================================
// ================================================================================================
//*-Task №417 Count the divisors of a number (7kyu)
/*
Підрахувати кількість дільників натурального числа n.
Випадкові тести досягають n = 500 000.
Приклади (введення --> вихід)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Зверніть увагу, що ви повинні повертати лише число, кількість дільників. Числа в дужках показані лише
для того, щоб ви могли бачити, які числа враховуються в кожному випадку.
*/

// Мій варіант
function getDivisorsCnt(n) {
    let divisors = 0;
    let sqrtN = Math.sqrt(n);
    for (let i = 1; i <= sqrtN; i++) {
        if (n % i === 0) {
            if (i * i === n) {
                divisors++;
            } else {
                divisors += 2;
            }
        }
    }
    return divisors;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-залишилось 1939шт
// console.time('timer_1');
// console.timeEnd('timer_1');