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
//*-Task №664 Say hello! (7kyu)
/*
Напишіть функцію для привітання людини. Функція введе ім’я та привітає людину, сказавши привіт.
Повертає значення null/nil/None, якщо введено порожній рядок або null/nil/None.

приклад:
greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null
*/

// Мій варіант
function greet(name) {
  return name ? `hello ${name}!` : null;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №665 Elevator Distance (7kyu)
/*
Уявіть, що ви починаєте з 5-го поверху будівлі, потім спускаєтеся на 2-й поверх,
а потім повертаєтеся на 8-й поверх. Загалом ви подолали 3 + 6 = 9 поверхів.

Маючи масив, що представляє серію поверхів, до яких потрібно піднятися на ліфті,
повертає ціле число, яке представляє загальну відстань, пройдену для відвідування кожного поверху
в масиві по порядку.
// simple examples
[5,2,8] => 9
[1,2,3] => 2
[7,1,7,1] => 18

// if two consecutive floors are the same,
//distance travelled between them is 0
[3,3] => 0
*/

// Мій варіант
function elevatorDistance(array) {
  let result = 0;
  for (let i = 0; i < array.length - 1; i++) {
    result += Math.abs(array[i] - array[i + 1]);
  }
  return result;
}
// Цікаві варіанти з Codewars
function elevatorDistance_(array) {
  return array.slice(1).reduce((s, n, i) => s + Math.abs(n - array[i]), 0);
}
// ================================================================================================
// ================================================================================================
//*-Task №666 Powers of 3 (7kyu)
/*
Дано додатне ціле число N, поверніть найбільше ціле число k таке, що 3^k < N.

Наприклад,
largest_power(3) == 0
largest_power(4) == 1
Ви можете припустити, що вхідні дані для вашої функції завжди є додатним цілим числом.
*/

// Мій варіант
function largestPower(n) {
  let k = -1;
  let power = 1;

  while (power < n) {
    power *= 3;
    k++;
  }

  return k;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №667 Find twins (7kyu)
/*
Агент 47, у вас нове завдання!
Серед жителів міста Х ховаються 2 небезпечних злочинця-близнюка.
Ваше завдання виявити їх і усунути!

Усі, крім близнюків, є однонародженими (тобто унікальними індивідами).

У масиві цілих чисел ваше завдання знайти два однакових числа та повернути одне з них.
Наприклад, в масиві ```` відповідь 2.

Якщо в місті немає близнюків - поверніть None або еквівалент у мові, якою ви користуєтеся.
*/

// Мій варіант
function elimination(arr) {
  const uniquElements = [];

  for (let num of arr) {
    if (uniquElements.includes(num)) {
      return num;
    }
    uniquElements.push(num);
  }

  return null;
}
// Цікаві варіанти з Codewars
function elimination_(arr) {
  const uniqueSet = new Set();
  for (const num of arr) {
    if (uniqueSet.has(num)) {
      return num;
    }
    uniqueSet.add(num);
  }
  return null;
}
// ================================================================================================
// ================================================================================================
//*-Task №668 Dictionary from two lists (7kyu)
/*
Є два списки, можливо, різної довжини. Перший складається з ключів, другий складається зі значень.
Напишіть функцію createDict(keys, values), яка повертає словник, створений із ключів і значень.
Якщо значень недостатньо, решта ключів має мати значення null. Якщо ключів недостатньо,
просто проігноруйте решту значень.
keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

keys = ['a', 'b', 'c']
values = [1, 2, 3, 4]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
*/

// Мій варіант
function createDict(keys, values) {
  let dictionary = {};
  for (let i = 0; i < keys.length; i++) {
    if (values[i] === undefined) {
      dictionary[keys[i]] = null;
    } else {
      dictionary[keys[i]] = values[i];
    }
  }
  return dictionary;
}
// Цікаві варіанти з Codewars
function createDict_(keys, values) {
  var obj = {};

  for (var i = 0; i < keys.length; i++) {
    obj[keys[i]] = i < values.length ? values[i] : null;
  }

  return obj;
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1713шт
// console.time('timer_1');
// console.timeEnd('timer_1');
