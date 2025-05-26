//*-Task №721 Stanton measure (7kyu)
/*
Міра Стентона масиву обчислюється наступним чином:
Підрахуйте кількість входжень значення 1 у масив і нехай ця кількість дорівнює n.
Міра Стентона – це кількість разів, коли n з'являється в масиві.

Напишіть функцію, яка приймає цілочисельний масив і повертає його міру Стентона.

Приклади
Міра Стентона масиву [1, 4, 3, 2, 1, 2, 3, 2] дорівнює 3, оскільки 1 зустрічається в масиві 2 рази,
а 2 зустрічається 3 рази.

Міра Стентона масиву [1, 4, 1, 2, 11, 2, 3, 1] дорівнює 1, оскільки 1 зустрічається в масиві 3 рази,
а 3 зустрічається 1 раз.
*/

// Мій варіант
function stantonMeasure(a) {
  const n = a.reduce((sum, num) => {
    return num === 1 ? sum + num : sum;
  }, 0);
  const result = a.reduce((sum, num) => {
    return num === n ? sum + 1 : sum;
  }, 0);
  return result;
}
// Цікаві варіанти з Codewars
function stantonMeasure_(arr) {
  const count = (n) => arr.filter((x) => x === n).length;
  return count(count(1));
}
// ================================================================================================
// ================================================================================================
//*-Task №722 Create Phone Number (6kyu)
/*
Напишіть функцію, яка приймає масив із 10 цілих чисел (від 0 до 9) та повертає рядок цих чисел
у вигляді номера телефону.

Приклад
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => повертає "(123) 456-7890"
Повернений формат має бути правильним для виконання цього завдання.

Не забудьте пробіли після закриваючих дужок!
*/

// Мій варіант
function createPhoneNumber(numbers) {
  return `${
    '(' +
    numbers[0] +
    numbers[1] +
    numbers[2] +
    ')' +
    ' ' +
    '' +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    '-' +
    '' +
    numbers[6] +
    numbers[7] +
    numbers[8] +
    numbers[9]
  }`;
}
// Цікаві варіанти з Codewars
function createPhoneNumber_(numbers) {
  var format = '(xxx) xxx-xxxx';

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}
//
function createPhoneNumber__(numbers) {
  numbers = numbers.join('');
  return (
    '(' +
    numbers.substring(0, 3) +
    ') ' +
    numbers.substring(3, 6) +
    '-' +
    numbers.substring(6)
  );
}
//
function createPhoneNumber___(numbers) {
  return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
}
//
function createPhoneNumber____(numbers) {
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1661шт
// console.time('timer_1');
// console.timeEnd('timer_1');
