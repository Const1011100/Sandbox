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
//*-залишилось 200шт