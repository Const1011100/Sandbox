//*-Task №661 Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages (7kyu)
/*
Вам буде надано масив об’єктів, що представляють дані про розробників, які зареєструвалися для участі
в наступній зустрічі програмістів, яку ви організовуєте.

Ваше завдання полягає в тому, щоб повернути об’єкт, який містить кількість кожної мови кодування,
представленої на зустрічі.

Наприклад, задано наступний масив введення:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
ваша функція має повернути такий об’єкт:
{ C: 2, JavaScript: 1, Ruby: 1 }

Примітки:
Порядок мов в об'єкті не має значення.
Значення підрахунку має бути дійсним числом.
Вхідний масив завжди буде дійсним і відформатованим, як у прикладі вище.
*/

// Мій варіант
function countLanguages(list) {
  let languageCount = {};
  list.forEach((dev) => {
    let language = dev.language;
    if (language in languageCount) {
      languageCount[language] += 1;
    } else {
      languageCount[language] = 1;
    }
  });
  return languageCount;
}
// Цікаві варіанти з Codewars
function countLanguages_(list) {
  var count = {};
  list.forEach((x) => (count[x.language] = (count[x.language] || 0) + 1));
  return count;
}
// ================================================================================================
// ================================================================================================
//*-Task №662 Sum of all arguments (7kyu)
/*
Напишіть функцію, яка знаходить суму всіх своїх аргументів. наприклад:
sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
*/

// Мій варіант
function sum(...arg) {
  return arg.reduce((sum, num) => sum + num, 0);
}
// Цікаві варіанти з Codewars
function sum_() {
  var total = 0;
  for (var i in arguments) {
    total += arguments[i];
  }
  return total;
}
// ================================================================================================
// ================================================================================================
//*-Task №663 Evens times last (7kyu)
/*
Дано послідовність цілих чисел, повертає суму всіх цілих чисел, які мають парний індекс,
помножену на ціле число за останнім індексом.
Індекси в послідовності починаються з 0.
Якщо послідовність порожня, ви повинні повернути 0.
*/

// Мій варіант

function evenLast(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  const lastIndex = arr.length - 1;

  for (let i = 0; i < arr.length; i += 2) {
    sum += arr[i];
  }

  return sum * arr[lastIndex];
}
// Цікаві варіанти з Codewars
function evenLast_(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i];
  }
  return sum * numbers[numbers.length - 1];
}
const evenLast__ = (n) =>
  n.reduce((p, c, i) => (i % 2 ? p : p + c), 0) * n[n.length - 1] || 0;
// ================================================================================================
// ================================================================================================
//*-залишилось 1719шт
// console.time('timer_1');
// console.timeEnd('timer_1');
