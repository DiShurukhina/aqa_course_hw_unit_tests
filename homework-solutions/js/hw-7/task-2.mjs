/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  } else {
    word = word.toLowerCase();
    return word === word.split('').reverse().join('');
  }
}
//console.log(isPalindrom(123));
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string'|| sentence.length === 0) {
    return [];
  }
  const words = sentence.split(' ');
  let maxLength = 0;
  let longestWord = [];
  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = [word];
    } else if (word.length === maxLength) {
      longestWord.push(word);
    }
  }
  return longestWord;
}
//console.log(findLongestWords(undefined));
export { isPalindrom, findLongestWords };