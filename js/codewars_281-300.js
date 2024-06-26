//*-Task №281 Did she say hallo? (8kyu)
/*
Ви отримали повідомлення Whatsup з невідомого номера.
Чи може це бути від дівчини/хлопчика з іноземним акцентом, якого ви зустріли вчора ввечері?
Напишіть просту функцію, щоб перевірити, чи містить рядок слово hallo різними мовами.
Це мови можливих людей, яких ви зустріли напередодні ввечері:
hello - англійська
ciao - італ
salut - франц
привіт - нім
hola - ісп
ahoj - Чехія
czesc - польський

Примітки
ви можете припустити, що введення є рядком.
щоб ця вправа була для початківців, вам не потрібно перевіряти,
чи є привітання підмножиною слова (Hallowen може пройти тест)
функція має бути нечутливою до регістру, щоб пройти тести
*/

// Мій варіант
const hellos = {
    hello: 'english',
    ciao: 'italian',
    salut: 'french',
    hallo: 'german',
    hola: 'spanish',
    ahoj: 'czech republic',
    czesc: 'polish',
}

const validateHello = greetings => {
    for (key in hellos) {
        if (greetings.toLowerCase().includes(key)) {
            return true
        }
    }
    return false
}
// Цікаві варіанти з Codewars
const validateHello_ = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
// ================================================================================================
// ================================================================================================
//*-Task №282 Days in the year (8kyu)
/*
Варіант визначення високосних років, припускаючи, що використовуються лише цілі числа,
а роки можуть бути від’ємними та додатними.
Напишіть функцію, яка повертатиме дні в році та рік, введені в рядок.
Наприклад:
yearDays(2000) returns "2000 has 366 days"
Є кілька припущень, що ми приймемо рік 0, навіть якщо року 0 немає в григоріанському календарі.
Також основним правилом перевірки високосного року є наступне:
Більшість років, які можна поділити на 4, є високосними.
Виняток: столітні роки НЕ є високосними роками, ЯКЩО їх не можна розділити на 400.
Отже, роки 0, -64 і 2016 повернуть 366 днів. У той час як 1974, -10 і 666 повертатимуть 365 днів.
*/

