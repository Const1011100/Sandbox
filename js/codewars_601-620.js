//*-Task №601 Greed (7kyu)
/*
У своїй функції "getQuotes" я намагаюся витягти лише лапки з рядка.

#Приклад

getQuotes('"приклад цитати #1" деякий текст "приклад цитати #2"');
// має повернути ["\"приклад цитати №1\"","\"приклад цитати №2\""]
Однак мої результати тесту не такі, як очікувалося. ти можеш дізнатися, що я зробив не так?
*/

// Мій варіант
var reg = /".+?"/g;
function getQuotes(string) {
  return string.match(reg);
}
// Цікаві варіанти з Codewars
var reg_ = /"([^"]+)"/g;
function getQuotes_(string) {
  return string.match(reg_);
}
// ================================================================================================
// ================================================================================================
//*-Task №602 Check your arguments (7kyu)
/*
Боб написав функцію для визначення типу об’єкта. Він отримує будь-які примітивні значення або
об’єкти та повертає свій тип об’єкта як рядок. Але, здається, він працює неправильно.
Чи можете ви зрозуміти, чому, і виправити код для нього?
*/

// Мій варіант
function objectType(obj) {
  if (arguments.length === 0) {
    obj = null;
  }
  return Object.prototype.toString.call(obj);
}
// Цікаві варіанти з Codewars
function objectType_(obj) {
  return Object.prototype.toString.call(arguments.length == 0 ? null : obj);
}
// ================================================================================================
// ================================================================================================
//*-Task №602 Speed Control (7kyu)
/*
У машині Джона GPS записує кожні s секунд відстань, пройдену від початку (відстані вимірюються
в довільних, але послідовних одиницях). Наприклад, нижче наведено частину запису з s = 15:
x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]

Розділи:

0,0-0,19, 0,19-0,5, 0,5-0,75, 0,75-1,0, 1,0-1,25, 1,25-1,50, 1,5-1,75, 1,75-2,0, 2,0-2,25
Ми можемо обчислити середню годинну швидкість Джона на кожній ділянці, і отримаємо:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
Для заданих s і x завдання полягає в тому, щоб повернути як ціле число *поверх* максимальної
середньої швидкості за годину, отриманої на ділянках x.
Якщо x length менше або дорівнює 1, поверніть 0, оскільки автомобіль не рухався.

приклад:
З наведеними вище даними ваша функція gps(s, x) має повернути 74

Примітка
З плаваючими значеннями може статися, що результати залежать від порядку операцій.
Щоб розрахувати годинну швидкість, ви можете використовувати:
(3600 * delta_distance) / с.

Щасливого кодування!
*/

// Мій варіант
function gps(s, x) {
  if (x.length <= 1) {
    return 0;
  }
  let temp = [];
  for (let i = 0; i < x.length - 1; i++) {
    temp.push(x[i + 1] - x[i]);
  }
  let temp2 = temp.map((n) => Math.floor((3600 * n) / s));
  return Math.max(...temp2);
}
// Цікаві варіанти з Codewars
const gps_ = (s, x) => {
  if (x.length <= 1) {
    return 0;
  }

  let output = [];
  for (let i = 0; i < x.length - 1; i++) {
    output.push(((x[i + 1] - x[i]) * 3600) / s);
  }

  return Math.max(...output);
};
//
const getSpeed = (a, b, s) => Math.floor(((b - a) / s) * 60 * 60);
const reduceRecords = (s, x) =>
  x.reduce(
    (p, c, i, a) => (i === 0 ? p : p.concat(getSpeed(a[i - 1], c, s))),
    []
  );
const gps = (s, x) => (x.length < 2 ? 0 : Math.max(...reduceRecords(s, x)));

// ================================================================================================
// ================================================================================================
//*-Task №603 Simple Fun #152: Invite More Women? (7kyu)
/*
Король Артур і його лицарі святкують Новий рік. Минулого року Ланцелот ревнував Артура,
тому що Артур мав побачення, а Ланцелот ні, і вони почали дуель.

Щоб цього більше не повторилося, Артур хоче переконатися, що на вечірці цього року буде принаймні
стільки ж жінок, скільки чоловіків. Він дав вам список цілих чисел усіх відвідувачів вечірки.

Артуру потрібно, щоб ви повернули true, якщо йому потрібно запросити більше жінок, або false,
якщо він готовий.

Вхід/Вихід
[введення] масив цілих чисел L
Масив, що представляє стать учасників, де -1 представляє жінок, а 1 — чоловіків.

2 <= L.довжина <= 50

[виведення] логічне значення

true, якщо Артуру потрібно запросити більше жінок, false в іншому випадку.
*/

