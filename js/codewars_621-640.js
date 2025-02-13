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
//*-Task №623 (7kyu)
/*
Виконайте функцію, яка поверне площу кола із заданим радіусом. Очікується, що повернене значення
буде точним із допустимим відхиленням 0,01. Якщо радіус не додатний, видати помилку.
circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
circleArea(0);           // throws Error
circleArea(-1);          // throws Error
*/

// Мій варіант
function circleArea(radius) {
  if (radius <= 0) {
    throw new Error('Radius must be greater than zero');
  }
  return Number((Math.PI * radius ** 2).toFixed(2));
}
// Цікаві варіанти з Codewars
function circleArea_(radius) {
  if (radius <= 0) {
    throw new Error('Radius must be positive');
  }
  const area = Math.PI * radius * radius;
  return Math.round(area * 100) / 100;
}
// ================================================================================================
// ================================================================================================
//*-Task №624 Consecutive items (7kyu)
/*
Вам надано список унікальних цілих чисел arr і двох цілих чисел a і b.
Ваше завдання — з’ясувати, чи з’являються послідовно a та b в arr, і повернути логічне значення
(істина, якщо a та b послідовні, інакше — False).
Гарантується, що a і b обидва присутні в обр.
*/

// Мій варіант
function consecutive(arr, a, b) {
  let indexA = arr.indexOf(a);
  let indexB = arr.indexOf(b);
  return Math.abs(indexA - indexB) === 1;
}
// Цікаві варіанти з Codewars
function consecutive_(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}
const consecutive__ = (arr, a, b) =>
  new RegExp(`${a},${b}|${b},${a}`).test(arr);
// ================================================================================================
// ================================================================================================
//*-Task №625 Two numbers are positive (7kyu)
/*
Ваше завдання полягає в тому, щоб написати функцію, яка приймає три цілі числа a, b і c як
аргументи та повертає True, якщо рівно два з трьох цілих чисел є додатними числами (більшими за нуль),
і False - в іншому випадку.
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false
*/

// Мій варіант
function twoArePositive(a, b, c) {
  return [a, b, c].filter((n) => n > 0).length === 2;
}
// Цікаві варіанти з Codewars
function twoArePositive_(a, b, c) {
  return [...arguments].filter((i) => i > 0).length === 2;
}
// ================================================================================================
// ================================================================================================
//*-Task №626 Nth power rules them all! (7kyu)
/*
Вам надано масив натуральних чисел і додаткове ціле число n (n > 1).
Обчисліть суму кожного значення в масиві в n-му ступені. Потім відніміть суму вихідного масиву.
Приклади
{1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
{1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30
*/

// Мій варіант
function modifiedSum(a, n) {
  return (
    a.map((a) => a ** n).reduce((sum, num) => (sum += num)) -
    a.reduce((sum, num) => (sum += num))
  );
}
// Цікаві варіанти з Codewars
function modifiedSum_(a, n) {
  return a.reduce((s, c) => s + Math.pow(c, n) - c, 0);
}
// ================================================================================================
// ================================================================================================
//*-Task №627 JavaScript seems to be broken (7kyu)
/*
Є якийсь жахливо поганий сценарій, який більше не потрібен у вашому проекті, і він впливає на те,
як ваш код має працювати.
З якоїсь причини у вас немає доступу до цього поганого фрагмента коду, але ви хочете, щоб ваш
код працював належним чином будь-яким можливим способом.
*/

// Мій варіант
function semicolonSeparationToCommaSeparation(input) {
  return input.split(';').join(',');
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №628 Hoisting (7kyu)
/*
Передбачається, що функція сортування встановлює глобальну змінну в 1, якщо вона була виконана
принаймні один раз, але це не так.
Ви можете зрозуміти чому?
Ви не повинні змінювати поведінку функції сортування.
*/

// Мій варіант
var sorted = 0;

function sort(array) {
  sorted = 1;

  for (var i = 0; i < array.length; i++) {
    array[i] = 3 * array[i] + 2;
  }

  var n = array.length,
    mid = Math.floor(n / 2);
  array = array.slice(0, mid).concat(array.slice(mid + 1));

  let isSorted = false;
  for (var i = array.length - 1; i >= 0 && !isSorted; i--) {
    isSorted = true;
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        isSorted = false;
      }
    }
  }

  sorted = 1; // Оновлюємо глобальну змінну після сортування

  return array;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №629 Difference Of Squares (7kyu)
