//*-Task №383 Vowel Count (7kyu)
/*
Повертає кількість голосних у заданому рядку.
Ми будемо розглядати (a, e, i, o, u) як голосні для цієї ката (але не y).
Рядок введення складатиметься лише з малих літер та/або пробілів.
*/

// Мій варіант
function getCount(str) {
    const targets = ['a', 'e', 'i', 'o', 'u'];
    let allMatches = 0;
    for (let i = 0; i < targets.length; i++) {
        const regExp = new RegExp(`${targets[i]}`, 'g');
        let matches = str.match(regExp);
        if (matches !== null) {
            allMatches += matches.length;
        }
    }
    return allMatches;
}
// Цікаві варіанти з Codewars
function getCount_(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}
// ================================================================================================
// ================================================================================================
//*-Task №384 Disemvowel Trolls (7kyu)
/*
Тролі атакують ваш розділ коментарів!
Поширеним способом вирішення цієї ситуації є видалення всіх голосних із коментарів тролів,
нейтралізуючи загрозу.

Ваше завдання — написати функцію, яка приймає рядок і повертає новий рядок із видаленням усіх голосних.
Наприклад, рядок "This website is for losers LOL!" стане "Ths wbst s fr lsrs LL!".

Примітка: для цієї ката y не вважається голосною.
*/

// Мій варіант
function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const symbols = str.split('');
    const result = [];
    symbols.forEach(symbol => {
        if (!vowels.includes(symbol)) { result.push(symbol) };
    });
    return result.join('');
}
// Цікаві варіанти з Codewars
function disemvowel_(str) {
    const vowels = 'aeiouAEIOU';

    return str
        .split('')
        .filter(char => !vowels.includes(char))
        .join('');
}
//
function disemvowel__(str) {
    return str.replace(/[aeiou]/gi, '');
}
// ================================================================================================
// ================================================================================================
//*-Task №385 Square Every Digit (7kyu)
/*
Ласкаво просимо. У цій ката вас просять звести в квадрат кожну цифру числа та об’єднати їх.

Наприклад, якщо ми запустимо 9119 через функцію, вийде 811181. (81-1-1-81)
Приклад №2: введення 765 повертатиме 493625. (49-36-25)

Примітка: функція приймає ціле число та повертає ціле число.
Щасливого кодування!
*/

// Мій варіант
function squareDigits(num) {
    const numbers = num.toString().split('');
    const square  = numbers.map(number => { return (+number) ** 2} );
    const newNumber = square .join('');
    return +newNumber;
}
// Цікаві варіанти з Codewars
function squareDigits_(num) {
    return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
}
// ================================================================================================
// ================================================================================================
//*-Task №386 Highest and Lowest (7kyu)
/*
У цьому маленькому завданні вам надається рядок чисел, розділених пробілами, і ви повинні повернути
найбільше та найменше число.

Приклади:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Примітки:
Усі числа є дійсними Int32, перевіряти їх не потрібно.
У вхідному рядку завжди буде принаймні одне число.
Вихідний рядок має складатися з двох чисел, розділених одним пробілом, причому першим є найвище число.
*/

