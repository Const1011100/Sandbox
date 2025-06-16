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
//*-Task №723 Duplicate Encoder (6kyu)
/*
Мета цієї вправи — перетворити рядок на новий рядок, де кожен символ у новому рядку буде
"(", якщо цей символ з'являється лише один раз у вихідному рядку, або ")", якщо цей символ
з'являється більше одного разу у вихідному рядку. Ігноруйте використання великих літер під час
визначення, чи є символ дублікатом.

Приклади
"din" => "((("
"recede" => "()()()"
"Success" => ")()())"
"(( @" => "))(("
Примітки
Повідомлення про твердження можуть бути незрозумілими щодо того, що вони відображають деякими мовами.
Якщо ви читаєте "...It Should encode XXX", "XXX" — це очікуваний результат, а не вхідні дані!
*/

// Мій варіант
function duplicateEncode(word) {
  const letters = word.split('');
  const result = letters.map((l) => {
    const escapedChar = l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const reg = new RegExp(escapedChar, 'gi');
    return word.match(reg).length > 1 ? ')' : '(';
  });
  return result.join('');
}

// Цікаві варіанти з Codewars
function duplicateEncode_(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, _, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}
// ================================================================================================
// ================================================================================================
//*-Task №724 Bingo ( Or Not ) (6kyu)
/*
Для цієї гри в BINGO ви отримаєте на вхід один масив із 10 чисел від 1 до 26.
У масиві можливі дублікати чисел.

Кожне число відповідає літері алфавітного порядку (наприклад, 1 = A, 2 = B тощо).
Напишіть функцію, в якій ви виграєте гру, якщо ваші числа можуть написати 'BINGO'.
Вони не обов'язково повинні бути в правильному порядку у вхідному масиві.
В іншому випадку ви програєте. Ваші вихідні дані повинні бути 'WIN' або 'LOSE' відповідно.
*/

// Мій варіант
function bingo(a) {
  const bingoList = [2, 9, 14, 7, 15];
  for (let i = 0; i < bingoList.length; i++) {
    if (!a.includes(bingoList[i])) {
      return 'LOSE';
    }
  }
  return 'WIN';
}
// Цікаві варіанти з Codewars
const bingo_ = (ar) =>
  [2, 7, 9, 14, 15].every((e) => ar.includes(e)) ? 'WIN' : 'LOSE';
// ================================================================================================
// ================================================================================================
//*-Task №725 Unpacking Arguments (7kyu)
/*
Ви повинні створити функцію spread, яка приймає функцію та список аргументів, що застосовуються
до цієї функції. Ви повинні зробити так, щоб ця функція повертала результат виклику заданої функції
 з заданими аргументами.

Наприклад:
spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")
*/

// Мій варіант
function spread(func, args) {
  return func(...args);
}
// Цікаві варіанти з Codewars
function spread_(func, args) {
  return func.apply(this, args);
}
// ================================================================================================
// ================================================================================================
//*-Task №726 Orthogonal Vectors (7kyu)
/*
Припустимо, що в мене є два вектори: (a1, a2, a3, ..., aN) та (b1, b2, b3, ..., bN).
Скалярний добуток між цими двома векторами визначається як:

a1*b1 + a2*b2 + a3*b3 + ... + aN*bN
Вектори класифікуються як ортогональні, якщо скалярний добуток дорівнює нулю.

Заповніть функцію, яка приймає дві послідовності як вхідні дані та повертає true, якщо вектори
ортогональні, та false, якщо вони не ортогональні. Послідовності завжди будуть правильно відформатовані
та однакової довжини, тому немає потреби спочатку перевіряти їх.

Приклади
[1, 1, 1], [2, 5, 7] --> false
[1, 0, 0, 1], [0, 1, 1, 0] --> true
*/

// Мій варіант

