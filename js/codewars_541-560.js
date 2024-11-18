//*-Task №541 16+18=214 (7kyu)
/*
Для цього ката вам доведеться забути складати два числа.

Найкраще це можна пояснити за допомогою такого мему:
Простіше кажучи, наш метод не любить принцип перенесення чисел і просто записує кожне обчислене число :-)

Ви можете припустити, що обидва цілі числа є додатними.​
16 + 18 = 214
26 + 39 = 515
*/

// Мій варіант
function add(num1, num2) {
    const maxLength = Math.max(`${num1}`.length, `${num2}`.length);
    const numList1 = `${num1}`.split('').map((num) => Number(num));
    const numList2 = `${num2}`.split('').map((num) => Number(num));

    for (let i = 0; i < maxLength; i++) {
        if (numList1.length !== maxLength) {
            numList1.unshift(0);
        }
        if (numList2.length !== maxLength) {
            numList2.unshift(0);
        }
    }

    const resultArray = [];
    for (let i = 0; i < maxLength; i++) {
        resultArray.push(numList1[i] + numList2[i]);
    }
    const resultNumber = Number(resultArray.join(''));
    return resultNumber;
}
// Цікаві варіанти з Codewars
function add_(num1, num2) {
    let arr1 = num1.toString().split('').reverse();
    let arr2 = num2.toString().split('').reverse();
    let arr3 = [];
    for (
        let i = 0;
        i < (arr1.length < arr2.length ? arr2.length : arr1.length);
        i++
    ) {
        arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0));
    }
    return parseInt(arr3.reverse().join(''));
}
//
function add__(a, b) {
    let s = '';

    while (a + b) {
        s = (a % 10) + (b % 10) + s;
        a = (a / 10) | 0;
        b = (b / 10) | 0;
    }

    return +s;
}
// ================================================================================================
// ================================================================================================
//*-Task №542 Find the lucky numbers (7kyu)
/*
Напишіть функцію filterLucky, яка приймає список цілих чисел і фільтрує список,
щоб включати лише елементи, які містять цифру 7.

Наприклад:
filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]
Не турбуйтеся про неправильні вхідні дані, ви завжди отримуватимете кінцевий список цілих чисел.
*/

// Мій варіант
var filterLucky = (x) => {
    return x.filter((elem) => `${elem}`.match(7));
};
// Цікаві варіанти з Codewars
const filterLucky_ = (xs) => xs.filter((x) => x.toString().includes('7'));
// ================================================================================================
// ================================================================================================
//*-Task №543 Halving Sum (7kyu)
/*
Дано натуральне число n, обчисліть таку суму:

n + n/2 + n/4 + n/8 + ...
Усі елементи суми є результатами цілочисельного ділення.

приклад
25 => 25 + 12 + 6 + 3 + 1 = 47
*/

// Мій варіант
function halvingSum(n) {
    let sum = 0;

    while (n > 0) {
        sum += n;
        n = Math.floor(n / 2);
    }

    return sum;
}
// Цікаві варіанти з Codewars
function halvingSum_(n) {
    if (n === 1) return n;
    return n + halvingSum_(Math.floor(n / 2));
}
// ================================================================================================
// ================================================================================================
//*-Task №544 Ordered Count of Characters (7kyu)
/*
Підрахуйте кількість входжень кожного символу та поверніть його як список масивів у порядку появи.
Для порожнього результату повернення порожгій масив.

приклад:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

// Мій варіант
function orderedCount(text) {
    const result = [];
    const counts = {};

    for (const char of text) {
        if (counts[char] === undefined) {
            counts[char] = 1;
            result.push([char, 1]);
        } else {
            counts[char]++;
            result.find((entry) => entry[0] === char)[1] = counts[char];
        }
    }

    return result;
}
// Цікаві варіанти з Codewars
const orderedCount_ = (s) =>
    Array.from(
        s
            .split('')
            .reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map())
    );
//
const orderedCount__ = (str) =>
    [...new Set([...str])].map((char) => [char, str.split(char).length - 1]);
// ================================================================================================
// ================================================================================================
//*-Task №545 Averages of numbers (7kyu)
/*
Напишіть метод, який отримує масив цілих чисел і повертає масив середніх значень кожного цілого
числа та його послідовника, якщо він є.

Вхідні дані: [ 1, 3, 5, 1, -10]
Вихід: [ 2, 4, 3, -4,5]
Якщо масив має значення 0 або 1 або дорівнює нулю, ваш метод має повертати порожній масив.
*/

