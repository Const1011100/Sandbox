//*-Task №421 Don't give me five! (7kyu)
/*
Не дай мені п'ять!
У цій ката ви отримуєте початковий і кінцевий номер регіону, а також повинні повертати кількість
усіх чисел, крім чисел із 5. Початкове та кінцеве число включено!

Приклади:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

Результат може містити п'ятірки. ;-)
Початкове число завжди буде меншим за кінцеве. Обидва числа можуть бути також негативними!
Мені дуже цікаві ваші рішення та те, як ви це вирішуєте.
Можливо, хтось із вас знайде легке чисто математичне рішення.

Насолоджуйтесь кодуванням і, будь ласка, не забудьте проголосувати та оцінити це ката! :-)
Я також створив інші ката. Подивіться, якщо вам сподобалася ця ката!
*/

// Мій варіант
function dontGiveMeFive(start, end) {
    const numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers.filter(number => {
        if (number.toString().includes('5')) {
            return false;
        }
        return true;
    }).length;
}

// Цікаві варіанти з Codewars
function dontGiveMeFive_(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
        if (!/5/.test(i)) {
            count++
        }
    }
    return count
}
// ================================================================================================
// ================================================================================================
//*-Task №422 Sort array by string length (7kyu)
/*
Напишіть функцію, яка приймає масив рядків як аргумент і повертає відсортований масив, що містить ті
самі рядки, упорядковані від найкоротшого до найдовшого.

Наприклад, якщо цей масив передано як аргумент:
["Telescopes", "Glasses", "Eyes", "Monocles"]

Ваша функція поверне такий масив:
["Eyes", "Glasses", "Monocles", "Telescopes"]

Усі рядки в масиві, переданому вашій функції, будуть різної довжини, тому вам не доведеться вирішувати,
як упорядкувати кілька рядків однакової довжини.
*/

// Мій варіант
function sortByLength(array) {
    return array.sort((a, b) => {
        return a.length - b.length;
    });
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №423 Breaking chocolate problem (7kyu)
/*
Ваше завдання — розрізати плитку шоколаду заданих розмірів n x m на маленькі квадратики.
Кожен квадрат має розмір 1x1 і не розбивається. Реалізуйте функцію, яка повертатиме мінімальну
кількість необхідних розривів.

Наприклад, якщо вам дали плитку шоколаду розміром 2 х 1, ви можете розділити її на окремі квадрати
лише за один розрив, але для розміру 3 х 1 ви повинні зробити дві перерви.

Якщо вхідні дані недійсні, ви маєте повернути 0 (якщо перерви не потрібні, якщо у нас немає шоколаду
для розділення). Введення завжди буде невід’ємним цілим числом.
*/

// Мій варіант
function breakChocolate(n, m) {
    if (n <= 0 || m <= 0) { return 0 };
    return (n - 1) * m + (m - 1);
}
// Цікаві варіанти з Codewars
var breakChocolate_ = function (n, m) {
    return (n * m === 0) ? 0 : n * m - 1;
};
//
var breakChocolate__ = function (n, m) {
    return Math.max(0, m * n - 1);
};
// ================================================================================================
// ================================================================================================
//*-Task №424 Money, Money, Money (7kyu)
/*
Містер Скрудж має суму грошей «P», яку він хоче інвестувати. Перш ніж це зробити, він хоче знати,
скільки років «Y» цю суму «P» потрібно зберігати в банку, щоб вона склала бажану суму грошей «D».

Сума зберігається протягом «Y» років у банку, де щорічно виплачуються відсотки «I». Після сплати
податків «T» за рік нова сума реінвестується.

Примітка щодо податків: оподатковується не інвестована основна сума, а лише нараховані проценти за рік

Приклад:
Нехай P буде основним = 1000,00
Нехай I — процентна ставка = 0,05
Нехай T буде податковою ставкою = 0,18
Нехай D буде бажаною сумою = 1100,00

Після 1-го курсу --> P = 1041,00
Після 2 курсу --> P = 1083,86
Після 3 курсу --> P = 1128,30

Таким чином, містеру Скруджу доводиться чекати 3 роки, поки початкова сума не досягне бажаної суми.

Ваше завдання полягає в тому, щоб виконати запропонований метод і повернути кількість років «Y» в цілому,
щоб містер Скрудж отримав бажану суму.

Припущення: припустимо, що бажаний принципал «D» завжди більший за початковий принципал.
Однак найкраще взяти до уваги, що якщо бажаний принципал «D» дорівнює принципалу «P», це має повернути 0 років.
*/

// Мій варіант
function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    let P = principal;

    while (P < desired) {
        let I = P * interest;
        let T = tax * I;
        let bonus = I - T;
        years++;
        P += bonus;
    }
    return years;
}
// Цікаві варіанти з Codewars
function calculateYears_(principal, interest, tax, desired) {
    var years = 0;
    while (principal < desired) {
        principal += (principal * interest) * (1 - tax);
        years++;
    }
    return years;
}
// ================================================================================================
// ================================================================================================
//*-Task №425 Count the Digit (7kyu)
/*
Візьміть ціле число n (n >= 0) і цифру d (0 <= d <= 9) як ціле число.
Зведіть у квадрат усі числа k (0 <= k <= n) від 0 до n.
Підрахуйте кількість цифр d, які використовуються для запису всіх k**2.
Реалізуйте функцію, приймаючи n і d як параметри та повертаючи цей підрахунок.

приклади:
n = 10, d = 1
k*k дорівнює 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
Ми використовуємо цифру 1 у: 1, 16, 81, 100. Тоді загальна кількість дорівнює 4.

Функція, якщо n = 25 і d = 1 як аргумент, має повернути 11, оскільки
k*k, які містять цифру 1:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
Отже, є 11 цифр 1 для квадратів чисел від 0 до 25.
Зауважте, що 121 має подвоєну цифру 1.
*/

