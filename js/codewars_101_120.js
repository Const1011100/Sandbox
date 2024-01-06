//*-Task №101 Student's Final Grade (8kyu)
/*
Створити функцію finalGrade, яка розраховує підсумкову оцінку студента в залежності від двох параметрів:
оцінки за іспит і кількості виконаних робіт.

Ця функція повинна приймати два аргументи: exam - оцінка за іспит (від 0 до 100);
проекти - кількість виконаних проектів (від 0 і вище);

Ця функція має повертати число (кінцева оцінка). Є чотири види підсумкових оцінок:
100, якщо оцінка за іспит більше 90 або якщо кількість виконаних проектів більше 10.
90, якщо оцінка за іспит більше 75 і якщо кількість виконаних робіт не менше 5.
75, якщо оцінка за іспит більше 50 і якщо кількість виконаних робіт не менше 2.
0, в інших випадках
*/

// Мій варіант
function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else {
        return 0;
    }
}

// Цікаві варіанти з Codewars
const finalGrade_ = (exam, projects) => {
    return (
        exam > 90 || projects > 10 ? 100 :
        exam > 75 && projects >= 5 ? 90 :
        exam > 50 && projects >= 2 ? 75 : 0
    )
}

// ================================================================================================
// ================================================================================================
//*-Task №102 Grasshopper - Messi goals function (8kyu)
/*
Функція голів Мессі
Мессі - футболіст з голами в трьох лігах:
LaLiga
Copa del Rey
Champions

Виконайте функцію, щоб повернути його загальну кількість голів у всіх трьох лігах.
Примітка: введені дані завжди будуть дійсними.
Наприклад:
5, 10, 2 --> 17
*/

// Мій варіант
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Цікаві варіанти з Codewars
const goals_ = (...goalsArray) => goalsArray.reduce((a, b) => a + b);

// ================================================================================================
// ================================================================================================
//*-Task №103 I love you, a little , a lot, passionately ... not at all (8kyu)
/*
Хто пам’ятає часи на шкільному подвір’ї, коли дівчата брали квітку і рвали її пелюстки, промовляючи
кожну з наступних фраз кожного разу, коли пелюстка була зривана:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
Якщо пелюсток більше 6, ви починаєте спочатку: «I love you» для 7 пелюсток, «a little» для 8 пелюсток
і так далі.

Коли була зірвана остання пелюстка, пролунали крики хвилювання, мрії, хвилювання думок і емоцій.
Ваша мета в цьому ката — визначити, яку фразу скажуть дівчата на останній пелюстці для квітки з заданою
кількістю пелюсток. Кількість пелюсток завжди більше 0.
*/

// Мій варіант
function howMuchILoveYou(nbPetals) {
    let petals = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    if(nbPetals <= petals.length) { return petals[nbPetals - 1]};
    if(nbPetals > petals.length && nbPetals % petals.length !== 0) { return petals[nbPetals % petals.length - 1]};
    if(nbPetals > petals.length && nbPetals % petals.length === 0) { return petals[petals.length - 1]};
}

// Цікаві варіанти з Codewars
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou_(n) {
    return phrases[(n - 1) % phrases.length];
}

// ================================================================================================
// ================================================================================================
//*-Task №104 I love you, a little , a lot, passionately ... not at all (8kyu)
/*
Налагодження функції sayHello
Зоряний корабель «Ентерпрайз» зіткнувся з певною проблемою під час створення програми для вітання
всіх, хто підійде на борт. Ваше завдання — виправити код і повернути програму до роботи!

Приклад результату:
Hello, Mr. Spock
*/

// Мій варіант
function sayHello(name) {
    return `Hello, ${name}`;
}

// Цікаві варіанти з Codewars
function sayHello_(name) {
    return 'Hello, '.concat(name);
}
// ================================================================================================
// ================================================================================================
//*-Task №105 Sort and Star (8kyu)
/*
Вам буде надано список рядків. Ви повинні відсортувати його за алфавітом (з урахуванням регістру
та на основі значень ASCII символів), а потім повернути перше значення.

Повернене значення має бути рядком із символом "***" між літерами.
Ви не повинні видаляти або додавати елементи з/до масиву.
*/

// Мій варіант
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}

// Цікаві варіанти з Codewars
const twoSort_ = s => [...s.sort()[0]].join('***');
// ================================================================================================
// ================================================================================================
//*-Task №106 To square(root) or not to square(root) (8kyu)
/*
Напишіть метод, який отримуватиме масив цілих чисел як параметр і оброблятиме кожне число
з цього масиву.
Поверніть новий масив, обробивши кожне число вхідного масиву таким чином:
Якщо число має цілий квадратний корінь, візьміть його, інакше підведіть число до квадрата.

Приклад
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Примітки
Вхідний масив завжди міститиме лише додатні числа і ніколи не буде порожнім або нульовим.
*/

