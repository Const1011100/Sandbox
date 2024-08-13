//*-Task №461 Fun with ES6 Classes #4 - Cubes and Setters (7kyu)
/*
Визначте клас Cube, функція-конструктор якого приймає рівно один параметр length та зберігає значення
аргументу в this.length. Потім ви визначите гетер і сеттер для surfaceArea та об’єму куба.

Початковий код не надається. Ви можете використовувати будь-який синтаксис для завершення цієї ката,
але настійно рекомендується використовувати синтаксис і функції ES6 для виконання цієї ката.
*/

// Мій варіант (Подивився відповідь)
class Cube {
    constructor(length) {
        this.length = length;
    }
    get volume() {
        return Math.pow(this.length, 3);
    }
    set volume(volume) {
        this.length = Math.cbrt(volume);
    }
    get surfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }
    set surfaceArea(surfaceArea) {
        this.length = Math.sqrt(surfaceArea / 6);
    }
}

// Цікаві варіанти з Codewars


// ================================================================================================
// ================================================================================================
//*-Task №462 Competitive eating scoreboard (7kyu)
/*
Ви суддя змагання з їжі, і вам потрібно вибрати переможця!
У змаганні є три страви, і кожен тип їжі коштує різну кількість балів. Пункти наступні:

Курячі крильця: 5 балів
Гамбургери: 3 бали
Хот-доги: 2 бали

Напишіть функцію, яка допоможе створити табло. Він приймає як параметр список об’єктів,
що представляють учасників, наприклад:
[
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]

Він має повертати властивості «name» та «score», відсортовані за балом; якщо бали рівні,
відсортуйте в алфавітному порядку за назвою.
[
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]
Щасливого суддівства!
*/

// Мій варіант (Подивився відповідь)
function scoreboard(whoAteWhat) {
    let result = [];

    for (let i = 0; i < whoAteWhat.length; i++) {
        const name = whoAteWhat[i].name;
        let score = (whoAteWhat[i].chickenwings * 5) + (whoAteWhat[i].hamburgers * 3) + (whoAteWhat[i].hotdogs * 2);
        result.push({name, score});
    }

    const sortByName = result.sort((a, b) => {
        if(a.name < b.name) { return -1 };
        if(a.name > b.name) { return 1 };
        return 0;
    });
    const sortByScore = sortByName.sort((a, b) => b.score - a.score);
    return sortByScore;
}

// Цікаві варіанти з Codewars
function scoreboard_(whoAteWhat) {
    return whoAteWhat.map(obj => ({
        name: obj.name,
        score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2,
    })).sort((a, b) => b.score - a.score || a.name > b.name);
}

// ================================================================================================
// ================================================================================================
//*-залишилось 1900шт
// console.time('timer_1');
// console.timeEnd('timer_1');