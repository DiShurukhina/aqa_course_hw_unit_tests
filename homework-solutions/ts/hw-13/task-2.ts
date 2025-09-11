// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.


function validatePassword(password: string): boolean {
    return (
        password.trim().length >= 8 &&
        /[A-ZА-ЯЁ]/.test(password) &&
        /[a-zа-яё]/.test(password) &&
        /[0-9]/.test(password)
    )
}

console.log(validatePassword("Password1"));      
console.log(validatePassword("пароль1"));        
console.log(validatePassword("Пароль1"));        
console.log(validatePassword("PASSWORD1"));      
console.log(validatePassword("12345678"));       
console.log(validatePassword("        "));       
console.log(validatePassword("Пароль123")); 
console.log(validatePassword("Пароль 1")); 