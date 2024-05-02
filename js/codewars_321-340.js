//*-Task №321 Count the number of cubes with paint on (8kyu)
/*
Прийшовши на співбесіду, вам пред’являють суцільний синій куб. Потім куб занурюють у червону фарбу,
покриваючи всю поверхню куба. Потім інтерв'юер продовжує розрізати куб у всіх трьох вимірах певну
кількість разів.
Ваша функція приймає як параметр кількість розрізів куба. Ви повинні повернути кількість менших кубиків,
утворених розрізами, які мають принаймні одну червону грань.
Щоб було зрозуміліше, на малюнку нижче показано куб після (зліва направо) 0, 1 і 2 розрізів.
Якщо ми розріжемо куб 2 рази, функція має повернути 26
Якщо ми розріжемо куб 4 рази, функція має повернути 98
*/

// Мій варіант
function countSquares (cuts) {
    if (cuts === 0) {
        return 1
    }
    let innerCube = Math.pow(cuts - 1, 3)
    let outerCube = Math.pow(cuts + 1, 3)
    return outerCube - innerCube
}
// Цікаві варіанти з Codewars
const countSquares_ = cuts => cuts === 0 ? 1 : (6 * cuts * cuts) + 2;
// ================================================================================================
// ================================================================================================
//*-Task №322 Take an Arrow to the knee, Functionally (8kyu)
/*
Вам буде надано масив чисел, які можна використовувати за допомогою методу String.fromCharCode() (JS),
для перетворення числа на символ. Рекомендується відобразити масив чисел і перетворити кожне число на
відповідний символ ASCII.

Приклади
Це приклад того, як перетворити число на символ ASCII:
Javascript => String.fromCharCode(97) // a
*/

// Мій варіант
const ArrowFunc = function (arr) {
    return String.fromCharCode(...arr);
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №323 Quadrants (8kyu)
/*
Дано точку на евклідовій площині (x і y), поверніть квадрант, у якому ця точка існує: 1, 2, 3 або 4 (ціле число).
x і y є ненульовими цілими числами, тому задана точка ніколи не лежить на осях.
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4

Є чотири квадранти:
Перший квадрант, квадрант у верхньому правому куті, містить усі точки з позитивними X та Y
Другий квадрант, квадрант у верхньому лівому куті, містить усі точки з негативним X, але позитивним Y
Третій квадрант, квадрант унизу ліворуч, містить усі точки з від’ємними X та Y
Четвертий квадрант, квадрант у нижньому правому куті, містить усі точки з позитивним X, але негативним Y
*/

// Мій варіант
function quadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else {
        return 4;
    }
}
// Цікаві варіанти з Codewars
function quadrant_(x, y) {
    if (x > 0 && y > 0) return 1;
    if (x < 0 && y > 0) return 2;
    if (x < 0 && y < 0) return 3;
    return 4;
}
// ================================================================================================
// ================================================================================================
//*-Task №324 Age Range Compatibility Equation (8kyu)
/*
Усі знають класичне правило побачень «половина твого віку плюс сім», якого дотримується багато людей (включаючи мене).
Це «рекомендований» віковий діапазон для зустрічей.
Завдання
Дано ціле число (1 <= n <= 100), що представляє вік людини, поверніть її мінімальний і максимальний віковий діапазон.
Це рівняння не працює, якщо вік <= 14 років, тому замість цього використовуйте це рівняння:
min = age - 0.10 * age
max = age + 0.10 * age
Ви повинні розбити всі ваші відповіді так, щоб замість числа з плаваючою точкою вводилося ціле число
(яке не означає вік). Поверніть свою відповідь у формі [min]-[max]
age = 27   =>   20-40
age = 5    =>   4-5
age = 17   =>   15-20
*/

