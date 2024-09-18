//*-Task №481 Create the base - Dungeon crawler #1 (7kyu)
/*
Створіть базу - Dungeon crawler #1
Ласкаво просимо до серії Dungeon crawler! У вас і ваших друзів виникла чудова ідея створити цей
чудовий текстовий сканер підземель для шкільного проекту. Оскільки ви вже професійний програміст,
вам дали завдання створити логіку та графіку (оскільки це лише текстова гра). По-перше, ви повинні
створити основу гри, вступ, ініціалізацію змінних, усі важливі базові речі!

завдання
Ваше завдання — створити всі базові класи, які ми будемо використовувати, використовуючи чотири
класи ```Game```, ```Player```, ```Monster``` і ```Map```.

Введення

Game
Параметри
name – параметр name буде використано для переходу до класу ```Player```, який потім зберігатиметься
в імені властивості ```player```.

level – Параметр рівня використовуватиметься для визначення складності гри, його потрібно зберегти у
властивості під назвою ```level```. Це має мати значення за замовчуванням 0.
ПОПЕРЕДЖЕННЯ: Ви також можете отримати рядок числа, якщо його розібрати, але якщо вам надано щось інше,
ніж дійсне int, тоді за замовчуванням 0

Властивості
player - Це має бути новий клас Player з назвою, яка використовується як параметр.
level - має зберігати рівень, переданий у конструктор.
floors - поки що це має бути порожній масив.

Player
Параметри
name – параметр name буде використано для переходу до класу ```Player```, який потім зберігатиметься
в імені властивості ```player```. Це має мати значення за замовчуванням "Player", якщо ім'я нульове,
порожнє або не є рядком.

Властивості
name - властивість name має бути ініціалізована параметром name, але якщо ім'я нульове або порожнє,
ви повинні використовувати 'Player'
health - властивість здоров'я повинна мати значення за замовчуванням ```100.00```
position - позиція повинна мати значення за замовчуванням об'єкта, який виглядає приблизно так: ```{x:0, y:0}```
damage - значення за замовчуванням пошкодження має бути ```10.00```
luck - удача повинна мати значення за замовчуванням ```1.00```

Monster
Параметри
рівень – Параметр рівня використовуватиметься для визначення складності гри, його потрібно зберегти у
властивості під назвою ```рівень```.

Властивості
level - має зберігати рівень, переданий у конструктор.

Map
Параметри
рівень – Параметр рівня використовуватиметься для визначення складності гри, його потрібно зберегти у
властивості під назвою ```рівень```.
Властивості
level - має зберігати рівень, переданий у конструктор.
*/

// Мій варіант
class Game {
    constructor(name, level = 0) {
        this.player = new Player(name);
        this.level = Number.isInteger(parseInt(level)) ? parseInt(level) : 0;
        this.floors = [];
    }
}

class Player {
    constructor(name = 'Player') {
        this.name =
            typeof name === 'string' && name.trim() !== '' ? name : 'Player';
        this.health = 100.0;
        this.position = { x: 0, y: 0 };
        this.damage = 10.0;
        this.luck = 1.0;
    }
}

class Monster {
    constructor(level) {
        this.level = level;
    }
}

class Map {
    constructor(level) {
        this.level = level;
    }
}

// Цікаві варіанти з Codewars
class Game {
    constructor(name, level = 0) {
        this.player = new Player(name);
        this.level = +level || 0;
        this.floors = [];
    }
}

class Player {
    constructor(name = 'Player') {
        this.name = typeof name !== 'string' || name == '' ? 'Player' : name;
        this.health = 100.0;
        this.position = { x: 0, y: 0 };
        this.damage = 10.0;
        this.luck = 1.0;
    }
}

class Monster {
    constructor(level) {
        this.level = level;
    }
}

