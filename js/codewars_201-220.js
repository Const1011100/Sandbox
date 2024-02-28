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
//*-Task №209 BASIC: Making Six Toast. (8kyu)
/*
Історія:
Ви збираєтеся швидко приготувати тости, ви думаєте, що вам потрібно зробити кілька шматків тостів і
один раз. Отже, ви намагаєтесь приготувати 6 шматочків тостів.

Ви забули порахувати кількість тостів, які ви туди поклали, ви не знаєте, чи поклали ви рівно шість
шматочків тостів у тостери.
Визначте функцію, яка підраховує, скільки більше (або менше) шматочків тосту вам потрібно в тостерах.
Навіть якщо вам потрібно більше або менше, число все одно буде позитивним, а не негативним.

Ви повинні повернути кількість тостів, яку потрібно покласти (або вийняти).

У разі 5 ви все ще можете покласти 1 тост у:
six_toast(5) == 1

А в разі 12 потрібно на 6 тостів менше (але не на -6):
six_toast(12) == 6
*/
// Мій варіант
function sixToast(num) {
    return Math.abs(6 - num);
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №210 simple calculator (8kyu)
/*
Вам потрібно створити простий калькулятор, який повертає результат додавання, віднімання,
множення або ділення двох чисел.

Ваша функція прийматиме три аргументи:
Перший і другий аргумент мають бути числами.
Третій аргумент має представляти знак, що вказує на операцію, яку потрібно виконати над цими двома числами.

Якщо змінні не є числами або знак не належить до списку вище, повинно бути повернуто повідомлення "unknown value".
*/
// Мій варіант
function calculator(a, b, sign) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'unknown value';
    }
    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'unknown value';
    }
}
// Цікаві варіанти з Codewars
// Вариант GPT
const calculator_ = (a, b, sign) => {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    if (typeof a !== 'number' || typeof b !== 'number' || !operations[sign]) {
        return 'unknown value';
    }

    return operations[sign](a, b);
};

// ================================================================================================
// ================================================================================================
//*-Task №211 Exclamation marks series #4: Remove all exclamation marks from sentence butensure a exclamation mark at the end of string (8kyu)
/*
Видаліть усі знаки оклику з речення, але переконайтеся, що знак оклику стоїть у кінці рядка.
Для ката для початківців ви можете припустити, що вхідні дані завжди є непорожнім рядком,
перевіряти їх не потрібно.
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"
*/

// Мій варіант
function remove(string) {
    return string.replace(/[!]/g, '') + '!';
}
// Цікаві варіанти з Codewars
const remove__ = s => s.replace(/!+/g, "") + "!";

// ================================================================================================
// ================================================================================================
//*-Task №212 Remove the time (8kyu)
/*
Ви змінюєте дизайн блогу, і дописи в блозі мають день тижня, місяць, формат часу для відображення
дати й часу, коли було зроблено допис, наприклад, п’ятниця, 2 травня, 19:00.
У вас закінчується простір на екрані, і на деяких сторінках ви хочете відобразити коротший формат,
день тижня, місяць, без часу.
Напишіть функцію, яка приймає дату/час веб-сайту у вихідному форматі рядка та повертає скорочений формат.

Введення
Введення завжди буде рядком, наприклад, "Friday May 2, 7pm".

Вихід
Виведенням буде скорочений рядок, наприклад, "Friday May 2".
*/

// Мій варіант
function shortenToDate(longDate) {
    return longDate.split(',')[0];
}
// Цікаві варіанти з Codewars
function shortenToDate_(longDate) {
    // your code here
    return longDate.slice(0, longDate.indexOf(","));
}
//
function shortenToDate__(longDate) {
    const [date, time] = longDate.split(',');
    return date;
}

// ================================================================================================
// ================================================================================================
//*-Task №213 Contamination #1 -String- (8kyu)
/*
ШІ заразив текст персонажем!!
Цей текст тепер повністю змінено на цього персонажа.
Якщо текст або символ порожні, поверніть порожній рядок.
Ніколи не буде випадку, коли обидва пусті, бо нічого не відбувається!!
Примітка: символ є рядком довжини 1 або порожнім рядком.
text before = "abc"
character   = "z"
text after  = "zzz"
*/

// Мій варіант
function contamination(text, char) {
    if (text === '' || char === '') {
        return '';
    } else {
        return text.replace(/./g, char);
    }
}
// Цікаві варіанти з Codewars
function contamination_(text, char) {
    return char.repeat(text.length)
}
//
function contamination__(text, char) {
    return text.replace(/./g, char);
}
// ================================================================================================
// ================================================================================================
//*-Task №214 CSV representation of array (8kyu)
/*
Створіть функцію, яка повертає CSV-представлення двовимірного числового масиву.
Example:
input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

Примітка: ви не повинні екранувати \n, він має працювати як новий рядок.
*/

// Мій варіант
function toCsvText(array) {
    return array.map(elem => elem.toString()).join('\n')
}
// Цікаві варіанти з Codewars
function toCsvText_(array) {
    return array.join('\n');
}

// ================================================================================================
// ================================================================================================
//*-Task №215 Smallest unused ID (8kyu)
/*
У вас є багато даних, якими потрібно керувати, і, звичайно, ви використовуєте невід’ємні ідентифікатори
від нуля, щоб зробити кожен елемент даних унікальним!
Тому вам потрібен метод, який повертає найменший невикористаний ідентифікатор для вашого наступного
нового елемента даних...

Примітка. Наведений масив використаних ідентифікаторів може бути несортованим. Для перевірки можуть
існувати дублікати ідентифікаторів, але вам не потрібно їх знаходити чи видаляти!
*/

// Мій варіант
function nextId(ids) {
    let id = 0;
    while (ids.includes(id)) {
        id++;
    }
    return id;
}
// Цікаві варіанти з Codewars


// ================================================================================================
// ================================================================================================
//*-Task №216 Who ate the cookie? (8kyu)
/*
Для цієї задачі ви повинні створити програму, яка повідомляє, хто з'їв останнє печиво.
Якщо введенням є рядок, то "Zach" з'їв печиво. Якщо введення є float або int, тоді "Monica" з'їла печиво.
Якщо введено щось інше, «the dog» з’їла печиво.
Спосіб повернення твердження: "Who ate the last cookie? It was (name)!"

Приклад:
Input = "hi" --> Output = "Хто з'їв останнє печиво? Це був Zach!
(Причина, чому ви повертаєте Zach, полягає в тому, що введені дані є рядком)
Примітка. Переконайтеся, що ви повертаєте правильне повідомлення з правильними пробілами та пунктуацією.
*/

// Мій варіант
function cookie(x) {
    let name = 'the dog';
    if (typeof x === 'string') {
        name = "Zach";
    } else if (typeof x === 'number') {
        name = 'Monica';
    }
    return `Who ate the last cookie? It was ${name}!`
}
// Цікаві варіанти з Codewars
function cookie_(x) {
    var t = typeof x
    var who = t == "string" ? 'Zach' : t == "number" ? 'Monica' : 'the dog'
    return `Who ate the last cookie? It was ${who}!`
}
//
function cookie__(x) {
    return `Who ate the last cookie? It was ${({ string: "Zach", number: "Monica" }[typeof x] || "the dog")}!`;
}
// ================================================================================================
// ================================================================================================
//*-залишилось 166шт
// console.time('timer_1');
// console.timeEnd('timer_1');