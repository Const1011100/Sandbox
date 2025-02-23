//*-Task №641 Move 10 (5kyu)
/*
Перемістіть кожну літеру в наданому рядку на 10 літер вперед по алфавіту.
Якщо він проходить після «z», почніть знову з «a».
Введенням буде рядок довжиною > 0.
*/

// Мій варіант
function moveTen(s) {
  const shift = 10;
  const aCode = 'a'.charCodeAt(0);
  const zCode = 'z'.charCodeAt(0);
  const alphabetSize = zCode - aCode + 1;

  let result = '';

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let charCode = char.charCodeAt(0);

    let newCharCode = charCode + shift;

    if (newCharCode > zCode) {
      newCharCode = aCode + ((newCharCode - zCode - 1) % alphabetSize);
    }

    result += String.fromCharCode(newCharCode);
  }

  return result;
}
// Цікаві варіанти з Codewars
function moveTen_(s) {
  return s
    .split('')
    .map((e) =>
      e.charCodeAt(0) + 10 > 122
        ? String.fromCharCode(e.charCodeAt(0) - 16)
        : String.fromCharCode(e.charCodeAt(0) + 10)
    )
    .join('');
}
// ================================================================================================
// ================================================================================================
//*-Task №642 Disarium Number (Special Numbers Series #3) (5kyu)
/*
Визначення
Число дизарію — це число, яке в сумі своїх цифр, поєднаних із відповідними позиціями,
дорівнює самому числу.

завдання
Знайдіть число, чи є воно Disarium чи ні.
Передане число завжди додатне.

disariumNumber(89) ==> повернути "Disarium !!"
disariumNumber(564) ==> повернути "Ні!!"
*/

// Мій варіант
function disariumNumber(n) {
  let digits = n.toString();
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), i + 1);
  }

  return sum === n ? 'Disarium !!' : 'Not !!';
}
// Цікаві варіанти з Codewars
const disariumNumber_ = (n) =>
  `${
    n === n.toString().split``.reduce((r, e, i) => r + e ** (i + 1), 0)
      ? 'Disarium'
      : 'Not'
  } !!`;
// ================================================================================================
// ================================================================================================
//*-Task №643 Balanced Number (Special Numbers Series #1 ) (5kyu)
/*
Збалансоване число — це число, в якому сума цифр ліворуч від середньої цифри (цифр) і сума цифр
праворуч від середньої цифри (цифр) рівні.

Якщо число має непарну кількість цифр, то середня цифра лише одна. (Наприклад, 92645 має одну середню
цифру, 6.) В іншому випадку є дві середні цифри. (Наприклад, середніми цифрами 1301 є 3 і 0.)

Середню(і) цифру(и) не слід враховувати під час визначення того, збалансоване число чи ні, напр.
413023 є збалансованим числом, тому що ліва і права сума дорівнюють 5.

завдання
Дано число, знайдіть, чи воно збалансоване, і поверніть рядок 'Balanced' або 'Not Balanced'
відповідно. Передане число завжди буде позитивним.

7 ==> return "Balanced"
295591 ==> return "Not Balanced"
959 ==> return "Balanced"
27102983 ==> return "Not Balanced"
*/

// Мій варіант
function balancedNum(number) {
  const numbers = `${number}`.split('').map(Number);
  const len = numbers.length;

  if (len < 2) return 'Balanced';

  const mid = Math.floor(len / 2);
  const leftSum = numbers
    .slice(0, mid - (len % 2 === 0 ? 1 : 0))
    .reduce((sum, num) => sum + num, 0);
  const rightSum = numbers.slice(mid + 1).reduce((sum, num) => sum + num, 0);

  return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}

// Цікаві варіанти з Codewars
function balancedNum_(number) {
  let str = `${number}`,
    len = (str.length - (str.length % 2 ? -1 : -2)) / 2,
    sum = (digits) => [...digits].reduce((a, b) => a + +b, 0);

  return sum(str.slice(0, len)) === sum(str.slice(-len))
    ? 'Balanced'
    : 'Not Balanced';
}
// ================================================================================================
// ================================================================================================
//*-Task №644 Simple Fun #74: Growing Plant  (5kyu)
/*
завдання
Щодня рослина росте на більшу швидкість. Кожної ночі висота цієї рослини зменшується на лічильник
швидкості через брак сонячного тепла. Початкова висота рослини 0 метрів. Висаджуємо насіння на
початку дня. Ми хочемо знати, коли висота рослини досягне певного рівня.

приклад
Для upSpeed ​​= 100, downSpeed ​​= 10 і бажаної висоти = 910 вихід має бути 10.

Вхід/Вихід
[введення] ціле число upSpeed
Додатне ціле число, що представляє щоденне зростання.

Обмеження: 5 ≤ upSpeed ​​≤ 100.

[введення] ціле число downSpeed
Додатне ціле число, що представляє нічне зниження.
Обмеження: 2 ≤ downSpeed ​​< upSpeed.

[введення] ціле число бажаної висоти
Додатне ціле число, що представляє поріг.
Обмеження: 4 ≤ бажана висота ≤ 1000.

[вивести] ціле число
Кількість днів, які знадобляться, щоб рослина досягла/пройшла бажану висоту (включаючи останній день
у загальній кількості).
*/

