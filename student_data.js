const students = [
  { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
  { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
  { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
  { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
  { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
  { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
  { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
  { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let gioi = 0;
let kha = 0;
let tb = 0;
let yeu = 0;

let maxStudent = null;
let minStudent = null;

let sumMath = 0;
let sumPhysics = 0;
let sumCS = 0;

console.log("| STT | Tên | TB | Xếp loại |");

for (let i = 0; i < students.length; i++) {
  let s = students[i];

  s.avg = s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3;

  if (s.avg >= 8) {
    s.rank = "Giỏi";
    gioi++;
  } else if (s.avg >= 6.5) {
    s.rank = "Khá";
    kha++;
  } else if (s.avg >= 5) {
    s.rank = "Trung bình";
    tb++;
  } else {
    s.rank = "Yếu";
    yeu++;
  }

  console.log(`| ${i + 1} | ${s.name} | ${s.avg.toFixed(1)} | ${s.rank} |`);

  if (maxStudent === null || s.avg > maxStudent.avg) maxStudent = s;

  if (minStudent === null || s.avg < minStudent.avg) minStudent = s;

  sumMath += s.math;
  sumPhysics += s.physics;
  sumCS += s.cs;
}

console.log("\nSố lượng:");
console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", tb);
console.log("Yếu:", yeu);

console.log("\nCao nhất:", maxStudent.name);
console.log("Thấp nhất:", minStudent.name);

console.log("\nTB môn:");
console.log("Math:", (sumMath / students.length).toFixed(2));
console.log("Physics:", (sumPhysics / students.length).toFixed(2));
console.log("CS:", (sumCS / students.length).toFixed(2));