class Map {
    constructor(level) {
        this.level = level;
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №482 Alternate capitalization (7kyu)
/*
Дано рядок, напишіть великі літери, які займають парні і непарні індекси окремо, і поверніть, як
показано нижче. Індекс 0 буде вважатися парним.

Наприклад, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. Більше прикладів див. у тестових випадках.
Введенням буде рядок у нижньому регістрі без пробілів.
*/

// Мій варіант
function capitalize(s) {
    let odd = '';
    let even = '';

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            odd += s[i].toUpperCase();
            even += s[i].toLowerCase();
        } else {
            odd += s[i].toLowerCase();
            even += s[i].toUpperCase();
        }
    }

    return [odd, even];
}

// Цікаві варіанти з Codewars
function capitalize_(s) {
    const odd = s
        .split('')
        .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
        .join('');
    const even = s
        .split('')
        .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
        .join('');
    return [even, odd];
}
// ================================================================================================
// ================================================================================================
//*-Task №483  (7kyu)
/*
Чи цифри по порядку?
У цьому Kata ваша функція отримує масив цілих чисел як вхідні дані. Ваше завдання визначити,
чи стоять числа в порядку зростання. Кажуть, що масив має порядок зростання, якщо немає двох суміжних
цілих чисел, де ліве ціле число перевищує значення правого цілого.

Для цілей цієї Kata ви можете припустити, що всі вхідні дані є дійсними, тобто масиви,
які містять лише цілі числа.

Зауважте, що масив з 0 або 1 цілих чисел автоматично вважається відсортованим у порядку зростання,
оскільки всі (нульові) суміжні пари цілих чисел задовольняють умову, що ліве ціле число не перевищує
значення правого цілого числа.

Наприклад:
inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
*/

// Мій варіант
function inAscOrder(arr) {
    return JSON.stringify(arr) === JSON.stringify(arr.sort((a, b) => a - b));
}

