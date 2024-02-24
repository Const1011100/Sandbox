//*-Task №201 Formatting decimal places #0 (8kyu)
/*
Кожне число має бути відформатовано таким чином, щоб воно було округлено до двох знаків після коми.
Вам не потрібно перевіряти, чи є введене число дійсним, оскільки в тестах використовуються лише дійсні числа.
Example:
5.5589 is rounded 5.56
3.3424 is rounded 3.34
*/

// Мій варіант
function twoDecimalPlaces(n) {
    return Number(n.toFixed(2));
}

// Цікаві варіанти з Codewars
function twoDecimalPlaces_(n) {
    return Math.round(n * 100) / 100;
}

// ================================================================================================
// ================================================================================================
//*-Task №202 Simple validation of a username with regex (8kyu)
/*
Напишіть простий регулярний вираз для підтвердження імені користувача.
Дозволені символи: букви нижнього регістру,числа,підкреслення.
Довжина має бути від 4 до 16 символів (обидва включені).
*/

// Мій варіант
function validateUsr(username) {
    const res = /^[a-z0-9_]{4,16}$/.test(username);
    return res;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №201 Regex count lowercase letters (8kyu)
/*
Ваше завдання — просто порахувати загальну кількість малих літер у рядку.

"abc" ===> 3
"abcABC123" ===> 3
"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
"" ===> 0;
"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
"abcdefghijklmnopqrstuvwxyz" ===> 26
*/

// Мій варіант
function lowercaseCount(str) {
    let count = str.match(/[a-z]/g);
    return count ? count.length : 0;
}

// Цікаві варіанти з Codewars
function lowercaseCount_(str) {
    return (str.match(/[a-z]/g) || []).length
}
// ================================================================================================
// ================================================================================================
//*-Task №202 Check same case (8kyu)
/*
Напишіть функцію, яка перевірятиме, чи збігаються два наведені символи.

Якщо один із символів не є літерою, поверніть -1
Якщо обидва символи мають однаковий регістр, поверніть 1
Якщо обидва символи є літерами, але не збігаються, поверніть 0

'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1
*/
// Мій варіант
function sameCase(a, b) {
    if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) { return -1 };
    if ((a === a.toUpperCase() && b === b.toUpperCase()) || (a === a.toLowerCase() && b === b.toLowerCase())) {
        return 1;
    } else {
        return 0;
    }
}

// Цікаві варіанти з Codewars
const sameCase_ = (a, b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1;
// ================================================================================================
// ================================================================================================
//*-Task №203 Pillars (8kyu)
/*
Біля дороги стоять стовпи. Відстань між стовпами однакова і ширина стовпів однакова.
Ваша функція приймає три аргументи:

кількість стовпів (≥ 1);
відстань між стовпами (10 - 30 метрів);
ширина стовпа (10 - 50 сантиметрів).
Розрахуйте відстань між першим і останнім стовпом в сантиметрах (без урахування ширини першого і останнього стовпа).
*/
// Мій варіант
function pillars(numPill, dist, width) {
    if (numPill >= 2) {
        return (((numPill - 1) * dist) * 100) + ((numPill - 2) * width);
    } else {
        return 0;
    }
}

// Цікаві варіанти з Codewars
function pillars_(num_pill, dist, width) {
    return num_pill > 1 ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width : 0;
}
// ================================================================================================
// ================================================================================================
//*-Task №204 Grasshopper - Messi Goals (8kyu)
/*
Тотал голів Мессі
Використовуйте змінні, щоб знайти суму голів, забитих Мессі в 3 змаганнях

Інформація
Статистика забитих голів Мессі:

Цілі змагань
La Liga 43
Champions League 10
Copa del Rey 5

Завдання
Створіть ці три змінні та збережіть відповідні значення за допомогою таблиці вище:
laLigaGoals
championsLeagueGoals
copaDelReyGoals
Створіть четверту змінну під назвою totalGoals, яка зберігає суму всіх голів Мессі за цей рік.
*/
// Мій варіант
let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;

const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №205 Find the Difference in Age between Oldest and Youngest Family Members (8kyu)
/*
На щорічних сімейних зборах сім’я любить знайти вік найстаршого живого члена сім’ї та вік наймолодшого
члена сім’ї та обчислити різницю між ними.
Вам буде надано масив усіх членів родини за віком у будь-якому порядку.
Вік буде надано в цілих числах, тому 5-місячна дитина матиме приписаний «вік» 0.
Поверніть новий масив із [наймолодший вік, найстарший вік, різниця між наймолодшим і найстаршим вік].
*/
// Мій варіант
function differenceInAges(ages) {
    ages.sort((a, b) => a - b);
    const youngest = ages[0];
    const oldest = ages[ages.length - 1];
    const difference = oldest - youngest;
    return [youngest, oldest, difference];
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №206 Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right (8kyu)
/*
Видаліть n знаків оклику з речення починаючи з зліва направо. n є додатним цілим числом.
*/
// Мій варіант
function remove(s, n) {
    const arr = s.split("");
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '!' && count < n) {
            arr.splice(i, 1);
            count++;
            i--;
        }
    }
    return arr.join("");
}

// Цікаві варіанти з Codewars
function remove_(s, n) {
    for (var i = 0; i < n; i++) s = s.replace("!", "");
    return s;
}
// ================================================================================================
// ================================================================================================
//*-Task №207 Training JS #10: loop statement --for (8kyu)
/*
Функція pickIt приймає 1 параметр, arr, який є масивом чисел. Нам потрібно пройти arr за допомогою
циклу for. Якщо елемент має непарне число, помістіть його до непарного масиву, а якщо це парне число,
помістіть його до парного масиву.

Я визначив у функції два масиви, непарний і парний, а також написав оператор return.
Ваша робота — написати цикл for.
*/
// Мій варіант
function pickIt(arr) {
    var odd = [], even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return [odd, even];
}

// Цікаві варіанти з Codewars
function pickIt_(arr) {
    let odd = []
    let even = []
    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)
    }
    return [odd, even]
}

// ================================================================================================
// ================================================================================================
//*-Task №208 Grasshopper - Combine strings (8kyu)
/*
Створіть функцію з назвою combineNames, яка приймає два параметри (ім’я та прізвище).
Функція має повернути повне ім’я.
combineNames('James', 'Stevens') -> 'James Stevens'
*/
// Мій варіант
const combineNames = (firstName, lastName) => { return `${firstName} ${lastName}` };

// Цікаві варіанти з Codewars
const combineNames_ = (...names) => names.join(' ');
// ================================================================================================
// ================================================================================================
//*-залишилось 174шт
// console.time('timer_1');
// console.timeEnd('timer_1');