// Мій варіант
function averages(numbers) {
    if (!numbers || numbers.length < 2) {
        return [];
    }
    const result = [];
    for (let i = 1; i < numbers.length; i++) {
        result.push((numbers[i] + numbers[i - 1]) / 2);
    }
    return result;
}
// Цікаві варіанти з Codewars
function averages_(numbers) {
    return numbers
        ? numbers.map((v, i, a) => (v + a[i + 1]) / 2).slice(0, -1)
        : [];
}
// ================================================================================================
// ================================================================================================
//*-Task №546 Indexed capitalization (7kyu)
/*
Дано рядок і масив цілих чисел, що представляють індекси, зробити всі літери в заданих індексах великими.

Наприклад:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". Індексу 100 немає.
Вхідними даними буде рядок у нижньому регістрі без пробілів і масив цифр.
*/

// Мій варіант
function capitalize(s, arr) {
    return s
        .split('')
        .map((char, index) => (arr.includes(index) ? char.toUpperCase() : char))
        .join('');
}
// Цікаві варіанти з Codewars
function capitalize_(s, arr) {
    return [...s]
        .map((x, i) => (arr.includes(i) ? x.toUpperCase() : x))
        .join('');
}
// ================================================================================================
// ================================================================================================
//*-Task №547 Basic Calculator (7kyu)
/*
Напишіть функцію під назвою Calculation, яка приймає 3 значення. Перше і третє значення є числами.
Друге значення – символ. Якщо символ «+», «-», «*» або «/», функція поверне результат відповідної
математичної функції для двох чисел. Якщо рядок не є одним із указаних символів, функція має повернути
значення null.

calculate (2,"+", 4); //Повинен повернути 6
calculate (6,"-", 1,5); //Повинен повернути 4.5
calculate (-4,"*", 8); //Повинен повернути -32
calculate (49,"/", -7); //Повинен повернути -7
calculate(8,"m", 2); //Повинен повернути null
calculate(4,"/",0) //має повернути null
Майте на увазі, ви не можете ділити на нуль. Якщо зроблено спробу поділити на нуль,
повернути значення null.
*/

// Мій варіант
function calculate(num1, operation, num2) {
    const operations = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2,
    };
    if (!operations.hasOwnProperty(operation)) {
        return null;
    }
    if (operation === '/' && num2 === 0) {
        return null;
    }
    return operations[operation];
}
// Цікаві варіанти з Codewars
function calculate_(num1, operation, num2) {
    var ops = {
        '+': function (x, y) {
            return x + y;
        },
        '-': function (x, y) {
            return x - y;
        },
        '*': function (x, y) {
            return x * y;
        },
        '/': function (x, y) {
            return y === 0 ? null : x / y;
        },
    };
    return (
        ops[operation] ||
        function () {
            return null;
        }
    )(num1, num2);
}
//
function calculate__(a, o, b) {
    switch (o) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b === 0 ? null : a / b;
        default:
            return null;
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №546 SevenAte9 (7kyu)
/*
Напишіть функцію, яка видаляє кожну самотню 9, що знаходиться між 7s.

"79712312" --> "7712312"
"79797" --> "777"
*/

// Мій варіант
function sevenAte9(str) {
    const arr = str.split('');
    const newA = arr.filter((elem, index, array) => {
        if (
            elem === '9' &&
            array[index - 1] === '7' &&
            array[index + 1] === '7'
        ) {
            return '';
        } else {
            return elem;
        }
    });
    return newA.join('');
}
// Цікаві варіанти з Codewars
function sevenAte9_(str) {
    return str.replace(/79(?=7)/g, '7');
}
// ================================================================================================
// ================================================================================================
//*-Task №547 Unlucky Days (7kyu)
/*
П'ятниця 13 числа або Чорна п'ятниця вважається нещасливим днем. Обчисліть, скільки нещасливих днів у даному році.
Знайдіть число п'ятниці 13 у даному році.
Вхідні дані: рік у григоріанському календарі як ціле число.
Вихідні дані: кількість чорних п’ятниць у році у вигляді цілого числа.

приклади:
unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

// Мій варіант
function unluckyDays(year) {
    let count = 0;
    for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 13);
        if (date.getDay() === 5) {
            count++;
        }
    }
    return count;
}
// Цікаві варіанти з Codewars
function unluckyDays_(year) {
    let unlucky = 0;
    for (var i = 0; i < 12; i++) {
        if (new Date(year, i, 13).getDay() === 5) {
            unlucky++;
        }
    }
    return unlucky;
}
// ================================================================================================
// ================================================================================================
//*-Task №548 Moves in squared strings (I) (7kyu)
/*
Ця ката є першою з чотирьох послідовних ката про «струни в квадраті».

Вам надається рядок з n рядків, кожен підрядок має n символів: наприклад:

s = "abcd\nefgh\nijkl\nmnop"

Ми вивчимо деякі перетворення цього квадрата струн.

Вертикальне дзеркало: vertMirror
vertMirror(s) => "dcba\nhgfe\nlkji\nponm"
Горизонтальне дзеркало: horMirror
horMirror(s) => "mnop\nijkl\nefgh\nabcd"
або надруковано:
vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 

завдання:
Запишіть ці дві функції
і

функція високого порядку oper(fct, s) де

fct — це функція однієї змінної f для застосування до рядка s (fct буде одним із vertMirror, horMirror)

приклади:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

Вхідні рядки відокремлені символом , а не \n. Вихідні рядки мають бути розділені \r замість \n. Див. «Зразки тестів».
*/

// Мій варіант
function vertMirror(strng) {
    return strng
        .split('\n')
        .map((line) => line.split('').reverse().join(''))
        .join('\n');
}

function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}

