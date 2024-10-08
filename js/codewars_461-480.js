//*-Task №461 Fun with ES6 Classes #4 - Cubes and Setters (7kyu)
/*
Визначте клас Cube, функція-конструктор якого приймає рівно один параметр length та зберігає значення
аргументу в this.length. Потім ви визначите гетер і сеттер для surfaceArea та об’єму куба.

Початковий код не надається. Ви можете використовувати будь-який синтаксис для завершення цієї ката,
але настійно рекомендується використовувати синтаксис і функції ES6 для виконання цієї ката.
*/

// Мій варіант (Подивився відповідь)
class Cube {
    constructor(length) {
        this.length = length;
    }
    get volume() {
        return Math.pow(this.length, 3);
    }
    set volume(volume) {
        this.length = Math.cbrt(volume);
    }
    get surfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }
    set surfaceArea(surfaceArea) {
        this.length = Math.sqrt(surfaceArea / 6);
    }
}

// Цікаві варіанти з Codewars


// ================================================================================================
// ================================================================================================
//*-Task №462 Competitive eating scoreboard (7kyu)
/*
Ви суддя змагання з їжі, і вам потрібно вибрати переможця!
У змаганні є три страви, і кожен тип їжі коштує різну кількість балів. Пункти наступні:

Курячі крильця: 5 балів
Гамбургери: 3 бали
Хот-доги: 2 бали

Напишіть функцію, яка допоможе створити табло. Він приймає як параметр список об’єктів,
що представляють учасників, наприклад:
[
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]

Він має повертати властивості «name» та «score», відсортовані за балом; якщо бали рівні,
відсортуйте в алфавітному порядку за назвою.
[
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]
Щасливого суддівства!
*/

// Мій варіант
function scoreboard(whoAteWhat) {
    let result = [];

    for (let i = 0; i < whoAteWhat.length; i++) {
        const name = whoAteWhat[i].name;
        let score = (whoAteWhat[i].chickenwings * 5) + (whoAteWhat[i].hamburgers * 3) + (whoAteWhat[i].hotdogs * 2);
        result.push({name, score});
    }

    const sortByName = result.sort((a, b) => {
        if(a.name < b.name) { return -1 };
        if(a.name > b.name) { return 1 };
        return 0;
    });
    const sortByScore = sortByName.sort((a, b) => b.score - a.score);
    return sortByScore;
}

// Цікаві варіанти з Codewars
function scoreboard_(whoAteWhat) {
    return whoAteWhat.map(obj => ({
        name: obj.name,
        score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2,
    })).sort((a, b) => b.score - a.score || a.name > b.name);
}

// ================================================================================================
// ================================================================================================
//*-Task №463 Capitalize first letter of a string (7kyu)
/*
Зробіть першу літеру рядка великою
Напишіть функцію capitalize(), яка робить першу літеру (якщо є) заданого рядка великою. Наприклад:

Input                                                           Output
string                                                          String
hello World                                                     Hello World
i love codewars                                                 I love codewars
This sentence is already capitalized                            This sentence is already capitalized
0123the first character of this sentence is not a letter        0123the first character of this sentence is not a letter

JavaScript: розширте прототип String за допомогою методу capitalize(), щоб ви могли викликати його в
рядку так: "string".capitalize(). Дізнайтеся про успадкування та ланцюг прототипів.
Крім того, вбудовані рядкові методи toUpperCase() і toLowerCase() вимкнено для цього Kata.
*/

// Мій варіант
String.prototype.capitalize = function () {
    let charCode = this.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
        charCode -= 32;
    }
    const bigLetter = String.fromCharCode(charCode);
    return this.replace(this[0], bigLetter);
}

