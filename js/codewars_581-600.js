//*-Task №581 Flatten (7kyu)
/*
Напишіть функцію, яка об’єднує масив об’єктів Array у плоский масив. Ваша функція має виконати
лише один рівень зведення.
flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

// Мій варіант
var flatten = function (array) {
    return array.flat(1).map((elem) => {
        return isNaN(Number(elem)) || Array.isArray(elem) ? elem : Number(elem);
    });
};
// Цікаві варіанти з Codewars
var flatten_ = function (lol) {
    return [].concat.apply([], lol);
};
//
var flatten__ = function (array) {
    return array.flat();
};
//
const flatten___ = (array) => [].concat(...array);
// ================================================================================================
// ================================================================================================
//*-Task №582 ATM (7kyu)
/*
Банкомат має банкноти номіналом 10, 20, 50, 100, 200 і 500 доларів. Можна вважати, що запас кожної
з цих банкнот досить великий.

Ви повинні написати функцію банкомату, яка визначає мінімальну кількість банкнот, необхідних для
зняття n доларів, з 1 <= n <= 1500.
Поверніть це число або -1, якщо це неможливо.
*/

// Мій варіант
function solve(n) {
    if (n % 10 !== 0) {
        return -1;
    }
    const denominations = [500, 200, 100, 50, 20, 10];
    let banknotes = 0;
    for (let denom of denominations) {
        let temp = Math.floor(n / denom);
        banknotes += temp;
        n -= temp * denom;
        if (n === 0) {
            break;
        }
    }
    return banknotes;
}

// Цікаві варіанти з Codewars
function solve(n) {
    if (n % 10) return -1;
    return [500, 200, 100, 50, 20, 10].reduce((s, v) => {
        let ans = (n / v) | 0;
        n %= v;
        return s + ans;
    }, 0);
}
// ================================================================================================
// ================================================================================================
//*-Task №583 Thinkful - String Drills: Quotable (7kyu)
/*
Ця функція має приймати два рядкові параметри: ім’я особи (ім’я) та її цитату (цитата) і повертати
рядок, що приписує цитату особі, у такому форматі:
'[name] said: "[quote]"'
Наприклад, якщо ім’я — «Grae», а «quote» — «Практика робить досконалим», то ваша функція має повернути рядок
'Grae said: "Practice makes perfect"'
На жаль, щось не так з інструкціями в тілі функції. Ваше завдання — це виправити, щоб функція повертала
правильно відформатовані лапки.
Натисніть кнопку 'Train', щоб почати, і будьте обережні з лапками.
*/
function quotable(name, quote) {
    return `${name} said: "${quote}"`;
}
// Мій варіант
const quotable_ = (name, quote) => `${name} said: "${quote}"`;
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №584 getNames() (7kyu)
/*
Наступний код не дає очікуваних результатів. Чи можете ви налагодити проблему?
Нижче наведено приклад даних, які будуть передані у функцію.
*/

// Мій варіант
var data = [
    { name: 'Joe', age: 20 },
    { name: 'Bill', age: 30 },
    { name: 'Kate', age: 23 },
];
function getNames(data) {
    return data.map(function (item) {
        return item.name;
    });
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №585 Number Pairs (7kyu)
/*
Метою цієї ката є порівняння кожної пари цілих чисел із двох масивів і повернення нового масиву
великих чисел.
Примітка. Обидва масиви мають однакові розміри.

приклад:
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
*/

// Мій варіант
function getLargerNumbers(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        a[i] > b[i] ? result.push(a[i]) : result.push(b[i]);
    }
    return result;
}
// Цікаві варіанти з Codewars
function getLargerNumbers_(a, b) {
    var newArray = [];

    for (i = 0; i < a.length; i++) {
        newArray.push(Math.max(a[i], b[i]));
    }

    return newArray;
}
// ================================================================================================
// ================================================================================================
//*-Task №586 Return the Missing Element (7kyu)
/*
Воїн коду, нам потрібна ваша допомога! Здається, ми втратили один із елементів послідовності,
і нам потрібна ваша допомога, щоб його відновити!
Наша наведена послідовність мала містити всі цілі числа від 0 до 9 (без певного порядку), але,
здається, одного з них бракує.

Напишіть функцію, яка приймає послідовність унікальних цілих чисел від 0 до 9 (включно) і повертає
відсутній елемент.

приклади:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/

// Мій варіант
function getMissingElement(superImportantArray) {
    const n = superImportantArray.length;
    const expectedSum = (n * (n + 1)) / 2; // Сума чисел від 0 до n
    const actualSum = superImportantArray.reduce((sum, num) => sum + num, 0); // Сума чисел у масиві
    return expectedSum - actualSum; // Різниця дає пропущений елемент
}
// Цікаві варіанти з Codewars
function getMissingElement_(a) {
    for (let i = 0; i < 10; i++) if (!a.includes(i)) return i;
}
//
function getMissingElement__(superImportantArray) {
    for (i = 0; i < 10; i++) {
        if (superImportantArray.indexOf(i) === -1) return i;
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №587 How many consecutive numbers are needed? (7kyu)
/*
Напишіть функцію, яка приймає масив унікальних цілих чисел і повертає мінімальну кількість цілих
чисел, необхідну для того, щоб значення масиву були послідовними від найменшого числа до найбільшого.

приклад
[4, 8, 6] --> 2
Оскільки 5 і 7 потрібно додати, щоб отримати [4, 5, 6, 7, 8]

[-1, -5] --> 3
Оскільки -2, -3, -4 потрібно додати, щоб мати [-5, -4, -3, -2, -1]

[1] --> 0
[] --> 0
*/