// Мій варіант
function nbDig(n, d) {
    let count = 0;

    const digit = d.toString();
    const regExp = new RegExp(`${digit}`, 'g');

    for (let i = 0; i <= n; i++) {
        const square = i * i;
        const matches = `${square}`.match(regExp);
        if (matches) {
            count += matches.length;
        }
    }

    return count;
}
// Цікаві варіанти з Codewars
function nbDig_(n, d) {
    var res = 0;
    for (var g = 0; g <= n; g++) {
        var square = (g * g + "").split("");
        square.forEach((s) => s == d ? res++ : null)
    }
    return res;
}
//
function nbDig__(n, d) {
    var o = '';
    for (var i = 0; i <= n; i++) {
        o += Math.pow(i, 2);
    }
    return o.split(d).length - 1
}
// ================================================================================================
// ================================================================================================
//*-Task №426 Make a function that does arithmetic! (7kyu)
/*
Дано два числа та арифметичний оператор (його ім’я у вигляді рядка), поверніть результат двох чисел,
для яких використовується цей оператор.

a і b обидва будуть натуральними числами, і a завжди буде першим числом в операції, а b завжди другим.

Чотири оператори: «додати», «відняти», «поділити», «помножити».
Кілька прикладів: (Вхід 1, Вхід 2, Вхід 3 --> Вихід)
5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Спробуйте зробити це без використання операторів if!
*/