// Мій варіант
function datingRange(age) {
    let min, max;
    if (age <= 14) {
        min = Math.floor(age - 0.10 * age);
        max = Math.floor(age + 0.10 * age);
    } else {
        min = Math.floor(age / 2 + 7);
        max = Math.floor((age - 7) * 2);
    }
    return `${min}-${max}`;
}
// Цікаві варіанти з Codewars
function datingRange_(age) {
    return `${min(age)}-${max(age)}`;

    function min(age) {
        return Math.floor(age > 14 ? (age / 2) + 7 : age - 0.10 * age);
    }

    function max(age) {
        return Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
    }
}
// ================================================================================================
// ================================================================================================
//*-Task №325 Training JS #16: Methods of String object--slice(), substring() and substr() (8kyu)
/*
Кодування у функції cutIt, функція приймає 1 параметр: arr. arr — масив рядків.
Перша місія: проходження об’їзду, пошук найкоротшої довжини струни.
Друга місія: Знову обхід arr, перехопити всі рядки до найкоротшої довжини рядка (Почати з індексу0).
ви можете використовувати один із slice() substring() або substr().
повернення результату після завершення роботи.
cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
*/

// Мій варіант
function cutIt(arr) {
    const length = arr.map(el => { return el.length })
        .sort((a, b) => { return a - b });
    return arr.map(el => {
        return el.slice(0, length[0]);
    });
}
// Цікаві варіанти з Codewars
function cutIt_(arr) {
    const minLength = Math.min(...arr.map(x => x.length));
    return arr.map(x => x.slice(0, minLength));
}
// ================================================================================================
// ================================================================================================
//*-Task №326 Safen User Input Part I - htmlspecialchars (8kyu)
/*
Введення користувача Safen Частина I - htmlspecialchars
Ви початківець/середній/досвідчений/професіонал/всесвітньо відомий веб-розробник (виберіть один),
який володіє (n) простим/чистим/витонченим/гарним/складним/професійним/діловим веб-сайтом (виберіть один або кілька),
який містить поля форми, щоб відвідувачі могли легко надсилати електронні листи або залишати коментарі
на вашому веб-сайті. Однак з легкістю приходить небезпека. Час від часу хакер відвідує ваш веб-сайт і
намагається скомпрометувати його за допомогою XSS (Cross Site Scripting).
Це робиться шляхом введення тегів сценарію на веб-сайт через поля форми, які можуть містити шкідливий
код (наприклад, переспрямування на шкідливий веб-сайт, який викрадає особисту інформацію).
Місія
Ваша місія полягає в тому, щоб реалізувати функцію, яка перетворює такі потенційно шкідливі символи:
< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
*/

// Мій варіант
function htmlspecialchars(formData) {
    const data = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
    };
    let result = formData.replace(/&/g, '&amp;');
    for (symbol in data) {
        let regExp = new RegExp(`${symbol}`, 'g');
        result = result.replace(regExp, `${data[symbol]}`);
    }
    return result;
}
// Цікаві варіанти з Codewars
function htmlspecialchars_(formData) {
    return formData.replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}
