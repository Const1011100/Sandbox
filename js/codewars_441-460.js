//*-Task №441 Factorial (7kyu)
/*
У математиці факторіал цілого невід’ємного числа n, що позначається n!, є добутком усіх натуральних
чисел, менших або рівних n. Наприклад: 5! = 5 * 4 * 3 * 2 * 1 = 120. За домовленістю значення 0! дорівнює 1.

Напишіть функцію для обчислення факторіалу для заданого вхідного параметра.
Якщо вхідні дані нижче 0 або вище 12, викидайте виняток типу ArgumentOutOfRangeException (C#) або
IllegalArgumentException (Java) чи RangeException (PHP) або викидайте RangeError (JavaScript)
чи ValueError (Python) або повертайте -1 (C).
*/

// Мій варіант
function factorial(n) {
    if (n < 0 || n > 12) {
        throw new RangeError("Input should be between 0 and 12 inclusive.");
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

// Цікаві варіанти з Codewars
function factorial_(n) {
    if (n < 0 || n > 12)
        throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
}
// ================================================================================================
// ================================================================================================
//*-Task №442 Check the exam (7kyu)
/*
Перший вхідний масив є ключем до правильних відповідей на іспиті, наприклад ["a", "a", "b", "d"].
Другий містить надіслані студентом відповіді.

Два масиви не порожні та мають однакову довжину. Поверніть оцінку для цього масиву відповідей,
даючи +4 для кожної правильної відповіді, -1 для кожної неправильної відповіді та +0 для кожної пустої
відповіді, представленої у вигляді порожнього рядка (у C використовується символ пробілу).

Якщо оцінка < 0, поверніть 0.

Наприклад:
    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0
*/

// Мій варіант
function checkExam(array1, array2) {
    let score = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            score += 4;
        }
        if (array1[i] !== array2[i] && array2[i] !== '') {
            score -= 1;
        }
    }
    return score > 0 ? score : 0;
}

// Цікаві варіанти з Codewars
const checkExam_ = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;
// ================================================================================================
// ================================================================================================
//*-Task №443 Summing a number's digits (7kyu)
/*
Напишіть функцію sumDigits, яка приймає число як вхідні дані та повертає суму абсолютного значення
кожної десяткової цифри числа.

Наприклад: (Вхід --> Вихід)
10 --> 1
99 --> 18
-32 --> 5
Припустимо, що всі числа у вхідних даних будуть цілими.
*/

// Мій варіант
function sumDigits(number) {
    return Math.abs(number)
        .toString()
        .split('')
        .reduce((sum, num) => sum + Number(num), 0);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №444 Fix string case (7kyu)
/*
У цій ката вам буде надано рядок, у якому можуть бути змішані великі та малі літери, і ваше завдання
полягає в тому, щоб перетворити цей рядок лише на нижній або лише на верхній регістр на основі:

вносити якомога менше змін.
якщо рядок містить однакову кількість великих і малих літер, перетворити рядок на нижній регістр.
Наприклад:
solve("coDe") = "code". Малі символи > великі. Змініть лише «D» на малі літери.
solve("CODe") = "CODE". Великі символи > малі. Змініть лише «е» на велику.
solve("coDE") = "code". Великі == малі літери. Змінити все на малі літери.
*/

// Мій варіант
function solve(s){
    let low = 0;
    let up = 0;
    const targetStr = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        s[i] === targetStr[i] ? low++ : up++;
    }
    return low >= up ? targetStr : s.toUpperCase();
}
// Цікаві варіанти з Codewars
function solve_(s) {
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase()
}
//
const solve__ = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()
// ================================================================================================
// ================================================================================================
//*-Task №445 Form The Minimum (7kyu)
/*
Дано список цифр, поверніть найменше число, яке можна сформувати з цих цифр,
використовуючи цифри лише один раз (ігноруйте дублікати).

Примітки:
До функції будуть передані лише додатні цілі числа (> 0), жодних негативних або нулів.
Вхід >> Вихід Приклади
minValue ([1, 3, 1])  ==> return (13)
minValue([5, 7, 5, 9, 7])  ==> return (579)
minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]) return  ==> (134679)
*/

