// requiring our Student module exported from student.js
const Programmer = require("./programmer.js");



// constructor function for creating Team objects
class Team {
    constructor(name) {
      this.name = name;
     
    }

    //method
  addProgrammer(name, position, age, language) {
    this.Programmer.push(new Programmer(name, position, age, language));
  };
  // this method will tell you how many programmers are in the class
  programmerCount() {
    return this.programmers.length;
  };
}

// exporting our Team constructor. 
module.exports = Team;

