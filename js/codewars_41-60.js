"use strict"
// ================================================================================================
//*-Task №41 MakeUpperCase (8kyu)
/*
Напишіть функцію, яка перетворює вхідний рядок у верхній регістр.
*/

// Мій варіант
const makeUpperCase = (str) => (str.toUpperCase());

// Цікаві варіанти з Codewars
function makeUpperCase_(str) {
    return str.replace(/[a-z]/g, s => String.fromCharCode(s.charCodeAt(0) - 32))
}
// ================================================================================================
// ================================================================================================
//*-Task №42 Reversed sequence (8kyu)
/*
Створіть функцію, яка повертає масив цілих чисел від n до 1, де n>0.
Приклад: n=5 --> [5,4,3,2,1]
*/

// Мій варіант
const reverseSeq = n => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.unshift(i);
    }
    return arr;
};

// Цікаві варіанти з Codewars
const reverseSeq_ = n => {
    return Array.from({ length: n }, (_, i) => n - i);
};
// ================================================================================================
// ================================================================================================
//*-Task №43 Is he gonna survive? (8kyu)
/*
Герой прямує до замку, щоб виконати свою місію. Однак йому сказали, що замок оточений двома могутніми
драконами! кожному дракону потрібно 2 кулі, щоб його перемогти, наш герой не знає, скільки куль він
повинен нести. Якщо припустити, що він збирається схопити певну кількість куль і рухатися вперед,
щоб битися з іншою певною кількістю драконів, чи виживе він?
Повертає true, якщо так, false в іншому випадку :)
Тести:
hero(10, 5 -> true
hero(7, 4) -> false
*/

// Мій варіант
function hero(bullets, dragons) {
    return bullets / dragons >= 2;
}

// Цікаві варіанти з Codewars
const hero_ = (bullets, dragons) => dragons * 2 <= bullets;
// ================================================================================================
// ================================================================================================
//*-Task №44 Sentence Smash (8kyu)
/*
Напишіть функцію, яка бере масив слів і розбиває їх разом у речення та повертає речення.
Ви можете ігнорувати будь-яку необхідність дезінфекції слів або додавання розділових знаків, але ви
повинні додавати пробіли між кожним словом. Будьте уважні, не повинно бути пробілів ні на початку,
ні в кінці речення!

Приклад
['hello', 'world', 'this', 'is', 'great'] => 'привіт, світе, це чудово'
*/

// Мій варіант
function smash(words) {
    return words.join(' ');
};

// Цікаві варіанти з Codewars
function smash_(words) {
    return words.join(' ').trim(); // Метод trim() видаляє пробіли з початку та кінця рядка.
};
// ================================================================================================
// ================================================================================================
//*-Task №45 Will you make it? (8kyu)
/*
Ви були в таборі з друзями далеко від дому, але коли прийшов час повертатися, ви розумієте, що ваше
паливо закінчується, а найближча заправка знаходиться за 50 миль! Ви знаєте, що в середньому ваш
автомобіль проїжджає приблизно 25 миль на одному галоні. Залишилося 2 галони. Враховуючи ці фактори,
напишіть функцію, яка повідомляє вам, чи можна дістатися до заправки чи ні.
Функція має повертати true, якщо це можливо, і false, якщо ні.
distanceToPump - скільки треба проїхати
mpg - можемо проїхати миль на одному галоні
fuelLeft - скільки галонів залишилось
*/

// Мій варіант
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft * mpg >= distanceToPump;
};

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №46 DNA to RNA Conversion (8kyu)
/*
Дезоксирибонуклеїнова кислота, ДНК, є основною молекулою зберігання інформації в біологічних системах.
Він складається з чотирьох основ нуклеїнової кислоти гуаніну («G»), цитозину («C»), аденіну («A») і тиміну («T»).
Рибонуклеїнова кислота, РНК, є основною молекулою-повідомником у клітинах.
РНК дещо відрізняється від ДНК своєю хімічною структурою і не містить тиміну.
У РНК тимін замінений іншою нуклеїновою кислотою урацилом («U»).
Створіть функцію, яка переводить даний рядок ДНК у РНК.

Наприклад:
"GCAT" => "GCAU"
Вхідний рядок може бути довільної довжини - зокрема, може бути порожнім. Усі введені дані гарантовано дійсні,
тобто кожен вхідний рядок завжди складатиметься лише з «G», «C», «A» та/або «T».
*/

