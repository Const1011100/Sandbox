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
//*-залишилось 1849шт
// console.time('timer_1');
// console.timeEnd('timer_1');
