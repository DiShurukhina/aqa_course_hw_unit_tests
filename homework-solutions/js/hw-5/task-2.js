/**
 * Создать строку с числами от 1 до 100.
 * Если число делится на 3 – добавить строку `"число - делится на 3"`.
 * Если число делится на 5 – добавить строку `"число - делится на 5"`.
 * Если число делится и на 3, и на 5 – добавить строку `"число - делится и на 3 и на 5"`.
 * Каждая следующая строчка начинается с новой строки.
 * Переменная `fizzBuzzResult` уже создана и содержит пустую строку.
 * Ожидаемый результат (фрагмент):
 * 1
 * 2
 * 3 - делится на 3
 * 4
 * 5 - делится на 5
 * ...
 * 15 - делится и на 3 и на 5
 * ...
 * 100 - делится на 5
 */
let fizzBuzzResult = '';
for (let i = 1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzResult += `${i} - делится и на 3 и на 5\n`;
    } else if (i % 3 === 0){
        fizzBuzzResult += `${i} - делится на 3\n`;
    } else if (i % 5 === 0) {
        fizzBuzzResult += `${i} - делится на 5\n`;
    } else {
        fizzBuzzResult += `${i}\n`;
    }
}
fizzBuzzResult = fizzBuzzResult.trimEnd()
//console.log(fizzBuzzResult);
export { fizzBuzzResult };
