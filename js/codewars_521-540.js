//*-Task №521 Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming? (7kyu)
/*
Вам буде надано масив об’єктів, що представляють дані про розробників, які зареєструвалися для участі
в наступній зустрічі програмістів, яку ви організовуєте.

Ваше завдання повернути:
true, якщо принаймні один розробник Ruby зареєструвався;
або
false, якщо не буде розробників Ruby.
Наприклад, задано наступний масив введення:
var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
ваша функція має повернути true.

Примітки:
Вхідний масив завжди буде дійсним і відформатованим, як у прикладі вище.
*/

// Мій варіант
function isRubyComing(list) {
    return list.some((programmer) => {
        return programmer.language === 'Ruby';
    });
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №522 Sum of Odd Cubed Numbers (7kyu)
/*
Знайдіть суму непарних чисел у масиві після кубування початкових цілих чисел.
Функція має повертати значення undefined, якщо будь-яке зі значень не є числами.
*/

// Мій варіант
function cubeOdd(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return undefined;
        }

        const cubedValue = Math.pow(arr[i], 3);

        if (cubedValue % 2 !== 0) {
            sum += cubedValue;
        }
    }

    return sum;
}
// Цікаві варіанти з Codewars
let cubeOdd_ = (a) => {
    var isNumeric = a.every((x) => !isNaN(x));
    return isNumeric
        ? a.filter((n) => n % 2).reduce((s, n) => s + n * n * n, 0)
        : undefined;
};
// ================================================================================================
// ================================================================================================
//*-Task №523 Sum of numbers from 0 to N (7kyu)
/*
Ми хочемо створити функцію, яка обчислює ряд, починаючи з 0 і закінчуючи заданим числом.

приклад:
> 6
0+1+2+3+4+5+6 = 21

> -15
-15<0

> 0
0=0
*/

