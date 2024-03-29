//*-Task №161 Training JS #4: Basic data types--Array (8kyu)
/*
У javascript масив є одним із основних типів даних. Щоб визначити порожній масив, ви можете
використати var arr=new Array() або var arr=[]

Масив має атрибут: length, якщо існує масив з іменем arr, використовуючи arr.length, щоб дізнатися,
скільки елементів міститься в масиві.

Кожен елемент у масиві має індекс, використовуйте arr[index], щоб отримати значення елемента.
індекс завжди починається з 0, тому перший елемент масиву arr[0], останній елемент масиву arr[arr.length-1].

Якщо ми хочемо додати нові елементи до масиву, ви можете використовувати метод масиву: push().
Він може додати елемент у кінець масиву. Натомість, якщо ми хочемо видалити останній елемент масиву,
ви можете використати метод array: pop(). наприклад:

var arr=[1,2,3]; //визначити масив arr містить елементи 1 2 3
arr.push(4); //додати елемент 4 до обр
console.log(arr) //[1,2,3,4]
arr.pop(); //видалити останній елемент з обр
console.log(arr) //[1,2,3]
завдання
Я написав п'ять функцій. Кожна функція отримує параметр arr, який є масивом. Завершіть функції за
допомогою arr всередині тіл функцій.

     1. getLength(arr) має повертати довжину arr
     2. getFirst(arr) має повернути перший елемент arr
     3. getLast(arr) має повернути останній елемент arr
     4. pushElement(arr) має надсилати елемент до arr, а потім повертати arr
     5. popElement(arr) має витягти елемент з arr, а потім повернути arr
Коли ви закінчите роботу, натисніть «Запустити тести», щоб перевірити, чи ваш код працює належним чином.
Наприкінці натисніть «Надіслати», щоб надіслати свій код для проходження цієї ката.
*/
// Мій варіант
function getLength(arr) {
    //return length of arr
    return arr.length;
}
function getFirst(arr) {
    //return the first element of arr
    return arr[0];
}
function getLast(arr) {
    //return the last element of arr
    return arr[arr.length - 1]
}
function pushElement(arr) {
    var el = 1;
    arr.push(el);
    //push el to arr

    return arr
}
function popElement(arr) {
    //pop an element from arr
    arr.pop();
    return arr;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №162 Welcome to the City (8kyu)
/*
Створіть метод, який приймає як вхідні дані ім’я, місто та штат, щоб вітати людину.
Зауважте, що ім’я буде масивом, що складається з одного чи кількох значень, які слід об’єднати з
одним пробілом між кожним, а довжина масиву імен у тестових випадках буде різною.

приклад:
['Джон', 'Сміт'], 'Фенікс', 'Арізона'
Цей приклад поверне рядок Hello, John Smith! Ласкаво просимо до Фенікса, штат Арізона!
*/

// Мій варіант
function sayHello(name, city, state) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №163 Grasshopper - Function syntax debugging (8kyu)
/*
Grasshopper – налагодження синтаксису функції
Студент працював над функцією та зробив деякі синтаксичні помилки під час кодування.
Допоможіть їм знайти свої помилки та виправити їх.
*/

// Мій варіант
function main(verb, noun) {
    return verb + noun;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №164 Simple Fun #1: Seats in Theater (8kyu)
/*
Ваш друг порадив вам подивитися нову виставу в найпопулярнішому театрі міста. Він розбирається в
мистецтві і зазвичай його поради хороші, але не цього разу: вистава вийшла страшенно нудною.
Це так погано, що ви хочете вислизнути, що досить просто, тим більше, що вихід розташований прямо за
вашим рядом ліворуч. Усе, що вам потрібно зробити, це перелізти через сидіння та пробратися до виходу.

Основна проблема полягає у вашій сором’язливості: ви боїтеся, що в кінцевому підсумку закриєте огляд
(навіть на пару секунд) усім людям, які сидять позаду вас і у вашій колоні чи колонах ліворуч від вас.
Щоб набратися сміливості, ви вирішуєте підрахувати кількість таких людей і перевірити, чи зможете ви
пройти до виходу, не заважаючи багатьом людям.

Враховуючи загальну кількість рядків і стовпців у кінотеатрі (nRows і nCols відповідно), а також рядок
і стовпець, у яких ви сидите, поверніть кількість людей, які сидять прямо позаду вас і у вашій колоні
або ліворуч, припускаючи, що всі місця зайняті.

приклад
Для nCols = 16, nRows = 11, col = 5 і row = 3 результат має бути 96.

Ось як виглядає театр:
*/

// Мій варіант
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - (col - 1)) * (nRows - row);
}

