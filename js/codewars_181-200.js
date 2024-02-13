//*-Task №181 Find out whether the shape is a cube (8kyu)
/*
Щоб знайти об’єм (сантиметри в кубі) прямокутного паралелепіпеда, використовуйте формулу:
об'єм = Довжина * Ширина * Висота

Але хтось забув правильно вести облік, тому ми маємо лише об’єм і довжину однієї сторони!
Це залежить від вас, щоб дізнатися, чи кубоїд має рівні сторони (= це куб).
Повертає true, якщо кубоїд може мати рівні сторони, повертає false в іншому випадку.
Повертає false також для недійсних чисел (наприклад, обсяг або сторона менше або дорівнює 0).
Примітка: сторона буде цілим числом
*/

// Мій варіант
function cubeChecker(volume, side) {
    return side > 0 ? side ** 3 === volume : false;
};
// Цікаві варіанти з Codewars
var cubeChecker_ = function (volume, side) {
    return Math.pow(side, 3) === volume && side > 0;
};
// ================================================================================================
// ================================================================================================
//*-Task №182 L1: Bartender, drinks! (8kyu)
/*
Завершіть функцію, яка отримує рядок як вхідні дані та створює виходи відповідно до наступної таблиці:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"

Примітка: все інше є випадком за замовчуванням: якщо вхідні дані для функції не є жодним із значень
у таблиці, тоді повернутим значенням має бути "Пиво".
Переконайтеся, що ви описуєте випадки, коли певні слова не відображаються з правильним використанням
великих літер. Наприклад, введення "POLITICIAN" все одно має повертати "Ваші податкові долари".
*/

// Мій варіант
function getDrinkByProfession(param) {
    const alcohol = {
        "jabroni": "Patron Tequila",
        "school counselor": "Anything with Alcohol",
        "programmer": "Hipster Craft Beer",
        "bike gang member": "Moonshine",
        "politician": "Your tax dollars",
        "rapper": "Cristal",
    }
    if (alcohol.hasOwnProperty(param.toLowerCase())) {
        return alcohol[param.toLowerCase()];
    } else {
        return "Beer";
    }
}
// Цікаві варіанти з Codewars
function getDrinkByProfession_(param) {
    param = param.toLowerCase();

    switch (param) {
        case "jabroni": return "Patron Tequila";
        case "school counselor": return "Anything with Alcohol";
        case "programmer": return "Hipster Craft Beer";
        case "bike gang member": return "Moonshine";
        case "politician": return "Your tax dollars";
        case "rapper": return "Cristal";
        default: return "Beer";
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №183 Regular Ball Super Ball (8kyu)
/*
Створіть класний бал.
Об’єкти-кулі повинні приймати один аргумент для «типу кулі» під час створення екземпляра.
Якщо не надано жодних аргументів, об’єкти-кулі мають створити екземпляр із «типом кулі» «звичайний».

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

// Мій варіант
class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}
// Цікаві варіанти з Codewars
var Ball_ = function (ballType) {
    this.ballType = ballType || 'regular';
};
// ================================================================================================
// ================================================================================================
//*-Task №184 Do you speak "English"? (8kyu)
/*
Дано рядок довільної довжини з будь-якими символами ASCII.
Напишіть функцію, щоб визначити, чи містить рядок ціле слово «English».
Порядок символів важливий – рядок «abcEnglishdef» правильний, але «abcnEglishsef» неправильний.
Великі чи малі літери не мають значення — «eNglisH» також є правильним.
Повертає значення у вигляді логічних значень, true, якщо рядок містить "English", false, якщо його немає.
*/

// Мій варіант
function spEng(sentence) {
    return /english/gi.test(sentence);
}
// Цікаві варіанти з Codewars
function spEng_(sentence) {
    return sentence.toLowerCase().includes("english");
}
// ================================================================================================
// ================================================================================================
//*-Task №185 Sum of differences in array (8kyu)
/*
Ваше завдання — підсумувати різниці між послідовними парами в масиві в порядку спадання.

приклад
[2, 1, 10] --> 9
У порядку спадання: [10, 2, 1]
Сума: (10 - 2) + (2 - 1) = 8 + 1 = 9

Якщо масив порожній або масив містить лише один елемент, результат має бути 0.
*/

// Мій варіант
function sumOfDifferences(arr) {
    if (arr.length <= 1) { return 0 };
    const sortedArr = arr.sort((a, b) => b - a);
    const result = [];
    sortedArr.forEach((elem, index, arr) => {
        if (arr[index + 1] !== undefined) {
            result.push(elem - arr[index + 1])
        }
    });
    return result.reduce((acum, elem) => acum += elem);
}
// Цікаві варіанти з Codewars
function sumOfDifferences_(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
//
const sumOfDifferences__ = arr => arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);
// ================================================================================================
// ================================================================================================
//*-Task №186 No Loops 2 - You only need one (8kyu)
/*
*** Петлі не допускаються ***
Вам буде надано масив a і значення x. Все, що вам потрібно зробити, це перевірити, чи наданий масив
містить значення, без використання циклу.
Масив може містити числа або рядки. x може бути будь-яким. Повертає true, якщо масив містить значення,
і false, якщо ні. У рядках вам потрібно враховувати регістр.
*/

// Мій варіант
function check(a, x) {
    return a.includes(x);
};
// Цікаві варіанти з Codewars
const check_ = (a,x) => a.indexOf(x) >= 0;
// ================================================================================================
// ================================================================================================
//*-Task №187 Return the day (8kyu)
/*
Виконайте функцію, яка повертає день тижня відповідно до введеного числа:

1 повертає "неділя"
2 повернення "Понеділок"
3 повернення "Вівторок"
4 повернення "Середа"
5 повернення "Четвер"
6 повернення "П'ятниця"
7 повернення "Субота"
Інакше повертає "Неправильно, введіть число від 1 до 7"
*/

// Мій варіант
function whatday(num) {
    switch (num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Wrong, please enter a number between 1 and 7"
    }
}
// Цікаві варіанти з Codewars
function whatday_(num) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}
// ================================================================================================
// ================================================================================================
//*-Task №188 Sum of Multiples (8kyu)
/*
Ваша робота
Знайдіть суму всіх кратних n нижче m

Запам'ятати
n і m - натуральні числа (натуральні числа)
м виключається з кратних

sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

// Мій варіант
function sumMul(n, m) {
    if (m <= n) { return "INVALID" }
    let sum = 0;
    for (let i = n; i < m; i = i + n) {
        sum = sum + i;
    }
    return sum;
}
// Цікаві варіанти з Codewars
function sumMul_(n, m) {
    if (n <= 0 || m <= 0) return "INVALID";

    const last = Math.ceil(m / n) * n - n;
    return (last + n) * (last / n) / 2;
}
// ================================================================================================
// ================================================================================================
//*-залишилось 196шт