// Цікаві варіанти з Codewars
function inAscOrder_(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
//
function inAscOrder__(arr) {
    return arr.every((_, i) => i == 0 || arr[i] > arr[i - 1]);
}
//
const inAscOrder___ = (arr) =>
    arr.join('') === arr.sort((a, b) => a - b).join('');
// ================================================================================================
// ================================================================================================
//*-Task №484 Leap Years (7kyu)
/*
У цьому ката ви повинні просто визначити, чи є даний рік високосним чи ні. Якщо ви не знаєте правил,
ось вони:

Роки, які діляться на 4, є високосними,
але роки, які діляться на 100, не є високосними,
але роки, які діляться на 400, є високосними.
Перевірені роки знаходяться в діапазоні 1600 ≤ рік ≤ 4000.
*/

// Мій варіант
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
// Цікаві варіанти з Codewars
function isLeapYear_(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}
// ================================================================================================
// ================================================================================================
//*-Task №485 No oddities here (7kyu)
/*
Напишіть невелику функцію, яка повертає непарні значення масиву.
Усі значення в масиві будуть цілими. Поверніть правильні значення в тому порядку, в якому вони наведені.
*/

// Мій варіант
function noOdds(values) {
    return values.filter((num) => num % 2 === 0);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №486 Number of Decimal Digits (7kyu)
/*
Визначте загальну кількість цифр у цілому числі (n>=0), поданому як вхідні дані функції.
Наприклад, 9 — одна цифра, 66 — 2 цифри, а 128685 — 6 цифр. Будьте обережні,
щоб уникнути переливів/недостатків.

Усі введені дані будуть дійсними.
*/

// Мій варіант
function digits(n) {
    return `${n}`.length;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №487 Math Object Madness (7kyu)
/*
Математичне божевілля
Ви початківець/середній/досвідчений/старший/професіонал/розробник світового рівня (виберіть один),
який спеціалізується на Javascript. Одного разу ваш неслухняний молодший брат/сестра/що завгодно
заволодіє вашим дорогоцінним комп’ютером із усім програмним забезпеченням і функціями в ньому та
зуміє повністю знищити об’єкт Javascript Math! Будучи розробником, ви вирішуєте відновити якомога
більше функціональних можливостей.

Мета
Більшість, якщо не всі, функції вбудованого об’єкта Math Javascript вимкнено.
Ваша мета — відновити наступне:

Math.ceil(x)
Math.floor(x)
Math.round(x)
Math.abs(x)
Math.max(args[]) (УВАГА: у функцію буде передано змінну кількість аргументів)
Math.min(args[]) (УВАГА: у функцію буде передано змінну кількість аргументів)
Math.pow(x,y) (ви можете припустити, що експонента завжди додатне ціле число)
Ви також можете спробувати виправити інші методи, такі як Math.random() або Math.cos(), але ваш код
для інших методів не перевірятиметься.

Кредити
Ідея цього Ката не зовсім оригінальна; Заслуги належать «Math Issues» BattleRattle за те,
що надихнули мене на створення цієї ката.
*/

// Мій варіант (Подивився рішення)
Math.ceil = (x) => (x % 1 ? -~x : x);
Math.floor = (x) => ~~x;
Math.round = (x) => ~~(x + 0.5);
Math.abs = (x) => (x < 0 ? -x : x);
Math.max = (...xs) => xs.reduce((a, b) => (a < b ? b : a));
Math.min = (...xs) => xs.reduce((a, b) => (a < b ? a : b));
Math.pow = (x, y) => x ** y;

// Цікаві варіанти з Codewars
Math.ceil = (x) => (x % 1 == 0 ? x : x - (x % 1) + 1);
Math.floor = (x) => x - (x % 1);
Math.round = (x) => (x % 1 == 0 ? x : x - (x % 1) + (x % 1 >= 0.5 ? 1 : 0));
Math.abs = (x) => (x < 0 ? -x : x);
Math.max = function (...x) {
    return x.sort((a, b) => b - a)[0];
};
Math.min = function (...x) {
    return x.sort((a, b) => a - b)[0];
};
Math.pow = function (x, y) {
    var rs = 1;
    while (y--) rs *= x;
    return rs;
};
// ================================================================================================
// ================================================================================================
//*-Task №488 Remove duplicate words (7kyu)
/*
Ваше завдання — видалити всі повторювані слова з рядка, залишивши лише окремі (перші) слова.
Приклад:

Вхід:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Вихід:
'alpha beta gamma delta'
*/

// Мій варіант
function removeDuplicateWords(s) {
    return Array.from(new Set(s.split(' '))).join(' ');
}

// Цікаві варіанти з Codewars
const removeDuplicateWords_ = (str) =>
    str.replace(/\s(\w+)\b(?<=\b\1\b.*\1)/g, '');
// ================================================================================================
// ================================================================================================
//*-Task №489 Largest 5 digit number in a series (7kyu)
/*
У такому 6-значному номері:
283910
91 — найбільша послідовність із 2 послідовних цифр.

У наступному 10-значному номері:

1234567890
67890 — найбільша послідовність із 5 послідовних цифр.

Завершіть розв’язання так, щоб воно повернуло найбільшу послідовність із п’яти послідовних цифр
у заданому числі. Число буде передано як рядок із лише цифр. Він має повернути п’ятизначне ціле число.
Передане число може складатися з 1000 цифр.
*/

// Мій варіант
function solution(digits) {
    let maxSequence = 0;

    for (let i = 0; i <= digits.length - 5; i++) {
        let currentSequence = parseInt(digits.slice(i, i + 5));
        if (currentSequence > maxSequence) {
            maxSequence = currentSequence;
        }
    }

    return maxSequence;
}

// Цікаві варіанти з Codewars
function solution_(digits) {
    let numbers = digits.match(new RegExp(/9\d{4}/, 'g'));
    return Math.max.apply(0, numbers);
}
// ================================================================================================
// ================================================================================================
//*-Task №490 Row Weights (7kyu)
/*
Сценарій
Кілька людей стоять в ряд, розділені на дві команди.
Перший переходить до команди 1, другий — до команди 2, третій — до команди 1 і так далі.

Завдання
Маючи масив натуральних чисел (ваги людей), поверніть новий масив із двох цілих чисел,
де перше є загальною вагою команди 1, а друге — загальною вагою команди 2.

Примітки
Розмір масиву не менше 1.

Приклади
rowWeights([13, 27, 49])  ==>  return (62, 27)
rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
rowWeights([80])  ==>  return (80, 0)
*/

// Мій варіант
function rowWeights(array) {
    return array.reduce(
        ([teamWeight_1, teamWeight_2], weight, index) => {
            return index % 2 === 0
                ? [teamWeight_1 + weight, teamWeight_2]
                : [teamWeight_1, teamWeight_2 + weight];
        },
        [0, 0]
    );
}

// Цікаві варіанти з Codewars
function rowWeights_(array) {
    let t1 = array
        .filter((x, i) => i % 2 == 0)
        .reduce((a, item) => a + item, 0);
    let t2 = array
        .filter((x, i) => i % 2 != 0)
        .reduce((a, item) => a + item, 0);

    return [t1, t2];
}
// ================================================================================================
// ================================================================================================
//*-Task №491 The Coupon Code (7kyu)
/*
Розповідь
Ваш інтернет-магазин любить роздавати купони для особливих випадків.
Деякі клієнти намагаються обдурити систему, ввівши недійсні коди або використовуючи прострочені купони.

Завдання
Напишіть функцію під назвою checkCoupon, яка перевіряє, що код купона дійсний і не минув.

Купон не діє на наступний день ПІСЛЯ закінчення терміну дії.
Усі дати будуть передані як рядки в такому форматі: «ДАТА МІСЯЦЯ, РІК».

Приклади:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

// Мій варіант
function checkCoupon(
    enteredCode,
    correctCode,
    currentDateStr,
    expirationDateStr
) {
    let currentDate = new Date(currentDateStr);
    let expirationDate = new Date(expirationDateStr);

    return enteredCode === correctCode && currentDate <= expirationDate;
}

// Цікаві варіанти з Codewars
function checkCoupon_(enteredCode, correctCode, currentDate, expirationDate) {
    return (
        enteredCode === correctCode &&
        Date.parse(expirationDate) >= Date.parse(currentDate)
    );
}
// ================================================================================================
// ================================================================================================
//*-Task №492 Factorial (7kyu)
/*
Ваше завдання — написати факторіал функції.
*/

// Мій варіант
function factorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

// Цікаві варіанти з Codewars
const factorial_ = (n) => (n ? factorial_(n - 1) * n : 1);
//
function factorial__(n) {
    let answer = 1;

    while (n > 0) {
        answer *= n;
        n--;
    }

    return answer;
}
// ================================================================================================
// ================================================================================================
//*-Task №493 Maximum Length Difference (7kyu)
/*
Вам надано два масиви рядків a1 і a2. Кожен рядок складається з літер від a до z.
Нехай x — будь-який рядок у першому масиві, а y — будь-який рядок у другому масиві.

Знайти max(abs(length(x) − length(y))). Якщо a1 та/або a2 порожні, поверніть -1.

Приклад:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Баш нота:
вхід: 2 рядки з підрядками, розділеними символом ,
вихід: число у вигляді рядка
*/

// Мій варіант
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }

    const maxLenA1 = Math.max(...a1.map((str) => str.length));
    const minLenA1 = Math.min(...a1.map((str) => str.length));
    const maxLenA2 = Math.max(...a2.map((str) => str.length));
    const minLenA2 = Math.min(...a2.map((str) => str.length));

    return Math.max(
        Math.abs(maxLenA1 - minLenA2),
        Math.abs(maxLenA2 - minLenA1)
    );
}
// Цікаві варіанти з Codewars
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1;
    let l1 = a1.map((str) => str.length);
    let l2 = a2.map((str) => str.length);
    return Math.max(
        Math.max(...l1) - Math.min(...l2),
        Math.max(...l2) - Math.min(...l1)
    );
}
// ================================================================================================
// ================================================================================================
//*-Task №494 Largest pair sum in array (7kyu)
/*
Дано послідовність чисел, знайдіть найбільшу суму пари в цій послідовності.

Наприклад:
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Вхідна послідовність містить мінімум два елементи, і кожен елемент є цілим числом.
*/

