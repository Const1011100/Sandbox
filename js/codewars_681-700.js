//*-Task №681 The Office II - Boredom Score (7kyu)
/*
Час від часу люди в офісі змінюють команди або відділи. Залежно від того, що люди роблять
зі своїм часом, вони можуть стати більш-менш нудними. Час оцінити нинішню команду.

Вам буде надано об’єкт (персонал), який містить імена співробітників як ключі та відділ,
у якому вони працюють, як значення.

Кожен відділ має різну оцінку нудьги, а саме:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Залежно від сукупного результату команди, поверніть відповідний настрій:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

// Мій варіант
function boredom(staff) {
  const departmentScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };
  const totalScore = Object.values(staff).reduce((sum, department) => {
    return sum + departmentScores[department] || 0;
  }, 0);
  if (totalScore <= 80) return 'kill me now';
  if (totalScore < 100) return 'i can handle this';
  return 'party time!!';
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-Task №682 Rotate for a Max (7kyu)
/*
Почнемо з прикладу:
Візьміть число: 56789. Поверніть ліворуч, отримаєте 67895.

Залиште першу цифру на місці та поверніть інші цифри вліво: 68957.

Залиште перші дві цифри на місці та поверніть інші: 68579.

Збережіть перші три цифри та поверніть решту вліво: 68597.
Тепер усе закінчено, оскільки зберігаючи перші чотири, залишається лише одна цифра, яка повертається, це сама.

У вас є така послідовність чисел:

56789 -> 67895 -> 68957 -> 68579 -> 68597
і ви повинні повернути найбільше: 68957.

завдання
Напишіть функцію max_rot(n), яка, враховуючи натуральне число n, повертає максимальне число,
яке ви отримали, виконуючи обертання, подібні до наведеного вище прикладу.
Отже, max_rot (або maxRot або ... залежно від мови) виглядає так:
max_rot(56789) має повернути 68957
max_rot(38458215) має повернути 85821534
*/

// Мій варіант
function maxRot(n) {
  let max = n;
  let arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    arr.push(arr.splice(i, 1));
    const num = Number(arr.join(''));
    if (num > max) max = num;
  }
  return max;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
//*-залишилось 1695шт
// console.time('timer_1');
// console.timeEnd('timer_1');
