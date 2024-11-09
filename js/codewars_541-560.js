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
//*-залишилось 1828шт
// console.time('timer_1');
// console.timeEnd('timer_1');
