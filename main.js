// Prompt the user for input (works in browser)
let score = parseInt(prompt("Enter the student's score (0–100):"), 10);

let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else if (score >= 0) {
    grade = "F";
} else {
    grade = "Invalid Score";
}

console.log("Student Grade: " + grade);
alert("Student Grade: " + grade); 