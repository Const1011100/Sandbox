"use strict"
// ================================================================================================
//*-Task №61 Sum without highest and lowest number (8kyu)
/*
Підсумуйте всі числа даного масиву, крім найвищого та найнижчого елементів (за значенням, а не за індексом!).
Найвищий або найнижчий елемент, відповідно, є одним елементом на кожному краю, навіть якщо їх більше одного
з однаковим значенням.
Зверніть увагу на перевірку введених даних:
Приклад:
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Перевірка введених даних:
Якщо замість масиву вказано порожнє значення (null, None, Nothing тощо), або даний масив є порожнім
списком або списком лише з 1 елементом, поверніть 0.
*/

// Мій варіант
function sumArray(array) {
    if (Array.isArray(array) && array.length > 1) {
        let sumArray = array.reduce((accum, elem) => { return accum + elem });
        let sumMaxAndMinElem = Math.max(...array) + Math.min(...array);
        return sumArray - sumMaxAndMinElem;
    } else {
        return 0;
    }
}
// Цікаві варіанти з Codewars
function sumArray_(array) {
    array = array || [];
    return array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b, 0);
}
// ================================================================================================
// ================================================================================================
//*-Task №62 Area or Perimeter (8kyu)
/*
Вам задано довжину та ширину 4-стороннього багатокутника.
Багатокутник може бути як прямокутником, так і квадратом.
Якщо це квадрат, поверніть його площу. Якщо це прямокутник, поверніть його периметр.

Приклад (Input1, Input2 --> Output):
6, 10 --> 32
3, 3 --> 9
Примітка:
для йієї задачі ви припускаєте, що це квадрат, якщо його довжина та ширина рівні, інакше це прямокутник.
*/

// Мій варіант
const areaOrPerimeter = function (l, w) {
    return l === w ? l * w : (l * 2) + (w * 2);
};
// Цікаві варіанти з Codewars
const areaOrPerimeter_ = (l, w) => l === w ? l * w : 2 * (l + w);
// ================================================================================================
// ================================================================================================
//*-Task №63 Grasshopper - Personalized Message (8kyu)
/*
Створіть функцію, яка надає персоналізоване привітання.
Ця функція приймає два параметри: ім'я та власника.
Використовуйте умови, щоб повернути правильне повідомлення:

Приклад:
ім'я дорівнює власнику 'Hello boss'
інакше 	'Hello guest'
*/

// Мій варіант
function greet(name, owner) {
    return `Hello ${name === owner ? 'boss' : 'guest'}`;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №64 Sum Mixed Array (8kyu)
/*
Дано масив цілих чисел у вигляді рядків і чисел, повернути суму значень масиву так, якби всі були числами.
Поверніть свою відповідь у вигляді числа.
*/

// Мій варіант
function sumMix(x) {
    return x.reduce((accum, elem) => accum + Number(elem), 0);
}

// Цікаві варіанти з Codewars
function sumMix_(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}
// ================================================================================================
// ================================================================================================
//*-Task №65 The Feast of Many Beasts (8kyu)
/*
Усі звірята бенкетують! Кожна тварина приносить одну страву. Є лише одне правило:
страва повинна починатися і закінчуватися тими ж буквами, що і назва тварини.
Наприклад, велика блакитна чапля приносить часниковий наан, а синиця приносить шоколадний торт.

Напишіть функцію feast, яка приймає назву тварини та блюдо як аргументи та повертає true або false,
щоб вказати, чи дозволено звірові приносити страву на бенкет.

Припустимо, що звір і страва завжди є рядками нижнього регістру, і кожен має принаймні дві літери.
beast і dish можуть містити дефіси та пробіли, але вони не відображатимуться ні на початку,
ні наприкінці рядка. Вони не будуть містити цифри.
*/

// Мій варіант
function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}
// Цікаві варіанти з Codewars
const feast_ = (b, d) => d.startsWith(b[0]) && d.endsWith(b[b.length - 1]);
// ================================================================================================
// ================================================================================================
//*-Task №66 Count the Monkeys! (8kyu)
/*
Ти ведеш свого сина в ліс до мавп. Ви знаєте, що там є певне число (n), але ваш син занадто малий,
щоб просто оцінити повне число, він повинен почати рахувати їх з 1.

Як хороший батько, ти будеш сидіти і рахувати з ним. Маючи число (n), заповнити масив усіма числами
до цього числа включно, але за винятком нуля.

Наприклад (введення --> вихід):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
1 --> [1]
*/

