//*-Task №561 The Office I - Outed (7kyu)
/*
Ваші колеги дивилися вам через плече. Коли ви повинні були виконувати свою справжню нудну роботу,
ви використовували робочі комп’ютери, щоб розгромити нескінченні години кодових воєн.

На зборах команди жахлива, жахлива людина заявляє групі, що ви не працюєте. Ви в біді.
Ви повинні швидко оцінити відчуття в кімнаті, щоб вирішити, чи варто вам збирати свої речі та йти.

Враховуючи об’єкт ( зустріч ), ​​який містить імена членів команди як ключі та їх рейтинг щастя з 10
як значення, вам потрібно оцінити загальний рейтинг щастя групи. Якщо <= 5, поверніть «Get Out Now!».
Інакше поверніть «Nice Work Champ!».

Рейтинг щастя буде загальним балом / кількістю людей у ​​кімнаті.

Зверніть увагу, що ваш бос у кімнаті ( бос ). Їхня оцінка вдвічі перевищує номінал (але вони все одно
одна людина!).
*/

// Мій варіант
function outed(meet, boss) {
    // Сума усіх рейтингів
    let totalHappiness = 0;
    // Кількість людей у кімнаті
    let numberOfPeople = 0;

    for (let person in meet) {
        if (person === boss) {
            // Рейтинг боса рахується вдвічі
            totalHappiness += meet[person] * 2;
        } else {
            totalHappiness += meet[person];
        }
        numberOfPeople++;
    }

    // Обчислення середнього рейтингу щастя
    const averageHappiness = totalHappiness / numberOfPeople;

    // Повернення результату на основі середнього рейтингу
    return averageHappiness <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

// Цікаві варіанти з Codewars
function outed_(meet, boss) {
    let names = Object.keys(meet);
    let score = names.reduce((s, v) => s + meet[v], 0) + meet[boss];
    return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
}
// ================================================================================================
// ================================================================================================
//*-Task №562 Nth Smallest Element (Array Series #4) (7kyu)
/*
Вступ і розминка (настійно рекомендовано): Гра зі масивами

Дано масив цілих чисел, знайдіть N-й найменший елемент у масиві.

Примітки
Розмір масиву становить принаймні 3.
Числа масиву можуть бути сумішшю позитивних, негативних і нулів.
Може виникнути повторення чисел масиву, тому не видаляйте дублікати.
Вхід >> Вихід Приклади
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 
*/

// Мій варіант
function nthSmallest(arr, pos) {
    return arr.sort((a, b) => a - b)[pos - 1];
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №563 Currying functions: multiply all elements in an array (7kyu)
/*
Щоб завершити цю Kata, вам потрібно створити функцію multiplyAll, яка приймає масив цілих чисел як
аргумент. Ця функція має повертати іншу функцію, яка приймає одне ціле число як аргумент і повертає
новий масив.

Повернений масив має складатися з кожного елемента першого масиву, помноженого на ціле число.

приклад:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];
Не можна змінювати вихідний масив.
*/

// Мій варіант
function multiplyAll(arr) {
    return function (num) {
        return arr.map((element) => element * num);
    };
}
// Цікаві варіанти з Codewars
const multiplyAll_ = (a) => (x) => a.map((e) => e * x);
// ================================================================================================
// ================================================================================================
//*-Task №564 Simple consecutive pairs (7kyu)
/*
У цьому Ката вашим завданням буде повернути кількість пар, які мають послідовні номери, як показано нижче:

пари ([1,2,5,8,-4,-3,7,6,5]) = 3
Пари вибираються таким чином [(1,2),(5,8),(-4,-3),(7,6),5]
--перша пара (1,2) і числа в парі є послідовними; Рахувати = 1
--друга пара (5,8) не є послідовними
--третя пара (-4,-3), послідовна. Порахувати = 2
--четверта пара (7,6), також послідовна. Порахувати = 3.
-- остання цифра не має пари, тому ми ігноруємо.
*/

// Мій варіант
function pairs(ar) {
    let count = 0;
    for (let i = 0; i < ar.length - 1; i += 2) {
        if (Math.abs(ar[i] - ar[i + 1]) === 1) {
            count++;
        }
    }
    return count;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №565 Debug Sum of Digits of a Number (7kyu)
/*
Функція налагодження getSumOfDigits, яка приймає додатне ціле число для обчислення суми його цифр.
Припустимо, що аргумент є цілим числом.

123 => 6
223 => 7
1337 => 14
*/

// Мій варіант
function getSumOfDigits(integer) {
    var sum = 0;
    var digits = Math.floor(integer).toString();

    for (var ix = 0; ix < digits.length; ix++) {
        sum += +digits[ix];
    }
    return sum;
}
// Цікаві варіанти з Codewars
function getSumOfDigits_(integer) {
    return (integer + '').split('').reduce((sum, d) => sum + (+d || 0), 0);
}
// ================================================================================================
// ================================================================================================
//*-Task №566 Chain me (7kyu)
/*
Напишіть загальний ланцюжок функцій
Напишіть загальний ланцюжок функцій, який приймає початкове значення та масив функцій для виконання
на ньому (масив символів для Ruby).

Вхід для кожної функції є виходом попередньої функції (за винятком першої функції, яка приймає
початкове значення як вхід). Повертає кінцеве значення після завершення виконання.
*/

// Мій варіант
function chain(input, functions) {
    return functions.reduce((value, func) => func(value), input);
}

function add(num) {
    return num + 1;
}

function mult(num) {
    return num * 30;
}
// Цікаві варіанти з Codewars
function chain_(x, fns) {
    return fns.reduce(function (x, fn) {
        return fn(x);
    }, x);
}
// ================================================================================================
// ================================================================================================
//*-Task №567 For the sake of argument (7kyu)
/*
Напишіть функцію numbers.
функція має повертати True, якщо всі параметри мають тип Number.
Функція повинна приймати будь-яку кількість параметрів.
Приклад використання:
numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true
*/

// Мій варіант
function numbers(...args) {
    return args.find((num) => typeof num !== 'number') === undefined;
}
// Цікаві варіанти з Codewars
const numbers_ = (...arr) => arr.every((x) => typeof x === 'number');
// ================================================================================================
// ================================================================================================
//*-Task №568 The old switcheroo (7kyu)
/*
Напишіть функцію vowel2index(str)
яка приймає рядок і замінює всі голосні [a,e,i,o,u] їхніми відповідними позиціями в цьому рядку.
наприклад:
vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
*/

// Мій варіант
function vowel2index(str) {
    const vowels = 'aeiouAEIOU';

    return str
        .split('')
        .map((char, index) => (vowels.includes(char) ? index + 1 : char))
        .join('');
}
// Цікаві варіанти з Codewars
function vowel2index_(str) {
    return str.replace(/[aeiou]/gi, (m, i) => i + 1);
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1806шт
// console.time('timer_1');
// console.timeEnd('timer_1');