// Мій варіант
function consecutive(array) {
    return array.length > 1
        ? Math.max(...array) - Math.min(...array) - array.length + 1
        : 0;
}
// Цікаві варіанти з Codewars
function consecutive_(arr) {
    var sorted = arr.sort(function (a, b) {
        return a - b;
    });
    var count = 0;
    for (var i = 0; i < sorted.length - 1; i++) {
        var diff = sorted[i + 1] - sorted[i];
        if (diff > 1) {
            count += diff - 1;
        }
    }
    return count;
}
//*-Task №588 Product Of Maximums Of Array (Array Series #2) (7kyu)
/*
Дано масив [] цілих чисел. Знайдіть добуток k максимальних чисел.

Розмір масиву становить принаймні 3 .
Числа масиву будуть сумішшю позитивних, негативних і нулів
Може статися повторення чисел у масиві.
maxProduct ({4, 3, 5}, 2) ==>  return (20) // 5 * 4 = 20
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720) // 5 * 4 = 20 // 8 * 9 * 10 = 72
maxProduct ({10, 3, -1, -27} , 3)  return (-30) // 10 * 3 * -1 = -30
*/

// Мій варіант
function maxProduct(numbers, size) {
    return numbers
        .sort((a, b) => b - a)
        .slice(0, size)
        .reduce((result, num) => (result *= num));
}
// Цікаві варіанти з Codewars
const maxProduct_ = (numbers, size) =>
    numbers
        .sort((a, b) => b - a)
        .reduce((pre, val, idx) => (idx < size ? pre * val : pre));
// ================================================================================================
// ================================================================================================
//*-Task №589 Double Every Other (7kyu)
/*
Напишіть функцію, яка подвоює кожне друге ціле число в списку, починаючи зліва.
Приклад:
Для вхідного масиву/списку:
[1,2,3,4]
функція має повернути:
[1,4,3,8]
*/

// Мій варіант
function doubleEveryOther(a) {
    return a.map((num, index) => (index % 2 !== 0 ? num * 2 : num));
}
// Цікаві варіанти з Codewars
function doubleEveryOther_(a) {
    for (let i = 1; i < a.length; i += 2) {
        a[i] *= 2;
    }
    return a;
}
// ================================================================================================
// ================================================================================================
//*-Task №590 V A P O R C O D E (7kyu)
/*
Напишіть функцію, яка перетворює будь-яке речення на речення V A P O R W A V E.
речення V A P O R W A V E перетворює всі літери на великі та додає 2 пробіли між кожною літерою
(або спеціальним символом), щоб створити ефект V A P O R W A V E.

Зверніть увагу, що в цьому випадку пробіли слід ігнорувати.
Приклади:
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
*/

// Мій варіант
function vaporcode(string) {
    return string
        .split('')
        .filter((l) => {
            if (l !== ' ') {
                return l;
            }
        })
        .map((l) => ` ${l.toUpperCase()} `)
        .join('')
        .trim();
}
// Цікаві варіанти з Codewars
function vaporcode_(string) {
    return string.toUpperCase().split(' ').join('').split('').join('  ');
}
// ================================================================================================
// ================================================================================================
//*-Task №590 Debug Basic Calculator (7kyu)
/*
Налагодити функцію під назвою Calculator, яка приймає 3 значення. Перше і третє значення є числами.
Друге значення – символ. Якщо символ «+», «-», «*» або «/», функція поверне результат відповідної
математичної функції для двох чисел. Якщо рядок не є одним із указаних символів, функція має
повернути значення null.
calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
*/

// Мій варіант
var calculate = function calculate(a, o, b) {
    if (o === '+') {
        return a + b;
    } else if (o === '-') {
        return a - b;
    } else if (o === '/') {
        if (b === 0) {
            return null; // Ділення на 0
        }
        return a / b;
    } else if (o === '*') {
        return a * b;
    }
    return null;
};
// Цікаві варіанти з Codewars
const calculate = (a, op, b) => {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b ? a / b : null;
    }

    return null;
};
// ================================================================================================
// ================================================================================================
//*-Task №591 Debug the functions EASY (7kyu)
/*
Налагодити функції
Це має бути легко, почніть із перегляду коду. Налагодьте код, і функції повинні працювати.

Існує три функції: Multiplication (x) Addition (+) and Reverse (!esreveR)
*/

