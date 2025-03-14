//*-Task №661 Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages (7kyu)
/*
Вам буде надано масив об’єктів, що представляють дані про розробників, які зареєструвалися для участі
в наступній зустрічі програмістів, яку ви організовуєте.

Ваше завдання полягає в тому, щоб повернути об’єкт, який містить кількість кожної мови кодування,
представленої на зустрічі.

Наприклад, задано наступний масив введення:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
ваша функція має повернути такий об’єкт:
{ C: 2, JavaScript: 1, Ruby: 1 }

Примітки:
Порядок мов в об'єкті не має значення.
Значення підрахунку має бути дійсним числом.
Вхідний масив завжди буде дійсним і відформатованим, як у прикладі вище.
*/

// Мій варіант
function countLanguages(list) {
  let languageCount = {};
  list.forEach((dev) => {
    let language = dev.language;
    if (language in languageCount) {
      languageCount[language] += 1;
    } else {
      languageCount[language] = 1;
    }
  });
  return languageCount;
}
// Цікаві варіанти з Codewars
function countLanguages_(list) {
  var count = {};
  list.forEach((x) => (count[x.language] = (count[x.language] || 0) + 1));
  return count;
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1721шт
// console.time('timer_1');
// console.timeEnd('timer_1');