// Мій варіант
function inviteMoreWomen(L) {
  return L.reduce((sum, num) => (sum += num)) >= 1;
}
// Цікаві варіанти з Codewars
function inviteMoreWomen_(L) {
  return L.reduce((a, b) => a + b) > 0;
}
// ================================================================================================
// ================================================================================================
//*-Task №604 Incrementer (7kyu)
/*
Маючи вхідний масив цифр, поверніть масив із збільшенням кожної цифри на її позицію в масиві:
перша цифра буде збільшена на 1, друга цифра на 2 тощо. Переконайтеся, що ви починаєте відлік
своїх позицій з 1 ( а не 0).

Ваш результат може містити лише одноцифрові числа, тому якщо додавання цифри з її позицією дає
багатозначне число, потрібно повернути лише останню цифру числа.

Примітки:
повернути порожній масив, якщо ваш масив порожній
масиви міститимуть лише числа, тому не турбуйтеся про перевірку цього
приклади:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
#  9+3 = 12  -->  2
*/

// Мій варіант
function incrementer(nums) {
  if (nums.length < 1) {
    return [];
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i] + (i + 1);
    if (n > 9) {
      result.push(n - 10);
    } else {
      result.push(n);
    }
  }
  return result;
}
// Цікаві варіанти з Codewars
function incrementer_(num) {
  return num.map((a, i) => (a + i + 1) % 10);
}
// ================================================================================================
// ================================================================================================
//*-Task №605 Automorphic Number (Special Numbers Series #6) (7kyu)
/*
Число називається автоморфним тоді і тільки тоді, коли його квадрат закінчується тими самими цифрами,
що й саме число. Наприклад, 25 є автоморфним числом, оскільки його квадрат (625) закінчується на 25.

Завдання
Дано додатне число, визначте, автоморфне воно чи ні. Якщо так, поверніть "Автоморфний",
інакше поверніть "Ні!!"
*/

// Мій варіант
function automorphic(n) {
  const regExp = new RegExp(`${n}$`);
  const square = n * n;
  return regExp.test(`${square}`) ? 'Automorphic' : 'Not!!';
}
// Цікаві варіанти з Codewars
const automorphic_ = (n) =>
  String(n * n).endsWith(String(n)) ? 'Automorphic' : 'Not!!';
// ================================================================================================
// ================================================================================================
//*-Task №606 Maximum Triplet Sum (Array Series #7) (7kyu)
/*
Дано масив [] з n цілих чисел, знайти максимальну триплетну суму в масиві Без дублікатів.

maxTriSum ({3,2,6,8,2,3}) ==> return (17)
maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)

!Повторення не враховуються під час підсумовування (тобто) числа, додані лише один раз.
*/

// Мій варіант
function maxTriSum(numbers) {
  const uniqueArr = new Set(numbers);
  return [...uniqueArr]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((result, n) => (result += n));
}
// Цікаві варіанти з Codewars
const maxTriSum_ = (numbers) => {
  const [a, b, c, ...rest] = [...new Set([...numbers])].sort((a, b) => b - a);
  return a + b + c;
};
// ================================================================================================
// ================================================================================================
//*-Task №607 Understanding closures - the basics (7kyu)
/*
Це проста вправа для розуміння функції мови javascript, яка називається закриттям.
Функція buildFun поверне масив функцій. Єдиним параметром, прийнятим buildFun, є кількість
елементів N масиву, що повертається.
Бажаний результат полягає в тому, що коли всі функції в масиві виконуються, має бути повернуто
число від 0 до N.
*/

// Мій варіант
function buildFun(n) {
  var res = [];

  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}
// Цікаві варіанти з Codewars
const buildFun_ = (n) => [...Array(n)].map((v, i) => () => i);
// ================================================================================================
// ================================================================================================
//*-залишилось 1771шт
// console.time('timer_1');
// console.timeEnd('timer_1');
