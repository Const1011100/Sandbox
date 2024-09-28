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
//*-Task №504 Fizz Buzz (7kyu)
/*
Повертає масив, що містить числа від 1 до N, де N – значення параметра.

Однак замініть певні значення, якщо виконується будь-яка з наведених нижче умов:

Якщо значення кратне 3: замість цього використовуйте значення "Fizz".
Якщо значення кратне 5: замість цього використовуйте значення "Buzz".
Якщо значення кратне 3 і 5: замість цього використовуйте значення "FizzBuzz".
N ніколи не буде менше 1.

Приклад виклику методу:
fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

// Мій варіант
function fizzbuzz(n) {
    const arr = new Array(n).fill().map((_, index) => index + 1);
    const result = arr.map((n) => {
        return n % 3 === 0 && n % 5 === 0
            ? 'FizzBuzz'
            : n % 3 === 0 && n % 5 !== 0
            ? 'Fizz'
            : n % 3 !== 0 && n % 5 === 0
            ? 'Buzz'
            : n;
    });
    return result;
}
// Цікаві варіанти з Codewars
function fizzbuzz_(n) {
    var i = 1,
        arr = [];
    while (i <= n) {
        var fizz = i % 3 == 0;
        var buzz = i % 5 == 0;
        if (fizz || buzz) {
            arr.push((fizz ? 'Fizz' : '') + (buzz ? 'Buzz' : ''));
        } else {
            arr.push(i);
        }
        i++;
    }
    return arr;
}

var fizzify = fizzbuzz_;
// ================================================================================================
// ================================================================================================
//*-Task №505 Maximum Product (7kyu)
/*
Дано масив цілих чисел. Знайдіть максимальний добуток, отриманий множенням 2 сусідніх чисел у масиві.

Примітки
Розмір масиву/списку становить принаймні 2.
Номери масивів/списків можуть бути сумішшю позитивних, негативних, а також нулів.
adjacentElementsProduct([1, 2, 3]); ==> return 6
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
*/

// Мій варіант
function adjacentElementsProduct(array) {
    return array.reduce((result, num, index, arr) => {
        if (num * arr[index + 1] > result) {
            return (result = num * arr[index + 1]);
        } else {
            return result;
        }
    }, -Infinity);
}
// Цікаві варіанти з Codewars
function adjacentElementsProduct_(array) {
    let newArr = [];
    for (i = 0; i < array.length - 1; i++) {
        newArr.push(array[i] * array[i + 1]);
    }
    return Math.max(...newArr);
}
// ================================================================================================
// ================================================================================================
//*-Task №506 Sum of Cubes (7kyu)
/*
Напишіть функцію, яка приймає натуральне число n, підсумовує всі кубічні значення від 1 до n (включно)
і повертає цю суму.

Припустимо, що вхід n завжди буде додатним цілим числом.
2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

// Мій варіант
function sumCubes(n) {
    let sumCubes = 0;
    for (let i = 1; i <= n; i++) {
        sumCubes += i ** 3;
    }
    return sumCubes;
}
// Цікаві варіанти з Codewars
function sumCubes_(n) {
    if (n == 1) {
        return n ** 3;
    } else {
        return n ** 3 + sumCubes_(n - 1);
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №507 Find the vowels (7kyu)
/*
Ми хочемо знати індекс голосних у даному слові, наприклад, у слові супер є дві голосні
(друга та четверта букви).
Отже, маючи рядок "super", ми повинні повернути список [2, 4].
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

ПРИМІТКИ
Голосні в цьому контексті стосуються: a e i o u y (включаючи верхній регістр)
Це індексується від [1..n] (не нульовий індекс!)
*/

// Мій варіант
function vowelIndices(word) {
    const arrWords = word.split('');
    const targets = 'aeiouyAEIOUY';
    let result = [];
    for (let i = 0; i < arrWords.length; i++) {
        if (targets.includes(arrWords[i])) {
            result.push(i + 1);
        }
    }
    return result;
}
// Цікаві варіанти з Codewars
function vowelIndices_(word) {
    var arr = [];
    for (var i = 0; i < word.length; i++) {
        if (/[aeioyu]/i.test(word[i])) {
            arr.push(i + 1);
        }
    }
    return arr;
}
// ================================================================================================
// ================================================================================================
//*-Task №508 Deodorant Evaporator (7kyu)
/*
Ця програма перевіряє термін служби випарника, що містить газ.
Ми знаємо вміст випарника (вміст у мл), відсоток піни або газу, що втрачається щодня (evap_per_day)
і поріг (поріг) у відсотках, за яким випарник більше не корисний. Усі числа суворо позитивні.

Програма повідомляє n-й день (як ціле число), коли випарник буде не використовуватися.
evaporator(10, 10, 5) -> 29

Примітка:
Контент насправді не є обов'язковим у тілі функції "випарник", ви можете використовувати його або
не використовувати, як хочете. Хтось вважає за краще міркувати за вмістом, хтось – лише за відсотками.
Це залежить від вас, але ви повинні зберегти це як параметр, оскільки тести мають це як аргумент.
*/

// Мій варіант
function evaporator(content, evap_per_day, threshold) {
    let days = 0;
    let percentage = 100;

    while (percentage > threshold) {
        percentage -= percentage * (evap_per_day / 100);
        days++;
    }

    return days;
}
// Цікаві варіанти з Codewars
function evaporator_(content, evap_per_day, threshold) {
    threshold = threshold / 100;
    evap_per_day = evap_per_day / 100;
    return Math.ceil(Math.log(threshold) / Math.log(1 - evap_per_day));
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1863шт
// console.time('timer_1');
// console.timeEnd('timer_1');
