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
//*-Task №189 Training JS #3: Basic data types--String (8kyu)
/*
У javascript String є одним із основних типів даних. Використовуйте "" або '', щоб оголосити рядкову змінну.
Це можуть бути літери: a, b, c, A, B, C, цифри: 123..., різні символи: @#$%^&* , контрольні символи:\n,\t тощо.
Рядок може використовувати оператори +, з’єднати два або більше рядків разом.

місія 1: я створив три функції та визначив деякі глобальні змінні, будь ласка, виберіть деякі змінні,
які можуть скласти назву функції, і поверніть їх (будь ласка, зверніть увагу, що великі та малі
літери відрізняються).

Коли ви закінчите роботу, натисніть «Запустити тести», щоб перевірити, чи ваш код працює належним чином.
місія 2: після завершення місії 1. вам слід натиснути «Спроба», щоб побачити мої три запитання,
і написати відповідь у функції answer1, answer2, answer3
Якщо все в порядку, натисніть «Надіслати» ще раз, щоб надіслати свій код для проходження цієї ката.
*/

// Мій варіант
var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"
function Dad() {
    //select some variable to combine "Dad"
    return d1 + a2 + d2;
}
function Bee() {
    //select some variable to combine "Bee"
    return b1 + e2 + e2;
}
function banana() {
    //select some variable to combine "banana"
    return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
    //the answer should be "yes" or "no"
    return "no";
}
function answer2() {
    //the answer should be "yes" or "no"
    return "no";
}
function answer3() {
    //the answer should be "yes" or "no"
    return "yes";
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №190 Printing Array elements with Comma delimiters (8kyu)
/*
Вхід: масив елементів
["h", "o", "l", "a"]

Вихід: Рядок із розділеними комами елементами масиву в тому самому порядку.
"h,o,l,a"
*/

// Мій варіант
function printArray(array) {
    return array.join(',');
}
// Цікаві варіанти з Codewars
function printArray_(array) {
    return array.toString();
}
// ================================================================================================
// ================================================================================================
//*-Task №191 Price of Mangoes (8kyu)
/*
На манго є пропозиція «3 за 2» (або «2+1», якщо хочете). Для певної кількості та ціни (за манго)
обчисліть загальну вартість манго.
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
*/

// Мій варіант
function mango(quantity, price) {
    return quantity >= 3 ? (quantity - (Math.floor(quantity / 3))) * price : quantity * price;
}
// Цікаві варіанти з Codewars
function mango_(quantity, price) {
    return price * (quantity - Math.floor(quantity / 3));
}
// ================================================================================================
// ================================================================================================
//*-Task №192 Remove First and Last Character Part Two (8kyu)
/*
Вам надається рядок, що містить послідовність символів, розділених комами.
Напишіть функцію, яка повертає новий рядок, що містить ті самі послідовності символів, крім першого
та останнього, але цього разу розділених пробілами.

Якщо вхідний рядок порожній або видалення першого й останнього елементів призведе до того, що
результуючий рядок буде порожнім, поверніть порожнє значення
(представлене як загальне значення NULL у прикладах нижче).
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

// Мій варіант
function array(string) {
    if (string === '') { return null };
    const str = string.split(',');
    if (str.length <= 2) { return null };
    str.pop();
    str.shift()
    return str.join(' ');
}

// Цікаві варіанти з Codewars
function array_(arr) {
    return arr.split(",").slice(1, -1).join(" ") || null;
}
// ================================================================================================
// ================================================================================================
//*-Task №193 How many stairs will Suzuki climb in 20 years? (8kyu)
/*
Сузукі — чернець, який піднімається великими сходами до монастиря в рамках ритуалу. Іноді він
піднімається більше сходів, ніж інші, залежно від кількості учнів, яких він повинен тренувати вранці.
Йому цікаво, скільки сходів можна буде підняти протягом наступних 20 років, і він витратив рік,
відзначаючи свій щоденний прогрес.

Сума всіх сходів, пройдених за рік, буде використана для оцінки кількості, яку він може піднятися за 20.
Оцінка_20_років = загальна_один_рік * 20

Ви отримаєте наведену нижче структуру даних, що представляє сходи, які Suzuki зареєстрував за рік.
Ви матимете всі дані за весь рік, тому, незалежно від того, як вони реєструються,
проблему має бути легко вирішити.

сходи = [неділя, понеділок, вівторок, середа, четвер, п'ятниця, субота]
Переконайтеся, що ваше рішення враховує всі гнізда всередині масиву сходів.

Кожен будній день у сходовому масиві – це масив.
sunday = [
    6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940,
    8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628,
    5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836,
    8032, 9871, 5990, 6309, 7825
]
*/

// Мій варіант
function stairsIn20(stairs) {
    let oneYearTotal = 0;
    for (let i = 0; i < stairs.length; i++) {
        let weekdayStairs = stairs[i];
        let dailyTotal = weekdayStairs.reduce((acc, val) => acc + val, 0);
        oneYearTotal += dailyTotal;
    }
    let twentyYearEstimate = oneYearTotal * 20;
    return twentyYearEstimate;
}

// Цікаві варіанти з Codewars
function stairsIn20_(a) {
    return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}
// ================================================================================================
// ================================================================================================
//*-Task №194 Closest elevator (8kyu)
/*
Дано 2 ліфти (з назвами left і right) у будинку з 3 поверхами (пронумерованими від 0 до 2),
напишіть функцію elevator, яка приймає 3 аргументи (по порядку):

left - поточний поверх лівого ліфта
right - поточний поверх правого ліфта
call - Поверх, який викликав ліфт
Він має повернути назву ліфта, найближчого до викликаного поверху ("лівий"/"правий").
У випадку, коли обидва ліфти однаково віддалені від викликаного поверху, виберіть ліфт праворуч.
Ви можете припустити, що вхідні дані завжди будуть дійсними цілими числами від 0 до 2.
*/

// Мій варіант
function elevator(left, right, call) {
    return Math.abs(call - right) <= Math.abs(call - left) ? 'right' : 'left';
}

// Цікаві варіанти з Codewars
const elevator_ = (left, right, call) => Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
// ================================================================================================
// ================================================================================================
//*-Task №195 Find Nearest square number (8kyu)
/*
Ваше завдання — знайти найближче квадратне число nearestSq(n) натурального числа n.
Наприклад, якщо n = 111, то найближчий nearestSq(n) дорівнює 121, оскільки 111 ближче до 121,
квадрат 11, ніж 100, квадрат 10.
Якщо n уже є ідеальним квадратом (наприклад, n = 144, n = 81 тощо), вам потрібно просто повернути n.
*/

// Мій варіант
function nearestSq(n) {
    const sqrtN = Math.sqrt(n);
    const lowerSq = Math.floor(sqrtN) ** 2;
    const upperSq = Math.ceil(sqrtN) ** 2;

    if (n - lowerSq < upperSq - n) {
        return lowerSq;
    } else {
        return upperSq;
    }
}

// Цікаві варіанти з Codewars
const nearestSq_ = n => Math.pow(Math.round(Math.sqrt(n)), 2);
// ================================================================================================
// ================================================================================================
//*-Task №196 Fundamentals: Return (8kyu)
/*
Створіть кілька функцій, які повертатимуть суму, різницю, модуль, добуток, частку та показник степеня відповідно.
Використовуйте такі назви функцій:
addition = додавання
multiply = множити
division = розділення
modulus = модуль
exponential = експонента
subtraction = різниця
Примітка. Усі математичні операції будуть: a (операція) b
*/

// Мій варіант
function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function mod(a, b) {
    return a % b;
}

function exponent(a, b) {
    return Math.pow(a, b);
}

function subt(a, b) {
    return a - b;
}

// Цікаві варіанти з Codewars
const add_ = (a, b) => a + b;
const subt_ = (a, b) => a - b;
const divide_ = (a, b) => a / b;
const multiply_ = (a, b) => a * b;
const mod_ = (a, b) => a % b;
const exponent_ = (a, b) => a ** b;
// ================================================================================================
// ================================================================================================
//*-Task №197 Exclamation marks series #2: Remove all exclamation marks from the end of sentence (8kyu)
/*
Видаліть усі знаки оклику в кінці речення.
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

// Мій варіант
function remove(string) {
    return string.replace(/!+$/gi, '');
}

// Цікаві варіанти з Codewars
const remove_ = s => s.replace(/!+$/, '');
//
function remove__(s) {
    //coding and coding....
    while (s[s.length - 1] === '!') {
        s = s.slice(0, -1);
    }
    return s;
}
// ================================================================================================
// ================================================================================================
//*-Task №198 Training JS #8: Conditional statement--switch (8kyu)
/*
Виконайте функцію howManydays. Він приймає 1 параметр місяць, який означає місяць року.
Різні місяці мають різну кількість днів, як показано в таблиці нижче. Повертає кількість днів у місяці.
Перевірка введених даних не потрібна: місяць завжди буде більшим за 0 і меншим або рівним 12.
+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
*/

// Мій варіант
function howManydays(month) {
    var days;
    switch (month) {
        case 2:
            days = 28;
            break;
        case 4:
            days = 30;
            break;
        case 6:
            days = 30;
            break;
        case 9:
            days = 30;
            break;
        case 11:
            days = 30;
            break;
        default:
            days = 31;
    }
    return days;
}

// Цікаві варіанти з Codewars
function howManydays_(month) {
    switch (month) {
        case 2: return 28
        case 4:
        case 6:
        case 9:
        case 11: return 30
    }
    return 31
}
// ================================================================================================
// ================================================================================================
//*-залишилось 186шт