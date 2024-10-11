//*-Task №521 Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming? (7kyu)
/*
Вам буде надано масив об’єктів, що представляють дані про розробників, які зареєструвалися для участі
в наступній зустрічі програмістів, яку ви організовуєте.

Ваше завдання повернути:
true, якщо принаймні один розробник Ruby зареєструвався;
або
false, якщо не буде розробників Ruby.
Наприклад, задано наступний масив введення:
var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
ваша функція має повернути true.

Примітки:
Вхідний масив завжди буде дійсним і відформатованим, як у прикладі вище.
*/

// Мій варіант
function isRubyComing(list) {
    return list.some((programmer) => {
        return programmer.language === 'Ruby';
    });
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-залишилось 1852шт
// console.time('timer_1');
// console.timeEnd('timer_1');