// Мій варіант
function highAndLow(numbers) {
    const maxNum = Math.max(...numbers.split(' '));
    const minNum = Math.min(...numbers.split(' '));
    return `${maxNum} ${minNum}`;
}
// Цікаві варіанти з Codewars
function highAndLow_(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
// ================================================================================================
// ================================================================================================
//*-Task №387 Descending Order (7kyu)
/*
Ваше завдання полягає в тому, щоб створити функцію, яка може приймати будь-яке невід’ємне ціле число
як аргумент і повертати його разом із цифрами в порядку спадання. По суті, переставте цифри, щоб
отримати найбільше можливе число.

Приклади:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

// Мій варіант
function descendingOrder(n) {
    const result = n.toString()
        .split('')
        .map(elem => Number(elem))
        .sort((a, b) => b - a)
        .join('');

    return Number(result);
}
// Цікаві варіанти з Codewars
function descendingOrder_(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}
// ================================================================================================
// ================================================================================================
//*-Task №388 List Filtering (7kyu)
/*
У цій ката ви створите функцію, яка приймає список невід’ємних цілих чисел і рядків і повертає
новий список із відфільтрованими рядками.
Приклад:
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// Мій варіант
function filter_list(l) {
    return l.filter(elem => typeof elem === 'number');
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №389 Get the Middle Character (7kyu)
/*
Вам дадуть слово. Ваше завдання - повернути середній символ слова. Якщо довжина слова непарна,
поверніть середній символ. Якщо довжина слова парна, поверніть 2 середніх символи.
Приклади:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

Введення
Слово (рядок) довжиною 0 < str < 1000 (у javascript ви можете отримати трохи більше 1000 у деяких тестах
через помилку в тестах). Тестувати для цього не потрібно. Це лише для того, щоб сказати вам, що вам
не потрібно турбуватися про те, що час очікування вашого рішення закінчиться.

Вихід
Середній символ(и) слова, представленого у вигляді рядка.
*/

// Мій варіант
function getMiddle(s) {
    const size = s.length;
    if (size % 2 === 0) { return `${s[size / 2 - 1]}${s[size / 2]}` };
    return `${s[Math.floor(size / 2)]}`;
}
// Цікаві варіанти з Codewars
function getMiddle_(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
//
function getMiddle__(s) {
    var middle = s.length / 2;
    return (s.length % 2)
        ? s.charAt(Math.floor(middle))
        : s.slice(middle - 1, middle + 1);
}
// ================================================================================================
// ================================================================================================
//*-Task №390 Mumbling (7kyu)
/*
Цього разу ні історії, ні теорії. Наведені нижче приклади показують, як написати функцію accum:
Приклади:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
Параметр accum — це рядок, який містить лише літери з a..z та A..Z.
*/

// Мій варіант
function accum(inputString) {
    const lowerCaseLetters = inputString.toLowerCase().split('');
    const accumulatedStrings = [];
    for (let i = 0; i < lowerCaseLetters.length; i++) {
        accumulatedStrings.push(''.padStart(i + 1, lowerCaseLetters[i]));
    }
    const capitalizedStrings = accumulatedStrings.map((elem) => { return elem[0].toUpperCase() + elem.slice(1) })
    const resultFinal = capitalizedStrings.join('-');
    return resultFinal;
}
// Цікаві варіанти з Codewars
function accum_(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
// ================================================================================================
// ================================================================================================
//*-Task №391 You're a square! (7kyu)
/*
Квадрат із квадратів
Вам подобаються будівельні блоки. Вам особливо подобаються будівельні блоки, які є квадратами.
І що вам подобається ще більше, так це складати їх у квадрат із квадратних будівельних блоків!

Однак іноді ви не можете розташувати їх у квадрат. Замість цього ви отримаєте звичайний прямокутник!
Ці прокляті речі! Якби у вас був спосіб дізнатися, чи даремно ви зараз працюєте… Зачекайте! Це воно!
Вам просто потрібно перевірити, чи кількість будівельних блоків є ідеальним квадратом.

Завдання
Дано ціле число, визначте, чи є воно квадратним числом:

У математиці квадратне число або повний квадрат — це ціле число, яке є квадратом цілого числа;
іншими словами, це добуток деякого цілого числа на самого себе.
Тести завжди використовуватимуть деяке ціле число, тому не турбуйтеся про це в мовах динамічної типізації.

Приклади
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

// Мій варіант
const isSquare = (n) => Math.sqrt(n) % 1 === 0;

// Цікаві варіанти з Codewars
const isSquare_ = n => Number.isInteger(Math.sqrt(n));

// ================================================================================================
// ================================================================================================
//*-Task №392 Isograms (7kyu)
/*
Ізограма - це слово, яке не має повторюваних літер, послідовних або непослідовних. Реалізуйте функцію,
яка визначає, чи є рядок, який містить лише літери, ізограмою. Припустимо, що порожній рядок є ізограмою.
Ігнорувати регістр літер.
Приклад: (Вхід --> Вихід)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// Мій варіант
function isIsogram(str) {
    str = str.toLowerCase();
    return !str.split('')
        .some((elem, index, arr) => arr.indexOf(elem) !== index);
}
// Цікаві варіанти з Codewars
function isIsogram_(str) {
    return new Set(str.toUpperCase()).size == str.length;
}
//
function isIsogram__(str) {
    return !/(\w).*\1/i.test(str)
}

// ================================================================================================
// ================================================================================================
//*-Task №392 Exes and Ohs (7kyu)
/*
Перевірте, чи містить рядок однакову кількість «х» і «о». Метод має повертати логічне значення та
бути нечутливим до регістру. Рядок може містити будь-який символ.

Приклади введення/виведення:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// Мій варіант
function XO(str) {
    let x = 0;
    let o = 0;
    const lettersArray = str.toLowerCase().split('');
    lettersArray.forEach(letter => {
        if (letter === 'x') { x++ };
        if (letter === 'o') { o++ };
    });
    return x === o;
}
// Цікаві варіанти з Codewars
function XO_(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1961шт
// console.time('timer_1');
// console.timeEnd('timer_1');
