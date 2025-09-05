class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }
  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this.#validateString(value, 'firstName');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this.#validateString(value, 'lastName');
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    this.#validateString(value, 'profession');
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    this.#validateSalary(value);
    this.#salary = value;
  }

  #validateString(value, fieldName = 'value') {
    if (typeof value !== 'string') throw new Error(`Invalid data type for ${fieldName}. Expected string`);
  }

  #validateSalary(value) {
    if (typeof value !== 'number' || isNaN(value)) throw new Error(`Invalid data type for ${value}. Expected number`);
    if (value < 0) throw new Error('You should look for a new job. Salary cannot be negative');
  }
}

class Company {
  #employee = [];
  constructor(title, phone, address, employee) {
    this._title = title;
    this._phone = phone;
    this._address = address;
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) throw new Error('Cannot add employee. Invalid data');
    this.#employee.push(employee);
  }
  getEmployees() {
    return structuredClone(this.#employee);
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employee.length}`;
  }
}

export { Employee, Company };