// Цікаві варіанти з Codewars
function seatsInTheater_(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row);
}
// ================================================================================================
// ================================================================================================
//*-Task №165 Fix your code before the garden dies! (8kyu)
/*
У вас сад, відзначений нагородами, і щодня рослинам потрібно рівно 40 мм води. Ви створили чудовий
фрагмент JavaScript для розрахунку кількості води, яка знадобиться вашим рослинам, враховуючи
кількість дощової води, яка прогнозується на день. Ваш заздрісний сусід зламав ваш комп’ютер і
наповнив ваш код помилками.

Ваше завдання — налагодити код до того, як ваші рослини загинуть!
*/

// Мій варіант
function rainAmount(mm) {
    if (mm < 40) {
        return `You need to give your plant ${40 - mm}mm of water`;
    } else {
        return "Your plant has had more than enough water for today!";
    }
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №166 Holiday VIII - Duty Free (8kyu)
/*
Мета цієї ката полягає в тому, щоб визначити, скільки пляшок віскі в безмитній торгівлі вам
доведеться купити, щоб заощадження порівняно зі звичайною ціною на вулиці ефективно покрили вартість
вашої відпустки.

Вам буде надано основну ціну (normPrice, у £ (фунтах)), безмитну знижку (знижка, у відсотках) і
вартість свята (у £).

Наприклад, якщо пляшка зазвичай коштує 10 фунтів стерлінгів, а знижка безмитної торгівлі становить 10%,
ви заощадите 1 фунт стерлінгів за пляшку. Якщо ваша відпустка коштуватиме 500 фунтів стерлінгів, вам
доведеться купити 500 пляшок, щоб заощадити 500 фунтів стерлінгів, тому відповідь, яку ви повертаєте,
має бути 500.

Інший приклад: якщо зазвичай пляшка коштує 12 фунтів стерлінгів, а знижка безмитної торгівлі становить
50%, ви заощадите 6 фунтів стерлінгів за пляшку. Якщо ваша відпустка коштуватиме 1000 фунтів стерлінгів,
вам доведеться купити 166,66 пляшок, щоб заощадити 1000 фунтів стерлінгів, тож вашою відповіддю має
бути 166 пляшок.

Усі вхідні дані будуть цілими числами. Будь ласка, поверніть ціле число. Округлити в меншу сторону.
*/

// Мій варіант
function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / (normPrice * discount / 100))
}

// Цікаві варіанти з Codewars
function dutyFree_(normPrice, discount, hol) {
    return (Math.floor(hol / normPrice / discount * 100))
}
// ================================================================================================
// ================================================================================================
//*-Task №167 Multiple of index (8kyu)
/*
Вернуть новый массив, состоящий из элементов, кратных их собственному индексу во входном массиве (длина > 1).
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

// Мій варіант
function multipleOfIndex(array) {
    const arrayResult = array.filter((elem, index) => {
        return elem % index === 0 || elem === 0;
    });
    return arrayResult;
}

// Цікаві варіанти з Codewars
const multipleOfIndex_ = array => array.filter((element, index) => element % index == 0 || element == 0);
// ================================================================================================
// ================================================================================================
//*-Task №168 Grasshopper - Array Mean (8kyu)
/*
Найти среднее
Найдите среднее значение списка чисел в массиве.
*/

// Мій варіант
var findAverage = function (nums) {
    return nums.reduce((accum, elem) => { return accum += elem }) / nums.length;
}

// Цікаві варіанти з Codewars
const findAverage_ = nums => nums.reduce((a, b) => a + b) / nums.length;
// ================================================================================================
// ================================================================================================
//*-Task №169 Convert to Binary (8kyu)
/*
Дано невід’ємне ціле число n, напишіть функцію ToBinary, яка повертає це число у двійковому форматі.
toBinary(1)   should return 1
toBinary(5)   should return 101
toBinary(11)  should return 1011
*/

// Мій варіант
function toBinary(n) {
    return Number(n.toString(2));
}

// Цікаві варіанти з Codewars
const toBinary_ = n => +n.toString(2);
// ================================================================================================
// ================================================================================================
//*-Task №170 Training JS #5: Basic data types--Object (8kyu)
/*
У javascript Object є одним із основних типів даних. Визначити об’єкт можна за допомогою
var obj=new Object() або var obj={}
Ви можете визначити атрибути об’єкта під час ініціалізації таким чином:
var animal={name:"dog"}
ви також можете встановити/отримати деякі властивості після визначення об’єкта, наприклад:
змінна тварина={}
animal.name="собака" (або тварина["ім'я"]="собака")

завдання
Дайте вам функціональну тварину, прийміть 1 parameter:obj так:

{ім'я:"собака",ноги:4,колір:"білий"}
і повертає такий рядок:

«Цей білий пес має 4 ноги».
Коли ви закінчите роботу, натисніть «Запустити тести», щоб перевірити, чи ваш код працює належним чином.
Наприкінці натисніть «Надіслати», щоб надіслати свій код для проходження цієї ката.
*/

