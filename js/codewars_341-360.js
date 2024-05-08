//*-Task №341 Flick Switch (8kyu)
/*
Завдання
Створіть функцію, яка завжди повертає true для кожного елемента в заданому списку.
Однак, якщо елементом є слово 'flick', перейдіть на завжди повертати протилежне логічне значення.

Приклади
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Примітки
"повертати" завжди вказуватиметься малими літерами.
Список може містити кілька рухів.
Переключіть логічне значення на той самий елемент, що й сам рух.
*/

// Мій варіант
function flickSwitch(arr) {
    let pointer = true;
    const result = [];
    arr.forEach(elem => {
        if (elem === 'flick') {
            pointer = !pointer;
        }
        result.push(pointer);
    })
    return result;
}
// Цікаві варіанти з Codewars
function flickSwitch(arr) {
    let returning = true;
    return arr.map((v) => {
        return (v === "flick") ? returning = !returning : returning;
    })
}
// ================================================================================================
// ================================================================================================
//*-Task №342 Up and down, the string grows (8kyu)
/*
Багато мов програмування забезпечують функцію перетворення рядка у верхній або нижній регістр.
Наприклад, upcase/downcase у Ruby, upper/lower у Python, toUpperCase/toLowerCase у Java/JavaScript,
uppercase/lowercase у Kotlin. Як правило, ці методи не змінюють розмір рядка.

Наприклад, у Ruby str.upcase.downcase.size == str.size є істинним для більшості випадків.

Однак у деяких особливих випадках довжина перетвореного рядка може бути довшою за оригінал.
Чи можете ви знайти рядок, який задовольняє цим критеріям?

Наприклад, у Ruby це означає str.upcase.downcase.size > str.size

Ви повинні просто встановити значення STRANGE_STRING, щоб відповідати попереднім критеріям.
Примітка: метапрограмування заборонено в цій ката. Отже, розмір вашого рішення обмежений.
*/

// Мій варіант
const STRANGE_STRING = "ß";
/*
Исходная строка ß представляет собой немецкую букву "ß".
При преобразовании этой строки к верхнему регистру, результат будет SS.
В немецком языке, когда буква ß преобразуется к верхнему регистру, она заменяется на SS.
При преобразовании строки к нижнему регистру, она остается такой же, потому что ß уже является нижним регистром.
*/
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №343 Online RPG: player to qualifying stage? (8kyu)
/*
Уявімо, що у нас є популярна онлайн-рольова гра. Гравець починає з 0 балів у класі E5.
А1 — найвищий рівень, якого може досягти гравець. Тепер припустімо, що гравці хочуть піднятися до класу E4.
Для цього гравець має набрати принаймні 100 балів, щоб потрапити до кваліфікаційного етапу.

Напишіть сценарій, який перевірятиме, чи набрав гравець принаймні 100 балів у своєму класі.
Якщо так, то він потрапляє у відбірковий етап.

У такому разі ми відповідаємо:
«Молодець! Ви пройшли до кваліфікаційного етапу. Виграйте 2 з наступних 3 ігор, щоб підвищити рейтинг».
"Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."

В іншому випадку повертається false (відповідно до використовуваної мови).
*/