// Мій варіант
function minValue(values) {
    const uniqueNumbersObj = new Set(values)
    const uniqueNumbersArray = Array.from(uniqueNumbersObj);
    return Number(uniqueNumbersArray.sort((a, b) => a - b).join(''));
}
// Цікаві варіанти з Codewars
function minValue_(values) {
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
}
//
function minValue__(values) {
    return Number(Array.from(new Set(values)).sort().join(''))
}
// ================================================================================================
// ================================================================================================
//*-Task №446 Maximum Multiple (7kyu)
/*
Дано дільник і межу. Знайдіть найбільше ціле число N, таке, що

Умови:
N ділиться на дільник
N менше або дорівнює обмеженню
N більше за 0.

Примітки
Параметри (дільник, межа), що передаються до функції, є лише додатними значеннями.
Гарантовано, що дільник знайдено.

Приклад:
дільник = 2, межа = 7 ==> повернення (6)
Пояснення:
(6) ділиться на (2) , (6) менше або дорівнює межі (7) , а (6) > 0 .

divisor = 10, bound = 50 ==> return (50)
divisor = 37, bound = 200 ==> return (185)
*/

// Мій варіант
function maxMultiple(divisor, bound) {
    return bound - bound % divisor;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №447 Fun with ES6 Classes #2 - Animals and Inheritance (7kyu)
/*
Для вас у цій Каті попередньо завантажено клас Animal:
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

Визначте наступні класи, які успадковуються від Animal.

І. Акула
Функція-конструктор для Shark має приймати загалом 3 аргументи в такому порядку: ім’я, вік, статус.
Усі акули повинні мати кількість ніг 0 (оскільки вони, очевидно, не мають ніг) і повинні мати вид "акули".

II. кішка
Функція-конструктор для Cat повинна приймати ті ж 3 аргументи, що і для Shark: ім’я, вік, статус.
Коти завжди повинні мати кількість ніг 4 і вид "кішка".

Крім того, метод введення/представлення для Cat має бути ідентичним оригіналу,
за винятком того, що має бути рівно 2 пробіли та слова "Мяу-мяу!" після фрази. Наприклад:
var example = new Cat("Example", 10, "Happy");
example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important

III. Пес
Конструктор Dog повинен приймати 4 аргументи у вказаному порядку: ім'я, вік, статус, господар.
master - це ім'я господаря собаки, яке буде рядком. Крім того, собаки повинні мати 4 ноги і вид «собака».

Собаки мають ідентичний метод впровадження/представлення, як і будь-яка інша тварина, але вони мають
власний метод під назвою greetMaster/GreetMaster, який не приймає аргументів і повертає «Hello (insert_master_name_here)»
(звичайно, не літеральний рядок, але замініть (insert_master_name_here) на ім'я господаря собаки).
*/

// Мій варіант
class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'cat', status);
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, 'dog', status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №448 What a "Classy" Song (7kyu)
/*
Ваше завдання — створити клас під назвою Song.
Нова пісня матиме два параметри: назву та виконавця.
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
mountMoose.title => 'Mount Moose'
mountMoose.artist => 'The Snazzy Moose'

Вам також доведеться створити екземпляр методу під назвою howMany().

Метод бере участь у групі людей, які слухали пісню того дня. На виході має бути кількість нових слухачів,
які пісня отримала в той день із усіх слухачів. Імена слід трактувати без урахування регістру,
тобто "Іван" - це те саме, що "іван".

приклад
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1 (or test 1)
mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// Це все нові, оскільки вони перші слухачі.

// day 2
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// Люк і Аманда новачки, Джон уже слухав це напередодні

Крім того, якщо одна й та сама особа слухала це більше одного разу на день, її слід рахувати лише один раз.
приклад
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1
mountMoose.howMany(['John', 'joHN', 'carl']); => 2
*/

// Мій варіант
class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.listeners = new Set();
    }

    howMany(listenersToday) {
        const lowercaseListeners = new Set(listenersToday.map(listener => listener.toLowerCase()));
        let newListenersCount = 0;
        lowercaseListeners.forEach(listener => {
            if (!this.listeners.has(listener)) {
                newListenersCount++;
                this.listeners.add(listener);
            }
        });

        return newListenersCount;
    }
}

