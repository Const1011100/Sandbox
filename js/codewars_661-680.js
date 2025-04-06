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
//*-Task №669 Working with arrays I (and why your code fails in some katas) (7kyu)
/*
У цьому ката функція повертає масив чисел без останнього елемента.
Функція вже написана для вас, і базові тести проходять, але випадкові тести не проходять.
Ваше завдання - з'ясувати причину і виправити це.
*/

// Мій варіант
function withoutLast(arr) {
  //arr.pop();
  return arr.slice(0, arr.length - 1);
}
// Цікаві варіанти з Codewars
function withoutLast_(arr) {
  arr = [...arr];
  arr.pop();
  return arr;
}
//
function withoutMax__(arr) {
  return arr.slice(0, -1);
}
// ================================================================================================
// ================================================================================================
//*-Task №670 Name Array Capping (7kyu)
/*
Створіть функцію, яка приймає масив імен і повертає масив кожного імені з великою першою літерою,
а залишок у нижньому регістрі.

Приклади
['jo', 'nelson', 'jurie'] --> ['Jo', 'Nelson', 'jurie']
['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']
*/

// Мій варіант
function capMe(names) {
  return names.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
}
// Цікаві варіанти з Codewars
function capMe_(names) {
  return names.map((n) => n[0].toUpperCase() + n.slice(1).toLowerCase());
}
// ================================================================================================
// ================================================================================================
//*-Task №671 [BUG] XCOM-141: Koko always gets treats (7kyu)
/*

*/

// Мій варіант
function applyFeedback_(s, e, p) {
  return [...s][p] === e ? DISPENSE_TREAT : RELEASE_NITROGEN_SHOWER;
}
// Цікаві варіанти з Codewars
function applyFeedback(battlescape, enemy, position) {
  if (
    [...new Intl.Segmenter().segment(battlescape)][position].segment === enemy
  ) {
    return DISPENSE_TREAT;
  }
  return RELEASE_NITROGEN_SHOWER;
}
// ================================================================================================
// ================================================================================================
//*-Task №672 Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark (7kyu)
/*
Вилучіть із речення слова, які містять рівно один знак оклику. Слова розділені одним пробілом,
без пробілів на початку та в кінці.
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
*/

// Мій варіант
function remove(string) {
  return string
    .split(' ')
    .filter((word) => (word.match(/!/g) || []).length !== 1)
    .join(' ');
}
// Цікаві варіанти з Codewars
function remove_(s) {
  return s
    .split(' ')
    .filter((i) => i.split('!').length != 2)
    .join(' ');
}
function remove__(s) {
  return s.replace(/((\s|^)!\w+\b(?!!))|((\s|^)\w+!(?!!))/g, '').trim();
}
// ================================================================================================
// ================================================================================================
//*-Task №673 [BUG] XCOM-409: Flight distance of Interceptor planes is miscalculated (7kyu)
/*

*/

// Мій варіант
function travelDistance(avgSpeedKnots, travelTimeMinutes) {
  const KM_PER_KNOT = 1.852;
  const travelTimeHours = travelTimeMinutes / 60;
  const traveledKnots = avgSpeedKnots * travelTimeHours;
  const traveledKms = traveledKnots * KM_PER_KNOT;
  return traveledKms;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №674 Find the missing element between two arrays (7kyu)
/*
Дано два цілих масиви, де другий масив є перемішаною копією першого масиву з відсутнім одним елементом,
знайдіть відсутній елемент.

Зверніть увагу, що в масивах можуть бути дублікати, тому перевірка наявності числового значення в
одному, а не в іншому, не є дійсним рішенням.
find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
*/

// Мій варіант
function findMissing(arr1, arr2) {
  return (
    arr1.reduce((sum, num) => {
      return sum + num;
    }, 0) -
    arr2.reduce((sum, num) => {
      return sum + num;
    }, 0)
  );
}
// Цікаві варіанти з Codewars
const findMissing_ = (arr1, arr2) => {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return arr1[i];
  }
};
// ================================================================================================
// ================================================================================================
//*-Task №675 Find Duplicates (7kyu)
/*
— кричить Гордон Рамзі. Він кричить і лається. Можливо, з ним щось не так.
У будь-якому випадку вам буде надано рядок із чотирьох слів. Ваше завдання — перевести їх на мову Гордона.

правила:
Очевидно, що слова мають бути великими, кожне слово має закінчуватися на «!!!!»,
будь-яка літера «a» або «A» має перетворитися на «@», будь-яка інша голосна має перетворитися на «*».
*/

// Мій варіант

// Цікаві варіанти з Codewars
function gordon(ramsay) {
  return ramsay
    .toUpperCase()
    .replace(/\w+/g, '$&!!!!')
    .replace(/[AEIOU]/g, (v) => (v == 'A' ? '@' : '*'));
}
// ================================================================================================
// ================================================================================================
//*-Task №676 Calculate Two People's Individual Ages (7kyu)
/*
Створіть функцію, яка обчислює суму та різницю у віці двох людей, обчислює їхній індивідуальний
вік і повертає пару значень (спочатку найстарший вік), якщо вони існують, або null, якщо:

сума < 0
різниця < 0
Будь-який із обчислених віків виявляється від’ємним
*/