// Мій варіант
function DNAtoRNA(dna) {
    const arr = dna.split('');
    const result = arr.map(function (elem) { return elem === 'T' ? 'U' : elem });
    return result.join('');
}

// Цікаві варіанти з Codewars
function DNAtoRNA_(dna) {
    return dna.split("T").join("U"); // Дуже гарне рішення!!!
}
//
function DNAtoRNA__(dna) {
    return dna.replace(/T/g, 'U');
}
// ================================================================================================
// ================================================================================================
//*-Task №47 You Can't Code Under Pressure #1 (8kyu)
/*
Кодуйте якомога швидше! Вам потрібно подвоїти ціле число та повернути його.
*/

// Мій варіант
const doubleInteger = (i) => i * 2;

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №48 Count by X (8kyu)
/*
Створіть функцію з двома аргументами, яка повертатиме масив перших n кратних x.
Припустімо, що і дане число, і кількість разів для підрахунку будуть додатними числами, більшими за 0.
Повертає результати у вигляді масиву або списку (залежно від мови).
Приклади:
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

// Мій варіант
function countBy(x, n) {
    let z = [];
    let num = x;
    for (let i = 0; i < n; i++) {
        z.push(num)
        num = num + x;
    }
    return z;
}

// Цікаві варіанти з Codewars
function countBy_(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}
//
const countBy__ = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x); // Розібратися як це працює?
// ================================================================================================
// ================================================================================================
//*-Task №49 Reversed Words (8kyu)
/*
Завершіть рішення так, щоб воно перевернуло всі слова в переданому рядку.
Слова розділені рівно одним пробілом, без пробілів на початку або в кінці.
Приклад (введення --> вихід):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

// Мій варіант
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

// Цікаві варіанти з Codewars
const reverseWords_ = (str) => str.split(" ").reverse().join(" ");
// ================================================================================================
// ================================================================================================
//*-Task №50 Jenny's secret message (8kyu)
/*
Дженні написала функцію, яка повертає привітання для користувача. Однак вона закохана в Джонні і
хотіла б привітати його трохи інакше. Вона додала до своєї функції особливий випадок, але припустилася помилки.

Чи можете ви їй допомогти?
*/

// Мій варіант
function greet(name) {
    return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}

// Цікаві варіанти з Codewars
function greet_(name) {
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}
// ================================================================================================
// ================================================================================================
//*-Task №51 If you can't sleep, just count sheep!! (8kyu)
/*
Якщо ви не можете спати, просто порахуйте овець!!

Завдання:
Дано ціле невід’ємне число, наприклад 3, поверніть рядок із бурчанням: "1 sheep...2 sheep...3 sheep...".
Вхідні дані завжди будуть дійсними, тобто жодних від’ємних цілих чисел.
*/

// Мій варіант
var countSheep = function (num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result = result + `${i} sheep...`;
    }
    return result;
}

// Цікаві варіанти з Codewars
var countSheep_ = function (num) {
    let str = "";
    for (let i = 1; i <= num; i++) { str += `${i} sheep...`; }
    return str;
}
//
countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``;
// ================================================================================================
// ================================================================================================
//*-Task №52 Find Maximum and Minimum Values of a List (8kyu)
/*
Ваше завдання полягає в тому, щоб створити дві функції (max і min, або maximum і minimum тощо, залежно від мови),
які отримуватимуть список цілих чисел як вхідні дані та повертатимуть найбільше та найменше число
у цьому списку відповідно.
Приклади (Введення -> Виведення)
* [4,6,2,1,9,63,-134,566] -> макс. = 566, мін. = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0] -> min = 0, max = 87
* [5] -> min = 5, max = 5
Примітки
Ви можете вважати, що порожніх масивів/векторів не буде.
*/

// Мій варіант
var min = function(list) {
    return Math.min(...list);
}

var max = function(list) {
    return Math.max(...list);
}

// Цікаві варіанти з Codewars
var min_ = function(list) {
    list.sort((a, b) => (a - b));
    return list[0];
}

var max_ = function(list) {
    list.sort((a, b) => (b - a));
    return list[0];
}
// ================================================================================================
// ================================================================================================