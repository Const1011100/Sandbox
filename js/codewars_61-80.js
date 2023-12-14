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
//*-осталось 314шт
// console.time('timer_1');
// console.timeEnd('timer_1');

// console.time('timer_2');
// console.timeEnd('timer_2');