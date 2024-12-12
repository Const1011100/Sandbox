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
//*-залишилось 1795шт
// console.time('timer_1');
// console.timeEnd('timer_1');