// Мій варіант
function largestPairSum(numbers) {
    const sortedNumbers = numbers.sort((a, b) => b - a);
    return sortedNumbers[0] + sortedNumbers[1];
}

// Цікаві варіанти з Codewars
function largestPairSum_(numbers) {
    var [a, b] = numbers.sort((a, b) => b - a);
    return a + b;
}
// ================================================================================================
// ================================================================================================
//*-Task №495 Even numbers in an array (7kyu)
/*
Дано масив чисел, повертає новий масив довжини number, що містить останні парні числа з вихідного
масиву (у тому самому порядку). Вихідний масив не буде порожнім і міститиме принаймні "число" парних чисел.

Наприклад:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

// Мій варіант
function evenNumbers(array, number) {
    const evenArray = array.reduce((result, num) => {
        if (num % 2 === 0) {
            result = result.concat(num);
        }
        return result;
    }, []);
    return evenArray.slice(-number);
}
// Цікаві варіанти з Codewars
const evenNumbers_ = (array, number) =>
    array.filter((item) => item % 2 === 0).slice(-number);
// ================================================================================================
// ================================================================================================
//*-Task №496 (7kyu)
/*
Вам буде надано масив об’єктів, що представляють дані про розробників,
які зареєструвалися для участі в зустрічі програмістів, яку ви організовуєте вперше.

Ваше завдання — повернути кількість розробників JavaScript з Європи.

Наприклад, наведено такий список:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
ваша функція має повертати номер 1.

Якщо немає розробників JavaScript з Європи, то ваша функція має повернути 0.

Примітки:

Формат рядків завжди буде 'Europe' та 'JavaScript'.
Усі дані завжди будуть дійсними та єдиними, як у прикладі вище.
*/

