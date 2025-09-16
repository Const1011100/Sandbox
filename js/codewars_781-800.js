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
//*-Task №782 Frequency sequence (7kyu)
/*
Ваше завдання — повернути вихідний рядок, який перетворює вхідний рядок s, замінюючи кожен символ
у s числом, що представляє кількість разів, коли цей символ зустрічається в s,
та розділяючи кожне число символом(ами) sep.
"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"
 */

// Мій варіант
function freqSeq(str, sep) {
  const frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  const result = [];
  for (let char of str) {
    result.push(frequency[char]);
  }

  return result.join(sep);
}
// Цікаві варіанти з Codewars
function freqSeq_(str, sep) {
  return str
    .split('')
    .map((v, i, arr) => arr.filter((vi) => vi === v).length)
    .join(sep);
}
// ================================================================================================
// ================================================================================================
//*-Task №783 Powers of i (7kyu)
/*
i — уявна одиниця, вона визначається як
i²=−1
i²=−1, отже, це розв'язок задачі
x²+1=0
x²+1=0.

Ваше завдання
Заповніть функцію pofi, яка повертає i
i у степені заданого невід'ємного цілого числа в найпростішій формі,
як рядок (відповідь може містити i).
 */

// Мій варіант
function pofi(n) {
  const remainder = n % 4;

  switch (remainder) {
    case 0:
      return '1';
    case 1:
      return 'i';
    case 2:
      return '-1';
    case 3:
      return '-i';
  }
}
// Цікаві варіанти з Codewars
function pofi_(n) {
  return ['1', 'i', '-1', '-i'][n % 4];
}
// ================================================================================================
// ================================================================================================
// console.time('timer_1');
// console.timeEnd('timer_1');
