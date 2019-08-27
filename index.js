// requiring the filesystem module
const fs = require("fs");
const Team = require("./team.js");

// read the file input
const lineReader = require('readline').createInterface({
    input: fs.createReadStream('members.txt')
});

let team = new Team ("new team")


// create a member array and storing the values from members.txt
// member = ['john',' doe', 'senior propgrammr', '28', 'javascript' ];
  
lineReader
    .on('line', function (line) {
        console.log('Line from file:', line);
        const member = line.split(",");
        team.addProgrammer(member[0], member[1], member[2], member[3]);
    })
    .on('close', process);



// code when lineReader is done
function process() {

    //
    // TO DO: print each user's name to the console here
    //

    for(let i=0; i<team.programmerCount(); i++) {
       team.programmers[i].printProgrammer();
        
    }

}