// Мій варіант
function countDevelopers(list) {
    return list.reduce((counter, dev) => {
        if (dev.continent === 'Europe' && dev.language === 'JavaScript') {
            counter += 1;
        }
        return counter;
    }, 0);
}
// Цікаві варіанти з Codewars
function countDevelopers_(list) {
    return list.filter(
        (x) => x.continent == 'Europe' && x.language == 'JavaScript'
    ).length;
}
// ================================================================================================
// ================================================================================================
//*-Task №497 Love vs friendship (7kyu)
/*
Якщо　a = 1, b = 2, c = 3 ... z = 26
Тоді l + o + v + e = 54
і якщо f + r + i + e + n + d + s + h + i + p = 108

Тому дружба вдвічі сильніша за кохання :-)

Ваше завдання — написати функцію, яка обчислює значення слова на основі суми позицій його
символів у алфавіті.
Введення завжди складатиметься лише з малих літер і ніколи не буде порожнім.
*/

// Мій варіант
function wordsToMarks(string) {
    return string
        .split('')
        .reduce((sum, num) => (sum += num.charCodeAt(0) - 96), 0);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №498 (7kyu)
/*
Завершіть метод, який приймає масив цілих чисел і повертає одне з наступного:

"yes, ascending" - якщо числа в масиві відсортовані в порядку зростання
"yes, descending" - якщо числа в масиві відсортовані в порядку спадання
"no"" - інакше
Ви можете припустити, що масив завжди буде дійсним і завжди буде одна правильна відповідь.
*/

// Мій варіант
function isSortedAndHow(array) {
    const input = [...array].toString();
    const ascending = array.sort((a, b) => a - b).toString();
    const descending = array.sort((a, b) => b - a).toString();

    return input === ascending
        ? 'yes, ascending'
        : input === descending
        ? 'yes, descending'
        : 'no';
}
// Цікаві варіанти з Codewars
function isSortedAndHow_(arr) {
    return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
        ? 'yes, ascending'
        : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
        ? 'yes, descending'
        : 'no';
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1872шт
// console.time('timer_1');
// console.timeEnd('timer_1');
