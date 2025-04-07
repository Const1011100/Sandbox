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
//*-залишилось 1696шт
// console.time('timer_1');
// console.timeEnd('timer_1');
