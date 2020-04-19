var fs = require('fs');
var readLineSync = require('readline-sync');

var studentFirst = {
	name : 'Nam',
	age : 20
}

var jsonFirst = JSON.stringify(studentFirst);

fs.writeFileSync('data.json',jsonFirst);

var loop = true;

while(loop){
	var question = readLineSync.question("What do you do ? \n\t 1. Print list student \n\t 2. Add student \n\t 3. exit \n");
	if(question == 1) {
		var readFile = fs.readFileSync('data.json');
		console.log(JSON.parse(readFile));
	}

	else if (question == 2) {
		var nameStudent = readLineSync.question("What your name ?");
		var ageStudent = readLineSync.question("What your age ?");
		var student = {
			name : nameStudent,
			age : ageStudent
		}
		var json = JSON.stringify(student);
		fs.writeFileSync('data.json',json);
	}

	else if(question == 3){
		loop = false;
	}
}