//*-Task №221 Kata Example Twist (8kyu)
/*
Це легкий поворот до прикладу ката (надається Codewars під час навчання створенню власного ката).
Додайте значення "codewars" до масиву веб-сайтів 1000 разів.
*/

// Мій варіант
var websites = [];
for (let i = 0; i < 1000; i++) {
    websites.push('codewars');
}
// Цікаві варіанти з Codewars
var websites_ = new Array(1000).fill("codewars");
// ================================================================================================
// ================================================================================================
//*-Task №222 Miles per gallon to kilometers per liter (8kyu)
/*
Іноді мені хочеться швидко перетворити милі на імперський галон (mpg) у кілометри на літр (kpl).
Створіть програму, яка відображатиме кількість кілометрів на літр (вихід) на основі кількості миль на імперський галон (вхід).
Не забудьте округлити результат до двох знаків після коми.

Деякі корисні асоціації, що стосуються цієї ката:
1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres
*/

// Мій варіант
function converter(mpg) {
    const milesToKm = 1.609344;
    const gallonsToLiters = 4.54609188;
    const kpl = (mpg * milesToKm) / gallonsToLiters;
    return Number(kpl.toFixed(2));
}
// Цікаві варіанти з Codewars
const LITRES_PER_GALLON = 4.54609188;
const KILOMETERS_PER_MILE = 1.609344;
function converter_(mpg) {
    return Math.round(100 * mpg * KILOMETERS_PER_MILE / LITRES_PER_GALLON) / 100;
}
// ================================================================================================
// ================================================================================================
//*-Task №223 Are arrow functions odd? (8kyu)
/*
Час перевірити свої базові знання про функції! Повернути коефіцієнти зі списку:
[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
*/

// Мій варіант
function odds(values) {
    return values.filter(num => num % 2 !== 0);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №224 Get number from string (8kyu)
/*
Напишіть функцію, яка видаляє з рядка всі символи, що не є цифрами, а решту перетворює на число.
Наприклад: "hell5o world6" -> 56
*/

// Мій варіант
function getNumberFromString(s) {
    return Number(s.replace(/[^0-9]/g, ''));
}
// Цікаві варіанти з Codewars
function getNumberFromString(s) {
    return +s.replace(/\D/g, "");
}
// ================================================================================================
// ================================================================================================
//*-Task №225 Multiply the number (8kyu)
/*
Джеку дуже подобається його число п’ять: хитрість тут полягає в тому, що вам потрібно помножити
кожне число на 5, дорівнюючи кількості цифр кожного числа, отже, наприклад:
  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)
*/

// Мій варіант
function multiply(number) {
    const numberLength = String(Math.abs(number)).length;
    return number * (5 ** numberLength);
}
// Цікаві варіанти з Codewars
function multiply_(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
}
// ================================================================================================
// ================================================================================================
//*-Task №226 Sleigh Authentication (8kyu)
/*
Наближається Різдво і багато хто мріяв покататися на санях Діда Мороза. Але, звичайно ж, користуватися
цим чудовим транспортом має право тільки сам Санта. А для того, щоб переконатися, що в сани може сісти
тільки він, існує механізм аутентифікації.

Ваше завдання — реалізувати метод authenticate() саней, який бере ім’я людини, яка хоче сісти на сани,
і секретний пароль. Якщо і тільки якщо ім'я дорівнює "Санта-Клаус", а пароль - "Хо-хо-хо!"
(так, навіть у Санти є секретний пароль із великими та малими літерами та спеціальними символами :D),
значення, що повертається, має бути true. В іншому випадку він повинен повернути false.
*/

// Мій варіант
function Sleigh() { }
Sleigh.prototype.authenticate = function (name, password) {
    if (name === "Santa Claus" && password === "Ho Ho Ho!") {
        return true;
    }
    return false;
};
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-залишилось 155шт
// console.time('timer_1');
// console.timeEnd('timer_1');