// Мій варіант
function multi(arr) {
    return arr.reduce((result, num) => (result *= num));
}
function add(arr) {
    return arr.reduce((result, num) => (result += num));
}
function reverse(str) {
    return str.split('').reverse().join('');
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task Regex Failure - Bug Fixing #2 №592(7kyu)
/*
Вам надається рядкова фраза, яка містить деякі потенційно образливі слова, такі як «поганий»,
«злий», «потворний», «жахливий» і «огидний». Тіммі хоче замінити ці слова словом «чудово», щоб
зробити повідомлення більш позитивним. Ваше завдання полягає в тому, щоб реалізувати функцію, яка
замінює всі входження цих образливих слів на "awesome" у фразі вхідного рядка.
введення:
Рядкова фраза, що містить слова, розділені пробілами.
Вихід:

Рядок із тими самими словами, що й фраза, але будь-які образливі слова замінені на «чудово».
приклад:
Input: "You're Bad! timmy!"
Output: "You're awesome! timmy!"

Input: "You're MEAN! timmy!"
Output: "You're awesome! timmy!"
*/

// Мій варіант
function filterWords(phrase) {
    return phrase.replace(/(bad|mean|ugly|horrible|hideous)/gi, 'awesome');
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №593 Failed Filter - Bug Fixing #3 (7kyu)
/*
О ні, фільтр Тіммі, здається, не працює? Ваше завдання — виправити функцію FilterNumber,
щоб видалити всі числа з рядка.
*/

// Мій варіант
var FilterNumbers = function (str) {
    return str.replace(/[0-9]/gi, '');
};
// Цікаві варіанти з Codewars
var FilterNumbers_ = function (str) {
    return str
        .split('')
        .filter((c) => isNaN(c))
        .join('');
};
// ================================================================================================
// ================================================================================================
//*-Task №594 Failed Sort - Bug Fixing #4 (7kyu)
/*
О ні, Timmy's Sort, здається, не працює? Ваше завдання — виправити функцію sortArray,
щоб усі числа сортувалися за зростанням
*/

// Мій варіант
var sortArray = function (value) {
    return value
        .split('')
        .sort((c, p) => c - p)
        .join('');
};
// Цікаві варіанти з Codewars
var sortArray_ = function (value) {
    return value.split('').sort().join('');
};
// ================================================================================================
// ================================================================================================
//*-Task №595 Ninja vs Samurai: Strike (7kyu)
/*
Щось не так з нашим класом Воїна. Метод удару не працює належним чином. Нижче показано приклад
використання цього коду:
var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70
*/

// Мій варіант
var Warrior = function (name) {
    this.name = name;
    this.health = 100;
};

Warrior.prototype.strike = function (enemy, swings) {
    enemy.health = Math.max(0, enemy.health - swings * 10);
};
// Цікаві варіанти з Codewars
class Warrior {
    constructor(name) {
        this.name = name;
        this.health = 100;
    }

    strike(enemy, swings) {
        enemy.health = Math.max(0, enemy.health - swings * 10);
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №596 (7kyu)
/*
О ні! Клас списку Тіммі зламався! Чи можете ви допомогти Тіммі і виправити його клас?
У Тіммі є створений ним клас List, який використовується для масивів зі строгим типом
(які Тіммі називає Lists).

Коли Тіммі викликає властивість count списку, вона все ще залишається рівною 0 під час
додавання елементів.
Також це не вдається, коли Тіммі намагається зв’язати додатки, наприклад.
myList.add(0).add(1)
*/

// Мій варіант
class List {
    constructor(type) {
        this.type = type;
        this.items = [];
    }

    get count() {
        return this.items.length;
    }

    add(item) {
        if (typeof item != this.type)
            return `This item is not of type: ${this.type}`;

        this.items.push(item);
        return this;
    }
}
// Цікаві варіанти з Codewars
class List_ {
    constructor(type) {
        this.type = type;
        this.items = [];
        this.count = 0;
    }

    add(item) {
        if (typeof item != this.type)
            return `This item is not of type: ${this.type}`;

        this.items.push(item);
        this.count++;
        return this;
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №597 Fac Recursion (Pest control - find the bugs and fix them) (7kyu)
/*
Код є рекурсивною спробою обчислення результату функції факторіалу.
тобто результат 3! (Факторіел 3) дорівнює 3x2x1 = 6.
У разі 0! результат дорівнює 1, а у випадку негативного факторіала результат має бути 0.

Мета полягає в тому, щоб знайти помилки у вихідному коді та виправити їх
(пограйте трохи в боротьбу зі шкідниками).
*/

// Мій варіант
function facRecursion(value) {
    if (value < 0) {
        return 0;
    }

    if (value === 1 || value === 0) {
        return 1;
    }

    return value * facRecursion(value - 1);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-залишилось 1780шт
// console.time('timer_1');
// console.timeEnd('timer_1');