// Мій варіант
function squareOrSquareRoot(array) {
    return array.map(n => Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n * n);
}
// Цікаві варіанти з Codewars
function squareOrSquareRoot_(array) {
    return array.map(x => {
        const r = Math.sqrt(x);
        return (r % 1 == 0) ? r : (x * x);
    });
}
// ================================================================================================
// ================================================================================================
//*-Task №107 Training JS #7: if..else and ternary operator (8kyu)
/*
Функція saleHotdogs приймає 1 параметр: n,
n — це кількість хот-догів, які придбає клієнт, різні номери мають різні ціни (див. наступну таблицю).
Функція повертає, скільки грошей витратить клієнт, щоб купити це кількість хот-догів.

Кількість хот-догів ціна за одиницю (центи):
n < 5  -> 100
n >= 5 і n < 10  -> 95
n >= 10  -> 90
*/

// Мій варіант
function saleHotdogs(n) {
    return n * (n >= 10 ? 90 : n < 5 ? 100 : 95);
}

// Цікаві варіанти з Codewars
function saleHotdogs(n) {
    return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}
// ================================================================================================
// ================================================================================================
//*-Task №108 Grasshopper - Terminal game move function (8kyu)
/*
Функція переміщення термінальної гри
У цій грі герой рухається зліва направо. Гравець кидає кубик і два рази пересуває кількість клітинок,
вказану кубиком.
Створіть функцію для термінальної гри, яка бере поточну позицію героя та кидок (1-6) і повертає нову
позицію.

Приклад:
move(3, 6) має дорівнювати 15
*/

// Мій варіант
function move(position, roll) {
    return roll * 2 + position;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №109 Unfinished Loop - Bug Fixing #1 (8kyu)
/*
Незавершений цикл - виправлення помилки №1
О ні, Тіммі створив нескінченний цикл! Допоможіть Тіммі знайти та виправити помилку в його
незавершеному циклі for!
*/

// Мій варіант
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №110 Filter out the geese (8kyu)
/*
Напишіть функцію, яка приймає список рядків як аргумент і повертає відфільтрований список,
що містить ті самі елементи, але без «гусей».

Гуси — це будь-які рядки в наступному масиві, який попередньо заповнено у вашому рішенні:
["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

Наприклад, якщо цей масив передано як аргумент:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Ваша функція поверне такий масив:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

Елементи у поверненому масиві мають бути в тому самому порядку, що й у початковому масиві,
переданому вашій функції, хоча й без «гусей». Зверніть увагу, що всі рядки будуть написані в тому
самому регістрі, що й надані, і деякі елементи можуть повторюватися.
*/

// Мій варіант
function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(function (elem) {
        for (let i = 0; i < geese.length; i++) {
            if (elem === geese[i]) {
                return false;
            }
        }
        return true;
    })
};

// Цікаві варіанти з Codewars
function gooseFilter_(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
};
//
function gooseFilter__(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => geese.indexOf(bird) < 0);
};

// ================================================================================================
// ================================================================================================
//*-Task №111 Expressions Matter (8kyu)
/*
завдання
Дано три цілі числа a, b, c, поверніть найбільше число, отримане після вставки таких операторів
і дужок: +, *, ()
Іншими словами, спробуйте кожну комбінацію a, b, c із [*+()] і поверніть максимально отримане
значення (прочитайте примітки, щоб дізнатися більше про це)

Приклад
Для цифр 1, 2 і 3 ось кілька способів розміщення знаків і дужок:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
Отже, максимальне значення, яке ви можете отримати, дорівнює 9.

Примітки
Цифри завжди позитивні.
Числа знаходяться в діапазоні (1  ≤  a, b, c  ≤  10).
Ви можете використовувати ту саму операцію кілька разів.
Не обов'язково розставляти всі знаки і дужки.
Можливе повторення чисел.
Ви не можете поміняти операнди місцями. Наприклад, у наведеному прикладі не можна отримати
вираз (1 + 3) * 2 = 8.

Вхід >> Вихід Приклади:
expressionsMatter(1,2,3) ==> повернути 9
Пояснення:
Після розстановки знаків і дужок, максимальне значення, отримане з виразу (1+2) * 3 = 9.

expressionsMatter(1,1,1) ==> повернути 3
Пояснення:
Після розстановки знаків максимальне значення, отримане з виразу, дорівнює 1 + 1 + 1 = 3.

expressionsMatter(9,1,1) ==> повернути 18
Пояснення:
Після розстановки знаків і дужок максимальне значення, отримане з виразу, дорівнює 9 * (1 + 1) = 18.
*/

// Мій варіант
function expressionMatter(a, b, c) {
    let v1 = a + b + c;
    let v2 = a * b * c;
    let v3 = a * b + c;
    let v4 = a + b * c;
    let v5 = (a + b) * c;
    let v6 = a * (b + c);
    return Math.max(v1, v2, v3, v4, v5, v6);
}
/*
    В ці варіанти можна не враховувати, вони завжди програють варіанту a * b * c
    a + b * c,
    a * b + c,
*/

// Цікаві варіанти з Codewars
function expressionMatter_(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c,
    );
}
//
function expressionMatter__(a, b, c) {
    return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}

// ================================================================================================
// ================================================================================================
//*-Task №112 Function 2 - squaring an argument (8kyu)
/*
Тепер вам потрібно написати функцію, яка приймає аргумент і повертає його квадрат.
*/

// Мій варіант
const square = num => num * num;

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-залишилось 270шт