function isOrthogonal(vector1, vector2) {
  let dotProduct = 0;
  for (let i = 0; i < vector1.length; i++) {
    dotProduct += vector1[i] * vector2[i];
  }
  return dotProduct === 0;
}
// Цікаві варіанти з Codewars
function isOrthogonal_(u, v) {
  return !u.reduce((s, n, i) => s + n * v[i], 0);
}
// ================================================================================================
// ================================================================================================
//*-Task №727 80's Kids #2: Help ALF Find His Spaceship (7kyu)
/*
Пізно вчора ввечері в будинку Таннерів Альф ремонтував свій космічний корабель, щоб повернутися
до Мелмака. На жаль для нього, він забув увімкнути стоянкове гальмо, і космічний корабель злетів
під час ремонту. Тепер він зависає в космосі.
Альф має технологію, щоб повернути космічний корабель додому,
якщо він зможе зафіксувати його місцезнаходження.

Завдяки карті:
..........
..........
..........
.......X..
..........
.........

Мапа буде задана у вигляді рядка з символами \n, що розділяють нові рядки.
Нижній лівий кут карти — це [0, 0]. X — це космічний корабель ALF.
У цьому прикладі:
findSpaceship(map) => [7, 2]
Якщо ви не можете знайти космічний корабель, результат має бути таким:

"Spaceship lost forever."
*/

// Мій варіант
function findSpaceship(map = '') {
  if (!map.includes('X')) {
    return 'Spaceship lost forever.';
  }
  map = map.split('\n').reverse();
  let X = null;
  let Y = null;
  for (let i = 0; i < map.length; i++) {
    if (map[i].includes('X')) {
      Y = i;
      map[i].split('').forEach((e, i) => {
        if (e === 'X') {
          X = i;
        }
      });
    }
  }
  return [X, Y];
}
// Цікаві варіанти з Codewars
const findSpaceship_ = (map = '') => {
  map = map.split('\n').reverse();

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === 'X') return [x, y];
    }
  }

  return 'Spaceship lost forever.';
};
// ================================================================================================
// ================================================================================================
//*-Task №728 Credit card issuer checking (7kyu)
/*
Маючи номер кредитної картки, ми можемо визначити, хто є емітентом/постачальником, маючи кілька
основних відомих даних.

Заповніть функцію getIssuer(), яка використовуватиме значення, наведені нижче, для визначення
емітента картки для заданого номера картки. Якщо номер не може бути збіганий, функція повинна
повернути рядок Unknown.
| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"
*/

// Мій варіант
function getIssuer(number) {
  const strNum = `${number}`;
  if (strNum.length === 15 && /^3[47]/.test(strNum)) {
    return 'AMEX';
  }
  if (strNum.length === 16 && /^6011/.test(strNum)) {
    return 'Discover';
  }
  if (strNum.length === 16 && /^5[12345]/.test(strNum)) {
    return 'Mastercard';
  }
  if ((strNum.length === 13 || strNum.length === 16) && strNum[0] === '4') {
    return 'VISA';
  }
  return 'Unknown';
}
// Цікаві варіанти з Codewars
function getIssuer_(n) {
  var s = n.toString();
  if (/^3[4|7]\d{13}$/.test(s)) return 'AMEX';
  if (/^6011\d{12}$/.test(s)) return 'Discover';
  if (/^5[1-5]\d{14}$/.test(s)) return 'Mastercard';
  if (/^4(\d{12}|\d{15})$/.test(s)) return 'VISA';
  return 'Unknown';
}
// ================================================================================================
// ================================================================================================
//*-Task №729 Computer problem series #1: Fill the Hard Disk Drive (7kyu)
/*
Ваше завдання — визначити, скільки файлів із черги копіювання ви зможете зберегти на жорсткому диску.
Файли потрібно зберігати в порядку їх появи в черзі.

Файли нульового розміру завжди можна зберігати, навіть у повному розмірі жорсткого диска.
Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)

Output:
Кількість файлів, які можна повністю зберегти на жорсткому диску.

save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12

save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11

save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11

Не очікуйте жодних негативних або недійсних вхідних даних.
*/

// Мій варіант
function save(fileSizes, diskCapacity) {
  if (fileSizes[0] > diskCapacity) {
    return 0;
  }
  let totalSize = 0;
  let filesCount = 0;
  for (let i = 0; i < fileSizes.length; i++) {
    totalSize += fileSizes[i];
    if (totalSize <= diskCapacity) {
      filesCount++;
    }
  }
  return filesCount;
}

