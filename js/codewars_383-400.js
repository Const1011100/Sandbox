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
//*-залишилось 1970шт
// console.time('timer_1');
// console.timeEnd('timer_1');