// Цікаві варіанти з Codewars
String.prototype.capitalize_ = function () {
    return this.replace(/^[a-z]/, c => String.fromCharCode(c.charCodeAt(0) - 32));
}
// ================================================================================================
// ================================================================================================
//*-Task №464 Make Class (7kyu)
/*
Мені не подобається писати такі уроки:
function Animal(name,species,age,health,weight,color) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.health = health;
    this.weight = weight;
    this.color = color;
}

Дайте мені повноваження створити такий подібний клас:
const Animal = makeClass("name","species","age","health","weight","color");
*/

// Мій варіант
function makeClass(...properties) {
    return class MyClass {
        constructor(...values) {
            for(let i = 0; i < properties.length; i++) {
                this[properties[i]] = values[i];
            }
        }
    }
}

// Цікаві варіанти з Codewars
function makeClass_(...properties) {
    return class {
        constructor(...props) {
            properties.forEach((prop, index) => {
                this[prop] = props[index]
            })
        }
    }
}
//
const makeClass__ = (...keys) =>
    function (...values) {
        keys.forEach((val, idx) => this[val] = values[idx]);
    }
// ================================================================================================
// ================================================================================================
//*-Task №465 Array Mappings (7kyu)
/*
Відображення масивів
О ні, метод map для масивів вимкнено. Ви можете це виправити?

Якщо ви не стикалися з методом map для масивів, ось як він працює:
[1,2,3].map(x => x ** 2) === [1,4,9]
[1,2,3].map(x => 2 * x) === [2,4,6]
[1,2,3].map(x => 2 ** x) === [2,4,8]
[1,2,3].map(x => x.toString()) === ["1","2","3"]
["1","2","3"].map(x => parseInt(x)) === [1,2,3]
["random","array","to","be","mapped"].map(x => mapping(x)) ===
[mapping("random"),mapping("array"),mapping("to"),mapping("be"),mapping("mapped")]
Метод map не змінює вхідний масив.
*/

