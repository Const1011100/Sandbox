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
//*-залишилось 1757шт
// console.time('timer_1');
// console.timeEnd('timer_1');
