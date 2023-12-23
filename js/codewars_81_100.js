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
//*-залишилось 296шт