//
function htmlspecialchars__(formData) {
    const dict = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    return formData.replace(/[<>"&]/g, char => dict[char]);
}
// ================================================================================================
// ================================================================================================
//*-Task №327 Semi-Optional (8kyu)
/*
Ми реалізували функцію wrap(value), яка приймає значення довільного типу та обертає його в новий
об’єкт JavaScript, встановлюючи ключ «value» у новому об’єкті на передане значення.

Так, наприклад, якщо ми виконаємо такий код:
wrapper_obj = wrap("my_wrapped_string"); 
# wrapper_obj should be  {"value":"my_wrapped_string"}

Тоді ми очікуємо, що таке твердження буде істинним:
wrapper_obj["value"] == "my_wrapped_string"

На жаль, код не працює, як було задумано. Виправте код, щоб він працював, як зазначено.
*/

// Мій варіант
function wrap(value) {
    return {
        value: value,
    };
}
// Цікаві варіанти з Codewars
const wrap_ = value => ({ value });
// ================================================================================================
// ================================================================================================
//*-Task №328 Heads and Legs (8kyu)
/*
Напевно, всі чули про проблему з головами і ногами тварин ще в ранніх шкільних роках. Це йде:
«На фермі є кури, корови. Є x голів і y ніг. Скільки там курей і корів?»
Де x <= 1000 і y <=1000

#Завдання
Припускаючи, що інших типів тварин немає, обчисліть, скільки їх там кожної тварини.
Повертає масив - [кури, корови].
Якщо голови та ноги є від’ємними, результат вашого обчислення є від’ємним або обчислення є значенням із
плаваючою точкою, що повертає "No solutions" (немає дійсних випадків).
[Heads, Legs] = [72, 200]

VALID - [72, 200] => [44 , 28]
                     [Chickens, Cows]
INVALID - [72, 201] => "No solutions"

Однак, якщо дано 0 голів і 0 ніг, завжди повертайте [0, 0], оскільки нуль голів має давати нуль тварин.
Існує багато різних способів вирішення цього питання, але всі вони дають однакову відповідь.
Вам буде надано лише цілі типи, проте буде надано від’ємні значення (граничні випадки).
Щасливого кодування!
*/

// Мій варіант
function animals(heads, legs) {
    if (heads < 0 || legs < 0 || legs % 2 !== 0) {
        return "No solutions";
    }

    let cows = (legs - 2 * heads) / 2;
    let chickens = heads - cows;

    if (cows < 0 || chickens < 0 || cows % 1 !== 0 || chickens % 1 !== 0) {
        return "No solutions";
    }

    return [chickens, cows];
}
// Цікаві варіанти з Codewars
function animals_(heads, legs) {
    const cows = legs / 2 - heads;
    const chickens = heads - cows;

    if (legs && 1 || chickens > heads || cows > heads)
        return "No solutions";
    else
        return [chickens, cows];
}
// ================================================================================================
// ================================================================================================
//*-Task №329 Enumerable Magic #20 - Cascading Subsets (8kyu)
/*
Створіть метод each_cons, який приймає список і число n і повертає каскадні підмножини списку розміром n, наприклад:
each_cons([1,2,3,4], 2) => [[1,2], [2,3], [3,4]]
each_cons([1,2,3,4], 3) => [[1,2,3],[2,3,4]]
Як бачите, списки каскадні; тобто вони перекриваються, але ніколи не порушуються.
*/

// Мій варіант
function eachCons(array, n) {
    const result = [];
    for (let i = 0; i <= array.length - n; i++) {
        const subArray = array.slice(i, i + n);
        result.push(subArray);
    }
    return result;
}

// Цікаві варіанти з Codewars
function eachCons_(array, n) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(array.slice(i, i + n));
    }
    return res.filter(e => e.length === n);
}
//
function eachCons__(array, n) {
    return array.map((x, y) => array.slice(y, y + n)).filter(x => x.length == n)
}
// ================================================================================================
// ================================================================================================
//*-Task №330 Training JS #29: methods of arrayObject---concat() and join() (8kyu)
/*
Кодування у функції bigToSmall. функція приймає 1 параметр arr(2D масив чисел).
Ваше завдання: Перш за все, зверніться до наведеного вище прикладу, плоский вихід до одновимірного масиву.
А потім відсортуйте масив у порядку спадання.
Нарешті, використовуйте роздільник ">", щоб з'єднати елементи в рядок.
Не скаржтеся на ситуацію, ніби 1>1 нерозумно, це просто роздільник.
Деякі приклади:
bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
*/

