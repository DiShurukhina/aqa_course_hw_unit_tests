/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  let mergedArray = [];
  for (let arr of arrays) {
    mergedArray = [...mergedArray, ...arr];
  }
  return mergedArray;
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const tempArr = sentence.split(/\s+/);
  tempArr[0] = tempArr[0].toLowerCase();
  for (let i = 1; i < tempArr.length; i++) {
    tempArr[i] = tempArr[i].charAt(0).toUpperCase() + tempArr[i].slice(1).toLowerCase();
  }
  return tempArr.join('_');
}

//console.log(devideBy('I    am    an     engineer'));
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const seq = [0, 1];
  if (typeof n !== 'number' || n <= 0);
  if (n < 2) {
    return seq[n];
  }
  for (let i = 2; i <= n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq[n];
}

//console.log(fibonacci(1));

export { mergeArrays, fibonacci, devideBy };
