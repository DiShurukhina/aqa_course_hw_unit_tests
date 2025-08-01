/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let vowel_count = 0;
let consonant_count = 0;
let vowel = new Set(['a','e','y','u','i','o']);
let consonant = new Set(['q','w','r','t','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']);
for(let i = 0; i < word.length ; i++) {
    if (vowel.has(word[i])) {
        vowel_count++;
    } else if (consonant.has(word[i])) {
        consonant_count++;
    }
}
vowelsAndConsonantsResult += `${word} contains ${vowel_count} vowels and ${consonant_count} consonants`;

export { vowelsAndConsonantsResult };