// Мій варіант
function bigToSmall(arr) {
    const oneArr = arr.reduce((accum, elem) => {
        return accum = accum.concat(elem);
    })
    const result = oneArr.sort((a, b) => { return b - a }).join('>');
    return result;
}
// Цікаві варіанти з Codewars
function bigToSmall_(arr) {
    return [].concat(...arr).sort((a, b) => b - a).join('>');
}
// ================================================================================================
// ================================================================================================
//*-Task №331 Training JS #21: Methods of String object--trim() and the string template (8kyu)
/*
Кодування у функції fiveLine, функція приймає 1 параметр:s. s — рядок.
Поверніть рядок із 5 рядків (символ нового рядка — \n). Перший рядок має одну s;
У другому рядку два s; і так далі..П'ятий рядок має п'ять s;
Примітка 1. Дві сторони параметра s можуть містити пробіли, будь ласка, очистіть їх перед використанням s.
Примітка 2. Використання шаблону рядка може полегшити вашу роботу.
приклад:
fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
a
aa
aaa
aaaa
aaaaa       <---The effect when you console.log it
fiveLine("  xy ") 
should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
xy
xyxy
xyxyxy
xyxyxyxy
xyxyxyxyxy  <---The effect when you console.log it
*/

// Мій варіант
function fiveLine(s) {
    s = s.trim();
    let str = "a\naa\naaa\naaaa\naaaaa";
    return str.replace(/a/g, `${s}`);
}
// Цікаві варіанти з Codewars
function fiveLine_(s) {
    //coding here...
    s = s.trim();
    var tmp = s;
    var res = [s];

    for (var i = 1; i < 5; i++) {
        res.push(s += tmp);
    }
    return res.join("\n");
}
//
function fiveLine__(s) {
    s = s.trim();
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}
// ================================================================================================
// ================================================================================================
//*-Task №332 Points of Reflection (8kyu)
/*
«Точкове відображення» або «точкова симетрія» — це базове поняття в геометрії, де дана точка P у
заданому положенні відносно середньої точки Q має відповідну точку P1, яка знаходиться на тій самій
відстані від Q, але в протилежний напрямок.

Завдання
Дано дві точки P і Q, виведіть симетричну точку точки P відносно Q. Кожен аргумент є двоелементним
масивом цілих чисел, що представляють координати X і Y точки. Вихідні дані мають бути в тому самому
форматі, вказуючи координати X і Y точки P1. Вам не потрібно перевіряти введені дані.
*/

// Мій варіант
function symmetricPoint(p, q) {
    let p1x = 2 * q[0] - p[0];
    let p1y = 2 * q[1] - p[1];
    return [p1x, p1y];
}
// Цікаві варіанти з Codewars
function symmetricPoint_(p, q) {
    return [2 * q[0] - p[0], 2 * q[1] - p[1]];
}
// ================================================================================================
// ================================================================================================
//*-Task №333 Are there any arrows left? (8kyu)
/*
Перевір свої стрілки
У вас є сагайдак зі стрілами, але деякі пошкоджені. Сагайдак містить стріли з додатковою інформацією
про дальність (різні типи цілей розташовані на різних відстанях), тому кожен предмет є стрілою.
Вам потрібно переконатися, що у вас залишилося кілька хороших, щоб підготуватися до бою:

anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])

Якщо стріла в сагайдаку не має статусу пошкодження, це означає, що вона нова.
Очікуваним результатом є логічне значення, яке вказує, чи залишилися у вас хороші стрілки.
*/