// Мій варіант
function yearDays(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} has 366 days`;
    } else {
        return `${year} has 365 days`;
    }
}
// Цікаві варіанти з Codewars
function yearDays_(year) {
    let nDays = year % 4 ? 365 :
        year % 100 ? 366 :
        year % 400 ? 365 : 366;
    return `${year} has ${nDays} days`;
}
// ================================================================================================
// ================================================================================================
//*-Task №283 Grasshopper - Object syntax debug (8kyu)
/*
Створюючи гру типу zork, ви створюєте об’єкт кімнат. На жаль, гра не працює.
Знайдіть усі помилки в об’єкті кімнат, щоб ваша гра знову запрацювала.
*/

// Мій варіант
var rooms = {
    first: {
        description: 'This is the first room',
        items: {
            chair: 'The old chair looks comfortable',
            lamp: 'This lamp looks ancient'
        }
    },
    second: {
        description: 'This is the second room',
        items: {
            couch: 'This couch looks like it would hurt your back',
            table: 'On the table there is an unopened bottle of water'
        }
    }
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №284 Barking mad (8kyu)
/*
Навчіть Снупі та Скубі Ду гавкати за допомогою методів об’єктів.
Наразі лише Снупі може гавкати, а не Скубі Ду.
snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Використовуйте прототипи методів, щоб дозволити всім собакам гавкати.
*/

// Мій варіант
class Dog {
    constructor(breed) {
        this.breed = breed;
    }
    bark() {
        return "Woof";
    }
}

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");
// Цікаві варіанти з Codewars
function Dog_(breed) {
    this.breed = breed;
}

var snoopy_ = new Dog_("Beagle");

Dog_.prototype.bark = function () {
    return "Woof";
};

var scoobydoo_ = new Dog_("Great Dane");
// ================================================================================================
// ================================================================================================
//*-Task №285 Merging sorted integer arrays (without duplicates) (8kyu)
/*
Напишіть функцію, яка об’єднує два відсортовані масиви в один. Масиви містять лише цілі числа.
Крім того, кінцевий результат має бути відсортований і не мати дублікатів.
*/

// Мій варіант
function mergeArrays(a, b) {
    const newArr = a.concat(b);
    const uniclesNum = [];
    for (let i = 0; i < newArr.length; i++) {
        if (!uniclesNum.includes(newArr[i])) {
            uniclesNum.push(newArr[i]);
        }
    }
    const sortedArr = uniclesNum.sort((a, b) => { return a - b });
    return sortedArr;
}
// Цікаві варіанти з Codewars
function mergeArrays_(a, b) {
    return [...new Set(a.concat(b))].sort((a, b) => a - b);
}
//
function mergeArrays__(a, b) {
    // your code here
    const array = [...a, ...b].sort((a, b) => a - b)
    const answer = array.filter((item, index) => array.indexOf(item) === index)

    return answer
}
// ================================================================================================
// ================================================================================================
//*-Task №286 Push a hash/an object into array (8kyu)
/*
Ви намагаєтеся помістити об’єкт у javascript в масив, але він завжди повертає помилку,
вирішіть її та зробіть це якомога простіше!
*/

// Мій варіант
const items = []
items.push({ a: "b", c: "d" });
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №287 Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision() (8kyu)
/*
Кодування у функції howManySmaller, функція приймає 2 параметри: arr і n. arr — десятковий масив. n — десятковий дроб.
Перша місія: дозволити всім елементам масиву зберігати два знаки після коми (не потрібно перетворювати число n).
Друга місія: Traversal arr, підрахувати кількість елемента, меншого за n, і повернути його.
наприклад:
howManySmaller([1.234,1.235,1.228],1.24) should return 2
howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
*/

// Мій варіант
function howManySmaller(arr, n) {
    return arr.map(num => num
        .toFixed(2))
        .filter(num => num < n).length;
}
// Цікаві варіанти з Codewars
function howManySmaller_(arr, n) {
    return arr.filter(x => +x.toFixed(2) < n).length;
}
// ================================================================================================
// ================================================================================================
//*-Task №288 Training JS #14: Methods of Number object--toString() and toLocaleString() (8kyu)
/*
Кодування у функції colorOf. функція приймає 3 параметри: r g b.
Це означає значення червоного зеленого і синього кольорів. діапазон значень 0-255.
Використовуйте toString(16) Перетворення чисел r g b у форму шістнадцяткового рядка.
нарешті об’єднайте їх у веб-код кольору та поверніть його.
код кольору повинен починатися з "#". а потім використовуйте 2 символи на колір.

наприклад:
colorOf(255,0,0) має повернути "#ff0000"
colorOf(0,111,0) має повернути "#006f00"
colorOf(1, 2 ,3) має повернути "#010203"

Ось і вся твоя робота. Моя робота полягає в тому, щоб надрукувати ваш кольоровий код на екрані.
*/

// Мій варіант
function colorOf(r, g, b) {
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');
    return `#${rHex}${gHex}${bHex}`;
}
// Цікаві варіанти з Codewars
function colorOf_(r, g, b) {
    return "#" + toHex(r) + toHex(g) + toHex(b);
}

function toHex(n) {
    var result = n.toString(16);
    return result.length == 1 ? "0" + result : result;
}
// ================================================================================================
// ================================================================================================
//*-Task №289 Potenciation (8kyu)
/*
Функція приймає 2 вхідні дані x і y і має повертати x у степені y
Просто, правда? Але вам НЕ дозволено використовувати Math.pow();
Obs: x і y будуть натуральними числами, тому НЕ беріть до уваги дроби;
Примітка: нуль у ступені нуля дорівнює одиниці в цьому ката.
*/