// Мій варіант
function monkeyCount(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr;
}
// Цікаві варіанти з Codewars
function monkeyCount_(n) {
    return Array.from({ length: n }, (_, i) => i + 1)
}

// ================================================================================================
// ================================================================================================
//*-Task №67 Remove exclamation marks (8kyu)
/*
Напишіть функцію RemoveExclamationMarks, яка видаляє всі знаки оклику з заданого рядка.
*/

// Мій варіант
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}
// Цікаві варіанти з Codewars
function removeExclamationMarks_(s) {
    return s.split('!').join('');
}

// ================================================================================================
// ================================================================================================
//*-Task №68 Transportation on vacation (8kyu)
/*
Після важкої роботи в офісі ви вирішили трохи відпочити у відпустці. Тож ви забронюєте рейс для себе
та вашої дівчини та спробуєте залишити весь безлад позаду.
Вам знадобиться орендований автомобіль, щоб пересуватися під час відпустки. Менеджер автопрокату
робить вам вигідні пропозиції.
Кожен день оренди автомобіля коштує 40 доларів. Якщо ви орендуєте автомобіль на 7 і більше днів,
ви отримуєте знижку 50 доларів США. Крім того, якщо ви орендуєте автомобіль на 3 або більше днів,
ви отримуєте 20 доларів США від загальної суми.

Напишіть код, який видає загальну суму за різні дні (d).
*/

// Мій варіант
function rentalCarCost(d) {
    return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;
}
// Цікаві варіанти з Codewars
function rentalCarCost_(d) {
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}

// ================================================================================================
// ================================================================================================
//*-Task №69 Quarter of the year (8kyu)
/*
Дано місяць як ціле число від 1 до 12, поверніться до якого кварталу року він належить як ціле число.
Наприклад: місяць 2 (лютий) є частиною першого кварталу; 6 місяць (червень), входить у другу чверть;
і місяць 11 (листопад), є частиною четвертого кварталу.
Обмеження:
1 <= місяць <= 12
*/

// Мій варіант
const quarterOf = (month) => {
    if (month <= 3) {
        return 1;
    } else if (month <= 6) {
        return 2;
    } else if (month <= 9) {
        return 3;
    } else {
        return 4;
    }
}
// Цікаві варіанти з Codewars
const quarterOf_ = m => Math.ceil(m/3); // Дуже гарне рішення!

// ================================================================================================
// ================================================================================================
//*-Task №70 Thinkful - Logic Drills: Traffic light (8kyu)
/*
Ви пишете код для керування світлофорами вашого міста. Вам потрібна функція для обробки кожної зміни
від зеленого до жовтого, до червоного, а потім знову до зеленого.
Виконайте функцію, яка приймає рядок як аргумент, що представляє поточний стан світла, і повертає
рядок, що представляє стан, до якого має змінитися світло.
Наприклад, коли вхід зелений, вихід має бути жовтим.
*/

// Мій варіант
function updateLight(current) {
    let light = null;
    switch (current) {
        case 'green':
            light = 'yellow';
            break;
        case 'yellow':
            light = 'red';
            break;
        case 'red':
            light = 'green';
            break;
    }
    return light;
}
// Цікаві варіанти з Codewars
const updateLight_ = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
})[current]

