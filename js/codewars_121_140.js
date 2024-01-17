//*-Task №121 Well of Ideas - Easy Version (8kyu)
/*
На кожну хорошу ідею ката, здається, є чимало поганих!

У цьому ката вам потрібно перевірити наданий масив (x) на наявність хороших ідей як 'good' і поганих
ідей як 'bad'. Якщо є одна чи дві хороші ідеї, поверніть 'Publish!', якщо їх більше 2, поверніть
'I smell a series!'. Якщо хороших ідей немає, як це часто буває, поверніть 'Fail!.
*/

// Мій варіант
function well(x) {
    let good = x.filter(elem => elem === 'good');
    return good.length > 2 ? 'I smell a series!' : good.length === 0 ? 'Fail!' : 'Publish!';
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №122 Vowel remover (8kyu)
/*
Створіть функцію під назвою shortcut для видалення голосних малих літер (a, e, i, o, u) у заданому рядку.

Приклади
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
не турбуйтеся про великі голосні
y не вважається голосним для цієї ката
*/

// Мій варіант
function shortcut(string) {
    return string.split('a').join('').split('e').join('').split('i').join('').split('o').join('').split('u').join('');
}

// Цікаві варіанти з Codewars
function shortcut_(string) {
    return string.replace(/[aeiou]/g, '')
}
//
function shortcut__(s) {
    return s
        .replaceAll('e', '')
        .replaceAll('o', '')
        .replaceAll('a', '')
        .replaceAll('i', '')
        .replaceAll('u', '')
}
// ================================================================================================
// ================================================================================================
//*-Task №123 Training JS #1: create your first JS function and print "Hello World!" (8kyu)
/*
Перегляньте два приклади вище та напишіть свою першу функцію JS.
*/

// Мій варіант
function helloWorld() {
    let str = 'Hello World!';
    console.log(str);
}

// Цікаві варіанти з Codewars

//

// ================================================================================================
// ================================================================================================
//*-Task №124 Short Long Short (8kyu)
/*
Дано 2 рядки, a і b, повернути рядок у формі короткий+довгий+короткий, з коротшим рядком назовні
та довшим усередині. Рядки не будуть однакової довжини, але вони можуть бути порожніми (нульова довжина).

Довжина рядка не завжди збігається з кількістю символів

("1", "22") --> "1221"
("22", "1") --> "1221"
*/

// Мій варіант
function solution(a, b) {
    return a.length > b.length ? b + a + b : a + b + a;
}
//
const solution_ = (a, b) => {
    return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №125 What's the real floor? (8kyu)
/*
Американці - дивні люди: в їхніх будинках перший поверх фактично перший, а 13-го немає (через забобони).
Напишіть функцію, яка, задана підлога в американській системі, повертає підлогу в європейській системі.

Коли 1-й поверх замінюється першим поверхом, а 13-й поверх видаляється, цифри переміщуються вниз,
щоб зайняти своє місце. Якщо вище 13, вони переміщаються вниз на два, оскільки під ними є
два пропущені числа.

Підвали (негативи) залишаються такими ж, як і універсальний рівень.
Приклади
1 => 0
0 => 0
5 => 4
15 => 13
-3 => -3
*/

// Мій варіант
function getRealFloor(n) {
    if (n > 0) {
        return n - 1 < 13 ? n - 1 : n - 2;
    } else {
        return n;
    }
}
// Цікаві варіанти з Codewars
function getRealFloor_(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// ================================================================================================
// ================================================================================================
//*-Task №126 Lario and Muigi Pipe Problem (8kyu)
/*
Проблема
Схоже, сантехнік-хуліган із братом знову бігають і псують ваші сцени.
Треба полагодити труби, що з’єднують етапи вашого рівня, перш ніж ви отримаєте скарги.
Труби правильні, якщо кожна труба після першої на 1 більша за попередню.

Маючи список унікальних чисел, відсортованих у порядку зростання, поверніть новий список,
щоб значення збільшувалися на 1 для кожного індексу від мінімального значення до максимального
значення (обидва включені).

приклад
Вхід: 1,3,5,6,7,8 Вихід: 1,2,3,4,5,6,7,8
*/

// Мій варіант
function pipeFix(numbers) {
    let result = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        result.push(i);
    }
    return result;
}
// Цікаві варіанти з Codewars
let pipeFix_ = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);

// ================================================================================================
// ================================================================================================
//*-Task №127 Name Shuffler (8kyu)
/*
Напишіть функцію, яка повертає рядок, у якому ім’я замінено прізвищем.

"Джон МакКлейн" --> "МакКлейн Джон"
*/

// Мій варіант
function nameShuffler(str) {
    return str.split(' ').reverse().join(' ');
}
// Цікаві варіанти з Codewars
const nameShuffler_ = str => str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);

// ================================================================================================
// ================================================================================================
//*-Task №128 Basic variable assignment (8kyu)
/*
Цей код має зберігати «codewa.rs» як змінну під назвою name, але він не працює.
Ви можете зрозуміти чому?
*/

