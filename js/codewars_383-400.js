//*-Task №383 Vowel Count (7kyu)
/*
Повертає кількість голосних у заданому рядку.
Ми будемо розглядати (a, e, i, o, u) як голосні для цієї ката (але не y).
Рядок введення складатиметься лише з малих літер та/або пробілів.
*/

// Мій варіант
function getCount(str) {
    const targets = ['a', 'e', 'i', 'o', 'u'];
    let allMatches = 0;
    for (let i = 0; i < targets.length; i++) {
        const regExp = new RegExp(`${targets[i]}`, 'g');
        let matches = str.match(regExp);
        if (matches !== null) {
            allMatches += matches.length;
        }
    }
    return allMatches;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №384 Disemvowel Trolls (7kyu)
/*
Тролі атакують ваш розділ коментарів!
Поширеним способом вирішення цієї ситуації є видалення всіх голосних із коментарів тролів,
нейтралізуючи загрозу.

Ваше завдання — написати функцію, яка приймає рядок і повертає новий рядок із видаленням усіх голосних.
Наприклад, рядок "This website is for losers LOL!" стане "Ths wbst s fr lsrs LL!".

Примітка: для цієї ката y не вважається голосною.
*/

// Мій варіант
function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const symbols = str.split('');
    const result = [];
    symbols.forEach(symbol => {
        if (!vowels.includes(symbol)) { result.push(symbol) };
    });
    return result.join('');
}
// Цікаві варіанти з Codewars
function disemvowel_(str) {
    const vowels = 'aeiouAEIOU';

    return str
        .split('')
        .filter(char => !vowels.includes(char))
        .join('');
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1969шт
// console.time('timer_1');
// console.timeEnd('timer_1');