// Мій варіант (Подивився відповідь)
Array.prototype.map = function (func) {
    var res = [];
    for (var i = 0; i < this.length; i++) {
        res.push(func(this[i]));
    }
    return res;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №466 Number-like counter (7kyu)
/*
Ви збираєтеся реалізувати простий клас лічильника. Лічильник починатиметься з нуля, і кожного разу,
коли буде викликано його метод incr, він буде збільшуватися на 1.

Є одне застереження: ваш лічильник має працювати як число та підтримувати арифметичні операції
та порівняння.

Наприклад:
var c = new Counter();
c.incr(); // counter is now at 1
c + 1; // 2
c > 1; // false
c > 0; // true
c == 1; // true
Math.sqrt(c); // 1

Від вас не вимагається підтримувати порівняння рівності між двома екземплярами Counter.
*/

// Мій варіант
class Counter {
    constructor() {
        this.count = 0;
    }

    incr() {
        this.count += 1;
    }

    valueOf() {
        return this.count;
    }
}

// Цікаві варіанти з Codewars
function Counter_() {
    this.value = 0;
};

Counter_.prototype.incr = function () {
    this.value++;
};

Counter_.prototype.valueOf = function () {
    return this.value;
};
//
var Counter__ = function () {
    this.value = 0;
    this.incr = function () { this.value++; };
    this.valueOf = function () { return this.value; };
};
// ================================================================================================
// ================================================================================================
//*-Task №467 Doggy Daycare (7kyu)
/*
Власниця дитячого садка для собак хоче знати, чи може вона прийняти нових собак до свого дитячого садка,
і їй потрібно перевірити, чи вони були очищені від глистів і щеплені, щоб прийняти їх самих або
разом з іншими собаками.

Існує прототип Dog (клас у Ruby), який потрібно розширити за допомогою методу checkDog (check_dog).
Собака на даний момент має такі властивості (атрибути):

name
age
breed
vaccinated
wormed

Вам потрібно буде щоразу повертати ім’я собаки, а також " can be accepted", " can only be accepted by itself"
та " can not be accepted".

Якщо собака щеплена і очищена від глистів, собаку можна приймати.
Якщо собака тільки щеплена або тільки глистоподібна, собаку можна приймати тільки саму.
Якщо собака не була щеплена або не очищена від глистів, собака не може бути прийнята.
приклад:
var spot = new Dog("Spot", 5, "Labrador", true, false);
spot.checkDog(); // Should return: "Spot can only be accepted by itself".
*/

// Мій варіант
Dog.prototype.checkDog = function () {
    if (this.vaccinated === true && this.wormed === true) { return `${this.name} can be accepted` };
    if (this.vaccinated === true || this.wormed === true) { return `${this.name} can only be accepted by itself` };
    return `${this.name} can not be accepted`;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №468 Strings, strings, strings (Easy) (7kyu)
/*
Метод toString() вимкнено для логічних значень, чисел, масивів і об’єктів.
Ваша мета — отримати toString() для наступних типів даних.

1.Для логічних значень:
true слід перетворити на "true"
false слід перетворити на "false"

2.Для чисел перетворення має бути таким:
(3).toString() === "3"
(3.14).toString() === "3.14"
(-78).toString() === "-78"
Math.PI.toString() === "3.141592653589793"

3.Масиви
Для цілей цього Ката від вас очікується лише перетворення масивів лише з числами на рядки.
Однак, окрім виправлення, ми також хотіли б покращити його. Ми хотіли б зберегти квадратні дужки ([])
навколо "рядкового" масиву, як це було б видно в коді Javascript. Наприклад:
[].toString() === "[]"
[1].toString() === "[1]"
[2,4,8,17].toString() === "[2, 4, 8, 17]"
[Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"

Як ви могли помітити в наведених вище прикладах, коли масив містить більше одного елемента,
деякі рядки мають пробіли, а також коми, що відокремлюють кожен елемент, але деякі рядки ні.
Для цілей цього Ката наявність пробілів чи ні не має значення для рядкових масивів - перед
проведенням тестів ваші введені дані позбавляються всіх пробілів.

Заключна примітка - ВАЖЛИВО
Ваші відновлені методи toString() мають повертати лише рядкову версію вхідних даних – вони НЕ повинні
змінювати вихідне значення. Для підтвердження цього були створені тестові випадки.
*/

// Мій варіант
Boolean.prototype.toString = function () {
    return this + '';
}

Number.prototype.toString = function () {
    return this + '';
}

Array.prototype.toString = function () {
    return '[' + this.join(',') + ']';
}

// Цікаві варіанти з Codewars
Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
    function () { return JSON.stringify(this) };
//
String.prototype.toString = function () {
    return `${this}`
}
// ================================================================================================
// ================================================================================================
//*-Task №469 Sorting Arrays ... wait, what?! (7kyu)
/*
Будучи розробником, ви вирішили виправити метод sort() так, щоб він працював для будь-якого масиву,
що складається лише з додатних цілих чисел. Ви можете використовувати будь-який алгоритм.

Розширення
Якщо ви бажаєте, ви також можете виправити метод sort() для масивів, щоб він також працював з масивами
String (сортуючи їх в алфавітному порядку), але зауважте, що він не є обов’язковим і не буде перевірятися.
*/

// Мій варіант (подивився відповідь)
Array.prototype.sort = function () {
    for (var i = 0; i < this.length - 1; i++) {
        for (var j = this.length - 1; j >= i; j--) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
    return this;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №470 The Newest Function (7kyu)
/*
Ваше сьогоднішнє завдання — написати функцію на JavaScript. Це здається досить простим,
але генеральний директор наполягає на тому, щоб усі розробники, які працюють у його компанії,
використовували лише абсолютні передові технології. Ви повинні використовувати лише найновіші функції
та фреймворки. Але таке нове програмне забезпечення, як правило, рясніє помилками...

Створіть функцію, яка не видаватиме помилку, якою б новою вона не була.
*/

// Мій варіант (подивився відповідь)
const newFunction = function foo() {
    return foo;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №471 Javascript Namespacing (7kyu)
/*
Визначте клас під назвою MyClass у просторі імен MyNamespace. Конструктор класу повинен приймати
один рядковий аргумент. Він також повинен мати функцію під назвою sayHello, яка повертає рядок,
переданий у конструктор.

Приклад:
var myObject = new MyNamespace.MyClass('Hello!');
var phrase = myObject.sayHello(); // phrase should be 'Hello!'

Цікава частина полягає в тому, що MyClass має бути доступним лише через простір імен і не повинен
визначати жодних додаткових глобальних змінних. Код не повинен перевизначати існуючий простір імен,
але також повинен функціонувати, якщо простір імен не визначено раніше.
*/

// Мій варіант (подивився відповідь)
var MyNamespace = MyNamespace || {}; // Обов'язково var

MyNamespace.MyClass = function (phrase) {
    this.phrase = phrase;
};

MyNamespace.MyClass.prototype.sayHello = function () {
    return this.phrase;
};
// Цікаві варіанти з Codewars
MyNamespace2.MyClass = class {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return this.name;
    }
}

// ================================================================================================
// ================================================================================================
//*-Task №472 Flatten and sort an array (7kyu)
/*
Дано двовимірний масив цілих чисел, повернути зведену версію масиву з усіма цілими числами в
порядку зростання (за зростанням).

З огляду на [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], ваша функція має повернути [1, 2, 3, 4, 5, 6, 7, 8 , 9].
*/

// Мій варіант
function flattenAndSort(array) {
    return array.reduce((newArr, arr) => newArr.concat(arr), []).sort((a, b) => a - b);
}

// Цікаві варіанти з Codewars
function flattenAndSort_(array) {
    return [].concat(...array).sort((a, b) => a - b);
}
//
const flattenAndSort__ = (array) => array.flat().sort((a, b) => a - b);
// ================================================================================================
// ================================================================================================
//*-Task №473 Factory Functions #1 - Creating profile for people (7kyu)
/*
Визначте фабричну функцію person (так, усі малі літери), яка приймає такі параметри в такому порядку:
firstName
lastName
age
gender
employed
occupation
married

Назви ключів об'єкта повинні збігатися з назвами параметрів, згаданих вище.
Об’єкт повинен (тоді) також мати такі методи:
sayName - має повернути повне ім’я особи (наприклад, {firstName: "John", lastName: "Doe"} => "John Doe"
// коли викликається метод sayName())
introduce – це має повернути рядок такого формату: "Hello, my name is FULL_NAME.  I am AGE years old.  I am a GENDER.".

ВАЖЛИВО: для методу introduce() особи кожне речення відокремлюється від наступного рівно ДВОМА пробілами.
*/

// Мій варіант
function person(firstName, lastName, age, gender, employed, occupation, married) {
    const obj = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        employed: employed,
        occupation: occupation,
        married: married,
        sayName() { return `${this.firstName} ${this.lastName}` },
        introduce() { return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.` },
    }

    return obj;
}

// Цікаві варіанти з Codewars
function person_(firstName, lastName, age, gender, employed, occupation, married) {
    return {
        firstName,
        lastName,
        age,
        gender,
        employed,
        occupation,
        married,
        sayName() {
            return `${firstName} ${lastName}`;
        },
        introduce() {
            return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`;
        }
    };
}
//
const person__ = (firstName, lastName, age, gender, employed, occupation, married) => {
    const sayName = _ => firstName + ' ' + lastName
    const introduce = _ => `Hello, my name is ${sayName()}.  I am ${age} years old.  I am a ${gender}.`
    return { firstName, lastName, age, gender, employed, occupation, married, sayName, introduce }
}
// ================================================================================================
// ================================================================================================
//*-Task №474 Factory Functions #2 - Inheritance and Object Composition (7kyu)
/*
Визначте функцію constructionWorker, яка «успадковує» функцію person, як показано в Огляді, і
приймає наступні параметри в такому порядку: firstName, lastName, age, gender, married, boss.
Ключі повернутого об’єкта мають бути ідентичними назві параметрів, згаданих вище. Крім того,
будівельник завжди працює, тому для параметра зайнято має бути встановлено значення true.
Їхня професія також природно «будівельник».

На додаток до всього, constructionWorker повинен мати метод sayBossName, який повертає рядок
такого формату: 'My boss is called BOSS_NAME and is a very nice person!' де BOSS_NAME – це ім’я
начальника зазначеного будівельника.
*/

// Мій варіант
function constructionWorker(firstName, lastName, age, gender, married, boss) {
    const personObj = person(firstName, lastName, age, gender, married);
    personObj.boss = boss;
    personObj.employed = true;
    personObj.occupation = 'construction worker';
    personObj.married = married;

    personObj.sayBossName = function () { return `My boss is called ${this.boss} and is a very nice person!` };
    return personObj;
}

// Цікаві варіанти з Codewars
function constructionWorker_(firstName, lastName, age, gender, married, boss) {
    var w = person(firstName, lastName, age, gender, true, 'construction worker', married);
    w.boss = boss;
    w.sayBossName = function () {
        return `My boss is called ${this.boss} and is a very nice person!`;
    };
    return w;
}
//
const constructionWorker__ = (firstName, lastName, age, gender, married, boss) => ({
    ...person(firstName, lastName, age, gender, true, "construction worker", married),
    boss,
    sayBossName: () => `My boss is called ${boss} and is a very nice person!`
})
// ================================================================================================
// ================================================================================================
//*-Task №475 SpeedCode #1 - Getters and Setters in Object Literals (7kyu)
/*
Визначте змінну person, яка зберігає літерал об’єкта. Літерал об’єкта повинен мати такі властивості:
firstName of "Jane"
lastName of "Doe"

Тоді літерал об’єкта повинен мати геттер і сеттер під назвою fullName, які повертають і аналізують
повне ім’я особи відповідно. Повне ім’я визначається таким чином: якщо ім’я – «Джейн»,
а прізвище – «Доу», то повне ім’я – «Джейн Доу» і навпаки. Ви можете вважати, що всі повні імена дійсні
під час їх аналізу.

Вийміть таймер і готуйтеся. Готуйся, збирайся, ВПЕРЕД!!! :D
*/

// Мій варіант
const person = {
    firstName:'Jane',
    lastName:'Doe',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        let [firstN, lastN] = name.split(' ');
        this.firstName = firstN;
        this.lastName = lastN;
    }
}

// Цікаві варіанти з Codewars
const person_ = {
    firstName: 'Jane',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        let [firstName, lastName] = name.split(' ');
        Object.assign(this, { firstName, lastName });
    }
};
//
// Ready, get set, GO!!! :D
var person___ = {
    firstName: "Jane",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        this.firstName = name.split(" ")[0];
        this.lastName = name.split(" ")[1];
    }
};
// ================================================================================================
// ================================================================================================
//*-Task №476 Statistics - Fundamentals (7kyu)
/*
Створіть клас DataSet, який має такі властивості та методи:

data - містить масив даних
mean – містить значення середнього середнього даних
variance  – містить значення дисперсії даних
stdDeviation – містить стандартне відхилення даних
setMean() – функція, яка обчислює середнє, оновлює this.mean і повертає значення середнього
setVar() - встановлює/скидає дисперсію та стандартне відхилення набору даних і повертає дисперсію
Наприклад, якщо я ініціюю DataSet з такими даними:
var myData = new DataSet(1,2,3,4,5,6,7);
... наступні властивості будуть встановлені автоматично:
myData.data === [1,2,3,4,5,6,7];
myData.mean === 4
myData.variance === 4
myData.stdDeviation === 2

Крім того, якщо я потім зміню деякі записи в myData.data, а потім викликаю функції setMean() і setVar(),
середнє значення, стандартне відхилення та дисперсію даних мають бути перераховані, а значення нового
середнього та дисперсії повернуто.
*/