// Цікаві варіанти з Codewars
class Song_ {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.listener = new Set()
    };
    howMany(people) {
        let oldSize = this.listener.size;
        people.map(p => this.listener.add(p.toLowerCase()));
        return this.listener.size - oldSize;
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №449 Fun with ES6 Classes #3 - Cuboids, Cubes and Getters (7kyu)
/*
Дайте визначення наступним класам.

І. Cuboid
Конструктор об’єкта для класу Cuboid повинен отримати рівно три аргументи в такому порядку:
length, width, height і зберегти ці три значення в this.length, this.width і this.height відповідно.

Тоді клас Cuboid повинен мати геттер surfaceArea, який повертає площу поверхні кубоїда,
і геттер volume, який повертає об’єм кубоїда.

II. Cube
клас Cube є підкласом класу Cuboid. Функція-конструктор Cube має отримувати лише один аргумент,
його довжину, і використовувати передане значення для встановлення this.length, this.width і this.height.

Підказка: зробіть виклик super, передаючи правильні аргументи, щоб полегшити життя ;)
*/

// Мій варіант
class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    get surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);;
    }

    get volume() {
        return this.length * this.width * this.height;
    }
}
class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №450 Thinkful - Object Drills: Quarks (7kyu)
/*
Ви моделюєте взаємодію між великою кількістю кварків і вирішили створити клас Quark,
щоб ви могли генерувати власні об’єкти кварків.
Кварки є фундаментальними частинками і єдиними фундаментальними частинками, які відчувають усі
чотири фундаментальні сили.

Ваше завдання
Ваш клас Quark повинен дозволяти вам створювати кварки будь-якого допустимого кольору
(«червоний», «синій» і «зелений») і будь-якого допустимого смаку («вгору», «вниз», «дивний», «чарівний», «верхній» 'і 'внизу').

Кожен кварк має те саме баріонове число (BaryonNumber у C#): 1/3.
Кожен кварк повинен мати метод .interact(), який дозволяє будь-якому кварку взаємодіяти з іншим
кварком за допомогою сильної сили. Коли два кварки взаємодіють, вони обмінюються кольорами.

приклад
>>> q1 = Quark("red", "up")
>>> q1.color
"red"
>>> q1.flavor
"up"
>>> q2 = Quark("blue", "strange")
>>> q2.color
"blue"
>>> q2.baryon_number
0.3333333333333333
>>> q1.interact(q2)
>>> q1.color
"blue"
>>> q2.color
"red"
*/

// Мій варіант
class Quark {
    constructor(color, flavor) {
        this.color = color;
        this.flavor = flavor;
        this.baryon_number = 1 / 3;
    }

    static isValidColor(color) {
        return ['red', 'blue', 'green'].includes(color);
    }

    static isValidFlavor(flavor) {
        return ['up', 'down', 'strange', 'charm', 'top', 'bottom'].includes(flavor);
    }

    interact(otherQuark) {
        if (!(otherQuark instanceof Quark)) {
            throw new Error('Interaction must be with another Quark object.');
        }

        const tempColor = this.color;
        this.color = otherQuark.color;
        otherQuark.color = tempColor;
    }
}

