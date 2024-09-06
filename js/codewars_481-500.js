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
    constructor(name = "Player") {
        this.name = typeof name === 'string' && name.trim() !== '' ? name : "Player";
        this.health = 100.00;
        this.position = { x: 0, y: 0 };
        this.damage = 10.00;
        this.luck = 1.00;
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
        this.name = typeof (name) !== 'string' || name == '' ? 'Player' : name;
        this.health = 100.00;
        this.position = { x: 0, y: 0 };
        this.damage = 10.00;
        this.luck = 1.00;
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
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};
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
const inAscOrder___ = arr => arr.join('') === arr.sort((a, b) => a - b).join('');
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
    return values.filter(num => num % 2 === 0);
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
//*-залишилось 1882шт
// console.time('timer_1');
// console.timeEnd('timer_1');