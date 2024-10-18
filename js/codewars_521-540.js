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
//*-залишилось 1845шт
// console.time('timer_1');
// console.timeEnd('timer_1');
