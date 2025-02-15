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
//*-залишилось 1742шт
// console.time('timer_1');
// console.timeEnd('timer_1');