// Мій варіант
var SequenceSum = (function () {
    function SequenceSum() {}

    SequenceSum.showSequence = function (count) {
        if (count < 0) {
            return `${count}<0`;
        } else if (count === 0) {
            return `0=0`;
        } else {
            let sum = 0;
            let sequence = '0';

            for (let i = 1; i <= count; i++) {
                sum += i;
                sequence += `+${i}`;
            }

            sequence += ` = ${sum}`;
            return sequence;
        }
    };

    return SequenceSum;
})();
// Цікаві варіанти з Codewars
class SequenceSum {
    static showSequence(n) {
        return n < 0
            ? `${n}<0`
            : `${Array.from({ length: n + 1 }, (v, k) => k).join('+')}${
                  n ? ' = ' : '='
              }${(n * (n + 1)) / 2}`;
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №524 max diff - easy (7kyu)
/*
Ви повинні реалізувати функцію, яка повертає різницю між найбільшим і найменшим значенням у
заданому списку / масиві (lst), отриманому як параметр.
lst містить цілі числа, це означає, що він може містити деякі від’ємні числа, якщо lst порожній або
містить один елемент, повертає 0 lst не сортується
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
*/

// Мій варіант
function maxDiff(list) {
    return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №525 Smallest value of an array (7kyu)
/*
Напишіть функцію, яка повертає найменше значення масиву або індекс цього значення.
Другий параметр функції вкаже, чи має вона повертати значення чи індекс.

Припустимо, що перший параметр завжди буде масивом, заповненим принаймні одним числом і без повторів.
Припустимо, що другий параметр буде рядком, що містить одне з двох значень: «значення» та «індекс».
min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/

// Мій варіант
function min(arr, toReturn) {
    let value = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (value > arr[i]) {
            value = arr[i];
            index = i;
        }
    }
    return toReturn === 'value' ? value : toReturn === 'index' ? index : null;
}
// Цікаві варіанти з Codewars
function min_(arr, toReturn) {
    var val = Math.min.apply(null, arr);
    return toReturn == 'value' ? val : arr.indexOf(val);
}
//
const min__ = (arr, toReturn) =>
    toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
// ================================================================================================
// ================================================================================================
//*-Task №526 Parts of a list (7kyu)
/*
Напишіть функцію partlist, яка надає всі способи розділення списку (масиву) принаймні з двох елементів на дві непорожні частини.

Кожні дві непорожні частини будуть у парі (або масиві для мов без кортежів або структури C - C: див. Приклади тестів - )
Кожна частина буде в рядку
Елементи пари повинні бути в тому ж порядку, що й у вихідному масиві.
Приклади повернень різними мовами:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
or
 a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or 
a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
Примітка
Ви можете переглянути інші приклади для кожної мови в розділі «Ваші тестові приклади»
*/

// Мій варіант
function partlist(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let part1 = arr.slice(0, i).join(' ');
        let part2 = arr.slice(i).join(' ');
        result.push([part1, part2]);
    }

    return result;
}
// Цікаві варіанти з Codewars
var partlist_ = (a) =>
    a.map((v, i) => [a.slice(0, i).join(' '), a.slice(i).join(' ')]).slice(1);
// ================================================================================================
// ================================================================================================
//*-Task №527 Simple beads count (7kyu)
/*
Між кожними двома синіми намистинками кладуть дві червоні. Є N синіх намистин.
Подивившись на розміщення нижче, визначте кількість червоних намистин.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Застосуйте countRedBeads(n)), щоб повертати кількість червоних намистин.
Якщо синіх намистин менше 2, поверніть 0.
*/

// Мій варіант
function countRedBeads(n) {
    if (n < 2) {
        return 0;
    }
    return (n - 1) * 2;
}
// Цікаві варіанти з Codewars
function countRedBeads_(n) {
    return n < 2 ? 0 : 2 * n - 2;
}
// ================================================================================================
// ================================================================================================
//*-Task №528 Sum even numbers (7kyu)
/*
Виконайте функцію, яка приймає послідовність чисел як один параметр.
Ваша функція має повертати суму парних значень цієї послідовності.
Лише числа без десяткових дробів, наприклад 4 або 4,0, можуть бути парними.

Вхідними даними є послідовність чисел: цілі числа та/або числа з плаваючою точкою.

Приклади
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8] --> 30 # тому що 4 + 2 + 10 + 6 + 8 = 30
[] --> 0
*/

// Мій варіант
function sumEvenNumbers(input) {
    return input.reduce((sum, num) => {
        return num % 2 === 0 ? (sum += num) : (sum += 0);
    }, 0);
}
// Цікаві варіанти з Codewars
const sumEvenNumbers_ = (a) => a.reduce((r, e) => r + (e % 2 ? 0 : e), 0);
// ================================================================================================
// ================================================================================================
//*-Task №529 Sum of array singles (7kyu)
/*
У цій Каті вам буде надано масив чисел, у якому два числа зустрічаються один раз, а решта — лише двічі.
Вашим завданням буде повернути суму чисел, які зустрічаються лише один раз.

Наприклад, repeats([4,5,7,5,4,8]) = 15, оскільки лише числа 7 і 8 зустрічаються один раз,
а їх сума дорівнює 15. Кожне інше число зустрічається двічі.
*/

// Мій варіант
function repeats(arr) {
    let res = 0;
    arr.forEach((num) => {
        if (arr.filter((n) => n === num).length === 1) {
            res += num;
        }
    });
    return res;
}
// Цікаві варіанти з Codewars
function repeats_(arr) {
    return arr
        .filter((v) => arr.indexOf(v) === arr.lastIndexOf(v))
        .reduce((a, b) => a + b, 0);
}
// ================================================================================================
// ================================================================================================
//*-Task №530 All unique (7kyu)
/*
Напишіть програму, яка визначає, чи містить рядок лише унікальні символи. Повертає true, якщо так,
і false в іншому випадку.

Рядок може містити будь-який із 128 символів ASCII. Символи чутливі до регістру, напр. «a» і «A»
вважаються різними символами.
*/

// Мій варіант
function hasUniqueChars(str) {
    const characters = str.split('');
    let res = true;
    characters.forEach((elem) => {
        if (characters.filter((e) => e === elem).length > 1) {
            res = false;
        }
    });
    return res;
}
// Цікаві варіанти з Codewars
let hasUniqueChars_ = (str) => new Set(str).size === str.length;
// ================================================================================================
// ================================================================================================
//*-Task №531 Simple remove duplicates (7kyu)
/*
Видаліть дублікати зі списку цілих чисел, зберігаючи останнє (крайнє праворуч) входження кожного елемента.

приклад:
Для введення: [3, 4, 4, 3, 6, 3]

видалити 3 з індексом 0
видалити 4 в індексі 1
видалити 3 в індексі 3
Очікуваний результат: [4, 6, 3]
*/

// Мій варіант
function solve(arr) {
    return arr.filter((item, index) => arr.lastIndexOf(item) === index);
}
// Цікаві варіанти з Codewars
const solve_ = (arr) => [...new Set(arr.reverse())].reverse();
// ================================================================================================
// ================================================================================================
//*-Task №532 (7kyu)
/*
Напишіть функцію reverse, яка обертає список.
(спеціальні вбудовані функції вимкнено)
*/

// Мій варіант
const reverse = function (array) {
    const reverse = [];
    for (let i = 0; i < array.length; i++) {
        reverse.unshift(array[i]);
    }
    return reverse;
};
// Цікаві варіанти з Codewars
const reverse_ = function (array) {
    var newArr = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i]);
    }
    return newArr;
};
//
const reverse__ = function (array) {
    return array.reduceRight(function (a, v) {
        return a.push(v), a;
    }, []);
};
// ================================================================================================
// ================================================================================================
//*-Task №533 Boiled Eggs (7kyu)
/*
Ти найкращий кухар на землі. Ніхто так не варить яйця, як ти! У вашому ресторані завжди повно гостей,
які люблять ваші варені яйця. Але коли є більше замовлення варених яєць, вам потрібен час, тому що
у вас є лише одна каструля для вашої роботи. Скільки часу вам потрібно?

Ваше завдання
Реалізуйте функцію, яка приймає ціле невід’ємне число, що представляє кількість яєць, які потрібно зварити.
Він повинен повернути час у хвилинах (ціле число), який потрібен, щоб зварити всі яйця.

Правила:
Ви можете покласти в каструлю максимум 8 яєць одночасно
щоб зварити яйце потрібно 5 хвилин
припускаємо, що вода весь час кипить (не встигає нагрітися)
для простоти ми також не враховуємо час, який потрібен, щоб покласти яйця в каструлю або дістати їх з неї
Приклад (введення --> вихід)
0 --> 0
5 --> 5
10 --> 10
*/

// Мій варіант
function cookingTime(eggs) {
    return eggs !== 0 ? Math.ceil(eggs / 8) * 5 : 0;
}
// Цікаві варіанти з Codewars
function cookingTime(eggs) {
    return 5 * Math.ceil(eggs / 8);
}
// ================================================================================================
// ================================================================================================
//*-Task №534 Sum of Triangular Numbers (7kyu)
/*
Ваше завдання — повернути суму трикутних чисел до n-го трикутного числа включно.

Трикутне число: «будь-яка серія чисел (1, 3, 6, 10, 15 тощо), отримана постійним підсумовуванням
натуральних чисел 1, 2, 3, 4, 5 тощо».

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
напр. Якщо дано 4: 1 + 3 + 6 + 10 = 20.
Трикутні числа не можуть бути від’ємними, тому повертають 0, якщо вказано від’ємне число.
*/

// Мій варіант
function sumTriangularNumbers(n) {
    if (n < 0) return 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += (i * (i + 1)) / 2;
    }
    return sum;
}

// Цікаві варіанти з Codewars
function sumTriangularNumbers_(n) {
    return n < 0 ? 0 : (n * (n + 1) * (n + 2)) / 6;
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1840шт
// console.time('timer_1');
// console.timeEnd('timer_1');