function oper(fct, s) {
    return fct(s);
}
// Цікаві варіанти з Codewars
const vertMirror_ = (s) => s.map((s) => [...s].reverse().join(''));
const horMirror_ = (s) => s.reverse();

const oper_ = (fct, s) => fct(s.split('\n')).join('\n');
// ================================================================================================
// ================================================================================================
//*-Task №549 Alphabet symmetry (7kyu)
/*
Розглянемо слово 'abode'. Ми бачимо, що буква a знаходиться в позиції 1, а b – у позиції 2.
В алфавіті a і b також знаходяться в позиціях 1 і 2. Зауважте також, що d і e в abode займають ті позиції,
які вони б зайняли в алфавіті , які є позиціями 4 і 5.

Дано масив слів, повернути масив кількості літер, які займають свої позиції в алфавіті для кожного слова. Наприклад,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]

Вхідні дані складатимуться з символів алфавіту, як великих, так і малих. Немає пробілів.
*/

// Мій варіант
function solve(arr) {
    return arr.map((word) => {
        return [...word.toLowerCase()].reduce((count, char, index) => {
            return count + (char.charCodeAt(0) - 96 === index + 1 ? 1 : 0);
        }, 0);
    });
}
// Цікаві варіанти з Codewars
function solve_(arr) {
    var alphabeth = 'abcdefghijklmnopqrstuvwxyz';
    return arr.map(
        (x) =>
            x
                .toLowerCase()
                .split('')
                .filter((y, i) => i == alphabeth.indexOf(y)).length
    );
}
// ================================================================================================
// ================================================================================================
//*-Task №550 Odd-Even String Sort (7kyu)
/*
Дано рядок s, ваше завдання полягає в тому, щоб повернути інший рядок так, щоб парні і непарні
індексовані символи s були згруповані, а групи розділені пробілами.
Група з парним індексом йде першою, за нею йде пробіл, а потім частина з непарним індексом.

Приклади
input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357

Парні індекси 0, 2, 4, 6, тому ми маємо «CdWr» як першу групу.
Непарні індекси - це 1, 3, 5, 7, тому друга група - "oeas".
І останній рядок, який потрібно повернути, це "Cdwr oeas".

Примітки
Перевірені рядки містять принаймні 8 символів.
*/

