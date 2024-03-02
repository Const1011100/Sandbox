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
//*-залишилось 160шт
// console.time('timer_1');
// console.timeEnd('timer_1');