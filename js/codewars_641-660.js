//*-Task №641 Move 10 (5kyu)
/*
Перемістіть кожну літеру в наданому рядку на 10 літер вперед по алфавіту.
Якщо він проходить після «z», почніть знову з «a».
Введенням буде рядок довжиною > 0.
*/

// Мій варіант
function moveTen(s) {
  const shift = 10;
  const aCode = 'a'.charCodeAt(0);
  const zCode = 'z'.charCodeAt(0);
  const alphabetSize = zCode - aCode + 1;

  let result = '';

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let charCode = char.charCodeAt(0);

    let newCharCode = charCode + shift;

    if (newCharCode > zCode) {
      newCharCode = aCode + ((newCharCode - zCode - 1) % alphabetSize);
    }

    result += String.fromCharCode(newCharCode);
  }

  return result;
}
// Цікаві варіанти з Codewars
function moveTen_(s) {
  return s
    .split('')
    .map((e) =>
      e.charCodeAt(0) + 10 > 122
        ? String.fromCharCode(e.charCodeAt(0) - 16)
        : String.fromCharCode(e.charCodeAt(0) + 10)
    )
    .join('');
}
// ================================================================================================
// ================================================================================================
//*-Task №642 Disarium Number (Special Numbers Series #3) (5kyu)
/*
Визначення
Число дизарію — це число, яке в сумі своїх цифр, поєднаних із відповідними позиціями,
дорівнює самому числу.

завдання
Знайдіть число, чи є воно Disarium чи ні.
Передане число завжди додатне.

disariumNumber(89) ==> повернути "Disarium !!"
disariumNumber(564) ==> повернути "Ні!!"
*/

// Мій варіант
function disariumNumber(n) {
  let digits = n.toString();
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), i + 1);
  }

  return sum === n ? 'Disarium !!' : 'Not !!';
}
// Цікаві варіанти з Codewars
const disariumNumber_ = (n) =>
  `${
    n === n.toString().split``.reduce((r, e, i) => r + e ** (i + 1), 0)
      ? 'Disarium'
      : 'Not'
  } !!`;
// ================================================================================================
// ================================================================================================
//*-Task №643 Balanced Number (Special Numbers Series #1 ) (5kyu)
/*
Збалансоване число — це число, в якому сума цифр ліворуч від середньої цифри (цифр) і сума цифр
праворуч від середньої цифри (цифр) рівні.

Якщо число має непарну кількість цифр, то середня цифра лише одна. (Наприклад, 92645 має одну середню
цифру, 6.) В іншому випадку є дві середні цифри. (Наприклад, середніми цифрами 1301 є 3 і 0.)

Середню(і) цифру(и) не слід враховувати під час визначення того, збалансоване число чи ні, напр.
413023 є збалансованим числом, тому що ліва і права сума дорівнюють 5.

завдання
Дано число, знайдіть, чи воно збалансоване, і поверніть рядок 'Balanced' або 'Not Balanced'
відповідно. Передане число завжди буде позитивним.

7 ==> return "Balanced"
295591 ==> return "Not Balanced"
959 ==> return "Balanced"
27102983 ==> return "Not Balanced"
*/

// Мій варіант
function balancedNum(number) {
  const numbers = `${number}`.split('').map(Number);
  const len = numbers.length;

  if (len < 2) return 'Balanced';

  const mid = Math.floor(len / 2);
  const leftSum = numbers
    .slice(0, mid - (len % 2 === 0 ? 1 : 0))
    .reduce((sum, num) => sum + num, 0);
  const rightSum = numbers.slice(mid + 1).reduce((sum, num) => sum + num, 0);

  return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}

// Цікаві варіанти з Codewars
function balancedNum_(number) {
  let str = `${number}`,
    len = (str.length - (str.length % 2 ? -1 : -2)) / 2,
    sum = (digits) => [...digits].reduce((a, b) => a + +b, 0);

  return sum(str.slice(0, len)) === sum(str.slice(-len))
    ? 'Balanced'
    : 'Not Balanced';
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1742шт
// console.time('timer_1');
// console.timeEnd('timer_1');
