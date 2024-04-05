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
//*-залишилось 94шт
// console.time('timer_1');
// console.timeEnd('timer_1');