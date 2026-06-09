// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  return previousSalary + 5000;
}

function forEach(array, operation) {
  // Start coding here
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(operation(array[i]));
  }
  return result;
}

// Using `forEach` function here

let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
คำตอบ: ฟังก์ชัน addSalary5000
จุดสังเกต: ฟังก์ชันนี้ถูกส่งเข้าไปเป็นอาร์กิวเมนต์ (Argument) ให้กับฟังก์ชัน forEach เพื่อให้ฟังก์ชัน forEach นำไปเรียกใช้งาน Call back

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
คำตอบ: ฟังก์ชัน forEach
จุดสังเกต: ฟังก์ชันนี้มีพารามิเตอร์ชื่อ operation ซึ่งทำหน้าที่รับ "ฟังก์ชันอื่น" เข้ามาทำงานอยู่ภายในตัวมันเอง

====================================
*/
