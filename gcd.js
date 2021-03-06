/*
Наибольшим общим делителем (НОД) для двух целых чисел m и n называется 
наибольший из их общих делителей. 
Пример: для чисел 70 и 105 наибольший общий делитель равен 35. 
Наибольший общий делитель существует и однозначно определён, 
если хотя бы одно из чисел m или n не равно нулю.
Экспортируйте функцию по умолчанию, которая находит 
наибольший общий делитель двух целых положительных чисел.
*/

const gcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  let i = a;
  while (a % i !== 0 || b % i !== 0) {
    i -= 1;
  }
  return i;
};