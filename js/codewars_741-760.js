//*-Task №741 Formatting decimal places #1 (7kyu)
/*
Кожне число з плаваючою комою має бути відформатовано таким чином, щоб поверталися лише перші два
знаки після коми. Вам не потрібно перевіряти, чи введене число є коректним, оскільки в тестах
використовуються лише коректні числа.

Не округляйте числа! Просто відріжте їх після двох знаків після коми!
Правильні приклади:
32,8493 – це 32,84
14,3286 – це 14,32

Неправильні приклади (наприклад, якщо округлити числа):
32,8493 – це 32,85
14,3286 – це 14,33
*/

// Мій варіант
function twoDecimalPlaces(num) {
  return parseInt(num * 100) / 100;
}
// Цікаві варіанти з Codewars
const twoDecimalPlaces = (number) => Math.trunc(number * 100) / 100;
// ================================================================================================
// ================================================================================================
//*-Task №742 Reverse the bits in an integer (7kyu)
/*
Напишіть функцію, яка перевертає біти в цілому числі.
Наприклад, число 417 у двійковій системі буде 110100001. Перетворення двійкової системи на
інвертовані буде 100001011, що дорівнює 267.
Можна вважати, що число не є від'ємним.
*/

// Мій варіант
function reverseBits(n) {
  const reversN = n.toString(2).split('').reverse().join('');
  return parseInt(reversN, 2);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №743 shorter concat [reverse longer] (7kyu)
/*
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b
 */

// Мій варіант
function shorterReverseLonger(a, b) {
  if (a.length >= b.length) {
    const c = a.split('').reverse().join('');
    return b + c + b;
  }
  if (a.length < b.length) {
    const c = b.split('').reverse().join('');
    return a + c + a;
  }
}
// Цікаві варіанти з Codewars
function shorter_reverse_longer_(a, b) {
  return a.length >= b.length
    ? b + a.split('').reverse().join('') + b
    : a + b.split('').reverse().join('') + a;
}
// ================================================================================================
// ================================================================================================
//*-Task №744 Find The Duplicated Number in a Consecutive Unsorted List (7kyu)
/*
Вам задано масив з n+1 цілих чисел від 1 до n. Крім того, є одне ціле число-дублікат.
Масив не відсортований.
Прикладом коректного масиву буде [3, 2, 5, 1, 3, 4]. Він містить цілі числа від 1 до 5,
а число 3 є продубльованим. [1, 2, 4, 5, 5] буде некоректним, оскільки в ньому відсутнє число 3.
Ви повинні повернути продубльоване значення як одне ціле число.
 */

// Мій варіант
function findDup(arr) {
  let duplicateValue = 0;
  const uniqueValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueValues.includes(arr[i])) {
      uniqueValues.push(arr[i]);
    } else {
      duplicateValue = arr[i];
    }
  }
  return duplicateValue;
}
// Цікаві варіанти з Codewars
function findDup_(arr) {
  arr.sort();

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] == arr[i + 1]) {
      return arr[i];
    }
  }
}
// ================================================================================================
// ================================================================================================
//*-Task №745 Max-min arrays (7kyu)
/*
У цьому ката вам буде надано масив унікальних елементів, і ваше завдання — переставити значення так,
щоб за першим максимальним значенням йшло перше мінімальне, потім друге максимальне значення,
потім друге мінімальне значення тощо.

Наприклад:
solve([15,11,10,7,12]) = [15,7,12,10,11]
Перше максимальне значення — 15, а перше мінімальне — 7.
Друге максимальне значення — 12, а друге мінімальне — 10 і так далі.
 */

// Мій варіант
function solve(arr) {
  const sortedArray = arr.sort((a, b) => b - a); // 15, 12, 11, 10, 7
  const result = [];
  let switcher = true;
  let left = 0;
  let rigth = sortedArray.length - 1;
  for (let i = 0; i < sortedArray.length; i++) {
    if (switcher) {
      result.push(sortedArray[left]);
      left++;
      switcher = false;
    } else {
      result.push(sortedArray[rigth]);
      rigth--;
      switcher = true;
    }
  }
  return result;
}
// Цікаві варіанти з Codewars
const solve_ = (arr) =>
  [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) =>
    idx % 2 ? arr.shift() : arr.pop()
  );
// ================================================================================================
// ================================================================================================
//*-Task №746 Count consonants (7kyu)
/*
Завершіть функцію, яка приймає рядок англійського тексту та повертає кількість приголосних у рядку.
Приголосні – це всі літери, що використовуються для написання англійської мови,
за винятком голосних a, e, i, o, u.
 */

// Мій варіант
function consonantCount(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let consonantCount = 0;

  for (let char of str.toLowerCase()) {
    if (/^[a-z]$/.test(char) && !vowels.has(char)) {
      consonantCount++;
    }
  }

  return consonantCount;
}
// Цікаві варіанти з Codewars
function consonantCount_(str) {
  return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
}
// ================================================================================================
// ================================================================================================
// console.time('timer_1');
// console.timeEnd('timer_1');
