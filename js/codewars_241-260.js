//*-Task №241 Is it a number? (8kyu)
/*
Дано рядок s, напишіть метод (функцію), який повертатиме true, якщо це дійсне єдине ціле чи
число з плаваючою речовиною, або false, якщо це не так.

Правильні приклади мають повертати true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

має повернути false:
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
*/

// Мій варіант
function isDigit(s) {
    return /^[\s]*[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?[\s]*$/.test(s);
}
// Цікаві варіанти з Codewars
function isDigit_(s) {
    return s == parseFloat(s);
}
//
function isDigit__(s) {
    return parseFloat(s) === Number(s)
}
// ================================================================================================
// ================================================================================================
//*-Task №242 ES6 string addition (8kyu)
/*
Легко з’єднати дві струни разом, як це string1 + string2.
Ще один спосіб отримати бажаний результат – string1.concat(string2)

ES6 представив інший спосіб об’єднання рядків. Ваше завдання — з’ясувати, що це таке,
і написати функцію, яка складатиме два рядки разом, між двома рядками має бути пробіл.

+ , .concat() і .join() не будуть дозволені в цій вправі.
Я також видалив деякі інші методи, які можна використовувати для обману!
Якщо один із аргументів є числом, ваш код має перетворити його на рядок.
*/

// Мій варіант
function joinStrings(string1, string2) {
    return `${string1.toString()} ${string2.toString()}`;
}
// Цікаві варіанти з Codewars
function joinStrings_(string1, string2) {
    return `${string1} ${string2}`
}
// ================================================================================================
// ================================================================================================
//*-Task №243 Chuck Norris VII - True or False? (Beginner) (8kyu)
/*
Загальновідомий факт, що Чак Норріс отримує все, що хоче. У результаті Чаку дуже рідко доводиться
вживати слово брехня.
Менш відомий факт, що якщо щось правда, а Чак цього не хоче, Чак може налякати правду своїми
величезними біцепсами, і вона автоматично стає фальшивою.

Ваше завдання - бути більше схожим на Чака (га! удачі!). Ви повинні повернути false, ніколи не
використовуючи слово false.
Покажи трохи правди, хто тут господар!
*/

// Мій варіант
function ifChuckSaysSo() {
    return !true;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №244 Type of sum (8kyu)
/*
Повертає тип суми двох аргументів
*/

// Мій варіант
function typeOfSum(a, b) {
    return typeof (a + b);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №245 Enumerable Magic #1 - True for All? (8kyu)
/*
Створіть метод, який приймає два параметри:

- послідовність
- функція (вказівник на функцію в C)
і повертає true, якщо функція в параметрах повертає true для кожного елемента в послідовності.
В іншому випадку він повинен повернути false.
Якщо послідовність порожня, вона має повернути true, оскільки технічно нічого не пройшло перевірку.
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True
*/

// Мій варіант
function all(arr, fun) {
    return arr.every(fun);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №246 Thinkful - Number Drills: Blue and red marbles (8kyu)
/*
Ви з другом вирішили пограти в гру, щоб розвинути свою статистичну інтуїцію. Гра працює так:

У вас є купа червоних і синіх кульок. Щоб розпочати гру, ви берете жменю кульок кожного кольору та
кладете їх у мішок, відстежуючи, скільки кульок кожного кольору входить. Ви по черзі простягаєте руку
в мішок, вгадуєте колір, а потім витягуєте одну кульку. Ви отримуєте бал, якщо вгадали правильно.
Хитрість у тому, що у вас є лише три секунди, щоб зробити припущення, тому вам доведеться швидко думати.

Ви вирішили написати функцію guessBlue(), яка допоможе автоматично обчислити,
чи слід вгадати «синій» чи «червоний». Функція повинна приймати чотири аргументи:

кількість синіх кульок, які ви поклали в мішок для початку
кількість червоних кульок, які ви поклали в мішок для початку
кількість блакитних кульок, витягнутих на даний момент (завжди менше початкової кількості синіх кульок)
кількість червоних кульок, витягнутих на даний момент (завжди менше початкової кількості червоних кульок)
guessBlue() має повертати ймовірність малювання блакитної кульки,
виражену у вигляді числа з плаваючою точкою.
Наприклад, guessBlue(5, 5, 2, 3) має повернути 0,6.
*/

// Мій варіант
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const blue = blueStart - bluePulled;
    const red = redStart - redPulled;
    return blue / (red + blue);
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №247 Return to Sanity (8kyu)
/*
Ця функція має повертати об’єкт, але вона не виконує те, що задумано. Що не так?
*/

// Мій варіант
function mystery() {
    var results = { sanity: 'Hello' };
    return results;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №248 For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre (8kyu)
/*
Це ката для початківців, особливо для шанувальників UFC/MMA.

Це бій між двома легендами: Конор Макгрегор проти Джорджа Сен-П’єра в Медісон Сквер Гарден.
Лише один боєць залишиться стояти, а після бою в інтерв'ю Джо Рогану переможець зробить свою
легендарну заяву. Ваше завдання – повернути правильне твердження залежно від переможця!

Якщо переможцем стане Джордж Сен-П’єр, він, очевидно, скаже:
"I am not impressed by your performance.".

Якщо переможцем стане Конор МакГрегор, він, безсумнівно, скаже:
"I'd like to take this chance to apologize.. To absolutely NOBODY!"

Примітка
Ім’я може відрізнятися за регістром, наприклад, це може бути «George Saint Pierre» або
«geOrGe saiNT pieRRE». Ваше рішення має розглядати обидва як одне й те саме (незалежно від регістру).
*/

// Мій варіант
var quote = function (fighter) {
    const winner = fighter.toLowerCase();
    switch (winner) {
        case 'conor mcgregor':
            return "I'd like to take this chance to apologize.. To absolutely NOBODY!";

        case 'george saint pierre':
            return "I am not impressed by your performance.";
    }
};

// Цікаві варіанти з Codewars
var quote_ = function (fighter) {
    switch (fighter.toLowerCase()) {
        case 'conor mcgregor': return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
        case 'george saint pierre': return "I am not impressed by your performance.";
        default: 'Who are you?'
    }
};
// ================================================================================================
// ================================================================================================
//*-Task №249 Classy Classes (8kyu)
/*
Класні заняття
Основні класи, ця ката в основному спрямована на нове оновлення JS ES6, яке представляє класи

Завдання
Ваше завдання завершити цей клас, створено клас Person. Ви повинні заповнити метод Constructor,
щоб прийняти ім’я як рядок і вік як число, заповніть властивість get Info та метод getInfo/Info getter,
який має повернути Johns age is 34
*/

// Мій варіант
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info() {
        return `${this.name}s age is ${this.age}`;
    }
}

// Цікаві варіанти з Codewars
class Person_ {
    constructor(name, age) {
        this.info = `${name}s age is ${age}`;
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №250 Holiday VI - Shark Pontoon (8kyu)
/*
Ваш друг запрошує вас на прохолодний плавучий понтон приблизно за 1 км від пляжу.
Крім усього іншого, понтон має величезну гірку, яка скидає вас прямо в океан, трохи від сходів,
якими ви піднімаєтеся.

З'їжджаючи з гірки у воду, бачиш акулу, яка ширяє в темряві під понтоном... Хрень!
Перш ніж ви зможете дістатися до понтону, вам потрібно визначити, чи добереться до вас акула.
Щоб було легше... коли ви робите розумові розрахунки у воді, ви або завмираєте, коли розумієте,
що померли, або пливете, коли розумієте, що можете це зробити!

Вам дається 5 змінних;
sharkDistance = відстань від акули до понтона.
Акула з'їсть вас, якщо досягне вас до того, як ви втечете на понтон.

sharkSpeed = як швидко вона може рухатися в метрах/секунду.
pontoonDistance = скільки вам потрібно проплисти до безпечного місця в метрах.

youSpeed = швидкість, яку ви можете плисти в метрах/секунду.
dolphin = логічне значення, якщо істинно, ви можете вдвічі зменшити швидкість плавання акули,
оскільки дельфін нападе на неї.

Понтон, ви та акула розташовані в одному вимірі.

Якщо ви встигнете, поверніть "Alive!", якщо ні, поверніть "Shark Bait!".
*/

// Мій варіант
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) { sharkSpeed /= 2 }
    const timeForYou = pontoonDistance / youSpeed;
    const timeForShark = sharkDistance / sharkSpeed;

    if (timeForYou < timeForShark) {
        return "Alive!";
    } else {
        return "Shark Bait!";
    }
}

// Цікаві варіанти з Codewars
function shark_(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
        sharkSpeed /= 2;
    }
    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!";
}
// ================================================================================================
// ================================================================================================
//*-Task №251 Draw stairs (8kyu)
/*
Дано число n, намалюйте сходи за допомогою літери «I» заввишки n і ширини n, причому найвища вгорі
ліворуч.

Наприклад, n = 3 призводить до:
I
 I
  I
  Ще один приклад, сходи з 7 сходинок потрібно намалювати так:
I
 I
  I
   I
    I
     I
      I
*/

// Мій варіант
function drawStairs(n) {
    let stairs = '';
    for (let i = 0; i < n; i++) {
        stairs += ' '.repeat(i) + 'I';
        if (i !== n - 1) {
            stairs += '\n';
        }
    }
    return stairs;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №252 pick a set of first elements (8kyu)
/*
Напишіть функцію для отримання першого елемента(ів) послідовності.
Передача параметра n (за замовчуванням=1) поверне перші n елементів послідовності.
Якщо n == 0 повертає порожню послідовність []
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

// Мій варіант
function first(arr, n = 1) {
    return arr.slice(0, n);
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №253 Color Ghost (8kyu)
/*
Створіть клас Ghost
Об’єкти-привиди створюються без будь-яких аргументів.
При створенні об’єктів-привидів надається випадковий колірний атрибут «білий», «жовтий», «фіолетовий»
або «червоний».
ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

// Мій варіант
class Ghost {
    constructor() {
        const colors = ["white", "yellow", "purple", "red"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №254 Parse float (8kyu)
/*
Напишіть функцію parseF, яка приймає вхідні дані та повертає число або нуль, якщо перетворення неможливе.
Введення може бути одного з багатьох різних типів, тому майте на увазі.
*/

// Мій варіант
function parseF(input) {
    if (typeof input === 'number') {
        return input;
    } else if (typeof input === 'string' && !isNaN(parseFloat(input))) {
        return parseFloat(input);
    } else if (typeof input === 'boolean') {
        return null;
    } else {
        return null;
    }
}

// Цікаві варіанти з Codewars
function parseF_(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s);
}
// ================================================================================================
// ================================================================================================
//*-Task №255 Basic Training: Add item to an Array (8kyu)
/*
Додайте значення "codewars" до масиву веб-сайтів.
Після виконання вашого коду масив веб-сайтів має == ["codewars"]

Масив веб-сайтів уже визначено для вас за допомогою такого коду:
*/

// Мій варіант
websites.push("codewars");

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №256 Ensure question (8kyu)
/*
Дано рядок, напишіть функцію, яка повертає рядок зі знаком питання ("?"), доданим до кінця,
якщо вихідний рядок не закінчується знаком питання, у такому випадку повертає вихідний рядок.
*/

// Мій варіант
function ensureQuestion(s) {
    return s[s.length - 1] === "?" ? s : s + "?";
}

// Цікаві варіанти з Codewars
const ensureQuestion_ = s => s.endsWith('?') ? s : s + '?';
// ================================================================================================
// ================================================================================================
//*-залишилось 126шт
// console.time('timer_1');
// console.timeEnd('timer_1');