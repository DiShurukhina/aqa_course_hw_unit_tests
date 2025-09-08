// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

delayTwoSeconds(() => console.log(2 + 3));

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
const promise = new Promise((resolve, reject) => {
  resolve(1);
});

promise.then((result) => console.log(result));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
const rejectedPromise = new Promise((resolve, reject) => {
  reject('Promise failed');
});

rejectedPromise.catch((reject) => console.log(reject));

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(number) {
  return new Promise((resolve) => resolve(number));
}

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

const arrayOfPromises = [promiseNumber(1), promiseNumber(2), promiseNumber(3)];
Promise.all(arrayOfPromises).then((results) => results.forEach((result) => console.log(result)));

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled(arrayOfPromises).then((results) => results.forEach((result) => console.log(result)));

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function asyncPromiseAll() {
    try {
        const results = await Promise.all(arrayOfPromises);
        results.forEach((result) => console.log(result))
    } catch (error) {
        console.error(error.message);
    }
}

async function asyncPromiseAllSettled() {
    try {
        const results = await Promise.allSettled(arrayOfPromises);
        results.forEach((result) => console.log(result))
    } catch (error) {
        console.error(error.message);
    }
}

asyncPromiseAll()
asyncPromiseAllSettled()