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
//*-Task №53 Convert a string to an array (8kyu)
/*
Напишіть функцію, щоб розділити рядок і перетворити його на масив слів.
Приклади (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// Мій варіант
function stringToArray(string) {
    return string.split(' ');
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №54 Rock Paper Scissors! (8kyu)
/*
Камінь Ножиці Папір (Rock Paper Scissors)
Давай грати! Ви повинні повернути, який гравець виграв! У разі нічиєї повернення Draw!.

Приклади:
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

// Мій варіант
const rps = (p1, p2) => {
    // Draw
    if (p1 === p2) {
        return 'Draw!';
    }
    // Player 1 won!
    if (p1 === "rock" && p2 === 'scissors' || p1 === "scissors" && p2 === 'paper' || p2 === "rock" && p1 === 'paper') {
        return 'Player 1 won!';
    }

    // Player 2 won!
    if (p2 === "rock" && p1 === 'scissors' || p2 === "scissors" && p1 === 'paper' || p1 === "rock" && p2 === 'paper') {
        return 'Player 2 won!';
    }
};

// Цікаві варіанти з Codewars
const rps_ = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = { rock: "scissors", paper: "rock", scissors: "paper" };// Дуже сподобалось це рішення!
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};
//
const rps__ = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw!'
    };
    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`;
}
// ================================================================================================
// ================================================================================================
//*-Task №55 Array plus array (8kyu)
/*
Я новачок у програмуванні, і тепер я хочу отримати суму двох масивів...
Насправді суму всіх їхніх елементів. Я буду вдячний за вашу допомогу.
P.S. Кожен масив містить лише цілі числа. Вихід також є числом.
*/

// Мій варіант
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((accum, elem) => accum + elem, 0);
}
// Цікаві варіанти з Codewars
function arrayPlusArray_(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
}
// ================================================================================================
// ================================================================================================
//*-Task №56 Total amount of points (8kyu)
/*
Наша футбольна команда завершила чемпіонат.
Результати матчів нашої команди записуються в колекцію рядків.
Кожен матч представлено рядком у форматі «x:y», де x — рахунок нашої команди, а y — рахунок наших суперників.
Наприклад: ["3:1", "2:2", "0:1", ...]

Очки нараховуються за кожен матч таким чином:

якщо x > y: 3 бали (перемога)
якщо x < y: 0 балів (програш)
якщо x = y: 1 бал (рівня)
Нам потрібно написати функцію, яка приймає цю колекцію та повертає кількість очок, які наша команда (x)
отримала в чемпіонаті за правилами, наведеними вище.

Примітки:
наша команда завжди грає 10 матчів у чемпіонаті
0 <= x <= 4
0 <= y <= 4
*/

// Мій варіант
function points(games) {
    let counter = 0;
    for (let i = 0; i < games.length; i++) {
        let arr = games[i].split(':');
        arr[0] > arr[1] ? counter += 3 : arr[0] === arr[1] ? counter += 1 : counter;
    }
    return counter;
}

// Цікаві варіанти з Codewars
const points_ = games => games.reduce((output, current) => {
    return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)
// ================================================================================================
// ================================================================================================
//*-Task №57 Duck Duck Goose (8kyu)
/*
Мета гри «Качка, качка, гусак» — ходити по колу, стукаючи по голові кожного гравця, доки не буде обраний один.

Завдання: задано масив об’єктів Player (масив асоціативних масивів у PHP) та індекс (від 1),
повернути ім’я вибраного Player (ім’я є властивістю об’єктів Player, наприклад Player.name)

Приклад:
duck_duck_goose([a, b, c, d], 1) має повернути a.name
duck_duck_goose([a, b, c, d], 5) має повертати a.name
duck_duck_goose([a, b, c, d], 4) має повертати d.name
*/

// Мій варіант
function duckDuckGoose(players, goose) {
    let index = (goose - 1) % players.length;
    return players[index].name;
}

// Цікаві варіанти з Codewars
const duckDuckGoose_ = (players, goose) => players[(goose - 1) % players.length].name;

// ================================================================================================
// ================================================================================================
//*-Task №58 Find the Remainder (8kyu)
/*
Напишіть функцію, яка приймає два цілі числа та повертає залишок від ділення більшого значення на менше.
Ділення на нуль має повернути NaN.
Приклади:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/

// Мій варіант
function remainder(n, m) {
    if (n < 0 && m === 0 || n === 0 && m < 0) { return +0 }
    if (n === 0 || m === 0) { return NaN }
    if (n >= m) {
        return n % m;
    } else {
        return m % n;
    }
}

// Цікаві варіанти з Codewars
function remainder_(a, b) {
    return a > b ? a % b : b % a;
}
// ================================================================================================
// ================================================================================================
//*-Task №59 Grasshopper - Grade book (8kyu)
/*
Залікова книжка
Завершіть функцію, щоб вона знайшла середнє значення трьох переданих їй балів і повернула
літерне значення, пов’язане з цією оцінкою.

Числовий бал Літерна оцінка
90 <= бал <= 100 "A"
80 <= оцінка < 90 "B"
70 <= оцінка < 80 'C'
60 <= оцінка < 70 'D'
0 <= оцінка < 60 "F"
Усі перевірені значення знаходяться в межах від 0 до 100. Немає необхідності перевіряти наявність
негативних значень або значень, більших за 100.
*/

// Мій варіант
function getGrade(s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;
    switch (average !== null) {
        case average >= 90:
            return 'A';
            break;
        case average >= 80 && average < 90:
            return 'B';
            break;
        case average >= 70 && average < 80:
            return 'C';
            break;
        case average >= 60 && average < 70:
            return 'D';
            break;
        case average < 60:
            return 'F';
            break;
    }
}
// Цікаві варіанти з Codewars
function getGrade_(s1, s2, s3) {
    avg = (s1 + s2 + s3) / 3;
    if (avg < 60) return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}
// ================================================================================================
// ================================================================================================
//*-Task №60 Get the mean of an array (8kyu)
/*
Закінчився навчальний рік, доленосна мить твого звіту. Необхідно розрахувати середні значення.
Усі учні підходять до вас і благають обчислити для них середнє значення.
Легко! Потрібно лише написати сценарій.
Повертає середнє значення даного масиву, округлене до найближчого цілого числа.
Масив ніколи не буде порожнім.
*/

// Мій варіант
function getAverage(marks) {
    return Math.floor(marks.reduce((a, e) => { return a + e }, 0) / marks.length);
}
// Цікаві варіанти з Codewars
var getAverage_ = ( m ) => parseInt(m.reduce((a, b)=> a + b)/ m.length);
//
const getAverage__ = marks => ~~(marks.reduce((s, v) => s + v) / marks.length);
// ================================================================================================
// ================================================================================================
//*-осталось 322шт
// console.time('timer_1');
// console.timeEnd('timer_1');

// console.time('timer_2');
// console.timeEnd('timer_2');