// Мій варіант
function arithmetic(a, b, operator) {
    const operators = {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b,
    }
    return operators[operator];
}
// Цікаві варіанти з Codewars
function arithmetic_(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №427 Building blocks (7kyu)
/*
Напишіть клас Block, який створює блок (Duh..)

Вимоги
Конструктор повинен прийняти масив як аргумент, він міститиме 3 цілі числа у формі
[ширина, довжина, висота], з яких має бути створений блок.

Визначте ці методи:
`getWidth()` return the width of the `Block`
`getLength()` return the length of the `Block`
`getHeight()` return the height of the `Block`
`getVolume()` return the volume of the `Block`
`getSurfaceArea()` return the surface area of the `Block`

Приклад:
let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
b.getWidth() // -> 2
b.getLength() // -> 4
b.getHeight() // -> 6
b.getVolume() // -> 48
b.getSurfaceArea() // -> 88

Примітка: перевірка помилок не потрібна
Будь-який відгук буде дуже вдячний
*/

// Мій варіант
class Block {
    constructor(parameters) {
        this._width = parameters[0];
        this._length = parameters[1];
        this._height = parameters[2];
    }

    getWidth() {
        return this._width;
    }
    getLength() {
        return this._length;
    }
    getHeight() {
        return this._height;
    }
    getVolume() {
        return this._width * this._height * this._length;
    }
    getSurfaceArea() {
        return 2 * (this._width * this._length + this._length * this._height + this._height * this._width);
    }
}
// Цікаві варіанти з Codewars
class Block_ {
    constructor(data) {
        [this.w, this.l, this.h] = data;
    }
    getWidth() { return this.w }
    getLength() { return this.l }
    getHeight() { return this.h }
    getVolume() {
        let { l, w, h } = this;
        return w * l * h;
    }
    getSurfaceArea() {
        let { l, w, h } = this;
        return 2 * (l * w + l * h + w * h);
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №428 Refactored Greeting (7kyu)
/*
У наступному коді можна використати трохи об’єктно-орієнтованого мистецтва. Незважаючи на те, що
це простий метод і працює нормально, як є, у більшій системі найкраще організовувати методи в
класи/об’єкти. (Або, принаймні, щось подібне залежно від вашої мови)

Рефакторинг наступного коду, щоб він належав до класу/об’єкта Person. Кожен екземпляр Person матиме
метод привітання. Екземпляр Person має бути створений за допомогою імені, щоб його більше не потрібно
було передавати в кожному виклику методу greet.

Ось як буде використано остаточний оновлений код:
var joe = new Person('Joe');
joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
joe.name           // should == 'Joe'
*/

// Мій варіант
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(namePerson) {
        return `Hello ${namePerson}, my name is ${this.name}`;
    }
}
// Цікаві варіанти з Codewars
function Person_(name) {
    this.name = name
}

Person_.prototype.greet = function (yourName) {
    return "Hello " + yourName + ", my name is " + this.name
}
// ================================================================================================
// ================================================================================================
//*-Task №429 Find the middle element (7kyu)
/*
Як частину цього Kata, вам потрібно створити функцію, яка, якщо їй надано трійку, повертає індекс
числового елемента, який знаходиться між двома іншими елементами.
Вхідними даними для функції буде масив із трьох різних чисел (Haskell: кортеж).

Наприклад:
gimme([2, 3, 1]) => 0

2 — це число, яке вміщується між 1 і 3, а індекс 2 у вхідному масиві — 0.
Інший приклад (просто щоб переконатися, що це зрозуміло):
gimme([5, 10, 14]) => 1

10 – це число, яке вміщується між 5 і 14, а індекс 10 у вхідному масиві дорівнює 1.
*/

// Мій варіант
function gimme(triplet) {
    const sorted = [...triplet].sort((a, b) => a - b);
    return triplet.indexOf(sorted[1]);
}
// Цікаві варіанти з Codewars
function gimme_(a) {
    return a.indexOf(a.concat().sort(function (a, b) { return a - b })[1])
}
// ================================================================================================
// ================================================================================================
//*-Task №430 Sum of a sequence (7kyu)
/*
Ваше завдання — написати функцію, яка повертає суму послідовності цілих чисел.
Послідовність визначається 3 невід’ємними значеннями: початок, кінець, крок.
Якщо початкове значення більше ніж кінцеве, функція має повернути 0. Якщо кінцеве значення не є
результатом цілої кількості кроків, не додавайте його до суми. Дивіться 4-й приклад нижче.

Приклади:
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
*/

// Мій варіант
const sequenceSum = (begin, end, step) => {
    if (begin > end) { return 0 };
    let result = 0;
    for (let i = begin; i <= end; i += step) {
        result += i;
    }
    return result;
};
// Цікаві варіанти з Codewars
const sequenceSum_ = (begin, end, step) => {
    if (begin > end) {
        return 0;
    }
    return begin + sequenceSum_(begin + step, end, step);
};
// ================================================================================================
// ================================================================================================
//*-Task №431 Round up to the next multiple of 5 (7kyu)
/*
Якщо ввести ціле число, чи можна округлити його до наступного (тобто «більшого або рівного») кратного 5?
Приклади:
input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.

Введенням може бути будь-яке додатне або від’ємне ціле число (включно з 0).
Ви можете припустити, що всі вхідні дані є дійсними цілими числами.
*/

// Мій варіант
function roundToNext5(n) {
    return Math.ceil(n / 5) * 5;
}

// Цікаві варіанти з Codewars
function roundToNext5_(n) {
    // How much there is until the next multiple of 5
    const nToCeil5 = 5 - n % 5;
    // How much there is until the prev multiple of 5
    const nToFloor5 = n % 5;

    // If the number is already multiple of 5 just return it
    if (nToCeil5 == 5) return n;

    // For positive numbers just ceil it
    if (n > 0) return n + nToCeil5;

    // For negative numbers just floor it
    return n - nToFloor5;

}
// ================================================================================================
// ================================================================================================
//*-Task №432 Sort Numbers (7kyu)
/*
Завершіть розв’язання так, щоб воно сортувало переданий масив чисел. Якщо функція передає порожній
масив або значення null, вона має повернути порожній масив.

Наприклад:
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

// Мій варіант
function solution(nums) {
    return nums ? nums.sort((a, b) => a - b) : [];
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №433 Remove anchor from URL (7kyu)
/*
Завершіть функцію/метод так, щоб вона повертала URL-адресу з будь-чим після видалення прив’язки (#).

Приклади:
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// Мій варіант
function removeUrlAnchor(url) {
    return url.replace(/#.+/gi, '');
}

// Цікаві варіанти з Codewars
function removeUrlAnchor_(url) {
    return url.split('#')[0];
}
// ================================================================================================
// ================================================================================================
//*-Task №434 Find the capitals (7kyu)
/*
Напишіть функцію, яка приймає один непорожній рядок лише з малих і великих літер ascii (слово)
як аргумент і повертає впорядкований список, що містить індекси всіх великих (великих) літер у рядку.

Приклад (введення --> вихід)
"CodEWaRs" --> [0,3,4,6]
*/

// Мій варіант
var capitals = function (word) {
    const result = [];

    word.split('')
        .forEach((letter, index) => {
            if (letter === letter.toUpperCase()) {
                result.push(index);
            }
        })

    return result;
};

// Цікаві варіанти з Codewars
var capitals_ = function (word) {
    return word.split('').reduce(function (memo, v, i) {
        return v === v.toUpperCase() ? memo.concat(i) : memo;
    }, []);
};
// ================================================================================================
// ================================================================================================
//*-Task №435 Small enough? - Beginner (7kyu)
/*
Вам буде надано масив і граничне значення. Необхідно перевірити, чи всі значення в масиві нижчі
або дорівнюють граничному значенню. Якщо вони є, поверніть true. Інакше повернути false.

Ви можете припустити, що всі значення в масиві є числами.
*/

// Мій варіант
function smallEnough(a, limit) {
    return !a.some(num => num > limit);
}
// Цікаві варіанти з Codewars
function smallEnough_(a, limit) {
    return Math.max(...a) <= limit
}
//
const smallEnough__ = (a, l) => a.every(e => e <= l);
// ================================================================================================
// ================================================================================================
//*-Task №436 Two Oldest Ages (7kyu)
/*
Необхідно завершити функцію/метод двох найстаріших віків. Він повинен прийняти масив чисел як
аргумент і повернути два найвищі числа в масиві. Повернене значення має бути масивом у форматі
[другий найстарший вік, найстарший вік].

Порядок переданих чисел може бути будь-яким. Масив завжди включатиме принаймні 2 елементи.
Якщо є два чи більше найстаріших вікових показників, поверніть обидва з них у форматі масиву.

Наприклад (Вхід --> Вихід):
[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/

// Мій варіант
function twoOldestAges(ages) {
    ages.sort((a, b) => b - a)
    return [ages[1], ages[0]];
}

// Цікаві варіанти з Codewars
function twoOldestAges_(ages) {
    return ages.sort(function (a, b) { return a - b; }).slice(-2);
}
// ================================================================================================
// ================================================================================================
//*-Task №437 JavaScript Array Filter (7kyu)
/*
Масиви JavaScript підтримують функцію фільтра (починаючи з JavaScript 1.6). Використовуйте функцію
фільтра, щоб завершити надану функцію.

Рішення працюватиме так:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

// Мій варіант
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(num => num % 2 === 0);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №438 Anagram Detection (7kyu)
/*
Анаграма — це результат переставлення літер слова для отримання нового слова (див. Вікіпедію).
Примітка: анаграми нечутливі до регістру

Завершіть функцію, щоб повернути true, якщо два наведені аргументи є анаграмами один одного; інакше поверніть false.

Приклади:
"foefet" - це анаграма "toffee"
"Buckethead" є анаграмою "DeathCubeK"
*/

// Мій варіант
var isAnagram = function (test, original) {
    const test_ = test.toLowerCase()
        .split('')
        .sort()
        .join('');
    const original_ = original.toLowerCase()
        .split('')
        .sort()
        .join('');
    return test_ === original_;
};

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №439 Two fighters, one winner. (7kyu)
/*
Створіть функцію, яка повертає ім'я переможця в бою між двома бійцями.

Кожен боєць по черзі атакує іншого, і перемагає той, хто вб’є іншого першим.
Смерть визначається як стан здоров’я <= 0.

Кожен боєць буде об’єктом. Дивіться клас Fighter нижче вибраною мовою.
І здоров’я, і damagePerAttack будуть цілими числами, більшими за 0. Ви можете змінити об’єкти Fighter.
Ваша функція також отримує третій аргумент, рядок, з іменем бійця, який атакує першим.

Приклад:
declare_winner(Fighter("Лью", 10, 2), Fighter("Гаррі", 5, 4), "Лью") => "Лью"

Лью нападає на Гаррі; Тепер у Гаррі 3 здоров'я.
Гаррі нападає на Лью; Тепер у Лью 6 очок здоров’я.
Лью нападає на Гаррі; Гаррі тепер має 1 здоров'я.
Гаррі нападає на Лью; Тепер у Лью 2 здоров’я.
Лью атакує Гаррі: Гаррі тепер має -1 здоров'я і мертвий. Лью перемагає.

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

// Мій варіант
function declareWinner(fighter1, fighter2, firstAttacker) {
    if (firstAttacker === fighter1.name) {
        while (fighter1.health > 0 && fighter2.health > 0) {
            fighter2.health -= fighter1.damagePerAttack;
            if (fighter2.health <= 0) { return fighter1.name };

            fighter1.health -= fighter2.damagePerAttack;
            if (fighter1.health <= 0) { return fighter2.name };
        }
    } else {
        while (fighter1.health > 0 && fighter2.health > 0) {
            fighter1.health -= fighter2.damagePerAttack;
            if (fighter1.health <= 0) { return fighter2.name };

            fighter2.health -= fighter1.damagePerAttack;
            if (fighter2.health <= 0) { return fighter1.name };
        }
    }
}

// Цікаві варіанти з Codewars
function declareWinner_(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    if (fac1 < fac2) {
        return fighter2.name;
    } else if (fac2 < fac1) {
        return fighter1.name;
    } else {
        return firstAttacker;
    }
}
//
function declareWinner__(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack;
        fighter1.health -= fighter2.damagePerAttack;
    }

    if (fighter1.health <= 0 && fighter2.health <= 0)
        return firstAttacker;
    else if (fighter1.health <= 0)
        return fighter2.name;
    else
        return fighter1.name;
}
// ================================================================================================
// ================================================================================================
//*-Task №440 Simple Fun #176: Reverse Letter (7kyu)
/*
Дано рядок str, перевернути його та опустити всі неалфавітні символи.

Приклад:
Для str = "krishan" результат має бути "nahsirk".
Для str = "ultr53o?n" вихід має бути "nortlu".

*/

// Мій варіант
function reverseLetter(str) {
    const result = str.split('').reverse().filter(letter => {
        if (/[A-Za-z]/.test(letter)) {
            return letter;
        }
    })
    return result.join('');
}

// Цікаві варіанти з Codewars
const reverseLetter_ = str => str.match(/[a-z]/g).reverse().join('');
// ================================================================================================
// ================================================================================================
//*-залишилось 1923шт
// console.time('timer_1');
// console.timeEnd('timer_1');