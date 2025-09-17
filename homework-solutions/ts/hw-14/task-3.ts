//Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов у которых есть как минимум поле salary: number, 
//и возвращается среднее арифметическое зарплат всех переданных объектов


interface IEmployee {
    salary: number;
}

function getAvgSalary<T extends IEmployee>(...employee: T[]): number {
    return employee.length === 0? 0 : employee.reduce((sum, emp) => sum + emp.salary, 0) / employee.length;
}

const test1 = getAvgSalary(
  { name: "Vasya", salary: 3000 },
  { salary: 8000},
  { name: "Petya", salary: 5500 },
  { name: "Fedor", salary: 6000 },
);

const test2 = getAvgSalary()

console.log(test1);
console.log(test2); 