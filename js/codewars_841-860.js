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
// console.time('timer_1');
// console.timeEnd('timer_1');