// Цікаві варіанти з Codewars
function save_(sizes, hd) {
  let result = 0;
  sizes.reduce((acc, curr) => {
    if ((acc += curr) <= hd) result += 1;
    return acc;
  }, 0);
  return result;
}
// ================================================================================================
// ================================================================================================
//*-Task №730 Dot Calculator (7kyu)
/*
Вам потрібно написати калькулятор, який отримує рядки для введення. Крапки представлятимуть число
в рівнянні. З одного боку будуть крапки, оператор і знову крапки після оператора. Крапки та оператор
будуть розділені одним пробілом.

Ось такі допустимі оператори:
+ Додавання
- Віднімання
* Множення
// Цілочисельне ділення

Вам потрібно повернути рядок, що містить стільки ж крапок, скільки повертає рівняння.
Якщо результат дорівнює 0, поверніть порожній рядок. Під час віднімання перше число завжди буде
більше або дорівнює другому числу.
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

// Мій варіант
function dotCalculator(equation) {
  const elements = equation.split(' ');
  const a = elements[0].length;
  const b = elements[2].length;
  const sign = elements[1];
  const operations = {
    '+': a + b,
    '-': a - b,
    '*': a * b,
    '//': Math.floor(a / b),
  };
  const result = new Array(operations[sign]).fill('.').join('');
  return result;
}
// Цікаві варіанти з Codewars
const dotCalculator_ = (equation) => {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '//': (a, b) => a / b,
  };
  const [left, operator, right] = equation.split(' ');
  return '.'.repeat(operations[operator](left.length, right.length));
};
// ================================================================================================
// ================================================================================================
//*-Task №731 ToLeetSpeak (7kyu)
/*
Ваше завдання — написати функцію toLeetSpeak, яка перетворює звичайне англійське речення на Leetspeak.
Більше про LeetSpeak ви можете прочитати на вікі -> https://en.wikipedia.org/wiki/Leet
Враховуйте лише великі літери (без малих літер, без цифр) та пробіли.

Наприклад:
toLeetSpeak("LEET") returns "1337"
У цьому ката ми використовуємо простий діалект LeetSpeak. Використовуйте цей алфавіт:
{
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
}
*/

// Мій варіант
function toLeetSpeak(str) {
  const leetDict = {
    A: '@',
    B: '8',
    C: '(',
    D: 'D',
    E: '3',
    F: 'F',
    G: '6',
    H: '#',
    I: '!',
    J: 'J',
    K: 'K',
    L: '1',
    M: 'M',
    N: 'N',
    O: '0',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: '$',
    T: '7',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: '2',
  };
  const keys = Object.keys(leetDict);
  let result = str;
  for (let key of keys) {
    result = result.replace(new RegExp(key, 'g'), leetDict[key]);
  }
  return result;
}
// Цікаві варіанти з Codewars
// !!!:
/*
str.replace(searchValue, newValue);
Гарне рішення використати функцію як newValue. Функція яка на вхід ЗАВЖДИ отримує результат пошуку searchValue (в нашій функції 
позначено як с) та підставляємо це значення як ім'я властивості в наш словник -> D[c] та повертає його.
*/
const toLeetSpeak = (s) => s.replace(/[ABCEGHILOSTZ]/g, (c) => D[c]);

const D = {
  A: '@',
  B: '8',
  C: '(',
  E: '3',
  G: '6',
  H: '#',
  I: '!',
  L: '1',
  O: '0',
  S: '$',
  T: '7',
  Z: '2',
};
// ================================================================================================
// ================================================================================================
//*-Task №732 Split In Parts (7kyu)
/*
Мета цього ката — розділити заданий рядок на різні рядки однакового розміру
(розмір рядків передається методу).

Приклад:
Розділіть наведений нижче рядок на інші рядки розміром #3
'supercalifragilisticexpialidocious'

Поверне новий рядок
'sup erc ali fra gil ist ice xpi ali doc iou s'

Припущення:
Довжина рядка завжди більша за 0
Рядок не містить пробілів
Розмір завжди додатний
*/