// Мій варіант
function power(x, y) {
    return x ** y;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №290 Mr. Freeze (8kyu)
/*
Уже створено об’єкт/клас під назвою MrFreeze. Позначте цей об’єкт як заморожений, щоб до нього не
можна було вносити жодних інших змін.
*/

// Мій варіант
Object.freeze(MrFreeze);
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №291 Grasshopper - Bug Squashing (8kyu)
/*
Виправлення помилок гри терміналу
Ви створюєте текстову термінальну версію вашої улюбленої настільної гри.
У настільній грі кожен хід має шість кроків у такому порядку: кидати кубики, рухатися, битися,
отримувати монети, купувати більше здоров’я та друкувати статус.
Ви використовуєте бібліотеку, яка вже має наведені нижче функції. Створіть функцію під назвою main,
яка викликає функції в правильному порядку.
- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/

// Мій варіант
var health = 100
var position = 0
var coins = 0

function main() {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №292 isReallyNaN (8kyu)
/*
Нещодавно я виявив кілька помилок у своєму коді, і я відстежив проблему назад до глобальної функції
isNaN, яку я використовував. Я очікував, що це буде більш розбірливим, але зараз повертається true для undefined.
Напишіть функцію isReallyNaN, яка повертає true, лише якщо її передати в аргументі, який обчислюється
як NaN, і повертає false в іншому випадку.
Будь-яке рішення прийнятне!
*/

// Мій варіант
function isReallyNaN(value) {
    return typeof value === 'number' && isNaN(value);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №293 Freudian translator (8kyu)
/*
Ви, напевно, знаєте, що число 42 — це «відповідь на життя, всесвіт і все» згідно з
«Путівником автостопом по галактиці» Дугласа Адамса. Для Фрейда відповідь була зовсім іншою...
У суспільстві, в якому він жив, людям — особливо жінкам — доводилося придушувати свої сексуальні
потреби та бажання. Просто таким було суспільство того часу. Потім Фрейд захотів вивчити хвороби,
викликані цим, і тому він докопався до кореня їхніх бажань. Це призвело до деяких найважливіших
психоаналітичних теорій донині, Фрейд є батьком психоаналізу.

Зараз, в основному, коли людина чує про Фрейда, вона/вона чує «секс», тому що для Фрейда все було
пов’язане зі статтю та пояснювалося нею.

Згідно з Фрейдом, у цій ката функція приймає рядок як аргумент і повертає рядок із кожним словом,
заміненим поясненням до всього. Зауважте, що порожній рядок або відсутність аргументів має повертати
порожній рядок.
*/

// Мій варіант
function toFreud(string) {
    return string.length > 0 ? string.split(' ').fill('sex').join(' ') : '';
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №294 Calculate Price Excluding VAT (8kyu)
/*
Напишіть функцію, яка обчислює початкову ціну товару без ПДВ.
приклад
Якщо ціна продукту становить 200,00, а ПДВ становить 15%, то кінцева ціна продукту (з ПДВ) становить:
200,00 + 15% = 230,00
Таким чином, якщо ваша функція отримує 230,00 як вхідні дані, вона має повернути 200,00

Примітки:
ПДВ завжди становить 15% для цілей цієї Ката.
Округліть результат до 2 знаків після коми.
Якщо задано нульове значення, повертається -1
*/

// Мій варіант
function excludingVatPrice(price) {
    return price !== null ? parseFloat((price * 100 / 115).toFixed(2)) : -1;
}
// Цікаві варіанти з Codewars
function excludingVatPrice_(price) {
    return (price == null) ? -1 : Math.round((price / 1.15) * 100) / 100;
}
//
function excludingVatPrice__(price) {
    if (price === null) return -1
    return +((price / 1.15).toFixed(2));
}
// ================================================================================================
// ================================================================================================
//*-Task №295 Simple Comparison? (8kyu)
/*
Напишіть функцію, яка порівнюватиме два значення: одне буде числом, а інше — рядком.
Повертає true, якщо це той самий символ (незалежно від різних типів даних), і повертає false, якщо це не так.
Щоб ускладнити цей виклик і спонукати претендента почитати про примус, я вимкнув деякі вбудовані методи,
зокрема .toString(), .join(), .split(), parseInt і .Number().
*/

// Мій варіант
function add(a, b) {
    return a == b;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №296 Grasshopper - Create the rooms (8kyu)
/*
Втеча з кімнати
Ви створюєте гру «Втеча з кімнати». Першим кроком є створення хеш-таблиці під назвою room,
яка містить усі кімнати гри. Усередині нього повинно бути принаймні 3 кімнати, кожна з яких є
хеш-таблицею з принаймні трьома властивостями (наприклад, name, description, completed).
*/

// Мій варіант
let rooms = {};

let room1 = {
    name: "Room 1",
    description: "You are in a dimly lit room with a single door to the north.",
    completed: false
};

let room2 = {
    name: "Room 2",
    description: "This room is filled with ancient artifacts and mysterious symbols.",
    completed: false
};

let room3 = {
    name: "Room 3",
    description: "You enter a room with strange machinery humming in the background.",
    completed: false
};

rooms["room1"] = room1;
rooms["room2"] = room2;
rooms["room3"] = room3;
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №297 Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search() (8kyu)
/*
Кодування у функції firstToLast, функція приймає 2 параметри: str і c. str — це рядок. c є символом.
Поверніть проміжок між першою позицією c і останньою позицією c.
Якщо в str багато символів c, має повертати додатне ціле число;
Якщо в str є лише один c, має повернути 0;
Якщо в str немає c, має повернути -1. Пошук не повинен ігнорувати справу.
firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1
*/

// Мій варіант
function firstToLast(str, c) {
    str = str.toLowerCase();
    c = c.toLowerCase();

    const firstIndex = str.indexOf(c);
    if (firstIndex === -1) {
        return -1;
    }
    const lastIndex = str.lastIndexOf(c);
    return lastIndex - firstIndex;
}
// Цікаві варіанти з Codewars
function firstToLast_(str, c) {
    var first = str.indexOf(c), last = str.lastIndexOf(c);
    return first == -1 ? -1 : last - first;
}
// ================================================================================================
// ================================================================================================
//*-Task №298 Find the Slope (8kyu)
/*
Дано масив із 4 цілих чисел
[a,b,c,d], що представляє дві точки (a, b) і (c, d), повертає рядкове представлення нахилу лінії,
що з’єднує ці дві точки.

Для невизначеного нахилу (поділ на 0) поверніть undefined.
Зауважте, що "undefined" чутливий до регістру.
    a:x1
    b:y1
    c:x2
    d:y2
Припустимо, що [a,b,c,d] і відповідь є цілими числами (без плаваючих чисел!).
*/

// Мій варіант
function slope(points) {
    const a = points[0];
    const b = points[1];
    const c = points[2];
    const d = points[3];

    if (c - a === 0) {
        return "undefined";
    }

    const slope = (d - b) / (c - a);
    return slope.toString();
}
// Цікаві варіанти з Codewars
function slope_([x1, y1, x2, y2]) {
    let slope = (y2 - y1) / (x2 - x1);
    return Number.isFinite(slope) ? `${slope}` : 'undefined';
}
// ================================================================================================
// ================================================================================================
//*-Task №299 Is integer safe to use? (8kyu)
/*
Не всі цілі числа можна представити за допомогою JavaScript/TypeScript. Він має простір для
представлення 53-бітних цілих чисел зі знаком. У цій ката ми маємо визначити, чи безпечно
використовувати ціле число чи ні. Скористайтеся останніми функціями ES6, щоб знайти це.
SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false
*/

// Мій варіант
function SafeInteger(n) {
    return Math.abs(n) <= 9007199254740990;
}
// Цікаві варіанти з Codewars
function SafeInteger_(n) {
    return Number.isSafeInteger(n);
}
// ================================================================================================
// ================================================================================================
//*-Task №300 Enumerable Magic #4 - True for None? (8kyu)
/*
Створити метод none? (JS none), який приймає масив і блок (JS: функція), і повертає true, якщо блок
(/function) повертає true для жодного з елементів масиву. Порожній список має повертати значення true.
*/

// Мій варіант
function none(arr, fun) {
    return arr.every(item => !fun(item));
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-залишилось 82шт
// console.time('timer_1');
// console.timeEnd('timer_1');