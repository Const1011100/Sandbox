//*-Task №581 Flatten (7kyu)
/*
Напишіть функцію, яка об’єднує масив об’єктів Array у плоский масив. Ваша функція має виконати
лише один рівень зведення.
flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

// Мій варіант
var flatten = function (array) {
    return array.flat(1).map((elem) => {
        return isNaN(Number(elem)) || Array.isArray(elem) ? elem : Number(elem);
    });
};
// Цікаві варіанти з Codewars
var flatten_ = function (lol) {
    return [].concat.apply([], lol);
};
//
var flatten__ = function (array) {
    return array.flat();
};
//
const flatten___ = (array) => [].concat(...array);
// ================================================================================================
// ================================================================================================
//*-Task №582 ATM (7kyu)
/*
Банкомат має банкноти номіналом 10, 20, 50, 100, 200 і 500 доларів. Можна вважати, що запас кожної
з цих банкнот досить великий.

Ви повинні написати функцію банкомату, яка визначає мінімальну кількість банкнот, необхідних для
зняття n доларів, з 1 <= n <= 1500.
Поверніть це число або -1, якщо це неможливо.
*/

// Мій варіант
function solve(n) {
    if (n % 10 !== 0) {
        return -1;
    }
    const denominations = [500, 200, 100, 50, 20, 10];
    let banknotes = 0;
    for (let denom of denominations) {
        let temp = Math.floor(n / denom);
        banknotes += temp;
        n -= temp * denom;
        if (n === 0) {
            break;
        }
    }
    return banknotes;
}

// Цікаві варіанти з Codewars
function solve(n) {
    if (n % 10) return -1;
    return [500, 200, 100, 50, 20, 10].reduce((s, v) => {
        let ans = (n / v) | 0;
        n %= v;
        return s + ans;
    }, 0);
}
// ================================================================================================
// ================================================================================================
//*-Task №583 Thinkful - String Drills: Quotable (7kyu)
/*
Ця функція має приймати два рядкові параметри: ім’я особи (ім’я) та її цитату (цитата) і повертати
рядок, що приписує цитату особі, у такому форматі:
'[name] said: "[quote]"'
Наприклад, якщо ім’я — «Grae», а «quote» — «Практика робить досконалим», то ваша функція має повернути рядок
'Grae said: "Practice makes perfect"'
На жаль, щось не так з інструкціями в тілі функції. Ваше завдання — це виправити, щоб функція повертала
правильно відформатовані лапки.
Натисніть кнопку 'Train', щоб почати, і будьте обережні з лапками.
*/
function quotable(name, quote) {
    return `${name} said: "${quote}"`;
}
// Мій варіант
const quotable_ = (name, quote) => `${name} said: "${quote}"`;
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №584 getNames() (7kyu)
/*
Наступний код не дає очікуваних результатів. Чи можете ви налагодити проблему?
Нижче наведено приклад даних, які будуть передані у функцію.
*/

// Мій варіант
var data = [
    { name: 'Joe', age: 20 },
    { name: 'Bill', age: 30 },
    { name: 'Kate', age: 23 },
];
function getNames(data) {
    return data.map(function (item) {
        return item.name;
    });
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №585 Number Pairs (7kyu)
/*
Метою цієї ката є порівняння кожної пари цілих чисел із двох масивів і повернення нового масиву
великих чисел.
Примітка. Обидва масиви мають однакові розміри.

приклад:
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
*/

// Мій варіант
function getLargerNumbers(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        a[i] > b[i] ? result.push(a[i]) : result.push(b[i]);
    }
    return result;
}
// Цікаві варіанти з Codewars
function getLargerNumbers_(a, b) {
    var newArray = [];

    for (i = 0; i < a.length; i++) {
        newArray.push(Math.max(a[i], b[i]));
    }

    return newArray;
}
// ================================================================================================
// ================================================================================================
//*-Task №586 Return the Missing Element (7kyu)
/*
Воїн коду, нам потрібна ваша допомога! Здається, ми втратили один із елементів послідовності,
і нам потрібна ваша допомога, щоб його відновити!
Наша наведена послідовність мала містити всі цілі числа від 0 до 9 (без певного порядку), але,
здається, одного з них бракує.

Напишіть функцію, яка приймає послідовність унікальних цілих чисел від 0 до 9 (включно) і повертає
відсутній елемент.

приклади:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/

// Мій варіант
function getMissingElement(superImportantArray) {
    const n = superImportantArray.length;
    const expectedSum = (n * (n + 1)) / 2; // Сума чисел від 0 до n
    const actualSum = superImportantArray.reduce((sum, num) => sum + num, 0); // Сума чисел у масиві
    return expectedSum - actualSum; // Різниця дає пропущений елемент
}
// Цікаві варіанти з Codewars
function getMissingElement_(a) {
    for (let i = 0; i < 10; i++) if (!a.includes(i)) return i;
}
//
function getMissingElement__(superImportantArray) {
    for (i = 0; i < 10; i++) {
        if (superImportantArray.indexOf(i) === -1) return i;
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №587 How many consecutive numbers are needed? (7kyu)
/*
Напишіть функцію, яка приймає масив унікальних цілих чисел і повертає мінімальну кількість цілих
чисел, необхідну для того, щоб значення масиву були послідовними від найменшого числа до найбільшого.

приклад
[4, 8, 6] --> 2
Оскільки 5 і 7 потрібно додати, щоб отримати [4, 5, 6, 7, 8]

[-1, -5] --> 3
Оскільки -2, -3, -4 потрібно додати, щоб мати [-5, -4, -3, -2, -1]

[1] --> 0
[] --> 0
*/

// Мій варіант
function consecutive(array) {
    return array.length > 1
        ? Math.max(...array) - Math.min(...array) - array.length + 1
        : 0;
}
// Цікаві варіанти з Codewars
function consecutive_(arr) {
    var sorted = arr.sort(function (a, b) {
        return a - b;
    });
    var count = 0;
    for (var i = 0; i < sorted.length - 1; i++) {
        var diff = sorted[i + 1] - sorted[i];
        if (diff > 1) {
            count += diff - 1;
        }
    }
    return count;
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1791шт
// console.time('timer_1');
// console.timeEnd('timer_1');
