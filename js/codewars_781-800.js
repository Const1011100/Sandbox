//*-Task №781 Even or Odd - Which is Greater? (7kyu)
/*
Дано рядок цифр, щоб перевірити, чи сума всіх окремих парних цифр більша за суму всіх окремих
непарних цифр. Завжди буде задано рядок чисел.

Якщо сума парних чисел більша за непарні, поверніть: "Even is greater than Odd".
Якщо сума непарних чисел більша за суму парних чисел, поверніть: "Odd is greater than Even".
Якщо сума парних і непарних чисел однакова, поверніть: "Even and Odd are the same".
 */

// Мій варіант
function evenOrOdd(str) {
  const digits = str.split('').map(Number);
  const evenSum = digits
    .filter((d) => d % 2 === 0)
    .reduce((sum, d) => sum + d, 0);
  const oddSum = digits
    .filter((d) => d % 2 !== 0)
    .reduce((sum, d) => sum + d, 0);

  if (evenSum > oddSum) return 'Even is greater than Odd';
  if (oddSum > evenSum) return 'Odd is greater than Even';
  return 'Even and Odd are the same';
}
// Цікаві варіанти з Codewars
function evenOrOdd_(str) {
  const diff = [...str]
    .map(Number)
    .reduce((a, b) => (b % 2 ? a - b : a + b), 0);

  if (diff > 0) return 'Even is greater than Odd';

  if (diff < 0) return 'Odd is greater than Even';

  return 'Even and Odd are the same';
}
// ================================================================================================
// ================================================================================================
// console.time('timer_1');
// console.timeEnd('timer_1');
