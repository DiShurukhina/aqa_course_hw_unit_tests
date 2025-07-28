"use strict";

//Напишите скрипт, который принимает целое положительное число n (одно любое число от 1 до 9), и выводит в консоль сумму равную 
//n + nn + nnn, где n не перемножаются, а конкатенируются

let n = 9;
let double_n = Number(String(n) + String(n));
let triple_n = Number(String(n) + String(n) + String(n))
console.log(n + double_n + triple_n)