// Мій варіант
function anyArrows(arrows){
    return arrows.some(arrow => !arrow.damaged );
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №334 Coding 3min : Jumping Dutch act (8kyu)
/*
Кодування 3 хвилини: голландський виступ у стрибках
Це проста версія серії «Найкоротший код». Якщо вам потрібні якісь виклики, будь ласка, спробуйте версію викликів

Завдання:
Містер відчай хоче стрибнути з голландського акту, тому він піднявся на вершину будівлі.
Наукові дослідження показують, що людина стрибнула з верхньої частини даху, коли поверх більше 6,
людина часто помирає в одну мить; Коли підлога менше або дорівнює 6, людина не відразу помре, він буде кричати. (без доказів)

Вхід: поверх, висота будівлі (поверх)
Вихід: струна, Голос відчаю (При стрибку голландського акту)

приклад:
sc(2) має повернути "Aa~ Pa! Aa!"

Це означає:
Містер відчай вистрибнув з 2 поверху, голос "Аа~"
Він впав на землю, голос "Па!"
Він помер не відразу, і останнім голосом було "Аа!"
sc(6) має повернути "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"
sc(7) має повернути "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
sc(10) має повернути "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

якщо поверх <=1, пан розпач безпечний, поверніть ""
*/

// Мій варіант
function sc(floor) {
    if (floor <= 1) { return '' };
    const scream = [];
    if (floor > 6) {
        for (let i = 0; i < floor - 1; i++) {
            scream.push('Aa~');
        }
        scream.push('Pa!');
    }

    if (floor <= 6) {
        for (let i = 0; i < floor - 1; i++) {
            scream.push('Aa~');
        }
        scream.push('Pa! Aa!');
    }

    return scream.join(' ');
}
// Цікаві варіанти з Codewars
function sc_(floor) {
    if (floor <= 1) return "";
    return 'Aa~ '.repeat(floor - 1) + 'Pa!' + (floor <= 6 ? ' Aa!' : '');
}
// ================================================================================================
// ================================================================================================
//*-Task №335 Finish Guess the Number Game (8kyu)
/*
Уявіть, що ви створюєте гру, де користувач має вгадати правильне число.
Але існує обмеження щодо кількості відгадок, які користувач може зробити.

Якщо користувач намагається вгадати більше, ніж обмеження, функція має видати помилку.
Якщо припущення користувача правильні, воно має повернути true.
Якщо припущення користувача неправильне, воно має повернути false і втратити життя.
Чи можете ви завершити гру, щоб усі правила були дотримані?
*/

// Мій варіант
class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (!this.lives) { throw 'No guesses left' };
        if (n === this.number) { return true };
        this.lives--;
        return false;
    }
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №336 Training JS #32: methods of Math---round() ceil() and floor() (8kyu)
/*
Кодування у функції roundIt. функція приймає 1 параметр n. Це число з комою. Використовуйте різні
методи залежно від розташування десяткової крапки, перетворюйте число на ціле.

Якщо десяткова кома знаходиться ліворуч від числа (тобто кількість цифр ліворуч від коми менша, ніж справа),
використання методу ceil().
roundIt(3.45) should return 4

Якщо десяткова кома знаходиться праворуч від числа (тобто кількість цифр ліворуч від десяткової коми більше,
ніж справа), використання методу floor().
roundIt(34.5) should return 34

Якщо десяткова кома знаходиться посередині числа (тобто кількість цифр ліворуч від коми дорівнює
кількості цифр праворуч), використання методу round().
roundIt(34.56) should return 35
*/

// Мій варіант
function roundIt(n) {
    const nArr = `${n}`.split('.');
    if (nArr[0].length < nArr[1].length) { return Math.ceil(n) };
    if (nArr[0].length > nArr[1].length) { return Math.floor(n) };
    return Math.round(n);
}
// Цікаві варіанти з Codewars
function roundIt_(n) {
    var [a, b] = n.toString().split('.');
    return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
}
// ================================================================================================
// ================================================================================================
//*-Task №337 Sort My Textbooks (8kyu)
/*
ДОПОМОЖІТЬ! Джейсон не може знайти свій підручник! До іспиту залишилося два дні, а підручники Джейсона
не в порядку! Допоможіть йому відсортувати список, повний підручників, за предметами, щоб він міг
вчитися перед тестом.

Сортування НЕ повинно бути чутливим до регістру
*/

// Мій варіант
// function sorter(textbooks) {
//     let arr = textbooks.map(book => { return book.toLowerCase() });
//     const result = arr.sort();
//     return result;
// }

function sorter(textbooks) {
    return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : a.toLowerCase() < b.toLowerCase() ? -1 : 0);
}
// Цікаві варіанти з Codewars
const sorter_ = (textbooks) => textbooks
    .sort((a, b) => {
        const aa = a.toLowerCase()
        const bb = b.toLowerCase()
        if (aa > bb) return 1
        if (aa < bb) return -1
        return 0
    });