// Мій варіант
function sortMyString(s) {
    const arr = s.split('');
    const odd = [];
    const even = [];
    arr.forEach((elem, index) => {
        if (index % 2 === 0) {
            even.push(elem);
        } else {
            odd.push(elem);
        }
    });
    return `${even.join('')} ${odd.join('')}`;
}
// Цікаві варіанти з Codewars
const sortMyString_ = (s) => {
    let even = s
        .split('')
        .filter((v, i) => i % 2 === 0)
        .join('');
    let odd = s
        .split('')
        .filter((v, i) => i % 2 !== 0)
        .join('');
    return even + ' ' + odd;
};
// ================================================================================================
// ================================================================================================
//*-Task №551 Palindrome chain length (7kyu)
/*
Число є паліндромом, якщо воно дорівнює числу з цифрами у зворотному порядку.
Наприклад, 5, 44, 171, 4884 є паліндромами, а 43, 194, 4773 – ні.

Напишіть функцію, яка приймає додатне ціле число та повертає кількість спеціальних кроків,
необхідних для отримання паліндрому. Особливий крок: «перевернути цифри та додати до вихідного числа».
Якщо отримане число не є паліндромом, повторюйте процедуру з сумою, доки отримане число не стане паліндромом.

Якщо введене число вже є паліндромом, кількість кроків дорівнює 0.

Усі вхідні дані гарантовано мають остаточний паліндром, який не перевищує MAX_SAFE_INTEGER.

приклад
Наприклад, почніть з 87:

 87 + 78 = 165 - крок 1, а не паліндром
 165 + 561 = 726 - крок 2, а не паліндром
 726 + 627 = 1353 - крок 3, а не паліндром
1353 + 3531 = 4884 - крок 4, паліндром!
4884 — це паліндром, і нам потрібно було виконати 4 кроки, щоб отримати його, тому відповідь для 87 — 4.
*/

// Мій варіант
function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function palindromeChainLength(n) {
    let steps = 0;
    let currentNumber = n;

    while (!isPalindrome(currentNumber)) {
        currentNumber += reverseNumber(currentNumber);
        steps++;
    }

    return steps;
}
// Цікаві варіанти з Codewars
var palindromeChainLength_ = function (n) {
    var x = parseInt(('' + n).split('').reverse().join(''));
    if (n != x) {
        return 1 + palindromeChainLength_(n + x);
    }
    return 0;
};
// ================================================================================================
// ================================================================================================
//*-Task №552 Lost number in number sequence (7kyu)
/*
Дано впорядковану послідовність чисел від 1 до N. Одне число могло бути видалено з нього, потім
інші номери були змішані. Знайдіть номер, який було видалено.

приклад:

Початкова послідовність масиву [1,2,3,4,5,6,7,8,9]
Змішаний масив з одним видаленим числом [3,2,4,6,7,8,1,9]
Ваша функція має повертати int 5.
Якщо жодне число не було видалено з початкового масиву, ваша функція має повернути int 0.

Примітка: N може бути 1 або менше (в останньому випадку перший масив буде []).
*/

// Мій варіант
function findDeletedNumber(arr, mixArr) {
    if (arr.length === mixArr.length) {
        return 0;
    }
    const sortedArr = mixArr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sortedArr[i]) {
            return arr[i];
        }
    }
    return 0;
}
// Цікаві варіанти з Codewars
function findDeletedNumber_(arr, mixArr) {
    let arrSum = arr.reduce((a, b) => a + b, 0);
    let mixArrSum = mixArr.reduce((a, b) => a + b, 0);
    return arrSum - mixArrSum;
}
//
function findDeletedNumber__(arr, mixArr) {
    return arr.filter((v) => mixArr.indexOf(v) == -1)[0] || 0;
}
// ================================================================================================
// ================================================================================================
//*-Task №553 My Language Skills (7kyu)
/*
Вам надається об’єкт, що містить деякі мови, і ваші результати тестування цими мовами.
Поверніть список мов, у яких ваш тестовий бал становить щонайменше 60, у порядку спадання балів.

Примітка: оцінки завжди будуть унікальними (тому жодних повторюваних значень)

Приклади
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

// Мій варіант
function myLanguages(results) {
    return Object.keys(results)
        .filter((lang) => results[lang] >= 60)
        .sort((a, b) => results[b] - results[a]);
}
// Цікаві варіанти з Codewars
function myLanguages_(results) {
    let arr = [];
    for (let key in results) {
        if (results[key] >= 60) {
            arr.push(key);
        }
    }
    return arr.sort((a, b) => results[b] - results[a]);
}
// ================================================================================================
// ================================================================================================
//*-Task №554 Tidy Number (Special Numbers Series #9) (7kyu)
/*
Визначення
Охайне число — це число, цифри якого розташовані в порядку неспадання.

Завдання
Дано число, знайдіть, чи воно охайне чи ні.
tidyNumber (12) ==> return (true)
tidyNumber (32) ==> return (false)
tidyNumber (1024) ==> return (false)
tidyNumber (13579) ==> return (true)
*/

