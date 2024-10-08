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
//*-Task №509 Triangular Treasure (7kyu)
/*
Трикутні числа називаються так через рівносторонню трикутну форму, яку вони займають,
коли розкладають у вигляді точок.
1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
Потрібно повернути n-е трикутне число. Ви маєте повернути 0 для значень поза діапазоном:
0 --> 0
2 --> 3
3 --> 6
-10 --> 0
*/

// Мій варіант
function triangular(n) {
    return n <= 0 ? 0 : (n * (n + 1)) / 2;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №510 Most digits (7kyu)
/*
Знайдіть число з найбільшою кількістю цифр.
Якщо два числа в масиві аргументів мають однакову кількість цифр, повертається перше в масиві.
*/

// Мій варіант
function findLongest(array) {
    return array.reduce((result, num) => {
        return `${num}`.length > `${result}`.length ? (result = num) : result;
    }, 0);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №511 Power of two (7kyu)
/*
Виконайте функцію powerOfTwo (або еквівалент, залежно від вашої мови), яка визначає,
чи дане невід’ємне ціле число є степенем двійки. З відповідного запису у Вікіпедії:

ступінь двійки — це число у вигляді 2n, де n — ціле число, тобто результат піднесення до степеня з
числом два як основою та цілим числом n як показником степеня.
Ви можете вважати, що введені дані завжди дійсні.

Приклади
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false

Остерігайтеся певних граничних випадків - наприклад, 1 є ступенем 2, оскільки 2^0 = 1, а 0 не є ступенем 2.
*/

// Мій варіант
function isPowerOfTwo(n) {
    if (n <= 0) {
        return false;
    }
    while (n % 2 === 0) {
        n /= 2;
    }
    return n === 1;
}
// Цікаві варіанти з Codewars
function isPowerOfTwo_(n) {
    return Number.isInteger(Math.log2(n));
}
// ================================================================================================
// ================================================================================================
//*-Task №512 Reverse a Number (7kyu)
/*
Дано число, напишіть функцію для виведення його зворотних цифр. (наприклад, при 123 відповідь 321)
Числа повинні зберігати свій знак; тобто від’ємне число все одно має бути від’ємним, якщо його перевернути.

Приклади
123 -> 321
-456 -> -654
1000 -> 1
*/

// Мій варіант
function reverseNumber(num) {
    const reversed = parseInt(
        Math.abs(num).toString().split('').reverse().join('')
    );
    return num > 0 ? reversed : -reversed;
}
// Цікаві варіанти з Codewars
const reverseNumber_ = (n) =>
    (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('');
// ================================================================================================
// ================================================================================================
//*-Task №513 Convert an array of strings to array of numbers (7kyu)
/*
Якийсь дуже смішний веб-розробник дав вам послідовність чисел зі своєї відповіді API
як послідовність рядків!
Вам потрібно привести весь масив до правильного типу.
Створіть функцію, яка приймає як параметр послідовність чисел, представлену у вигляді рядків,
і виводить послідовність чисел.

тобто: ["1", "2", "3"] до [1, 2, 3]
Зверніть увагу, що ви також можете отримати поплавки.
*/

// Мій варіант
function toNumberArray(stringarray) {
    return stringarray.map((num) => Number(num));
}
// Цікаві варіанти з Codewars
function toNumberArray_(stringarray) {
    return stringarray.map(parseFloat);
}
// ================================================================================================
// ================================================================================================
//*-Task №514 Minimize Sum Of Array (Array Series #1) (7kyu)
/*
Дано масив цілих чисел. Знайдіть мінімальну суму, яка виходить від підсумовування кожного добутку
двох цілих чисел.

Примітки
Масив/список міститиме лише позитиви.
Масив/список завжди матиме рівний розмір

minSum({5,4,2,3}) ==> return (22)
Мінімальна сума, отримана підсумовуванням кожного двох цілих добутків, 5*2 + 3*4 = 22

minSum({12,6,10,26,3,24}) ==> return (342)
Мінімальна сума, отримана підсумовуванням кожного двох цілих добутків, 26*3 + 24*6 + 12*10 = 342

minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Мінімальна сума, отримана від додавання кожного двох цілих добутків, 9*0 + 8*2 +7*4 +6*5 = 74
*/

// Мій варіант
function minSum(arr) {
    let result = 0;
    const sortedArray = arr.sort((a, b) => b - a);

    for (let i = 0; i < sortedArray.length / 2; i++) {
        let product = sortedArray[i] * sortedArray[sortedArray.length - 1 - i];
        result += product;
    }

    return result;
}
// Цікаві варіанти з Codewars
function minSum_(arr) {
    return arr
        .sort((a, b) => a - b)
        .slice(0, arr.length / 2)
        .reduce(
            (acc, curr, index) => (acc += curr * arr[arr.length - index - 1]),
            0
        );
}
// ================================================================================================
// ================================================================================================
//*-Task №515 Sort the Gift Code (7kyu)
/*
Напишіть функцію під назвою sortGiftCode, яка приймає рядок, що містить до 26 унікальних символів
алфавіту, і повертає рядок, що містить ті самі символи в алфавітному порядку.

Приклади (Input -- => Output):
"abcdef" -- => "abcdef"
"pqksuvy" -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba" -- => "abcdefghijklmnopqrstuvwxyz"
*/

// Мій варіант
function sortGiftCode(code) {
    return code.split('').sort().join('');
}
// Цікаві варіанти з Codewars
function sortGiftCode_(code) {
    return [...code].sort().join``;
}
// ================================================================================================
// ================================================================================================
//*-Task №516 Build a square (7kyu)
/*
Я дам вам ціле число. Поверніть мені фігуру, яка така ж довжина і ширина, як ціле число.
Ціле число буде цілим числом від 1 до 50.

приклад
n = 3, тому я очікую квадратну спину 3x3, як показано нижче, як рядок:
+++
+++
+++
*/

// Мій варіант
const generateShape = (integer) =>
    new Array(integer).fill('+'.repeat(integer)).join('\n');
// Цікаві варіанти з Codewars
function generateShape_(n) {
    return ('+'.repeat(n) + '\n').repeat(n).trim();
}
// ================================================================================================
// ================================================================================================
//*-Task №517 Switcheroo (7kyu)
/*
Дано рядок, що складається з літер a, b та/або c, поміняйте позицію літер a та b
(змініть a на b і навпаки). Залиште будь-які випадки c без змін.

Приклад:
'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

// Мій варіант
function switcheroo(x) {
    return x
        .split('')
        .map((lettet) => {
            if (lettet === 'a') {
                return 'b';
            }
            if (lettet === 'b') {
                return 'a';
            }
            return 'c';
        })
        .join('');
}
// Цікаві варіанти з Codewars
const switcheroo_ = (x) => x.replace(/[ab]/g, (x) => (x == 'a' ? 'b' : 'a'));
// ================================================================================================
// ================================================================================================
//*-Task №518 Divide and Conquer (7kyu)
/*
Дано змішаний масив числових і рядкових представлень цілих чисел, додайте нерядкові цілі числа та
відніміть рядкові цілі числа.

Повернути як число.
*/

// Мій варіант
function divCon(x) {
    let num = 0;
    let strNum = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'string') {
            strNum += Number(x[i]);
        }
        if (typeof x[i] === 'number') {
            num += x[i];
        }
    }
    return num - strNum;
}
// Цікаві варіанти з Codewars
function divCon(x) {
    return x.reduce(
        (acc, cur) => (typeof cur === 'number' ? acc + cur : acc - Number(cur)),
        0
    );
}
// ================================================================================================
// ================================================================================================
//*-Task №519 Filter the number (7kyu)
/*
Відфільтрувати число
О ні! Цифра переплутана з текстом. Ваша мета - отримати число з тексту, чи можете ви повернути
число до початкового стану?

Ваше завдання - повернути число з рядка.

Подробиці
Вам буде надано рядок цифр і літер, змішаних, ви повинні повернути всі числа в цьому рядку в
порядку їх появи.
*/

// Мій варіант
var filterString = function (value) {
    return Number(value.match(/[0-9]/g).join(''));
};
// Цікаві варіанти з Codewars
var FilterString_ = function (value) {
    return parseInt(value.replace(/[^\d]/g, ''));
};
// ================================================================================================
// ================================================================================================
//*-Task №520 Coding Meetup #2 - Higher-Order Functions Series - Greet developers (7kyu)
/*
Вам буде надано масив об’єктів, що представляють дані про розробників, які зареєструвалися для участі
в наступній зустрічі програмістів, яку ви організовуєте.

Ваше завдання полягає в тому, щоб повернути масив, у якому кожен об’єкт матиме нову властивість
«greeting» із таким значенням рядка:
Hi < firstName here >, what do you like the most about < language here >?

Наприклад, задано наступний масив введення:
var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
ваша функція має повернути такий масив:
[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];

Примітки:
Порядок властивостей в об’єктах не має значення.
Вхідний масив завжди буде дійсним і відформатованим, як у прикладі вище.
*/

// Мій варіант
function greetDevelopers(list) {
    return list.map((obj) => {
        obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
        return obj;
    });
}
// Цікаві варіанти з Codewars
const greetDevelopers_ = (list) =>
    list.map((dev) => ({
        ...dev,
        greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`,
    }));
// ================================================================================================
// ================================================================================================
//*-залишилось 1853шт
// console.time('timer_1');
// console.timeEnd('timer_1');