// Мій варіант
var a = "code";
var b = "wa.rs";
var name = a + b;
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №129 Drink about (8kyu)
/*
Діти п'ють тодді.
Підлітки п'ють колу.
Молодь п'є пиво.
Дорослі п'ють віскі.
Зробіть функцію, яка отримує вік і повертає те, що вони п'ють.

правила:
Діти до 14 років.
Підлітки до 18 років.
Молодь до 21 року.
У дорослих – 21 і більше.
Приклади: (Вхід --> Вихід)

13 --> "drink toddy"
17 --> "пий кока-колу"
18 --> "пий пиво"
20 --> "пий пиво"
30 --> "пий віскі"
*/

// Мій варіант
function peopleWithAgeDrink(old) {
    if (old < 14) {
        return "drink toddy";
    } else if (old < 18) {
        return "drink coke";
    } else if (old < 21) {
        return "drink beer";
    } else {
        return "drink whisky";
    }
};
// Цікаві варіанти з Codewars
const peopleWithAgeDrink_ = (age) => {
    switch (true) {
        case (age >= 21): return 'drink whisky'
        case (age >= 18): return 'drink beer'
        case (age >= 14): return 'drink coke'
        default: return 'drink toddy'
    }
};

// ================================================================================================
// ================================================================================================
//*-Task №130 Exclamation marks series #1: Remove an exclamation mark from the end of string (8kyu)
/*
Видалити знак оклику в кінці рядка. Для ката для початківців ви можете припустити, що вхідні дані
завжди є рядком, перевіряти їх не потрібно.

Приклади
"Привіт!" ---> "Привіт"
"Привіт!!!" ---> "Привіт!!"
"!Привіт" ---> "!Привіт"
"!Привіт!" ---> "!Привіт"
«Привіт! Привіт!» ---> "Привіт! Привіт"
"Привіт" ---> "Привіт"
*/

// Мій варіант
function remove(string) {
    return string[string.length - 1] === '!' ? string.slice(0, -1) : string;
}
// можна використати метод endsWith()

// Цікаві варіанти з Codewars
const remove_ = s => s.replace(/!$/, '');

// ================================================================================================
// ================================================================================================
//*-Task №131 get character from ASCII Value (8kyu)
/*
Напишіть функцію, яка приймає число та повертає відповідний символ ASCII для цього значення.

65 --> "A"
97 --> 'a'
48 --> '0
*/

// Мій варіант
function getChar(c) {
    return c >= 0 && c <= 127 ? String.fromCharCode(c) : 'Error';
}

// Цікаві варіанти з Codewars
function getChar_(c) {
    return String.fromCharCode(c)
}
//
const getChar__ = String.fromCharCode;

// ================================================================================================
// ================================================================================================
//*-Task №132 Exclusive "or" (xor) Logical Operator (8kyu)
/*
Ексклюзивний логічний оператор «або» (xor).
Огляд
У деяких сценарних мовах, як-от PHP, існує логічний оператор (наприклад, &&, || та, або тощо),
який називається «Виключне або» (звідси й назва цього ката).
Ексклюзивний або обчислює два логічні значення. Потім він повертає true, якщо точно один із двох
виразів є true, і false в іншому випадку. Наприклад:

false xor false == false // оскільки обидва є false
true xor false == true // рівно один із двох виразів істинний
false xor true == true // рівно один із двох виразів істинний
true xor true == false // Обидва є істинними. "xor" повертає істину, лише якщо ТОЧНО один із двох виразів має значення істини.
завдання
Оскільки ми не можемо визначити ключові слова в Javascript (ну, принаймні, я не знаю, як це зробити),
ваше завдання полягає в тому, щоб визначити функцію xor(a, b), де a і b є двома виразами,
які потрібно обчислити. Ваша функція xor повинна мати описану вище поведінку, повертаючи істину,
якщо рівно один із двох виразів має значення істини, і хибність в іншому випадку.

*/

// Мій варіант
function xor(a, b) {
    return a !== b;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №133 Capitalization and Mutability (8kyu)
/*
Ваш колега мав написати просту допоміжну функцію для написання великої літери рядка
(що містить одне слово) перед тим, як вони пішли у відпустку.

На жаль, вони вже пішли, і код, який вони вам дали, не працює. Виправте допоміжну функцію, яку вони
написали, щоб вона працювала належним чином (тобто вона має бути першим символом у верхньому регістрі рядка).
Рядок завжди починається з літери і ніколи не буде порожнім.

приклади:
"привіт" --> "привіт"
"Привіт" --> "Привіт" (перша літера вже була великою)
"a" --> "A"
*/

// Мій варіант
function capitalizeWord(word) {
    return word.replace(word[0], word[0].toUpperCase());
}

// Цікаві варіанти з Codewars
function capitalizeWord_(word) {
    return word[0].toUpperCase() + word.slice(1);
}
//
const capitalizeWord__ = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());
// ================================================================================================
// ================================================================================================
//*-Task №134 Grasshopper - Terminal game combat function (8kyu)
/*
Створіть бойову функцію, яка бере поточне здоров’я гравця та кількість отриманої шкоди, а також
повертає нове здоров’я гравця. Здоров'я не може бути менше 0.
*/

// Мій варіант
function combat(health, damage) {
    return health > damage ? health - damage : 0;
}

// Цікаві варіанти з Codewars
const combat_ = (health, damage) => Math.max(0, health - damage);
// ================================================================================================
// ================================================================================================
//*-залишилось 248шт