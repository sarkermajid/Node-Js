const Employee = require('./information');

console.log(Employee.getName());
console.log(Employee.getAge());
console.log(Employee.getProfession());
console.log(Employee.getCompany);

const { getName } = require('./information');
console.log(Employee.getName());