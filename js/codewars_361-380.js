//*-Task №361 Grasshopper - Terminal Game Turn Function (8kyu)
/*
Функція повороту термінальної гри
Ви створюєте текстову термінальну версію вашої улюбленої настільної гри. У настільній грі кожен хід
має шість кроків у такому порядку: кидати кубики, рухатися, битися, отримувати монети, купувати
більше здоров’я та друкувати статус.

Ви використовуєте бібліотеку (Game.Logic на C#), яка вже містить наведені нижче функції.
Створіть функцію з назвою doTurn, яка викликає функції в правильному порядку,
як описано в параграфі вище.
- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/

// Мій варіант
function doTurn() {
    rollDice();
    move();
    combat();
    getCoins();
    buyHealth();
    printStatus();
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №362 Training JS #31: methods of arrayObject---isArray() indexOf() and toString() (8kyu)
/*
Завдання
Кодування у функції blackAndWhite. функція приймає 1 параметр arr (числовий масив).

Якщо arr не є масивом, функція має повернути:
"It's a fake array"

Якщо arr містить елементи 5 і 13, функція повинна повернути:
"It's a black array"

Якщо arr не містить ані 5, ані 13, функція має повернути:
"It's a white array"

Приклади
blackAndWhite(5,13) should return "It's a fake array"
blackAndWhite([5,13]) should return "It's a black array"
blackAndWhite([5,12]) should return "It's a white array" 
*/

// Мій варіант
function blackAndWhite(arr) {
    if (!Array.isArray(arr)) { return "It's a fake array" };
    if (!arr.includes(5) || !arr.includes(13)) {
        return "It's a white array";
    } else {
        return "It's a black array"
    }
}
// Цікаві варіанти з Codewars
const blackAndWhite_ = arr => `It's a ${!Array.isArray(arr) ? `fake` : arr.includes(5) && arr.includes(13) ? `black` : `white`} array`;
//
function blackAndWhite__(arr) {
    if (!Array.isArray(arr)) return 'It\'s a fake array'
    if (arr.indexOf(5) != -1 && arr.indexOf(13) != -1) return 'It\'s a black array'
    return 'It\'s a white array'
}
// ================================================================================================
// ================================================================================================
//*-залишилось 20шт
// console.time('timer_1');
// console.timeEnd('timer_1');