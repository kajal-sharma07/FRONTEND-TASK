
const students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 32 },
    { name: "Amit", marks: 67 },
    { name: "Sneha", marks: 90 },
    { name: "Kiran", marks: 28 }
];

function studentReport(students) {

    // Add 5 grace marks
    const updatedStudents = students.map(function(student) {
        return {
            name: student.name,
            marks: Math.min(student.marks + 5, 100)
        };
    });

    // Select passing students
    const passedStudents = updatedStudents.filter(function(student) {
        return student.marks >= 40;
    });

    // Calculate average marks
    const totalMarks = passedStudents.reduce(function(total, student) {
        return total + student.marks;
    }, 0);

    const average = totalMarks / passedStudents.length;

    // Display passing students
    console.log("Passing Students:");

    passedStudents.forEach(function(student) {
        console.log(student.name + " : " + student.marks);
    });

    return average;
}

// IIFE
(function() {
    const average = studentReport(students);

    console.log("Average Marks: " + average);
    console.log("Report Generated Successfully");
})();
