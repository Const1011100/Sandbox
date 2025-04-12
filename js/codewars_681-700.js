//*-Task №681 The Office II - Boredom Score (7kyu)
/*
Час від часу люди в офісі змінюють команди або відділи. Залежно від того, що люди роблять
зі своїм часом, вони можуть стати більш-менш нудними. Час оцінити нинішню команду.

Вам буде надано об’єкт (персонал), який містить імена співробітників як ключі та відділ,
у якому вони працюють, як значення.

Кожен відділ має різну оцінку нудьги, а саме:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Залежно від сукупного результату команди, поверніть відповідний настрій:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

// Мій варіант
function boredom(staff) {
  const departmentScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };
  const totalScore = Object.values(staff).reduce((sum, department) => {
    return sum + departmentScores[department] || 0;
  }, 0);
  if (totalScore <= 80) return 'kill me now';
  if (totalScore < 100) return 'i can handle this';
  return 'party time!!';
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №682 Rotate for a Max (7kyu)
/*
Почнемо з прикладу:
Візьміть число: 56789. Поверніть ліворуч, отримаєте 67895.

Залиште першу цифру на місці та поверніть інші цифри вліво: 68957.

Залиште перші дві цифри на місці та поверніть інші: 68579.

Збережіть перші три цифри та поверніть решту вліво: 68597.
Тепер усе закінчено, оскільки зберігаючи перші чотири, залишається лише одна цифра, яка повертається, це сама.

У вас є така послідовність чисел:

56789 -> 67895 -> 68957 -> 68579 -> 68597
і ви повинні повернути найбільше: 68957.

завдання
Напишіть функцію max_rot(n), яка, враховуючи натуральне число n, повертає максимальне число,
яке ви отримали, виконуючи обертання, подібні до наведеного вище прикладу.
Отже, max_rot (або maxRot або ... залежно від мови) виглядає так:
max_rot(56789) має повернути 68957
max_rot(38458215) має повернути 85821534
*/

// Мій варіант
function maxRot(n) {
  let max = n;
  let arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    arr.push(arr.splice(i, 1));
    const num = Number(arr.join(''));
    if (num > max) max = num;
  }
  return max;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №683 Numbers to Letters (7kyu)
/*
Маючи масив чисел (у форматі рядка), ви повинні повернути рядок.
Цифри відповідають буквам алфавіту в зворотному порядку: a=26, z=1 і т. д.
Також слід враховувати «!», «?» і ' ', які представлені '27', '28' і '29' відповідно.

Усі введені дані будуть дійсними.
*/

// Мій варіант
function switcher(x) {
  const data = {
    1: 'z',
    2: 'y',
    3: 'x',
    4: 'w',
    5: 'v',
    6: 'u',
    7: 't',
    8: 's',
    9: 'r',
    10: 'q',
    11: 'p',
    12: 'o',
    13: 'n',
    14: 'm',
    15: 'l',
    16: 'k',
    17: 'j',
    18: 'i',
    19: 'h',
    20: 'g',
    21: 'f',
    22: 'e',
    23: 'd',
    24: 'c',
    25: 'b',
    26: 'a',
    27: '!',
    28: '?',
    29: ' ',
  };

  const words = [];
  for (let i = 0; i < x.length; i++) {
    words.push(data[x[i]]);
  }
  return words.join('');
}
// Цікаві варіанти з Codewars
const alpha = ' zyxwvutsrqponmlkjihgfedcba!? ';
const switcher_ = (x) => x.map((item) => alpha[item]).join('');
// ================================================================================================
// ================================================================================================
//*-Task №684 Running out of space (7kyu)
/*
Кевін помічає, що його місце закінчилося! Напишіть функцію, яка видаляє пробіли зі значень і
повертає масив, що показує зменшення пробілів.
Наприклад, виконання цієї функції для масиву ['i', 'have','no','space'] призведе до
['i','ihave','ihaveno','ihavenospace']
*/

// Мій варіант
function spacey(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let joined = array.slice(0, i + 1).join('');
    result.push(joined);
  }
  return result;
}
// Цікаві варіанти з Codewars
function spacey_(array) {
  let string = '';
  return array.map((e) => (string += e));
}
// ================================================================================================
// ================================================================================================
//*-Task №685 Return the first M multiples of N (7kyu)
/*
Реалізуйте функцію, яка приймає два числа m і n і повертає масив перших m кратних дійсного числа n.
Припустимо, що m — натуральне число.
Пр.
(3, 5.0) --> [5.0, 10.0, 15.0]
*/

// Мій варіант
function multiples(m, n) {
  let result = [];
  for (let i = 1; i <= m; i++) {
    result.push(n * i);
  }
  return result;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №686 A Rule of Divisibility by 7 (7kyu)
/*
Число m виду 10x + y ділиться на 7 тоді і тільки тоді, коли x − 2y ділиться на 7.
Іншими словами, від числа, утвореного рештою цифр, двічі відняти останню цифру.
Продовжуйте робити це, поки не буде отримано число, яке, як відомо, ділиться на 7;
ви можете зупинитися, коли це число має щонайбільше 2 цифри, тому що ви повинні знати, чи число,
що має не більше 2 цифр, ділиться на 7 чи ні.

Вихідне число ділиться на 7 тоді і тільки тоді, коли останнє число, отримане за допомогою цієї процедури,
ділиться на 7.

приклади:
1 - m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; таким чином, оскільки 35 ділиться на 7, 371 ділиться на 7.

Кількість кроків для отримання результату - 1.

2 - m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7 і 7 ділиться на 7.

3 - m = 372 -> 37 − (2×2) -> 37 − 4 = 33 ; таким чином, оскільки 33 не ділиться на 7, 372 не ділиться на 7.

4 - m = 477557101->47755708->4775554->477547->47740->4774->469->28 і 28 ділиться на 7, отже, 477557101.
Кількість кроків дорівнює 7.

завдання:
Ваше завдання полягає в тому, щоб повернути до функції seven(m) (m integer >= 0) масив
(або пару, залежно від мови) чисел, перше — це останнє число m із щонайбільше 2 цифрами, отримане вашою
функцією (останнє m ділиться чи ні на 7), а друге — кількість кроків, щоб отримати результат.

Четверта примітка:
Повернути в стек кількість-кроків, останнє-число-m-з-найбільше-2-цифрами

приклади:
seven(371) має повернути [35, 1]
seven(1603) має повернути [7, 2]
seven(477557101) має повернути [28, 7]
*/

// Мій варіант
function seven(m) {
  let steps = 0;

  while (m.toString().length > 2) {
    let lastDigit = m % 10;
    m = Math.floor(m / 10) - 2 * lastDigit;
    steps++;
  }

  return [m, steps];
}

// Цікаві варіанти з Codewars
function seven_(m, n = 0) {
  return m < 100 ? [m, n] : seven_(Math.floor(m / 10) - 2 * (m % 10), ++n);
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1690шт
// console.time('timer_1');
// console.timeEnd('timer_1');