// Мій варіант
const splitInParts = function (s, partLength) {
  if (s.length === partLength) {
    return s;
  }
  const parts = s.split('');
  let step = partLength;
  for (let i = 0; i < Math.round(s.length / partLength); i += 1) {
    parts.splice(step, 0, ' ');
    step += partLength + 1;
  }
  return parts.join('').trim();
};
// Цікаві варіанти з Codewars
// !!!:
/*
Гарне рішення з while (array.length){} виходячи з того що array.splice(0, partLength) буде відрізати шматки і зменшувати array
*/
var splitInParts_ = function (s, partLength) {
  var parts = [];
  var array = s.split('');
  while (array.length) {
    parts.push(array.splice(0, partLength).join(''));
  }
  return parts.join(' ');
};
//
const splitInParts__ = (s, partLength) =>
  s.match(new RegExp(`.{1,${partLength}}`, 'g')).join(' ');
// ================================================================================================
// ================================================================================================
//*-Task №733 Basic Math (Add or Subtract) (7kyu)
/*
У цьому ката ви будете виконувати додавання та віднімання заданого рядка.
Повернене значення також має бути рядком.
Примітка: вхідні дані не будуть порожніми.

Приклади
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

// Мій варіант
function calculate(str) {
  const newStr = str.replace(/plus/g, '+').replace(/minus/g, '-');
  const numbers = str.match(/-?\d+/g).map((e) => parseInt(e));
  const operarions = newStr.split('').filter((e) => e === '+' || e === '-');
  let result = numbers[0];
  let length = 0;
  numbers.length === operarions.length
    ? (length = operarions.length - 1)
    : (length = operarions.length);

  for (let i = 0; i < length; i++) {
    if (operarions[i] === '+') {
      result += numbers[i + 1];
    }
    if (operarions[i] === '-') {
      result -= numbers[i + 1];
    }
  }
  return `${result}`;
}
// Цікаві варіанти з Codewars
//!!!:
/*
Функція eval обчислює рядок як JavaScript код. У нашому прикладі, "1+2+3-4" обчислюється як 2.
Потрібно дуже обережно використвовувати eval бо використання цієї функції може призвести до вразливості
сайту чи застосунку.
У сучасній розробці JavaScript eval використовується дуже рідко.
Є навіть відомий вираз – “eval is evil” (“eval – це зло”).

https://uk.javascript.info/eval
*/
function calculate(str) {
  // Замінюємо 'plus' на '+' та 'minus' на '-'
  let expression = str.replace(/plus/g, '+').replace(/minus/g, '-');
  // Обчислюємо вираз і перетворюємо результат у рядок
  let result = eval(expression).toString();
  return result;
}
//
function calculate__(str) {
  const sum = (arr) => (arr || [0]).reduce((acc, x) => acc + +x, 0);

  return (
    sum(str.match(/^\d+|(?<=plus)\d+/g)) - sum(str.match(/(?<=minus)\d+/g)) + ''
  );
}
//
function calculate___(str) {
  const positive = str.match(/(?<=^|plus)\d+/g) || [];
  const negative = str.match(/(?<=minus)\d+/g) || [];
  const sum = (arr) => arr.reduce((acc, item) => acc + Number(item), 0);
  return `${sum(positive) - sum(negative)}`;
}
// ================================================================================================
// ================================================================================================
//*-Task №734 Cats and shelves (7kyu)
/*
Нескінченна кількість полиць розташована одна над одною в шаховому порядку.
Кіт може перестрибувати через одну або три полиці одночасно: з полиці i на полицю i+1 або i+3
(кіт не може залізти на полицю безпосередньо над головою), згідно з ілюстрацією:
                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐       
│------5-│        
└────────┘  ┌─────► OK!
            │    ┌────────┐
            │    │-4------│
            │    └────────┘
┌────────┐  │
│------3-│  │     
BANG!────┘  ├─────► OK! 
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘
Вхідні дані
Номери початкової та кінцевої полиць (завжди додатні цілі числа, кінцевий пункт не менший за початковий)

Завдання
Знайдіть мінімальну кількість стрибків, щоб пройти шлях від початкового пункту до кінцевого

Приклад
Початок 1, фініш 5, тоді відповідь 2 (1 => 4 => 5 або 1 => 2 => 5)
*/