// Мій варіант
function playerRankUp(points) {
    return points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №344 A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future" (8kyu)
/*
Наш друг Пак нарешті вирішив продовжити кар’єру в галузі програмування.
Він новачок, йому треба як слід вчитися.
Тому Пак хоче подати заявку на всесвітньо відомий і дуже вимогливий
'C0d3r 1ns1d3' Академія для початківців.
Щоб приєднатися, Pac повинен розв’язати серію з 3 вправ про «виправлення помилок».
Йому надіслано електронний лист від Академії з такими інструкціями,

Шановний Пак,
Це перша вправа. Дізнайтеся, що не так, і виправте код.
У вас є 15 хвилин, щоб надіслати рішення.
Удачі.
Цей код - безлад! Ви б допомогли Паку вчасно виправити код?

Це може бути корисним -> Math.random()
*/

// Мій варіант
function yourFutureCareer() {
    var career = Math.random();
    if (career <= 0.32) {
        return 'FrontEnd Developer'
    } else if (career <= 0.65) {
        return 'BackEnd Developer'
    } else {
        return 'Full-Stack Developer'
    }
}

// Цікаві варіанти з Codewars
const yourFutureCareer_ = () => {
    let career = Math.random();
    return `${career <= 0.32 ? 'FrontEnd' : (career <= 0.65 ? 'BackEnd' : 'Full-Stack')} Developer`;
}
// ================================================================================================
// ================================================================================================
//*-Task №345 Find variable which breaks strict comparison! (8kyu)
/*
У JavaScript є окремий випадок, коли суворе порівняння тієї самої змінної повертає false!
Спробуйте дізнатися, що потрібно зробити, щоб отримати такий результат!

var x = something;
x === x // returns false!

Напишіть функцію, яка буде повертати значення, для якого суворе порівняння дасть false!
*/

// Мій варіант
function findStrangeValue() {
    return NaN;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №346 Geometry Basics: Circle Circumference in 2D (8kyu)
/*
Ця серія ката познайомить вас з основами виконання геометрії за допомогою комп’ютера.

Точкові об’єкти мають атрибути x, y. Об’єкти кола мають центр, який є точкою, і радіус, який є числом.
Напишіть функцію, яка обчислює окружність кола.

Тести округлюють відповіді до 6 знаків після коми.
*/

// Мій варіант
function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №347 Generate user links (8kyu)
/*
Створення посилань користувачів
Ваше завдання — створити посилання користувача для URL-адреси, вам буде надано ім’я користувача, і
ви повинні повернути дійсне посилання.

приклад
generate_link('matt c')
http://www.codewars.com/users/matt%20c
*/

// Мій варіант
function generateLink(username) {
    const encodedUsername = encodeURIComponent(username);
    return "http://www.codewars.com/users/" + encodedUsername;
}

// Цікаві варіанти з Codewars
function generateLink_(user) {
    var url = 'http://www.codewars.com/users/';
    var Obj = {
        ' ': '%20',
        ';': '%3B',
        "`": '%60',
        '"': '%22',
        '/': '%2F',
        '+': '%2B',
        ',': '%2C',
        '^': '%5E',
        '|': '%7C',
        '?': '%3F',
        '#': '%23',
        '$': '%24',
        '&': '%26',
        '}': '%7D',
        ':': '%3A',
        '{': '%7B',
        ']': '%5D',
        '[': '%5B',
        '@': '%40',
        '<': '%3C',
        '>': '%3E',
    }
    user = user.replace(/%/g, '%25');
    for (var i = 0; i < user.length; i++) {
        for (var key in Obj) {
            if (user[i] == key) { user = user.replace(user[i], Obj[key]); }
        }
    }
    return url + user;
}
// ================================================================================================
// ================================================================================================
//*-Task №348 Implement Array.prototype.filter() (8kyu)
/*
Ми хочемо реалізувати функцію Array.prototype.filter(), як і існуючу Array.prototype.filter().
Ще одна подібна функція — _.filter() у underscore.js і lodash.js.

Використання буде досить простим, наприклад:
[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]

Звичайно, існуюча функція Array.prototype.filter() була невизначеною для цілей цього Kata.
*/

// Мій варіант
Array.prototype.filter_ = function (callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №349 Lexical this (8kyu)
/*
Лексичні це
Доповніть об’єкт Person, виконавши функцію FillFriends, щоб заповнити масив _friends для об’єкта person.
Вихід
Поверніть об’єкт person із заповненими функціями Name, Friends і FillFriends, які заповнять вхідні дані
у властивість Friends.
*/

// Мій варіант
var Person = function () {
    var person = {
        _name: "Leroy",
        _friends: [],
        fillFriends(f) {
            this._friends.push(...f);
        }
    }
    return person;
}
// Цікаві варіанти з Codewars
var Person_ = function () {
    var person = {
        _name: "Leroy",
        _friends: [],
        fillFriends(f) { this._friends = f; }
    }
    return person;
}
// ================================================================================================
// ================================================================================================
//*-Task №350 Hello Happy Codevarrior! (8kyu)
/*
Здається, жоден із цих варіантів коду не пам’ятає його власне ім’я!
Чи могли б ви допомогти?
var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..
*/

// Мій варіант
function Warrior(n) {
    this.n = n;
}

Warrior.prototype.name = function (n) {
    if (n) this.n = n;
    return this.n;
}

Warrior.prototype.toString = function () {
    return "Hi! my name's " + this.n;
}
// Цікаві варіанти з Codewars
function Warrior_(n) {
    var name = n;
    this.name = function (n) {
        if (n) name = n;
        return name;
    }
}

Warrior.prototype.toString = function () {
    return "Hi! my name's " + this.name();
}
// ================================================================================================
// ================================================================================================
//*-Task №351 Shifty Closures (8kyu)
/*
Функціональні застібки можуть бути надмірно прикріпленими. Виправте їх!
Чому greetAbe() насправді не вітає Ейба?
*/

// Мій варіант
let name = 'Abe';
const greetAbe = () => 'Hello, ' + name + '!';

let name2 = 'Ben';
const greetBen = () => 'Hello, ' + name2 + '!';

// Цікаві варіанти з Codewars
var greet_abe = greet('Abe');
var greet_ben = greet('Ben');

function greet(name) {
    return function () {
        return "Hello, " + name + '!';
    };
}
// ================================================================================================
// ================================================================================================
//*-Task №352 Classic Hello World (8kyu)
/*
Вам надано метод під назвою main, який змушує його друкувати рядок Hello World!
(так, це включає символ нового рядка в кінці) і нічого не повертає
Зауважте, що для деяких мов функція main є точкою входу в програму.

Ось як це буде перевірено:
Solution.main("parameter1","parameter2");

Підказки:

Перевірте свої посилання
Подумайте про сферу застосування вашого методу
Для прологу ви можете використовувати write, але є кращі способи
Якщо ви все ще не розумієте, ви можете визначити main як атрибут класу Solution, який приймає один
аргумент і друкує лише "Hello World!" без повернення.
*/

// Мій варіант
class Solution {
    static main() {
        console.log("Hello World!");
    }
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-залишилось 30шт
// console.time('timer_1');
// console.timeEnd('timer_1');