/*
Знайдіть різницю між квадратом суми перших n натуральних чисел (1 <= n <= 100) і сумою їх квадратів.

приклад
Наприклад, коли n = 10:
Квадрат суми чисел дорівнює:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)² = 55² = 3025
Сума квадратів чисел дорівнює:

1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² + 9² + 10² = 385
Отже, різниця між квадратом суми перших десяти натуральних чисел і сумою квадратів цих чисел дорівнює:
3025 - 385 = 2640
*/

// Мій варіант
function differenceOfSquares(n) {
  let sum = (n * (n + 1)) / 2;
  let sumSquared = sum * sum;

  let sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

  return sumSquared - sumOfSquares;
}
// Цікаві варіанти з Codewars
function differenceOfSquares_(x) {
  var sum = 0,
    squareSum = 0,
    i;
  for (i = 1; i <= x; i++) {
    sum += i * i;
    squareSum += i;
  }
  return squareSum * squareSum - sum;
}
// ================================================================================================
// ================================================================================================
//*-Task №630 Remove All The Marked Elements of a List (7kyu)
/*
Визначте метод/функцію, яка видаляє з заданого масиву цілих чисел усі значення, що містяться у другому масиві.
Приклади (введення -> вихід):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
*/

// Мій варіант
Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((num) => !values_list.includes(num));
};
// Цікаві варіанти з Codewars
Array.prototype.remove__ = function (integer_list, values_list) {
  return integer_list.filter(function (element) {
    return values_list.indexOf(element) === -1;
  });
};
//
Array.prototype.remove___ = function (integer_list, values_list) {
  const s = new Set(values_list);
  return integer_list.filter((x) => !s.has(x));
};
// ================================================================================================
// ================================================================================================
//*-Task №631 Check three and two (7kyu)
/*
Дано масив із рівно 5 рядками «a», «b» або «c», перевірте, чи містить масив три і два однакових значення.

Приклади
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

// Мій варіант
function checkThreeAndTwo(array) {
  let count = {};

  for (let i = 0; i < array.length; i++) {
    if (count[array[i]]) {
      count[array[i]]++;
    } else {
      count[array[i]] = 1;
    }
  }
  let counts = Object.values(count);
  return counts.includes(3) && counts.includes(2);
}
// Цікаві варіанти з Codewars
function checkThreeAndTwo_(array) {
  let counts = Object.values(
    array.reduce((acc, el) => ((acc[el] = (acc[el] || 0) + 1), acc), {})
  );
  return counts.includes(3) && counts.includes(2);
}
// ================================================================================================
// ================================================================================================
//*-Task №632 How many arguments (7kyu)
/*
Напишіть функцію, яка повертає кількість отриманих аргументів.
args_count() --> 0
args_count('a') --> 1
args_count('a', 'b') --> 2
*/

// Мій варіант
function args_count() {
  return arguments.length;
}

// Цікаві варіанти з Codewars
const args_count_ = (...args) => args.length;
// ================================================================================================
// ================================================================================================
//*-Task №633 Initialize my name (7kyu)
/*
Деякі люди мають лише ім’я; деякі люди мають ім’я та прізвище, а деякі люди мають ім’я,
по батькові та прізвище.
Ваше завдання - ініціалізувати по батькові (якщо воно є).

Приклади
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

// Мій варіант
function initializeNames(name) {
  const elements = name.split(' ');
  if (elements.length < 3) {
    return name;
  }
  const middleNames = [];
  for (let i = 1; i < elements.length - 1; i++) {
    middleNames.push(`${elements[i][0]}.`);
  }
  const middleNamesStr = middleNames.join(' ');
  return `${elements[0]} ${middleNamesStr} ${elements[elements.length - 1]}`;
}
// Цікаві варіанти з Codewars
function initializeNames_(name) {
  var n = name.split(' ');
  if (n.length < 3) return name;
  for (i = 1; i < n.length - 1; i++) {
    n[i] = n[i][0] + '.';
  }
  return n.join(' ');
}
// ================================================================================================
// ================================================================================================
//*-Task №634 We need these data immediately! (7kyu)
/*
Отже, у нас є чудова функція JavaScript, яка добре працює
returnSomeData()
який повертав корисні дані, але нещодавно перестав працювати.
Є якась дивна помилка. Ви можете дізнатися, що змінилося?
*/

