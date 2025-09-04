class Employee {
  #salary;
  constructor(firstName, lastName, salary, profession) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.profession = profession;
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

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    this.#validateSalary(value);
    this.#salary = value;
  }

  #validateName(value, fieldName = 'value') {
    if (typeof value !== 'string') throw new Error(`Invalid data type for ${fieldName}. Expected string`);
    if (!/^[A-Za-z]{2,50}$/.test(value))
      throw new Error(`${fieldName} should be 2-50 characters long and contain only Latin symbols`);
  }

  #validateSalary(salary) {
    if (typeof salary !== 'number' || isNaN(salary) || salary <= 0 )
      throw new Error(`${salary} must be a number and cannot be negative`);
  }
}

class Developer extends Employee {
  #programmingLanguages;
  constructor(firstName, lastName, salary, programmingLanguages, profession = 'Developer') {
    super(firstName, lastName, salary, profession);
    this.#programmingLanguages = programmingLanguages ?? [];
  }
  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || language.trim().length === 0)
      throw new Error(`Invalid data type for programming language. A non-empty string is expected`);
    this.#programmingLanguages.push(language);
  }

  get programmingLanguages() {
    return [...this.#programmingLanguages];
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize, profession = 'Manager') {
    super(firstName, lastName, salary, profession);
    this.teamSize = teamSize;
  }
  increaseTeamSize() {
    this.teamSize++;
  }
}

class Designer extends Employee {
  #designTools;
  constructor(firstName, lastName, salary, designTools, profession = 'Designer' ) {
    super(firstName, lastName, salary, profession);
    this.#designTools = designTools ?? [];
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string' || tool.trim().length === 0)
      throw new Error(`Invalid data type for design tool. A non-empty string is expected`);
    this.#designTools.push(tool);
  }

  get designTools() {
    return [...this.#designTools];
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
    if (!(employee instanceof Employee)) {
      throw new Error('Cannot add employee. Invalid data');
    }
    const isExist = this.#employee.some(
      (emp) => emp.firstName === employee.firstName && emp.lastName === employee.lastName,
    );
    if (isExist) {
      throw new Error(`Employee ${employee.firstName} ${employee.lastName} already exists`);
    }
    this.#employee.push(employee);
  }

  getEmployees() {
    return [...this.#employee];
  }

  getEmployeesByProfession(profession) {
    return this.#employee.filter((emp) => emp.profession === profession);
  }

  findEmployeeByName(firstName) {
    const found = this.#employee.find((emp) => emp.firstName === firstName);
    if (!found) throw new Error('Employee not found');
    return found;
  }

  findEmployeeByName(firstName) {
    const found = this.#employee.find((emp) => emp.firstName === firstName);
    if (!found) throw new Error('Employee not found');
    return found;
  }

  #getEmployeeIndex(firstName) {
    return this.#employee.findIndex((emp) => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) throw new Error('Employee not found');
    this.#employee.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employee.reduce((total, emp) => total + emp.salary, 0);
  }
}
// const company = new Company('Tech Corp', '123-456', 'Main Street');
// const dev = new Developer('Alice', 'Smith', 8000, ['JavaScript']);
// const designer = new Designer('Diana', 'White', 7500, ['Photoshop']);
// const manager = new Manager('Bob', 'Brown', 9000, 5);
// company.addEmployee(dev);
// company.addEmployee(designer);
// company.addEmployee(manager);
// console.log(company.getEmployees()); // [Employee, Employee]
// console.log(company.getEmployeesByProfession('Developer'))

export { Employee, Company, Designer, Developer, Manager };
