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
    this.#validateName(value, 'firstName');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this.#validateName(value, 'lastName');
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    this.#validateProfession(value, 'profession');
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    this.#validateSalary(value);
    this.#salary = value;
  }

  #validateName(value, fieldName = 'value') {
    if (typeof value !== 'string') throw new Error(`Invalid data type for ${fieldName}. Expected string`);
    if(!/^[A-Za-z]{2,50}$/.test(value)) throw new Error(`${fieldName} should be 2-50 characters long and contain only Latin symbols`);
  }

  #validateProfession(value, fieldName = 'value') {
    if (typeof value !== 'string') throw new Error(`Invalid data type for ${fieldName}. Expected string`);
    if(!/^[A-Za-z ]+$/.test(value) || value.trim().length === 0) throw new Error(`${fieldName} shouldn't be empty and must contain only Latin symbols`);
  }

  #validateSalary(salary) {
    if (typeof salary !== 'number' || isNaN(salary) || salary <= 0 || salary >= 10000) throw new Error(`${salary} must be a number between 1 and 9999`);
  }
}

class Company {
  #employee = [];
  constructor(title, phone, address) {
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

  findEmployeeByName(firstName) {
    const found = this.#employee.find((emp) => emp.firstName === firstName);
    if(!found) throw new Error("Employee not found");
    return found;
  }

  #getEmployeeIndex(firstName) {
    return this.#employee.findIndex((emp) => emp.firstName === firstName);
  }

  removeEmployee(firstName){
    const index = this.#getEmployeeIndex(firstName);
    if(index === -1) throw new Error("Employee not found");
    this.#employee.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employee.reduce((total,emp) => total + emp.salary, 0)
  }
}

export { Employee, Company };