// ================================================================================================
// ================================================================================================
//*-Task №338 Is the date today (8kyu)
/*
Напишіть просту функцію, яка приймає дату як параметр і повертає логічне значення, яке вказує,
чи є дата сьогоднішньою чи ні.
Переконайтеся, що ваша функція не повертає помилковий результат, перевіряючи лише день.
*/

// Мій варіант
function isToday(date) {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();
}
// Цікаві варіанти з Codewars
function isToday_(date) {
    return new Date().toDateString() === date.toDateString();
}
// ================================================================================================
// ================================================================================================
//*-Task №339 8kyu interpreters: HQ9+ (8kyu)
/*
Ваше завдання полягає в тому, щоб реалізувати простий інтерпретатор для відомої езотеричної мови HQ9+,
який працюватиме для введення одного символу:

Якщо введено «H», поверніть «Hello World!»
Якщо введено "Q", поверніть введення
Якщо введено «9», поверніть повний текст пісні 99 Bottles of Beer. Його слід відформатувати так:

99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.
97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.
...
...
...
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

Для всього іншого не повертайте нічого (повертайте null у C#, None у Rust і "" у Haskell).
(+ не має видимих ефектів, тому ми можемо сміливо його ігнорувати.)
*/

// Мій варіант
function HQ9(code) {
    const lyrics = '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
    if (code === 'H') { return 'Hello World!' };
    if (code === 'Q') { return 'Q' };
    if (code === '9') { return lyrics };
    return undefined;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №340 Simple Fun #352: Reagent Formula (8kyu)
/*
Зараз сконструюємо реактив. На вибір є вісім матеріалів, пронумерованих 1,2,..., 8 відповідно.
Ми знаємо правила конфекту:
material1 і material2 не можна вибрати одночасно
material3 і material4 не можна вибрати одночасно
material5 і material6 потрібно вибрати одночасно
необхідно вибрати матеріал7 або матеріал8 (принаймні один або обидва)

завдання
Вам надано формулу цілочисельного масиву. Масив містить лише цифри 1-8, які представляють матеріал 1-8.
Ваше завдання визначити, чи справедлива формула. Повертає true, якщо воно дійсне, і false в іншому випадку.

приклад
Для формули = [1,3,7] результат має бути true.
Для формули = [7,1,2,3] результат має бути false.
Для формули = [1,3,5,7] результат має бути false.
Для формули = [1,5,6,7,3] результат має бути true.
Для формули = [5,6,7] результат має бути true.
Для формули = [5,6,7,8] результат має бути true.
Для формули = [6,7,8] результат має бути false.
Для формули = [7,8] результат має бути true.

Примітка
Усі введені дані дійсні. Масив містить принаймні 1 цифру. Кожна цифра з’являється щонайбільше один раз.
Щасливого кодування ^_^
*/

// Мій варіант
function isValid(formula) {
    let result = false;
    if (formula.includes(7) || formula.includes(8)) {
        result = true;
        if (formula.includes(1) && formula.includes(2)) { return false };
        if (formula.includes(3) && formula.includes(4)) { return false };
        if (formula.includes(5) && formula.includes(6)) { return true };
        if (formula.includes(5)) {
            if (formula.includes(6)) {
                result = true;
            } else {
                return false;
            }
        }
        if (formula.includes(6)) {
            if (formula.includes(5)) {
                result = true;
            } else {
                return false;
            }
        }

    };
    return result;
}
// Цікаві варіанти з Codewars
function isValid(f) {
    return (
        !(f.includes(1) && f.includes(2)) &&
        !(f.includes(3) && f.includes(4)) &&
        (f.includes(5) === f.includes(6)) &&
        (f.includes(7) || f.includes(8))
    )
}
// ================================================================================================
// ================================================================================================
//*-залишилось 42шт
// console.time('timer_1');
// console.timeEnd('timer_1');