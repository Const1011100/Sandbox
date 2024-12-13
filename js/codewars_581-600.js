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
//*-залишилось 1795шт
// console.time('timer_1');
// console.timeEnd('timer_1');
