// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue<T extends object>(object: T, value: T[keyof T]): keyof T | undefined {
    for(const key in object) {
        if((typeof value === "object" || Array.isArray(value)) && JSON.stringify(object[key]) === JSON.stringify(value)) return key;
        if(object[key] === value) return key;
    }
    return undefined;
}

const testObject = {
    name: 'Dinara', 
    age: 39, 
    arr: [1,2,3], 
    obj: {a:1}, 
    u: undefined
}

console.log(getKeyByValue(testObject, 'Dinara')) //name
console.log(getKeyByValue(testObject, 39)) // age
console.log(getKeyByValue(testObject, [1,2,3])) //arr
console.log(getKeyByValue(testObject, {a:1})) // obj
console.log(getKeyByValue(testObject, undefined)) //u
console.log(getKeyByValue(testObject, 123)) // undefined
console.log(getKeyByValue(testObject, [])) // undefined
console.log(getKeyByValue(testObject, {a:2})) // undefined
