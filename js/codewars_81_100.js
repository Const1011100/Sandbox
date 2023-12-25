//*-Task №81 Twice as old (8kyu)
/*
Ваша функція приймає два аргументи:

поточний вік батька (років)
поточний вік його сина (років)
Обчисліть, скільки років тому батько був удвічі старший за сина (чи через скільки років він буде удвічі старший).
Відповідь завжди більше або дорівнює 0, незалежно від того, було це в минулому чи в майбутньому.
*/

// Мій варіант
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return dadYearsOld / (sonYearsOld * 2) === 2 ? 0 : Math.abs(dadYearsOld - (sonYearsOld * 2));
}

// Цікаві варіанти з Codewars
function twiceAsOld_(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
// ================================================================================================
// ================================================================================================
//*-Task №82 Keep up the hoop (8kyu)
/*
Алекс щойно отримав новий хулахуп, він йому подобається, але відчуває розчарування, тому що його
молодший брат кращий за нього.
Напишіть програму, у якій Алекс може ввести (n), скільки разів обертається обруч, і вона поверне
йому підбадьорююче повідомлення :)
Якщо Алекс отримує 10 або більше кілець, поверніть рядок «Great, now move on to tricks».
Якщо він не отримує 10 обручів, поверніть рядок «Keep at it until you get it».
*/

// Мій варіант
function hoopCount(n) {
    return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks";
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №83 All Star Code Challenge #18 (8kyu)
/*
Створіть функцію, яка приймає рядок і один символ і повертає ціле число входжень другого аргументу,
знайденого в першому.
Якщо входження не знайдено, має бути повернуто кількість 0.
*/

// Мій варіант
function strCount(str, letter) {
    return str.split('').filter(word => word === letter).length;
}

// Цікаві варіанти з Codewars
function strCount_(str, letter) {
    return str.split(letter).length - 1
}
// ================================================================================================
// ================================================================================================
//*-Task №84 Volume of a Cuboid (8kyu)
/*
Бобу потрібен швидкий спосіб обчислити об’єм кубоїда за трьома значеннями: довжиною, шириною та
висотою кубоїда. Напишіть функцію, яка допоможе Бобу з цим обчисленням.
*/

// Мій варіант
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №85 Define a card suit (8kyu)
/*
Ви отримуєте будь-яку картку як аргумент. Ваше завдання повернути масть цієї карти (у нижньому регістрі).
Наша колода (попередньо завантажена):
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

// Мій варіант
function defineSuit(card) {
    const suit = card[card.length - 1];
    const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
    }
    return suits[suit];
}

// Цікаві варіанти з Codewars
function defineSuit_(card) {
    return {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades'
    }[card.substr(-1)]
}
//
function defineSuit__(card) {
    switch (card.slice(-1)) {
        case '♣': return 'clubs';
        case '♦': return 'diamonds';
        case '♥': return 'hearts';
        case '♠': return 'spades';
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №86 Crash Override (8kyu)
/*
Кожному починаючому хакеру потрібен псевдонім! Phantom Phreak, Acid Burn, Zero Cool і Crash Override
– деякі яскраві приклади з фільму Хакери.
Ваше завдання — створити функцію, яка за належного імені та прізвища повертатиме правильний псевдонім.

Примітки:
Два об’єкти, які повертають ім’я з одного слова у відповідь на першу літеру імені та один на першу
літеру прізвища, вже задані. Перегляньте наведені нижче приклади для отримання додаткової інформації.

Якщо перший символ будь-якого з імен, наданих функції, не є літерою від A до Z, ви повинні повернути
«Ваше ім’я має починатися з літери від A до Z» / "Your name must start with a letter from A - Z.".

Іноді люди можуть забути написати першу літеру свого імені великою, тому ваша функція повинна
врахувати ці граматичні помилки.
*/

// Мій варіант
function aliasGen(firstName, lastName){
    const first = firstName[0].toUpperCase();
    const last = lastName[0].toUpperCase();
    const firstNameAlias = {
            A: 'Alpha',
            B: 'Beta',
            C: 'Cache',
            D: 'Data',
            E: 'Energy',
            F: 'Function',
            G: 'Glitch',
            H: 'Half-life',
            I: 'Ice',
            J: 'Java',
            K: 'Keystroke',
            L: 'Logic',
            M: 'Malware',
            N: 'Nagware',
            O: 'OS',
            P: 'Phishing',
            Q: 'Quantum',
            R: 'RAD',
            S: 'Strike',
            T: 'Trojan',
            U: 'Ultraviolet',
            V: 'Vanilla',
            W: 'WiFi',
            X: 'Xerox',
            Y: 'Y',
            Z: 'Zero'
        };
    const lastNameAlias = {
            A: 'Analogue',
            B: 'Bomb',
            C: 'Catalyst',
            D: 'Discharge',
            E: 'Electron',
            F: 'Faraday',
            G: 'Gig',
            H: 'Hacker',
            I: 'IP',
            J: 'Jabber',
            K: 'Killer',
            L: 'Lazer',
            M: 'Mike',
            N: 'n00b',
            O: 'Overclock',
            P: 'Payload',
            Q: 'Quark',
            R: 'Roy',
            S: 'Spy',
            T: 'T-Rex',
            U: 'Unit',
            V: 'Virus',
            W: 'Worm',
            X: 'X',
            Y: 'Yob',
            Z: 'Zombie'
        };
    if(firstNameAlias.hasOwnProperty(first) && lastNameAlias.hasOwnProperty(last)) {
      return `${firstNameAlias[first]} ${lastNameAlias[last]}`;
    } else {
      return "Your name must start with a letter from A - Z.";
    }
}

// Цікаві варіанти з Codewars
const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return (isValidName(fName) && isValidName(lName))
    ? `${ firstName[initialCap(fName)] } ${ surname[initialCap(lName)] }`
    : 'Your name must start with a letter from A - Z.';
}
// ================================================================================================
// ================================================================================================
//*-Task №87 Switch it Up! (8kyu)
/*
Якщо вказано число від 0 до 9, поверніть його словами.
Вхід :: 1
Вихід :: "Один".
Якщо ваша мова це підтримує, спробуйте використати оператор switch.
*/

// Мій варіант
function switchItUp(number) {
    switch (number) {
        case 0: return 'Zero';
        case 1: return 'One';
        case 2: return 'Two';
        case 3: return 'Three';
        case 4: return 'Four';
        case 5: return 'Five';
        case 6: return 'Six';
        case 7: return 'Seven';
        case 8: return 'Eight';
        case 9: return 'Nine';
    }
}
// Цікаві варіанти з Codewars
function switchItUp_(n) {
    return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n]
}

