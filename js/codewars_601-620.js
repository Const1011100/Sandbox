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
//*-Task №608 Oh dear God! Is it bugged? (7kyu)
/*
Чингель створював функцію, яка повертала б істину, якщо введення відповідало цьому формату часу
14-10-2016 01:12, і false в іншому випадку. Але, схоже, він все переплутав.
Ви могли б йому допомогти? Будь ласка!
*/

// Мій варіант
function isItBugged(code) {
  var arr = code.split(' ');
  if (arr.length != 2) return false;
  var ar = arr[0].split('-');
  if (
    ar.length != 3 ||
    ar[0].length != 2 ||
    ar[1].length != 2 ||
    ar[2].length != 4
  )
    return false;
  var a = arr[1].split(':');
  if (a.length != 2 || a[0].length != 2 || a[1].length != 2) return false;
  return true;
}
// Цікаві варіанти з Codewars
function isItBugged_(date) {
  return /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/.test(date);
}
// ================================================================================================
// ================================================================================================
//*-Task №609 Who let the dogs out? (7kyu)
/*
Я хотів написати кілька уроків для собак. У моїй моделі собаки або гавкають, або сплять.
Я знаю, що це популярна практика встановлювати значення за замовчуванням, як це
var value = value || DEFAULT_VALUE
І так я зробив. Але щось не так, і я не знаю чому. Ви можете мені допомогти?
*/

// Мій варіант
var BARK = 'woof woof';
var SLEEP = 'zzzzzzzzz....';

function dog_bark_by_default(bark = true) {
  return bark ? BARK : SLEEP;
}

function dog_bark_only_if_told_so(bark = false) {
  return bark ? BARK : SLEEP;
}
function dog_dont_bark_by_default(dont_bark = true) {
  return !dont_bark ? BARK : SLEEP;
}
function dog_dont_bark_only_if_told_so(dont_bark = false) {
  return !dont_bark ? BARK : SLEEP;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №610 Dangerous Dates (7kyu)
/*
Виправте цю функцію, щоб вона правильно виводила список наступних п’яти днів
(починаючи після дати введення). Кожна дата має бути у форматі M/D/YYYY. тобто 12 березня 2013 року
буде 3/12/2013.

Приклад вихідних даних: "3/14/2013, 3/15/2013, 3/16/2013, 3/17/2013, 3/18/2013"
Є важкий спосіб зробити це, і є правильний спосіб.
*/

// Мій варіант
var nextFiveDays = function (date) {
  var dates = [];
  var nextDay = new Date(date);

  for (var i = 0; i < 5; i++) {
    nextDay.setDate(nextDay.getDate() + 1);
    dates.push(
      nextDay.getMonth() +
        1 +
        '/' +
        nextDay.getDate() +
        '/' +
        nextDay.getFullYear()
    );
  }

  return dates.join(', ');
};
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №611 Anonymous Returns. (7kyu)
/*
Коли функція викликається сама по собі, вона прив’язана до глобального контексту;
ця змінна функції буде прив’язана до глобального об’єкта.
Коли функція getNameFunc викликається для alpha об’єкта, повертається значення змінної name
за межами об’єкта: The Window.
Ми не хочемо цього, ми хочемо, щоб поверталося значення властивості name всередині alpha об’єкта.
Виправте getNameFunc, щоб поверталося правильне значення.
*/

// Мій варіант
let name = 'The Window';

var alpha = {
  name: 'My Alpha',
  getNameFunc: function () {
    return () => this.name;
  },
};
// Цікаві варіанти з Codewars
var name_ = 'The Window';

var alpha_ = {
  name_: 'My Alpha',
  getNameFunc: function () {
    return function () {
      return this.name;
    }.bind(this);
  },
};
// ================================================================================================
// ================================================================================================
//*-Task №612 Sum of integers in string (7kyu)
/*
Ваше завдання в цій ката — реалізувати функцію, яка обчислює суму цілих чисел у рядку.
Наприклад, у рядку "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog" сума цілих чисел дорівнює 3635.

Примітка: перевірятимуться лише додатні цілі числа.
*/

// Мій варіант
function sumOfIntegersInString(str) {
  return (str.match(/\d+/g) || []).reduce((sum, n) => (sum += Number(n)), 0);
}
// Цікаві варіанти з Codewars
function sumOfIntegersInString_(s) {
  return s
    .replace(/\D/gi, ' ')
    .split(' ')
    .map((value) => Number(value))
    .reduce((a, b) => a + b);
}
// ================================================================================================
// ================================================================================================
//*-Task №613 Substituting Variables Into Strings: Padded Numbers (7kyu)
/*
Доповніть рішення так, щоб воно повернуло відформатований рядок.
Повернене значення має дорівнювати "Значення — це ЗНАЧЕННЯ", де значення — це 5-значне доповнене число.
solution(5) // має повернути "Значення 00005"
*/

// Мій варіант
function solution(value) {
  let formattedValue = value.toString().padStart(5, '0');
  return `Value is ${formattedValue}`;
}
// Цікаві варіанти з Codewars
function solution_(value) {
  return 'Value is ' + ('00000' + value).slice(-5);
}
// ================================================================================================
// ================================================================================================
//*-Task №614 Maximum Gap (Array Series #4) (7kyu)
/*
Дано масив цілих чисел. Знайдіть максимальну різницю між послідовними елементами в
його відсортованій формі.

Примітки
Розмір масиву становить принаймні 3 .
Номери масиву будуть сумішшю позитивних і негативних, а також нулів_
Може статися повторення чисел у масиві.
Максимальний розрив обчислюється незалежно від знака.

Вхід >> Вихід Приклади
maxGap ({13,10,5,2,9}) ==> повернення (4)
maxGap ({-3,-27,-4,-2}) ==> return (23)
*/

// Мій варіант
function maxGap(numbers) {
  let result = 0;
  const sortedArr = numbers.sort((a, b) => b - s);
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (result < sortedArr[i] - sortedArr[i + 1]) {
      result = sortedArr[i] - sortedArr[i + 1];
    }
  }
  return sortedArr;
}
// Цікаві варіанти з Codewars
function maxGap_(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .reduce((max, n, i) => {
      let gap = numbers[i + 1] - n;
      if (max < gap) {
        max = gap;
      }
      return max;
    }, 0);
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1765шт
// console.time('timer_1');
// console.timeEnd('timer_1');