// Мій варіант
function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №171 SpeedCode #2 - Array Madness (8kyu)
/*
Дано два масиви цілих чисел a, b, обидва довжиною >= 1, створіть програму, яка повертає істину,
якщо сума квадратів кожного елемента в a строго більша за суму кубів кожного елемента в b.

Наприклад:
arrayMadness([4, 5, 6], [1, 2, 3]);
повертає істину, оскільки 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
*/

// Мій варіант
function arrayMadness(a, b) {
    const squaresA = a.reduce((accum, elem) => {
        return accum = accum + (elem ** 2); // альтернатива Math.pow(elem, 2)
    }, 0);
    const cubesB = b.reduce((accum, elem) => {
        return accum = accum + (elem ** 3); // альтернатива Math.pow(elem, 3)
    }, 0);
    return squaresA > cubesB;
}

// Цікаві варіанти з Codewars
const arrayMadness_ = (a, b) => a.reduce((acc, x) => acc + x ** 2, 0) > b.reduce((acc, x) => acc + x ** 3, 0) 
// ================================================================================================
// ================================================================================================
//*-Task №172 Take the Derivative (8kyu)
/*
Ця функція приймає два числа як параметри, перше число є коефіцієнтом, а друге число є показником ступеня.
Ваша функція має помножити два числа, а потім відняти 1 від показника ступеня.
Потім він має повернути вираз (наприклад, 28x^7). "^1" не слід скорочувати, якщо експонента = 2.

Наприклад:
виведення (7, 8)
У цьому випадку функція повинна помножити 7 і 8, а потім відняти 1 від 8. Вона має вивести «56x^7»,
причому перше число 56 є добутком двох чисел, а друге число є показником степеня мінус 1.

derive(7, 8) --> це повинно вивести "56x^7"
derive(5, 9) --> це повинно вивести "45x^8"
Примітки:

Результатом цієї функції має бути рядок
Експонента ніколи не дорівнюватиме 1, і жодне число ніколи не дорівнюватиме 0
*/

