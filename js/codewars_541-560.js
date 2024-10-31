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
//*-залишилось 1835шт
// console.time('timer_1');
// console.timeEnd('timer_1');