// Мій варіант
function solution(start, finish) {
  const diff = finish - start;
  const num_3 = Math.floor(diff / 3);
  const remainder = diff % 3;
  return num_3 + remainder;
}
// Цікаві варіанти з Codewars
const solution_ = (start, finish, difference = finish - start) =>
  Math.floor(difference / 3) + (difference % 3);
// ================================================================================================
// ================================================================================================
//*-Task №735 All Star Code Challenge #22 (7kyu)
/*
Це ката задумано як невелике випробування для моїх учнів.
Випробування All Star Code №22
Створіть функцію, яка приймає цілочисельний аргумент секунди та перетворює значення в рядок,
що описує, скільки годин і хвилин складають цю кількість секунд.

Будь-які секунди, що залишилися, ігноруються.
Примітка:
Вивід рядка має бути у певній формі - "X годин та X хвилин".

Наприклад:
3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"
*/

// Мій варіант
function toTime(seconds) {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds - h * 3600) / 60);
  return `${h} hour(s) and ${m} minute(s)`;
}
// Цікаві варіанти з Codewars
function toTime_(time) {
  var h = Math.floor(time / 3600);
  var m = Math.floor((time % 3600) / 60);
  return h + ' hour(s) and ' + m + ' minute(s)';
}
// ================================================================================================
// ================================================================================================
//*-Task №736 Nickname Generator (7kyu)
/*
Генератор псевдонімів

Напишіть функцію nicknameGenerator, яка приймає рядок name як аргумент і повертає перші 3 або 4
літери як псевдонім.

Якщо третя літера є приголосною, повертає перші 3 літери.
nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"

Якщо третя літера є голосною, поверніть перші 4 літери.
nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"

Якщо рядок коротший за 4 символи, повертається повідомлення "Error: Name too short".

Примітки:
Голосні літери - це «aeiou», тому не враховуйте літеру «y».
Вхідні дані завжди будуть рядком.
Перша літера завжди буде написана з великої літери, а решта - з малої (наприклад, Sam).
Вхідні дані можна змінити.
*/

// Мій варіант
function nicknameGenerator(name) {
  if (name.length < 4) {
    return 'Error: Name too short';
  }
  return /[aeiou]/.test(name[2])
    ? name.split('').splice(0, 4).join('')
    : name.split('').splice(0, 3).join('');
}
// Цікаві варіанти з Codewars
const nicknameGenerator_ = (name) =>
  name.length > 3
    ? name.slice(0, 3 + 'aeiou'.includes(name[2]))
    : 'Error: Name too short';
// ================================================================================================
// ================================================================================================
//*-Task №737 Valid Spacing (7kyu)
/*
Завдання
Ваше завдання — написати функцію під назвою validSpacing(), яка перевіряє, чи має рядок допустимі
інтервали. Функція повинна повертати або true, або false (або відповідне значення кожною мовою).

Для цього ката визначення допустимого інтервалу — це один пробіл між словами, без початкових або
кінцевих пробілів. Слова можуть бути будь-якою послідовністю символів, що не є пробілами.
Нижче наведено кілька прикладів того, що має повертати функція:

* 'Hello world' => true
* 'Hello world' => false
* 'Hello world ' => false
* 'Hello world' => false
* 'Hello world' => true

Навіть якщо пробілів немає, це все одно допустимо, оскільки вони не потрібні:
* 'Hello world' => true
* 'Hello world ' => false
* ' ' => false
* '' => true
Примітка: у вхідному рядку не буде розділових знаків або цифр, лише літери.
*/

// Мій варіант
function validSpacing(s) {
  // Перевіряємо, чи не починається або не закінчується рядок пробілом
  if (s[0] === ' ' || s[s.length - 1] === ' ') {
    return false;
  }
  // Перевіряємо, чи є два або більше підряд пробіли в будь-якому місці рядка
  if (/\s{2,}/g.test(s)) {
    return false;
  }
  return true;
}
// Цікаві варіанти з Codewars
function validSpacing_(s) {
  return s.trim() == s && !s.includes('  ');
}
//
const validSpacing__ = (s) => s.replace(/\s+/g, ' ').trim() == s;
// ================================================================================================
// ================================================================================================
// console.time('timer_1');
// console.timeEnd('timer_1');