// Мій варіант
function derive(coefficient, exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №173 Get Nth Even Number (8kyu)
/*
Повертає N-е парне число

Приклад (введення --> вихід)
1 --> 0 (перше парне число 0)
3 --> 4 (третє парне число 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466

Вхід не буде 0.
*/

// Мій варіант
function nthEven(n) {
    return (n - 1) * 2;
}

// Цікаві варіанти з Codewars
const nthEven_ = n => n * 2 - 2;
// ================================================================================================
// ================================================================================================
//*-Task №174 String cleaning (8kyu)
/*
Ваш бос вирішив заощадити гроші, купивши програму оптичного розпізнавання символів із зниженою
швидкістю для сканування текстів старих романів у вашу базу даних. Спочатку здається, що він добре
вловлює слова, але швидко ви помічаєте, що він кидає багато цифр у випадкових місцях тексту.

Приклади (введення -> вихід)
'! !' -> '! !'
'123456789' -> ''
"Це виглядає чудово!" -> "Це виглядає чудово!"
Ваші засмучені колеги шукають у вас рішення взяти цей спотворений текст і видалити всі цифри.
Ваша програма візьме рядок і видалить усі цифрові символи, а також поверне рядок із пробілами та
спеціальними символами ~#$%^&!@*():;"'.,? все без змін.
*/

// Мій варіант
function stringClean(s) {
    return s.replace(/[0-9]/g, '');
}

// Цікаві варіанти з Codewars
function stringClean_(s) {
    return s.replace(/\d/g, "");
}
// ================================================================================================
// ================================================================================================
//*-Task №175 Dollars and Cents (8kyu)
/*
Компанія, в якій ви працюєте, щойно отримала контракт на створення платіжного шлюзу.
Щоб допомогти рухатися вперед, ви зголосилися створити функцію, яка прийматиме float і повертатиме
форматування суми в доларах і центах.
39,99 стає $39,99

Решта вашої команди подбає про те, щоб аргумент було очищено перед передачею до вашої функції,
хоча вам потрібно буде враховувати додавання кінцевих нулів, якщо вони відсутні
(хоча вам не доведеться турбуватися про висячу крапку).

приклади:
3 має стати $3,00
3.1 має стати $3.10
*/

// Мій варіант
function formatMoney(amount) {
    return `$${amount.toFixed(2)}`;
}

// Цікаві варіанти з Codewars
function formatMoney_(amount) {
    const usd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        useGrouping: false
    });
    return usd.format(amount);
}
// ================================================================================================
// ================================================================================================
//*-Task №176 Enumerable Magic - Does My List Include This? (8kyu)
/*
Створіть метод, який приймає список і елемент і повертає true, якщо елемент належить до списку, інакше false.
*/
function include(arr, item) {
    return arr.includes(item);
}
// Мій варіант
function include_(arr, item) {
    return arr.indexOf(item) !== -1;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №177 How old will I be in 2099? (8kyu)
/*
Філіпу щойно виповнилося чотири роки, і він хоче знати, скільки років йому буде в різні роки в
майбутньому, наприклад у 2090 чи 3044. Його батьки не можуть обчислити це, тому вони благають вас
допомогти їм, написавши програму, яка може відповісти на нескінченні запитання Філіпа.

Ваше завдання полягає в тому, щоб написати функцію, яка приймає два параметри: рік народження та рік,
відносно якого відраховуються роки. Оскільки Філіп з кожним днем стає все більш цікавим, він може
незабаром захотіти знати, скільки років минуло до його народження, тому ваша функція має працювати
як з датами в майбутньому, так і в минулому.

Надайте вихідні дані в такому форматі:
для дат у майбутньому: «Вам ... рік(ів)».
Для дат у минулому: «Ви народитесь через ... рік(ів)».
Якщо рік народження дорівнює року запитуваного повернення: «Ти народився в цьому році!»

"..." має бути замінено числом, після якого ставиться пробіл. Пам’ятайте, що вам потрібно враховувати
як «рік», так і «роки», залежно від результату.
*/

// Мій варіант
function calculateAge(yearOfBirth, yearToCount) {
    const differenceInYears = yearToCount - yearOfBirth;

    if (differenceInYears > 0) {
        return `You are ${differenceInYears} year${differenceInYears === 1 ? '' : 's'} old.`;
    } else if (differenceInYears < 0) {
        return `You will be born in ${-differenceInYears} year${-differenceInYears === 1 ? '' : 's'}.`;
    } else {
        return "You were born this very year!";
    }
}

// Цікаві варіанти з Codewars
function calculateAge(m, n) {
    if (m == n) return 'You were born this very year!';
    var year = Math.abs(m - n) == 1 ? 'year' : 'years';
    if (m < n) return "You are " + (n - m) + ' ' + year + ' old.';
    if (m > n) return "You will be born in " + (-n + m) + ' ' + year + '.';
}
// ================================================================================================
// ================================================================================================
//*-Task №178 How many lightsabers do you own? (8kyu)
/*
Натхненний командою розробників Vooza, напишіть функцію, яка приймає ім'я програміста, і повертає
кількість світлових мечів, якими володіє ця особа.
До речі, єдиною людиною, яка володіє світловими мечами, є Зак. Він володіє 18, а це неймовірна
кількість світлових мечів. Хтось інший володіє 0.

Примітка: ваша функція повинна мати параметр за замовчуванням.
*/

// Мій варіант
function howManyLightsabersDoYouOwn(name) {
    return name === "Zach" ? 18 : 0;
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №179 Alan Partridge II - Apple Turnover (8kyu)
/*
Ваше завдання просте, якщо x у квадраті більше 1000, поверніть 'It's hotter than the sun!!',
інакше поверніть 'Help yourself to a honeycomb Yorkie for the glovebox.'.

Примітка. Введення буде додатним цілим числом.
*/

// Мій варіант
function apple(x) {
    return x ** 2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №180 Surface Area and Volume of a Box (8kyu)
/*
Напишіть функцію, яка повертає загальну площу поверхні та об’єм ящика у вигляді масиву: [area, volume]
*/

// Мій варіант
function getSize(width, height, depth) {
    const area = 2 * (width * height + height * depth + width * depth);
    const volume = width * height * depth;
    return [area, volume];
}

// Цікаві варіанти з Codewars
function getSize_(width, height, depth) {
    var box = { width: width, height: height, depth: depth };
    return [getArea(box), getVolume(box)];
}

function getArea(box) {
    return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
}

function getVolume(box) {
    return box.width * box.height * box.depth;
}
// ================================================================================================
// ================================================================================================
//*-залишилось 204шт