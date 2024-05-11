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
//*-Task №353 Training JS #13: Number object and its properties (8kyu)
/*
Кодування у функції whatNumberIsIt. функція приймає 1 параметр:n. це число.
Щоб судити про число n. Якщо n є однією з п’яти наведених вище констант, поверніть один із цих рядків:
"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"

Інші значення мають повертати «Введене число — ххх». xxx означає це число.
Наприклад:
whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"

Вам потрібно подумати про те, як правильно й ефективно оцінити це, і не забувайте про isNaN().
*/

// Мій варіант
function whatNumberIsIt(n) {
    if(isNaN(n)) { return 'Input number is Number.NaN'};
    if(n === Number.POSITIVE_INFINITY) { return 'Input number is Number.POSITIVE_INFINITY'};
    if(n === Number.NEGATIVE_INFINITY) { return 'Input number is Number.NEGATIVE_INFINITY'};
    if(n === Number.MAX_VALUE) { return 'Input number is Number.MAX_VALUE'};
    if(n === Number.MIN_VALUE) { return 'Input number is Number.MIN_VALUE'};
    return `Input number is ${n}`;
}
// Цікаві варіанти з Codewars
function whatNumberIsIt_(n) {
    const CHOICES = Object.getOwnPropertyNames(Number);
    let choice = CHOICES.filter(a => n === Number[a]).join('');
    return `Input number is ${(choice ? `Number.${choice}` : isNaN(n) ? 'Number.NaN' : n)}`;
}
// ================================================================================================
// ================================================================================================
//*-Task №354 Neutralisation (8kyu)
/*
Дано два рядки, що складаються з + і -, повернути новий рядок, який показує, як два рядки взаємодіють
таким чином:

Коли позитив і позитив взаємодіють, вони залишаються позитивними.
Коли негатив і негатив взаємодіють, вони залишаються негативними.
Але коли негатив і позитив взаємодіють, вони стають нейтральними та відображаються як число 0.
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.

Приклад:
("--++--", "++--++") ➞ "000000"
("-+-+-+", "-+-+-+") ➞ "-+-+-+"
("-++-", "-+-+") ➞ "-+00"
*/

// Мій варіант
function neutralise(s1, s2) {
    const result = [];
    const arr1 = s1.split('');
    const arr2 = s2.split('');
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            result.push(arr1[i])
        } else {
            result.push(0);
        }
    }
    return result.join('');
}
// Цікаві варіанти з Codewars
function neutralise_(s1, s2) {
    let res = "";
    for (let i = 0; i < s1.length; i++) {
        res += s1[i] !== s2[i] ? "0" : s1[i];
    }
    return res;
}
//
const neutralise__ = (a, b) => a.split('').map((el, i) => el === b[i] ? el : 0).join('');
// ================================================================================================
// ================================================================================================
//*-Task №355 For Twins: 2. Math operations (8kyu)
/*
Фокусник у метро показав вам трюк, він поклав крижану цеглину в пляшку, щоб вразити вас.
Довжина і ширина цегли рівні, утворюючи квадрат; його висота може бути різною. Просто заради розваги,
а також щоб справити враження на фокусника та оточуючих, ви вирішили обчислити об’єм цегли.
Напишіть функцію iceBrickVolume, яка прийматиме ці параметри:
radius - радіус пляшки (завжди > 0);
bottleLength - загальна довжина пляшки (завжди > 0);
rimLength - довжина від верху пляшки до цегли (завжди < bottleLength);

І поверніть об’єм крижаної цеглинки, який чарівнику вдалося помістити в пляшку.

Примітка:
Усі вхідні дані є цілими числами. Припускайте відсутність нерівностей на прямокутній цеглі.
Ви можете припустити, що пляшка має форму циліндра. Цегла не може поміститися всередину обода.
Крижана цегла, поміщена в пляшку, є найбільшим можливим прямокутним кубиком, який насправді міг
поміститися у внутрішній об’єм.

Приклад_1:
radius = 1
bottle_length = 10
rim_length = 2

volume = 16

Приклад_2:
radius = 5
bottle_length = 30
rim_length = 7

volume = 1150
*/

// Мій варіант
function iceBrickVolume(radius, bottleLength, rimLength) {
    const brickLength = bottleLength - rimLength;
    const brickDepth = radius * 2;
    const brickHeight = radius;

    return brickLength * brickDepth * brickHeight;
}

// Цікаві варіанти з Codewars
const iceBrickVolume_ = (radius, bottleLength, rimLength) => radius * radius * (bottleLength - rimLength) * 2;
// ================================================================================================
// ================================================================================================
//*-Task №356 Geometry Basics: Circle Area in 2D (8kyu)
/*
Ця серія ката познайомить вас з основами виконання геометрії за допомогою комп’ютера.

Напишіть функцію CircleArea/CircleArea, яка приймає об’єкт Circle та обчислює площу цього кола.

Клас Circle можна побачити нижче:
// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) { 
    this.center = center; 
    this.radius = radius;
  }
}

А клас Point можна побачити нижче:
// Represents a Point where x and y are Numbers
class Point {
  constructor (x,y) { 
    this.x = x;
    this.y = y; 
  }
}

Тести округлюють відповіді до 6 знаків після коми.
*/

// Мій варіант
function circleArea(circle) {
    return Number((Math.PI * (circle.radius ** 2)).toFixed(6));
}
// Цікаві варіанти з Codewars
function circleArea_(circle) {
    return Math.PI * circle.radius ** 2
}
// ================================================================================================
// ================================================================================================
//*-Task №357 Broken Counter (8kyu)
/*
Наш прототип лічильника зламався. Чи можете ви помітити, що тут не так?
*/

// Мій варіант
function Counter() {
    this.value = 0;
}

Counter.prototype.increase = function () {
    this.value++;
};

Counter.prototype.getValue = function () {
    return this.value;
};

Counter.prototype.reset = function () {
    this.value = 0;
};
// Цікаві варіанти з Codewars
class Counter_ {
    constructor() {
        this.value = 0;
    }

    increase() {
        this.value++;
    };

    getValue() {
        return this.value;
    };

    reset() {
        this.value = 0;
    };
}
// ================================================================================================
// ================================================================================================
//*-Task №358 Add new item (collections are passed by reference) (8kyu)
/*
Додати елемент до списку:

Метод AddExtra додає новий елемент до списку та повертає список. Новим предметом може бути будь-який предмет,
і це не має значення. (скажімо, ви додаєте ціле число, наприклад 13)

У нашому тестовому випадку ми перевіряємо, щоб повернутий список містив на один елемент більше, ніж у
вхідному списку. Однак метод потребує деяких змін, щоб пройти цей тест.

P.S. Вам потрібно створити новий список і додати до нього новий елемент.
(Ця Kata спочатку розроблена для мови C# і показує, що додавання нового елемента до списку введення не
    спрацює, навіть якщо параметр передається за значенням, але значення вказує на посилання списку та
    будь-які зміни в параметр буде видно абоненту)
*/

// Мій варіант
function addExtra(listOfNumbers) {
    return listOfNumbers.concat([2020]);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-залишилось 24шт
// console.time('timer_1');
// console.timeEnd('timer_1');