// ================================================================================================
// ================================================================================================
//*-Task №71 L1: Set Alarm (8kyu)
/*
Напишіть функцію під назвою setAlarm/set_alarm/set-alarm/setalarm (залежно від мови), яка отримує
два параметри. Перший параметр, зайнятий, є істинним, коли ви працюєте, а другий параметр, відпустка,
є істинним, коли ви перебуваєте у відпустці.
Функція має повертати true, якщо ви працюєте, а не у відпустці (оскільки це обставини, за яких вам
потрібно встановити будильник). В іншому випадку він повинен повернути false. приклади:

найнятий | відпустка
employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/

// Мій варіант
function setAlarm(employed, vacation) {
    return employed && !vacation;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №72 Double Char (8kyu)
/*
Дано рядок, ви повинні повернути рядок, у якому кожен символ (з урахуванням регістру) повторюється один раз.

Приклади (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

// Мій варіант
function doubleChar(str) {
    let resultArr = [];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(arr[i] + arr[i]);
    }
    return resultArr.join('');
}
// Цікаві варіанти з Codewars
const doubleChar_ = (str) => str.split("").map(c => c + c).join("");
//
function doubleChar__(str) {
    return str.replace(/(.)/g, "$1$1")
}

// ================================================================================================
// ================================================================================================
//*-Task №73 Do I get a bonus? (8kyu)
/*
Бонусний час у великому місті! Товстуни потирають лапи в очікуванні... але хто заробить більше грошей?
Побудуйте функцію, яка приймає два аргументи (зарплата, бонус). Зарплата буде цілим числом,
а премія – логічним.
Якщо бонус істинний, зарплату слід помножити на 10. Якщо бонус невірний, товстун заробив недостатньо
грошей і повинен отримувати лише заявлену зарплату.
Повертає загальну цифру, яку отримає особа, у вигляді рядка з префіксом «£»
(= «\u00A3», JS, Go, Java, Scala та Julia),
*/

// Мій варіант
function bonusTime(salary, bonus) {
    let result = bonus ? salary * 10 : salary;
    return "£" + result;
}
// Цікаві варіанти з Codewars
const bonusTime_ = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

// ================================================================================================
// ================================================================================================
//*-Task №74 Removing Elements (8kyu)
/*
Візьміть масив і видаліть з нього кожен другий елемент. Завжди зберігайте перший елемент і починайте
видалення з наступного.
Приклад:
["Зберегти", "Видалити", "Зберегти", "Видалити", "Зберегти", ...] -->
["Зберегти", "Зберегти", "Зберегти", ...]
Жоден із масивів не буде порожнім, тому вам не потрібно про це хвилюватися!
*/

// Мій варіант
function removeEveryOther(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}
// Цікаві варіанти з Codewars
function removeEveryOther_(arr) {
    return arr.filter(function (elem, index) {
        return index % 2 === 0;
    });
}
//
function removeEveryOther__(arr) {
    //your code here
    for (var i = 1; i < arr.length; i++) {
        arr.splice(i, 1);
    }
    return arr;
}

// ================================================================================================
// ================================================================================================
//*-Task №75 Will there be enough space? (8kyu)
/*
Історія:
Боб працює водієм автобуса. Проте він став надзвичайно популярним серед мешканців міста.
З такою кількістю пасажирів, які хочуть сісти в його автобус, йому іноді доводиться стикатися з
проблемою, що в автобусі не вистачає місця! Він хоче, щоб ви написали просту програму, яка повідомляє
йому, чи зможе він розмістити всіх пасажирів.

Огляд завдань:
Ви повинні написати функцію, яка приймає три параметри:
cap - це кількість людей, які може вмістити автобус, за винятком водія.
on - кількість людей в автобусі без водія.
wait - це кількість людей, які чекають на посадку в автобус, за винятком водія.

Якщо місця достатньо, поверніть 0, а якщо немає, поверніть кількість пасажирів, яких він не може прийняти.

Приклади використання:
cap = 10, on = 5, wait = 5 --> 0 # Він може вмістити всіх 5 пасажирів
cap = 100, on = 60, wait = 50 --> 10 # Він не може вмістити 10 із 50 очікувань
*/

// Мій варіант
function enough(cap, on, wait) {
    return (on + wait <= cap) ? 0 : Math.abs(cap - on - wait);
}
// Цікаві варіанти з Codewars
function enough_(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
}

// ================================================================================================
// ================================================================================================

//*-Task №76  (8kyu)
/*
Вам задано два внутрішні кути (в градусах) трикутника.
Напишіть функцію для повернення 3-го.
Примітка: перевірятимуться лише додатні цілі числа.
*/

// Мій варіант
function otherAngle(a, b) {
    return 180 - (a + b);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-осталось 306шт
// console.time('timer_1');
// console.timeEnd('timer_1');

// console.time('timer_2');
// console.timeEnd('timer_2');