// Мій варіант
var time = Date.now();
var data = (function returnSomeData(time) {
  return {
    name: '__B00013',
    timeStamp: time || 'unknown',
    type: 'raw',
    var1: 0x041451,
    var2: 0x00,
    var3: 0x00040,
  };
})();
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №635 Numbers in strings (7kyu)
/*
У цій ката вам буде надано рядок, який містить малі літери та цифри.
Ваше завдання — порівняти групи чисел і повернути найбільше число.
Числа не матимуть початкових нулів.

Наприклад, solve("gh12cdy695m1") = 695, оскільки це найбільше з усіх групувань чисел.
*/

// Мій варіант
function solve(s) {
  return Math.max(...s.match(/\d+/g));
}
// Цікаві варіанти з Codewars
let solve_ = (s) => Math.max(...(s.match(/\d+/g) || []));
// ================================================================================================
// ================================================================================================
//*-Task №636 Vowel one (7kyu)
/*
Напишіть функцію, яка приймає рядок і виводить рядки з 1 і 0, де голосні перетворюються на 1,
а неголосні — на 0.
Слід включити всі неголосні, включно з буквеними символами (пробілами, комами тощо).

vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100"
*/

// Мій варіант
function vowelOne(s) {
  const regex1 = /[^aeiou]/gi;
  const regex0 = /[^0]/gi;
  return s.replace(regex1, 0).replace(regex0, 1);
}
// Цікаві варіанти з Codewars
function vowelOne_(s) {
  return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
}
// ================================================================================================
// ================================================================================================
//*-Task №637 Multiples of 3 or 5 (6kyu)
/*
Якщо ми перерахуємо всі натуральні числа нижче 10, кратні 3 або 5, то отримаємо 3, 5, 6 і 9.
Сума цих кратних дорівнює 23.
Завершіть розв’язання так, щоб воно повертало суму всіх кратних 3 або 5 нижче переданого числа.
Крім того, якщо число від’ємне, поверніть 0.
Примітка. Якщо число кратне 3 і 5, порахуйте його лише один раз.
*/

// Мій варіант
function solution(bound) {
  if (bound <= 0) {
    return 0;
  }
  let filteredNumbers = [];
  for (let i = 3; i < bound; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      filteredNumbers.push(i);
    }
  }

  return filteredNumbers.reduce((sum, num) => sum + num, 0);
}
// Цікаві варіанти з Codewars
function solution_(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
// ================================================================================================
// ================================================================================================
//*-Task №638 Moving Zeros To The End (5kyu)
/*
Напишіть алгоритм, який приймає масив і переміщує всі нулі в кінець, зберігаючи порядок інших елементів.
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
*/

// Мій варіант
function moveZeros(arr) {
  const nonZeros = [];
  const zeros = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] === 0 ? zeros.push(0) : nonZeros.push(arr[i]);
  }

  return [...nonZeros, ...zeros];
}
// Цікаві варіанти з Codewars
var moveZeros_ = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};
// ================================================================================================
// ================================================================================================
//*-Task №639 One Line Task: Making Pizza (5kyu)
/*
Виправте код, щоб пройти всі тести. На жаль, ви можете змінити лише ОДИН рядок коду :(
*/

// Мій варіант
function makePizza(pieces) {
  //Let's make n pieces of Pizza ;-)
  var result = '';
  while (pieces--) {
    var needSteps = 5;
    while (needSteps--) result += make(needSteps);
  }
  return result;
}
function make(step) {
  switch (step + 1) {
    case 5:
      return 'P';
    case 4:
      return 'i';
    case 3:
    case 2:
      return 'z';
    case 1:
      return 'a';
  }
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №640 Breaking search bad (5kyu)
/*
Функція має повертати послідовність заголовків, які відповідають рядку, переданому як аргумент.
TITLES — це попередньо завантажена послідовність рядків.
TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
search('ock') --> ['Rocky 1', 'Rocky 2']
Але функція повертає якийсь дивний результат і пропускає деякі відповідні результати.
*/

// Мій варіант
function search(searchTerm) {
    var searchRegex = new RegExp(searchTerm, 'i'); // Removed 'g' flag
    
    return TITLES.filter(function(title) {
      return searchRegex.test(title);
    });
  }
  
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-залишилось 1743шт
// console.time('timer_1');
// console.timeEnd('timer_1');
