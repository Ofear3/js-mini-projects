// =======================
// Student Management System
// =======================

let students = [
  { name: "Rahim", roll: 101, marks: 85 },
  { name: "Karim", roll: 102, marks: 72 },
  { name: "Salam", roll: 103, marks: 91 }
];

//  Add new student
students.push({ name: "Jamal", roll: 104, marks: 66 });
console.log("All Students:", students);

//  Calculate grade & GPA
for (let s of students) {
  let grade, gpa;

  if (s.marks >= 80) { grade = "A+"; gpa = 5.0; }
  else if (s.marks >= 70) { grade = "A"; gpa = 4.0; }
  else if (s.marks >= 60) { grade = "A-"; gpa = 3.5; }
  else { grade = "F"; gpa = 0.0; }

  console.log(`${s.name} | Roll: ${s.roll} | Grade: ${grade} | GPA: ${gpa}`);
}

//  Find top student
let topStudent = students[0];
for (let s of students) {
  if (s.marks > topStudent.marks) {
    topStudent = s;
  }
}
console.log("Top Student:", topStudent.name, "-", topStudent.marks);

//  Search student by roll
let searchRoll = 102;
let found = false;

for (let s of students) {
  if (s.roll === searchRoll) {
    console.log("Student Found:", s);
    found = true;
  }
}

if (!found) {
  console.log("Student not found");
}

//  Generate report
console.log("----- Student Report -----");
for (let s of students) {
  console.log(`Name: ${s.name}, Roll: ${s.roll}, Marks: ${s.marks}`);
}
