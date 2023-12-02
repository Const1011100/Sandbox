"use strict"
// ================================================================================================
//*-Task №41 MakeUpperCase (8kyu)
/*
Напишіть функцію, яка перетворює вхідний рядок у верхній регістр.
*/

// Мій варіант
const makeUpperCase = (str) => (str.toUpperCase());

// Цікаві варіанти з Codewars
function makeUpperCase_(str) {
    return str.replace(/[a-z]/g, s => String.fromCharCode(s.charCodeAt(0) - 32))
}
// ================================================================================================
// ================================================================================================
//*-Task №42 Reversed sequence (8kyu)
/*
Створіть функцію, яка повертає масив цілих чисел від n до 1, де n>0.
Приклад: n=5 --> [5,4,3,2,1]
*/

// Мій варіант
const reverseSeq = n => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.unshift(i);
    }
    return arr;
};

// Цікаві варіанти з Codewars
const reverseSeq_ = n => {
    return Array.from({ length: n }, (_, i) => n - i);
};
// ================================================================================================
// ================================================================================================
//*-Task №43 Is he gonna survive? (8kyu)
/*
Герой прямує до замку, щоб виконати свою місію. Однак йому сказали, що замок оточений двома могутніми
драконами! кожному дракону потрібно 2 кулі, щоб його перемогти, наш герой не знає, скільки куль він
повинен нести. Якщо припустити, що він збирається схопити певну кількість куль і рухатися вперед,
щоб битися з іншою певною кількістю драконів, чи виживе він?
Повертає true, якщо так, false в іншому випадку :)
Тести:
hero(10, 5 -> true
hero(7, 4) -> false
*/

// Мій варіант
function hero(bullets, dragons) {
    return bullets / dragons >= 2;
}

// Цікаві варіанти з Codewars
const hero_ = (bullets, dragons) => dragons * 2 <= bullets;
// ================================================================================================
// ================================================================================================
//*-Task №44 Sentence Smash (8kyu)
/*
Напишіть функцію, яка бере масив слів і розбиває їх разом у речення та повертає речення.
Ви можете ігнорувати будь-яку необхідність дезінфекції слів або додавання розділових знаків, але ви
повинні додавати пробіли між кожним словом. Будьте уважні, не повинно бути пробілів ні на початку,
ні в кінці речення!

Приклад
['hello', 'world', 'this', 'is', 'great'] => 'привіт, світе, це чудово'
*/

// Мій варіант
function smash(words) {
    return words.join(' ');
};

// Цікаві варіанти з Codewars
function smash_(words) {
    return words.join(' ').trim(); // Метод trim() видаляє пробіли з початку та кінця рядка.
};
// ================================================================================================
// ================================================================================================
//*-Task №45 Will you make it? (8kyu)
/*
Ви були в таборі з друзями далеко від дому, але коли прийшов час повертатися, ви розумієте, що ваше
паливо закінчується, а найближча заправка знаходиться за 50 миль! Ви знаєте, що в середньому ваш
автомобіль проїжджає приблизно 25 миль на одному галоні. Залишилося 2 галони. Враховуючи ці фактори,
напишіть функцію, яка повідомляє вам, чи можна дістатися до заправки чи ні.
Функція має повертати true, якщо це можливо, і false, якщо ні.
distanceToPump - скільки треба проїхати
mpg - можемо проїхати миль на одному галоні
fuelLeft - скільки галонів залишилось
*/

// Мій варіант
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft * mpg >= distanceToPump;
};

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №46 DNA to RNA Conversion (8kyu)
/*
Дезоксирибонуклеїнова кислота, ДНК, є основною молекулою зберігання інформації в біологічних системах.
Він складається з чотирьох основ нуклеїнової кислоти гуаніну («G»), цитозину («C»), аденіну («A») і тиміну («T»).
Рибонуклеїнова кислота, РНК, є основною молекулою-повідомником у клітинах.
РНК дещо відрізняється від ДНК своєю хімічною структурою і не містить тиміну.
У РНК тимін замінений іншою нуклеїновою кислотою урацилом («U»).
Створіть функцію, яка переводить даний рядок ДНК у РНК.

Наприклад:
"GCAT" => "GCAU"
Вхідний рядок може бути довільної довжини - зокрема, може бути порожнім. Усі введені дані гарантовано дійсні,
тобто кожен вхідний рядок завжди складатиметься лише з «G», «C», «A» та/або «T».
*/

// Мій варіант
function DNAtoRNA(dna) {
    const arr = dna.split('');
    const result = arr.map(function (elem) { return elem === 'T' ? 'U' : elem });
    return result.join('');
}

// Цікаві варіанти з Codewars
function DNAtoRNA_(dna) {
    return dna.split("T").join("U"); // Дуже гарне рішення!!!
}
function DNAtoRNA__(dna) {
    return dna.replace(/T/g, 'U');
}
// ================================================================================================
// ================================================================================================