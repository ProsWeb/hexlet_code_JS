/* 
Реализуйте и экспортируйте по умолчанию функцию smallestDivisor, используя итеративный процесс (императивно). Функция должна находить минимальный делитель переданного числа.
Для этого достаточно последовательно проверять делимость, начиная с двойки. Если делитель не найден, значит число простое, и делителем является само число.
Если переданное число меньше единицы, то функция должна вернуть NaN.
*/
const smallestDivisor = (num) => {
  let divisor = 2;
  if (num <= 0) {
    return NaN;
  }
  if (num === 1) {
    return num;
  }
  while (num % divisor !== 0) {
    divisor += 1;
  }
  return divisor;
};