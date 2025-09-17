// Необходимо создать классовую структуру
// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
// 4. Создайте объект класса Car и проверьте работоспособность

interface IVehicle {
    getDetails(): string;
    start(): string;
}

abstract class Vehicle implements IVehicle {
    constructor(protected make: string, protected model: string) {}
    abstract getDetails(): string;
    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting.`;
    }
}

class Car extends Vehicle {
    constructor(make: string, model: string, private year: number) {
        super(make, model);
    }
    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`;
    }    
}

const myCar1 = new Car("Toyota", "C-HR", 2024);
const myCar2 = new Car("Nissan", "Note", 2021);

console.log(myCar1.start());
console.log(myCar1.getDetails()); 

console.log(myCar2.start());
console.log(myCar2.getDetails()); 