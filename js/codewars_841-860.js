//*-Task №841 Cartesian coordinates from degree angle (7kyu)
/*
Напишіть просту функцію, яка приймає полярні координати (кут у градусах та радіус)
та повертає еквівалентні декартові координати.

Наприклад:

coordinates(90,1)
=> (0.0, 1.0)

coordinates(45, 1)
=> (0.7071067812, 0.7071067812)
*/

// Мій варіантfunction {
function coordinates(angleDegrees, radius) {
  const angleRadians = (angleDegrees * Math.PI) / 180;
  const x = radius * Math.cos(angleRadians);
  const y = radius * Math.sin(angleRadians);

  return [parseFloat(x.toFixed(10)), parseFloat(y.toFixed(10))];
}
// Цікаві варіанти з Codewars
function coordinates_(d, r) {
  var θ = (d * Math.PI) / 180;
  return [+(r * Math.cos(θ)).toFixed(10), +(r * Math.sin(θ)).toFixed(10)];
}
// ================================================================================================
// ================================================================================================
//*-Task №842 Array Mash (7kyu)
/*
Об'єднайте 2 масиви разом так, щоб повернутий масив містив чергувані елементи цих двох масивів.
Обидва масиви завжди будуть однакової довжини.

Наприклад: [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
*/

// Мій варіант
function arrayMash(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i]);
    result.push(array2[i]);
  }
  return result;
}
// Цікаві варіанти з Codewars
function arrayMash_(array1, array2) {
  let newArr = [];
  for (let i = 0; i < array1.length; i++) {
    newArr.push(array1[i], array2[i]);
  }
  return newArr;
}
// ================================================================================================
// ================================================================================================
//*-Task №843 Array comparator (7kyu)
/*
У цьому ката у вас є два масиви, кожен масив містить лише унікальні елементи.
Ваше завдання — обчислити кількість елементів у першому масиві, які також присутні в другому масиві.
*/

// Мій варіант
function matchArrays(v, r) {
  return v.filter((e) => r.includes(e)).length;
}
// Цікаві варіанти з Codewars

// ================================================================================================
// ================================================================================================
// console.time('timer_1');
// console.timeEnd('timer_1');
