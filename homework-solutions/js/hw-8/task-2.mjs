/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

let vowel = new Set(['a','e','y','u','i','o', 'A', 'E', 'Y', 'U', 'I', 'O']);
function sortedByVowels(wordsArr) {
  return wordsArr.toSorted((a,b) => countVowels(a) - countVowels(b));
}

function countVowels(word) {
  let countVowel = 0;
  for (let char of word) {
    if (vowel.has(char)) {
      countVowel++;
    }
  }
  return countVowel;
}
export { sortedByVowels };