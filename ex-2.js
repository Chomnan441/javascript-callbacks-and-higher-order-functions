//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkGradeOver70(score) {
  // Start coding here
  return score > 70;
}

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
    }
  }
  return count >= 5;
}

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkGradeOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkGradeOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkGradeOver70);

console.log(scoreRoom1Result); //true
console.log(scoreRoom2Result); //false
console.log(scoreRoom3Result); //false

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
คำตอบ: ฟังก์ชัน checkGradeOver70
จุดสังเกต: ฟังก์ชันนี้ถูกส่งเข้าไปเป็นอาร์กิวเมนต์ (Argument) ให้กับฟังก์ชัน atLeastFive เพื่อให้ฟังก์ชัน atLeastFive นำไปเรียกใช้งาน Call back


2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
คำตอบ: ฟังก์ชัน atLeastFive
จุดสังเกต: ฟังก์ชันนี้มีพารามิเตอร์ชื่อ operation ซึ่งทำหน้าที่รับ "ฟังก์ชันอื่น" เข้ามาทำงานอยู่ภายในตัวมันเอง


====================================
*/
