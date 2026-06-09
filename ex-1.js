// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  return previousSalary+=5000;
}

function forEach(array, operation) {
  // Start coding here
  let salaryAterIncrease =[];
  for (let salary of array){
    salaryAterIncrease.push(operation(salary));
  }
  return salaryAterIncrease;
}

// Using `forEach` function here

let newEmployeeSalaries=forEach(employeeSalaries,addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?

====================================
*/
