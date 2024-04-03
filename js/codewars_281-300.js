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
//*-залишилось 98шт
// console.time('timer_1');
// console.timeEnd('timer_1');