// ================================================================================================
// ================================================================================================
//*-Task №88 Correct the mistakes of the character recognition software (8kyu)
/*
Програмне забезпечення для розпізнавання символів широко використовується для оцифрування
друкованих текстів. Таким чином тексти можна редагувати, шукати та зберігати на комп’ютері.
Коли документи (особливо старі, написані на друкарській машинці) оцифровуються, програми
розпізнавання символів часто допускають помилки.

Ваше завдання виправити помилки в оцифрованому тексті. Ви повинні виправити лише такі помилки:
S неправильно тлумачиться як 5
O неправильно тлумачиться як 0
I неправильно тлумачиться як 1
Тестові випадки містять числа лише помилково.
*/

// Мій варіант
function correct(string) {
    let lettersArray = string.split('');
    for (let i = 0; i < lettersArray.length; i++) {
        switch (lettersArray[i]) {
            case '5':
                lettersArray[i] = 'S';
                break;
            case '0':
                lettersArray[i] = 'O';
                break;
            case '1':
                lettersArray[i] = 'I';
                break;
            default:
                lettersArray[i] = lettersArray[i];
                break;
        }
    }
    return lettersArray.join('');
}

// Цікаві варіанти з Codewars
let correct_ = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S');

// ================================================================================================
// ================================================================================================
//*-Task №89 Parse nice int from char problem (8kyu)
/*
Ви запитуєте маленьку дівчинку: "Скільки тобі років?" Вона завжди каже: «x років»,
де x — випадкове число від 0 до 9.

Напишіть програму, яка повертає вік дівчини (0-9) як ціле число.
Припустимо, що тестовий вхідний рядок завжди є дійсним. Наприклад, введення тесту може бути «1 рік»
або «5 років». Перший символ у рядку завжди є числом.
*/

// Мій варіант
function getAge(inputString) {
    return Number(inputString[0]);
}

// Цікаві варіанти з Codewars
function getAge_(inputString) {
    return parseInt(inputString);
}

// ================================================================================================
// ================================================================================================
//*-Task №90 Cat years, Dog years (8kyu)
/*
У мене є кіт і собака.
Я отримав їх одночасно з кошеням/цуценям. Це було людино багато років тому.
Поверніть їхній відповідний вік зараз як [humanYears,catYears,dogYears]

ПРИМІТКИ:
людські роки >= 1
людські роки – це лише цілі числа
Котячі роки
15 котячих років на перший рік
+9 котячих років на другий рік
+4 котячі роки за кожен наступний рік
Собачі роки
15 собачих років за перший рік
+9 собачих років на другий рік
+5 собачих років за кожен наступний рік
*/

// Мій варіант
var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 24;
    let dogYears = 24;
    if (humanYears === 1) {
        catYears -= 9;
        dogYears -= 9;
    } else if (humanYears > 2) {
        for (let i = 3; i <= humanYears; i++) {
            catYears += 4;
            dogYears += 5;
        }
    }
    return [humanYears, catYears, dogYears];
}

// Цікаві варіанти з Codewars
var humanYearsCatYearsDogYears_ = function (y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24]
}
//
const humanYearsCatYearsDogYears__ = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;

    for (let i = 1; i <= humanYears; i++) {
        if (i === 1) {
            catYears += 15;
            dogYears += 15;
        }
        else if (i === 2) {
            catYears += 9;
            dogYears += 9;
        }
        else {
            catYears += 4;
            dogYears += 5;
        }
    }
    return [humanYears, catYears, dogYears];
}
// ================================================================================================
// ================================================================================================
//*-залишилось 292шт