// Цікаві варіанти з Codewars
class Quark_ {
    constructor(color, flavor) {
        this.color = color
        this.flavor = flavor
        this.baryon_number = 1 / 3
    }
    interact(other) {
        [this.color, other.color] = [other.color, this.color]
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №451 avaScript class-like objects (7kyu)
/*
Для цієї вправи вам слід створити об’єкт на зразок класу JavaScript під назвою «Animal»,
який приймає аргументи «name» і «type». Він повинен мати метод toString, який повертає зрозумілий
рядок із зазначенням переданої інформації аргументу. Він також повинен дозволяти установку властивості name.

Нижче наведено приклад того, як використовуватиметься кінцевий код і якими мають бути очікувані
значення, що повертаються:
var dog = new Animal('Max', 'dog');
dog.toString(); // should return 'Max is a dog'
dog.type; // should == 'dog'
dog.name; // should == 'Max'
dog.name = 'Lassie'; // should set name to 'Lassie'
*/

// Мій варіант
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    toString() {
        return `${this.name} is a ${this.type}`;
    }
}

// Цікаві варіанти з Codewars
var Animal_ = function (name, type) {
    this.name = name;
    this.type = type;
}
Animal_.prototype.toString = function () {
    return this.name + ' is a ' + this.type;
}
// ================================================================================================
// ================================================================================================
//*-Task №452 You Can't Code Under Pressure #2 (7kyu)
/*
Вам потрібно створити функцію-конструктор із двома методами (і тільки цими двома методами), щоб
повертати та збільшувати лічильник, але лічильник не повинен бути доступним безпосередньо ззовні функції.
*/

// Мій варіант
function Counter() {
    let _counter = 0;
    this.check = function () {
        return _counter;
    }
    this.increment = function () {
        _counter++;
    }
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №453 SantaClausable Interface (7kyu)
/*
Ви, мабуть, знаєте, що в Javascript немає поняття інтерфейсів. Існує лише концепція успадкування,
але ви не можете припустити, що певний метод або властивість існує лише тому, що воно існує в
батьківському прототипі/класі. Ми хочемо з'ясувати, чи відповідає даний об'єкт вимогам для реалізації
інтерфейсу «SantaClausable». Нам потрібно реалізувати метод, який перевіряє цей інтерфейс.

Правила
Інтерфейс SantaClausable реалізовано, якщо для об’єкта визначено всі наступні методи:
sayHoHoHo()
distributeGifts()
goDownTheChimney()

Приклад
var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

isSantaClausable(santa); // must return TRUE
isSantaClausable(notSanta); // must return FALSE
*/

// Мій варіант
function isSantaClausable(obj) {
    return (
        typeof obj.sayHoHoHo === 'function' &&
        typeof obj.distributeGifts === 'function' &&
        typeof obj.goDownTheChimney === 'function'
    );
}
// Цікаві варіанти з Codewars
function isSantaClausable_(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function (methodName) {
        return typeof obj[methodName] == 'function';
    });
}
// ================================================================================================
// ================================================================================================
//*-Task №454 Re-open class (7kyu)
/*
Ruby та Javascript дозволяють повторно відкривати класи, щоб ви могли додавати нові функції до
існуючих класів та об’єктів.

Щоб продемонструвати це, вам доведеться додати новий метод myNewMethod у клас String, який просто
викликає метод toUpperCase() щоб:

повертається
"ABC"
*/

// Мій варіант
String.prototype.myNewMethod = function () {
    return this.toUpperCase();
}
// Цікаві варіанти з Codewars
String.prototype.myNewMethod = String.prototype.toUpperCase;
// ================================================================================================
// ================================================================================================
//*-Task №455 Double value every next call (7kyu)
/*
Ця ката стосується статичного методу, який має повертати різні значення.
При першому виклику воно повинно бути 1, при другому та інших - воно повинно бути подвійним від
попереднього значення.
Подивіться тести, щоб отримати більше прикладів, удачі :)
*/

// Мій варіант
class Class {
    static getNumber() {
        this.counter;
        if (!this.counter) {
            return this.counter = 1;
        } else {
            return this.counter *= 2;
        }
        return this.counter;
    }
}
// Цікаві варіанти з Codewars
class Class_ {
    static number = 1

    static getNumber() {
        const currentVal = Class_.number;
        Class_.number *= 2;
        return currentVal;
    }
}
//
class Class__ {
    static #last = -1;
    static getNumber() {
        return Math.pow(2, ++Class__.#last);
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №456 Thinkful - Object Drills: Vectors (7kyu)
/*
Створіть клас Vector з атрибутами x і a y, які представляють величини компонентів у напрямках x і y.

Ваші вектори повинні обробляти додавання векторів за допомогою методу .add(), який приймає другий
вектор як аргумент і повертає новий вектор, що дорівнює сумі вектора, для якого ви викликаєте .add(),
і вектора, який ви передаєте.

Наприклад:
>>> a = Vector(3, 4)
>>> a.x
3
>>> a.y
4
>>> b = Vector(1, 2)
>>> c = a.add(b)
>>> c.x
4
>>> c.y
6
*/

// Мій варіант
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        let newX = this.x + other.x;
        let newY = this.y + other.y;
        return new Vector(newX, newY);
    }
}
// Цікаві варіанти з Codewars
class Vector_ {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    add(vector) {
        return new Vector_(this.x + vector.x, this.y + vector.y)
    }
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1907шт
// console.time('timer_1');
// console.timeEnd('timer_1');