//*-Task №621 Sort arrays - 1  (7kyu)
/*
Просто використання сортування. Створіть функцію, яка повертає елементи вхідного масиву,
відсортовані в лексикографічному порядку.
*/

// Мій варіант
const sortme = function (names) {
  return names.sort();
};
// Цікаві варіанти з Codewars
const sortme_ = function (names) {
  return names.sort(function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  });
};
// ================================================================================================
// ================================================================================================
//*-Task №622 Collatz Conjecture Length (7kyu)
/*
Гіпотеза Коллатца стверджує, що для будь-якого позитивного натурального числа n цей процес:

якщо n парне, поділіть його на 2
якщо n непарне, помножте його на 3 і додайте 1
повторити
зрештою досягне n = 1.

Наприклад, якщо n = 20, результуюча послідовність буде:

[ 20, 10, 5, 16, 8, 4, 2, 1 ]
Напишіть програму, яка буде виводити довжину гіпотези Коллатца для будь-якого заданого n.
У прикладі вище результатом буде 8.
*/

// Мій варіант
function collatz(n) {
  let num = n;
  const numbers = [];
  while (num !== 1) {
    numbers.push(num);
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    if (num === 1) {
      numbers.push(1);
    }
  }
  return numbers.length;
}
// Цікаві варіанти з Codewars
function collatz_(n) {
  var l = 1;
  while (n > 1) {
    l++;
    n = n % 2 == 0 ? n / 2 : n * 3 + 1;
  }
  return l;
}
// ================================================================================================
// ================================================================================================
//*-Task №623 (7kyu)
/*
Виконайте функцію, яка поверне площу кола із заданим радіусом. Очікується, що повернене значення
буде точним із допустимим відхиленням 0,01. Якщо радіус не додатний, видати помилку.
circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
circleArea(0);           // throws Error
circleArea(-1);          // throws Error
*/

// Мій варіант
function circleArea(radius) {
  if (radius <= 0) {
    throw new Error('Radius must be greater than zero');
  }
  return Number((Math.PI * radius ** 2).toFixed(2));
}
// Цікаві варіанти з Codewars
function circleArea_(radius) {
  if (radius <= 0) {
    throw new Error('Radius must be positive');
  }
  const area = Math.PI * radius * radius;
  return Math.round(area * 100) / 100;
}
// ================================================================================================
// ================================================================================================
//*-Task №624 Consecutive items (7kyu)
/*
Вам надано список унікальних цілих чисел arr і двох цілих чисел a і b.
Ваше завдання — з’ясувати, чи з’являються послідовно a та b в arr, і повернути логічне значення
(істина, якщо a та b послідовні, інакше — False).
Гарантується, що a і b обидва присутні в обр.
*/

// Мій варіант
function consecutive(arr, a, b) {
  let indexA = arr.indexOf(a);
  let indexB = arr.indexOf(b);
  return Math.abs(indexA - indexB) === 1;
}
// Цікаві варіанти з Codewars
function consecutive_(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}
const consecutive__ = (arr, a, b) =>
  new RegExp(`${a},${b}|${b},${a}`).test(arr);
// ================================================================================================
// ================================================================================================
//*-Task №625 Two numbers are positive (7kyu)
/*
Ваше завдання полягає в тому, щоб написати функцію, яка приймає три цілі числа a, b і c як
аргументи та повертає True, якщо рівно два з трьох цілих чисел є додатними числами (більшими за нуль),
і False - в іншому випадку.
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false
*/

// Мій варіант
function twoArePositive(a, b, c) {
  return [a, b, c].filter((n) => n > 0).length === 2;
}
// Цікаві варіанти з Codewars
function twoArePositive_(a, b, c) {
  return [...arguments].filter((i) => i > 0).length === 2;
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1754шт
// console.time('timer_1');
// console.timeEnd('timer_1');