// Мій варіант
function getAges(sum, difference) {
  if (sum < 0 || difference < 0) {
    return null;
  }
  let age2 = (sum - difference) / 2;
  let age1 = sum - age2;
  if (age1 < 0 || age2 < 0) return null;
  return [age1, age2];
}
// Цікаві варіанти з Codewars
function getAges_(sum, difference) {
  let average = 0;
  if (sum < 0 || difference < 0 || sum - difference < 0) return null;
  else average = (sum - difference) / 2;

  return [average + difference, average];
}
// ================================================================================================
// ================================================================================================
//*-Task №677 Round to nearest 0 or 5 (7kyu)
/*
Дано масив чисел, повертає масив, де кожен елемент вхідного масиву округлюється до найближчого числа,
що ділиться на 5.

Наприклад, дано наступний масив:
[34,5, 56,2, 11, 13]
має повернутися
[35, 55, 10, 15]
*/

// Мій варіант
function roundToFive(numbers) {
  return numbers.map((num) => Math.round(num / 5) * 5);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №678 Filter Long Words (7kyu)
/*
Напишіть функцію, яка приймає рядок і ціле число n як параметри та повертає список усіх слів,
які довші за n.
приклад:
* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']
*/

// Мій варіант
function filterLongWords(sentence, n) {
  const words = sentence.split(' ');
  return words.filter((word) => word.length > n);
}
// Цікаві варіанти з Codewars
function filterLongWords_(sentence, n) {
  return sentence.split(' ').filter((x) => x.length > n);
}
// ================================================================================================
// ================================================================================================
//*-Task №679 No ifs no buts (7kyu)
/*
Напишіть функцію, яка приймає два числа a і b і повертає значення a менше, більше або дорівнює b
у вигляді рядка.

(5, 4) ---> "5 більше за 4"
(-4, -7) ---> "-4 більше за -7"
(2, 2) ---> "2 дорівнює 2"
Є лише одна проблема...

Ви не можете використовувати оператори if і тернарний оператор ?
Насправді слово if і символ ? не допускаються у вашому коді.
*/

// Мій варіант
function noIfsNoButs(a, b) {
  while (a > b) return `${a} is greater than ${b}`;
  while (a < b) return `${a} is smaller than ${b}`;
  while (a === b) return `${a} is equal to ${b}`;
}
// Цікаві варіанти з Codewars
var noIfsNoButs_ = function (a, b) {
  switch (Math.sign(a - b)) {
    case 1:
      return `${a} is greater than ${b}`;
    case -1:
      return `${a} is smaller than ${b}`;
    case 0:
      return `${a} is equal to ${b}`;
  }
};
// ================================================================================================
// ================================================================================================
//*-Task №680 (7kyu)
/*
Якщо ви завершите цю ката, ви можете спробувати Insane Colored Triangles від Bubbler, яка є набагато складнішою версією цього.

Кольоровий трикутник створюється з ряду кольорів, кожен з яких червоний, зелений або синій. Послідовні рядки, кожен з яких містить на один колір менше, ніж попередній, створюються з урахуванням двох дотичних кольорів у попередньому рядку. Якщо ці кольори ідентичні, той самий колір використовується в новому рядку. Якщо вони різні, у новому рядку використовується відсутній колір. Це продовжується, доки не буде створено останній рядок лише з одним кольором.

Є різні можливості:

Розфарбуйте тут: G G B G R G B R
Стає кольором: G R B G
З великим прикладом:

R R G B R G B B
 R B R G B R B
  G G B R G G
   G R G B G
    B B R R
     B G R
      R B
       G
Вам буде надано перший рядок трикутника як рядок, і ваша задача повернути остаточний колір, який з’явиться в нижньому рядку як рядок. У випадку з наведеним вище прикладом ви повинні повернути значення RRGBRGBB.

Рядок введення міститиме лише великі літери R, G, B і буде принаймні одна літера, тому вам не доведеться перевіряти введені дані на недійсні.
Якщо вам введено лише один колір, поверніть цей колір.
Адаптовано з Британської олімпіади з інформатики 2017 року
*/

// Мій варіант
function triangle(row) {
  const m = {
    BB: 'B',
    BG: 'R',
    BR: 'G',
    GB: 'R',
    GG: 'G',
    GR: 'B',
    RB: 'G',
    RG: 'B',
    RR: 'R',
  };
  while (row.length > 1)
    row = [...row].reduce(
      (a, v, i) => (i ? a + m[[row[i - 1] + row[i]]] : a),
      ''
    );
  return row;
}
// Цікаві варіанти з Codewars
const triangle_ = (row) => {
  let reduced = row.length > 1 ? '' : row;
  for (let i = 0; i < row.length - 1; i += 1) {
    reduced +=
      row[i] == row[i + 1]
        ? row[i]
        : 'RGB'.replace(row[i], '').replace(row[i + 1], '');
  }
  return reduced.length > 1 ? triangle(reduced) : reduced;
};
// ================================================================================================
// ================================================================================================
//*-залишилось 1697шт
// console.time('timer_1');
// console.timeEnd('timer_1');
