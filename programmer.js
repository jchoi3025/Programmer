// constructor function for creating programmer objects
class Programmer {
    constructor(name, position, age, language) {
      this.name = name;
      this.position = position;
      this.age = age;
      this.language = language;
    }
  

  // creates the printInfo method and applies it to all programmer objects
  printProgrammer() {
    console.log(`${this.name}`);
    console.log(`${this.position}`);
    console.log(`${this.age}`);
    console.log(`${this.language}`);
  }
}
 
  // exporting our Programmer constructor
  module.exports = Programmer;
