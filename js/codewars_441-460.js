//*-Task №441 Factorial (7kyu)
/*
У математиці факторіал цілого невід’ємного числа n, що позначається n!, є добутком усіх натуральних
чисел, менших або рівних n. Наприклад: 5! = 5 * 4 * 3 * 2 * 1 = 120. За домовленістю значення 0! дорівнює 1.

Напишіть функцію для обчислення факторіалу для заданого вхідного параметра.
Якщо вхідні дані нижче 0 або вище 12, викидайте виняток типу ArgumentOutOfRangeException (C#) або
IllegalArgumentException (Java) чи RangeException (PHP) або викидайте RangeError (JavaScript)
чи ValueError (Python) або повертайте -1 (C).
*/

// Мій варіант
function factorial(n) {
    if (n < 0 || n > 12) {
        throw new RangeError("Input should be between 0 and 12 inclusive.");
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

// Цікаві варіанти з Codewars
function factorial_(n) {
    if (n < 0 || n > 12)
        throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1922шт
// console.time('timer_1');
// console.timeEnd('timer_1');