// Мій варіант
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let currentHeight = 0;
  let days = 0;

  while (currentHeight < desiredHeight) {
    currentHeight += upSpeed;
    days++;

    if (currentHeight >= desiredHeight) {
      return days;
    }

    currentHeight -= downSpeed;
  }

  return days;
}
// Цікаві варіанти з Codewars
const growingPlant_ = (upSpeed, downSpeed, desiredHeight) =>
  desiredHeight < upSpeed
    ? 1
    : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
// ================================================================================================
// ================================================================================================
//*-Task №645 Sum of a Beach (5kyu)
/*
Пляжі наповнені піском, водою, рибою та сонцем. Дано рядок, обчисліть, скільки разів слова
"Sand", "Water", "Fish", and "Sun"  з’являються без накладання (незалежно від регістру).

Приклади
"WAtErSlIde"                    ==>  1
"GolDeNSanDyWateRyBeaChSuNN"    ==>  3
"gOfIshsunesunFiSh"             ==>  4
"cItYTowNcARShoW"               ==>  0
*/

// Мій варіант
function sumOfABeach(beach) {
  let regex = /sand|water|fish|sun/gi;
  let matches = beach.match(regex);
  return matches ? matches.length : 0;
}
// Цікаві варіанти з Codewars
const sumOfABeach_ = (beach) =>
  (beach.match(/sand|water|fish|sun/gi) || []).length;
// ================================================================================================
// ================================================================================================
//*-Task №645 Discover The Original Price (7kyu)
/*
Нам потрібно написати якийсь код, щоб повернути початкову ціну продукту, тип повернення має бути
десяткового типу, а число має бути округлено до двох знаків після коми.

Нам буде дана ціна продажу (ціна зі знижкою) і відсоток продажу, наша робота полягає в тому,
щоб визначити початкову ціну.

Наприклад:
Враховуючи товар за розпродажною ціною 75 доларів США після застосування знижки 25%, функція має
повернути початкову ціну цього товару до застосування відсотка розпродажу, який, звичайно, є (100,00 доларів США), округленим до двох знаків після коми.

DiscoverOriginalPrice(75, 25) => 100,00M, де 75 — ціна продажу (ціна зі знижкою), 25 — відсоток
продажу, а 100 — початкова ціна
*/

// Мій варіант
function discoverOriginalPrice(discountedPrice, salePercentage) {
  let originalPrice = discountedPrice / ((100 - salePercentage) / 100);
  return parseFloat(originalPrice.toFixed(2));
}
// Цікаві варіанти з Codewars
function discoverOriginalPrice_(discountedPrice, salePercentage) {
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}
// ================================================================================================
// ================================================================================================
//*-Task №646 Evens and Odds (7kyu)
/*
Ця ката стосується перетворення чисел у двійкове або шістнадцяткове представлення:

Якщо число парне, переведіть його в двійкову.
Якщо число непарне, переведіть його в шістнадцяткове.
Цифри будуть позитивними. Шістнадцятковий рядок має бути малим регістром.
*/

// Мій варіант
function evensAndOdds(num) {
  return num % 2 === 0 ? num.toString(2) : num.toString(16);
}
// Цікаві варіанти з Codewars
const evensAndOdds_ = (n) => n.toString(n % 2 ? 16 : 2);
// ================================================================================================
// ================================================================================================
//*-Task №647 Word values (7kyu)
/*
Дано рядок "abc" і припущення, що кожна літера в рядку має значення, яке дорівнює її позиції в
алфавіті, наш рядок матиме значення 1 + 2 + 3 = 6. Це означає, що: a = 1, b = 2, c = 3 ... z = 26.

Вам буде надано список рядків, і вашим завданням буде повернути значення рядків, як описано вище,
помножені на позицію цього рядка у списку. Для нашої мети позиція починається з 1.

["abc", "abc abc"] має повернути [6, 24] через [6 * 1, 12 * 2]. Зверніть увагу, як пробіли ігноруються.

"abc" має значення 6, тоді як "abc abc" має значення 12. Тепер значення в позиції 1 множиться на 1,
а значення в позиції 2 множиться на 2.
Введення міститиме лише малі літери та пробіли.
*/

// Мій варіант
function wordValue(arr) {
  const calculateWordValue = (str) => {
    let sum = 0;
    for (let char of str) {
      if (char !== ' ') {
        sum += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      }
    }
    return sum;
  };
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let value = calculateWordValue(arr[i]);
    value *= i + 1;
    results.push(value);
  }

  return results;
}
// Цікаві варіанти з Codewars
function wordValue_(a) {
  return a.map(
    (s, i) =>
      s
        .replace(/\s/g, '')
        .split('')
        .map((b) => b.charCodeAt() - 96)
        .reduce((acc, cur) => (acc += cur), 0) *
      (i + 1)
  );
}
// ================================================================================================
// ================================================================================================
//*-Task №648 Find min and max (7kyu)
/*
Реалізуйте функцію, яка повертає мінімальне та максимальне значення списку (у такому порядку).
*/

// Мій варіант
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
// Цікаві варіанти з Codewars
const getMinMax_ = (arr) => [Math.min(...arr), Math.max(...arr)];
// ================================================================================================
// ================================================================================================
//*-залишилось 1735шт
// console.time('timer_1');
// console.timeEnd('timer_1');