// Мій варіант (подивився відповідь)
class DataSet {
    constructor(...data) {
        this.data = data;
        this.setMean();
        this.setVar();
    }

    setMean() {
        this.mean = this.data.reduce((a, b) => a + b, 0) / this.data.length;
        return this.mean;
    }

    setVar() {
        this.variance = this.data
            .map(n => Math.pow(n - this.mean, 2))
            .reduce((a, b) => a + b, 0) / this.data.length;
        this.stdDeviation = Math.sqrt(this.variance);
        return this.variance;
    }
}

// Цікаві варіанти з Codewars
class DataSet_ {
    constructor(...data) {
        this.data = data;
    }
    get mean() {
        let maine = 0;
        this.data.forEach((e) => (maine += e));
        return maine / this.data.length;
    }
    get variance() {
        let vari = 0;
        this.data.forEach((e) => (vari += (e - this.mean) ** 2));
        return vari / this.data.length;
    }
    get stdDeviation() {
        return Math.sqrt(this.variance);
    }
    setMean() {
        return this.mean;
    }
    setVar() {
        return this.variance;
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №477 Help Grinch steal Christmas from JS programmers (7kyu)
/*
Грінч хоче зіпсувати Різдво програмістам на JavaScript. Для цього він розробив пекельний план:
забруднити їхній прототип Date, щоб Різдва ніколи не було.
Він хоче змінити метод getDate of Date так, щоб він повертав 26 для об’єктів Date,
які представляють 25 грудня, але працювали правильно для всіх інших днів року.

Однак Грінч не знає, як це зробити. Чи можете ви йому допомогти?
*/

// Мій варіант
const originalGetDate = Date.prototype.getDate;

Date.prototype.getDate = function () {
    if (this.getMonth() === 11 && originalGetDate.call(this) === 25) {
        return 26;
    }
    return originalGetDate.call(this);
};

// Цікаві варіанти з Codewars
Date.prototype.getDate = function getGrinchDate() {
    let [day, month, date] = this.toString().split(" ");
    return month == 'Dec' && date == 25 ? 26 : +date;
};
//
Date.prototype.getDate = function getGrinchDate() {
    const month = this.getMonth()
    const date = this.getUTCDate()
    return month == 11 && date == 25 ? 26 : date
}
// ================================================================================================
// ================================================================================================
//*-Task №478 Last (7kyu)
/*
Знайти останній елемент поданого аргументу(ів). Якщо передано один аргумент, який є списком/масивом
або рядком, поверніть його останній елемент. Гарантується, що буде принаймні один аргумент і що
масиви/списки/рядки з одним аргументом не будуть порожніми.
last(5)               ==> 5
last([1, 2, 3, 4])    ==>  4
last("xyz")           ==> "z"
last(1, 2, 3, 4)      ==>  4
last([1, 2], [3, 4])  ==>  [3, 4]
last([[1, 2], [3, 4]])  ==>  [3, 4]
*/

// Мій варіант
function last(...args) {
    if (args.length === 1) {
        const singleArg = args[0];
        if (Array.isArray(singleArg) || typeof singleArg === 'string') {
            return singleArg[singleArg.length - 1];
        }
        return singleArg;
    } else {
        return args[args.length - 1];
    }
}

// Цікаві варіанти з Codewars
function last(first, ...rest) {
    if (rest.length) return rest.pop();
    if (first.length) return [...first].pop();
    return first;
}
// ================================================================================================
// ================================================================================================
//*-Task №479 (7kyu)
/*
Дано двовимірний (вкладений) список (масив, вектор, ..) розміром m * n, вашим завданням є знайти
суму мінімальних значень у кожному рядку.

Наприклад:
[
[ 1, 2, 3, 4, 5 ],        #  minimum value of row is 1,
[ 5, 6, 7, 8, 9 ],        #  minimum value of row is 5,
[ 20, 21, 34, 56, 100 ],  #  minimum value of row is 20
]
Отже, функція має повернути 26, оскільки сума мінімумів дорівнює 1 + 5 + 20 = 26.
Примітка. Вам завжди надаватиметься непорожній список із позитивними значеннями.
*/

// Мій варіант
function sumOfMinimums(arr) {
    return arr.reduce((sum, elem) => { return sum + Math.min(...elem) }, 0);
}

// Цікаві варіанти з Codewars
function sumOfMinimums_(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
}
// ================================================================================================
// ================================================================================================
//*-Task №480 Can this object fly? Balloons in "Up" and in real life (7kyu)
/*
Історія знаменитого мультфільму Disney-Pixar «Вгору» заснована на подорожі головного героя
Карла Фредріксена в його будинку, обладнаному повітряними кулями.

Але чи може це статися насправді? Які предмети можна піднімати за допомогою гелієвих кульок?
Скільки повітряних куль вам потрібно?

У цьому ката ви створите клас
Journey(object, crew, balloons)
тому будь-хто може створювати такі об’єкти
var gravityFalls = new Journey(house, 2, 20622)

що означає початок нової подорожі до Гравіті Фолз у будинку з 2 членами екіпажу (Карл і Рассел).

Але чи можлива ця подорож? Будинок попливе? Чи достатньо мати 20622 гелієвих кульки (кількість,
яку використовують аніматори Pixar у сцені підйому)?

Ваш клас Journey повинен мати відкритий метод isPossible(),
який повертає true або false відповідно до цих правил:
1). Кожен об’єкт (словник у Python), переданий у Journey, матиме властивість ваги, наприклад
var house = {"weight": 45000};
(ми будемо використовувати метричну систему в цьому ката, 45 000 кг - це приблизно 100 000 фунтів).
2). Кожен член екіпажу важить 80 кг.
3). Ми використовуємо повітряні кулі звичайного розміру, наповнені гелієм.
Кожна повітряна кулька піднімає 4,8 грама + власна вага.
Чи можете ви підняти крихітний візок вагою 95 кг (~ 200 фунтів) із 50 повітряними кульками,
як в одній із початкових сцен фільму?
Чи може одна повітряна куля справді нести повідомлення на одному аркуші паперу розміром із букву,
який Карл надіслав своїй вмираючій дружині Еллі в іншій сцені?
Чи може бути правдою історія, яку я чув про людину, яка літає на своєму газонному кріслі,
обладнаному 1000 повітряними кулями?
Ваша майстерність програмування відкриє відповіді на ці та багато інших важливих запитань у тестах.
Нехай подорож починається!
*/

// Мій варіант
class Journey {
    constructor(object, crew, balloons) {
        this.object = object;
        this.crew = crew;
        this.balloons = balloons;
    }
    isPossible() {
        const houseWeight = this.object.weight;
        const crewWeight = this.crew * 80;
        const liftingForceOfBalls = this.balloons * 4.8 / 1000;
        return houseWeight + crewWeight <= liftingForceOfBalls;
    }
}

// Цікаві варіанти з Codewars
class Journey_ {
    constructor(object, crew, balloons) {
        Object.assign(this, { object, crew, balloons });
    }

    isPossible() {
        return this.object.weight + this.crew * 80 < this.balloons * 0.0048;
    };
}
//
function Journey__(object, crew, balloons) {
    this.object = object;
    this.crew = crew;
    this.balloons = balloons;
}

Journey.prototype.isPossible = function () {
    return this.balloons * 0.0048 >= this.object.weight + this.crew * 80;
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1886шт
// console.time('timer_1');
// console.timeEnd('timer_1');