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
//*-залишилось 1901шт
// console.time('timer_1');
// console.timeEnd('timer_1');