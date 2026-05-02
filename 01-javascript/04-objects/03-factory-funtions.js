// Build a factory function called createStudent that takes name, marks and returns an object with:
// name and marks as properties
// A getGrade method that returns "A" (75+), "B" (55+), "C" (below 55)
// A introduce method that prints "I am Amit, I scored 85 and my grade is A"
function createStudent(name, marks) {
  return {
    name,
    marks,
    getGrade: function () {
      if (this.marks > 75) {
        console.log("A");

      } else if (this.marks > 55) {
        console.log("B");
      }
      else {
        console.log("C");
      }
    },
    introduce: function () {
      console.log(`I am ${this.name}, I scored ${this.marks} and my grade is ${this.getGrade}`);
    }
  }
}

// Create three students and call both methods on each.
createStudent("Amit", 90);
createStudent("abc", 76);
createStudent("xyz", 34);