// Мій варіант
function tidyNumber(n) {
    const str = `${n}`;
    for (let i = 1; i < str.length; i++) {
        if (Number(str[i]) < Number(str[i - 1])) {
            return false;
        }
    }
    return true;
}
// Цікаві варіанти з Codewars
function tidyNumber_(n) {
    return [...(n += '')].sort().join`` == n;
}
// ================================================================================================
// ================================================================================================
//*-Task №555 Find the nth Digit of a Number (7kyu)
/*
Виконайте функцію, яка приймає два числа як вхідні дані, num і nth, і повертає n-ну цифру num
(рахуючи справа наліво).

Примітка
Якщо num від'ємне, ігноруйте його знак і розглядайте його як додатне значення
Якщо n-й не додатний, поверніть -1
Майте на увазі, що 42 = 00042. Це означає, що findDigit(42, 5) поверне 0
Приклади (число, n-й --> вихід)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1
*/

// Мій варіант
function findDigit(num, nth) {
    const numbers = `${Math.abs(num)}`.split('').reverse();
    if (numbers.length < nth) {
        return 0;
    }
    if (nth < 1) {
        return -1;
    }
    return Number(numbers[nth - 1]);
}
// Цікаві варіанти з Codewars
var findDigit_ = function (num, nth) {
    if (nth <= 0) return -1;

    var x = Math.abs(num);
    for (var i = 1; i < nth; i++) {
        x = Math.floor(x / 10);
    }
    return x % 10;
};
// ================================================================================================
// ================================================================================================
//*-Task №556 Over The Road (7kyu)
/*
Ви щойно переїхали на ідеально пряму вулицю з рівно n однакових будинків по обидві сторони дороги.
Природно, вам хотілося б дізнатися номер будинку людей з іншого боку вулиці. Вулиця виглядає приблизно так:

1| |6
3| |4
5| |2
 ви
Зростання рівних праворуч; шанси зменшуються зліва. Номери будинків починаються з 1 і збільшуються без пропусків.
Коли n = 3, 1 стоїть навпроти 6, 3 навпроти 4 і 5 навпроти 2.

Приклад (адреса, n --> вихід)
Враховуючи номер вашого будинку, адресу та довжину вулиці n, укажіть номер будинку на протилежному боці вулиці.

1, 3 --> 6
3, 3 --> 4
2, 3 --> 5
3, 5 --> 8
Примітка про помилки
Якщо у вас закінчується час очікування, бракує пам’яті або ви отримуєте будь-яку «помилку», читайте далі.
І n, і адреса можуть отримати до 500 мільярдів за допомогою понад 200 випадкових тестів. Якщо ви спробуєте зберегти
адреси 500 мільярдів будинків у списку, у вас вичерпається пам’ять, і тести впадуть. Це не проблема ката, тому,
будь ласка, не публікуйте проблему. Так само, якщо тести не завершуються протягом 12 секунд, ви також програєте.

Щоб вирішити цю проблему, вам потрібно придумати спосіб виконувати ката, не створюючи величезних списків або величезних
циклів for. Прочитайте дискурс, щоб отримати натхнення :)
*/

// Мій варіант
function overTheRoad(address, n) {
    return n * 2 - (address - 1);
}
// Цікаві варіанти з Codewars
function overTheRoad_(address, n) {
    return n * 2 + 1 - address;
}
// ================================================================================================
// ================================================================================================
//*-Task №557 Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer(7kyu)
/*
Вам буде надано масив об’єктів, що представляють дані про розробників, які зареєструвалися для
участі в наступній зустрічі програмістів, яку ви організовуєте.
Список упорядковано відповідно до того, хто зареєструвався першим.

Ваше завдання — повернути один із наступних рядків:

< firstName тут >, < країна тут > першого розробника Python, який зареєструвався; або
Не буде розробників Python, якщо жоден розробник Python не зареєструвався.
Наприклад, задано наступний масив введення:
var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

ваша функція має повернути Вікторію, Пуерто-Ріко.

Примітки:
Вхідний масив завжди буде дійсним і відформатованим, як у прикладі вище.
*/

// Мій варіант
function getFirstPython(list) {
    let result = 'There will be no Python developers';
    for (let i = 0; i < list.length; i++) {
        if (list[i].language === 'Python') {
            result = `${list[i].firstName}, ${list[i].country}`;
            break;
        }
    }
    return result;
}
// Цікаві варіанти з Codewars
function getFirstPython_(list) {
    const dev = list.find((x) => x.language === 'Python');
    return dev
        ? `${dev.firstName}, ${dev.country}`
        : 'There will be no Python developers';
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1819шт
// console.time('timer_1');
// console.timeEnd('timer_1');
