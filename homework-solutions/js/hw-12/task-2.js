// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Проверьте, что айди в респонсе === 201
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
const todoBody = {
    userId: 100500,
    title: 'John Doe' + new Date().toISOString(),
    completed: false,
}
const baseUrl = "https://jsonplaceholder.typicode.com/todos";
async function createTodo(todoBody) {
    try {
        const response = await fetch(baseUrl, {
            method: 'post',
            body: JSON.stringify(todoBody),
        });
        if(!response.ok || response.status !== 201) {
            throw new Error(`Failed to create todo. Status code: ${response.status}`);
        }
        const body = await response.json();
        if(body.id !== 201) {
            throw new Error('Incorrect id returned')
        }
        return body;
    } catch(error) {
        console.error(error.message);
        throw error;
    } finally {
        console.log('Function completed')
    }
}

createTodo(todoBody).then((result) => console.log(result)).catch((rej) => console.log(rej))

