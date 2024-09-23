//*-Task №501 Bumps in the Road (7kyu)
/*
Ваша машина стара, легко ламається. Амортизатори зникли, і ви думаєте, що він зможе впоратися ще
з 15 ударами, перш ніж повністю загине.

На ваш жаль, ваш диск дуже нерівний! Дано рядок, що показує рівну дорогу (_) або нерівності (n).
Якщо ви можете безпечно дістатися до дому, зустрівши 15 або менше нерівностей, поверніть Woohoo!,
інакше поверніть Car Dead.
*/

// Мій варіант
const bump = (x) => (x.match(/n/g).length <= 15 ? 'Woohoo!' : 'Car Dead');
// Цікаві варіанти з Codewars
const bump_ = (x) => (x.split('n').length > 16 ? 'Car Dead' : 'Woohoo!');
//
function bump__(x) {
    return (x.match(/n/g) || []).length > 15 ? 'Car Dead' : 'Woohoo!';
}
// ================================================================================================
// ================================================================================================
//*-Task №502 Alphabet war (7kyu)
/*
Йде війна, і ніхто не знає - алфавітна війна!
Розрізняють дві групи ворожих листів. Напруга між літерами з лівої та правої сторони була надто
високою, і почалася війна.

Завдання
Напишіть функцію, яка приймає рядок бою, що складається лише з маленьких літер, і повертає, хто
переміг у бою. Коли виграє ліва сторона, поверніться, виграє ліва сторона!, коли виграє права, поверніться,
виграє права сторона!, в іншому випадку поверніться, Давайте битись знову!.

Ліві літери та їх потужність:
w - 4
p - 3
b - 2
s - 1

Праві літери та їх потужність:

m - 4
q - 3
d - 2
z - 1
Інші букви не мають сили і є лише жертвами.

приклад
alphabetWar("z"); //=> Перемагає права сторона!
alphabetWar("zdqmwpbs"); //=> Давайте битися знову!
alphabetWar("zzzzs"); //=> Перемагає права сторона!
alphabetWar("wwwwwwz"); //=> Перемагає ліва сторона!
*/

// Мій варіант
function alphabetWar(fight) {
    const leftSide = {
        w: 4,
        p: 3,
        b: 2,
        s: 1,
    };
    const rightSide = {
        m: 4,
        q: 3,
        d: 2,
        z: 1,
    };
    let leftSum = 0;
    let rightSum = 0;
    fight.split('').forEach((elem) => {
        if (leftSide[elem]) {
            leftSum += leftSide[elem];
        }
        if (rightSide[elem]) {
            rightSum += rightSide[elem];
        }
    });
    return leftSum > rightSum
        ? 'Left side wins!'
        : leftSum < rightSum
        ? 'Right side wins!'
        : "Let's fight again!";
}
// Цікаві варіанти з Codewars
function alphabetWar_(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result
        ? (result < 0 ? 'Left' : 'Right') + ' side wins!'
        : "Let's fight again!";
}
//
function alphabetWar__(fight) {
    let score = 0;
    for (const letter of fight) {
        switch (letter) {
            case 'w':
                score -= 4;
                break;
            case 'p':
                score -= 3;
                break;
            case 'b':
                score -= 2;
                break;
            case 's':
                score -= 1;
                break;
            case 'm':
                score += 4;
                break;
            case 'q':
                score += 3;
                break;
            case 'd':
                score += 2;
                break;
            case 'z':
                score += 1;
                break;
        }
    }

    return score < 0
        ? 'Left side wins!'
        : score > 0
        ? 'Right side wins!'
        : "Let's fight again!";
}
// ================================================================================================
// ================================================================================================
//*-Task №503 Greet Me (7kyu)
/*
Напишіть метод, який приймає один аргумент як ім’я, а потім вітає це ім’я великими літерами та
закінчується знаком оклику.
Приклад:
"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

// Мій варіант
var greet = function (name) {
    return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
};
// Цікаві варіанти з Codewars
function greet_(name) {
    return `Hello ${name
        .toLowerCase()
        .replace(/^\w/, (c) => c.toUpperCase())}!`;
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1869шт
// console.time('timer_1');
// console.timeEnd('timer_1');
