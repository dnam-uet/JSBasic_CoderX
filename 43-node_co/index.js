var fs = require('fs');
var co = require('co');

function readFilePromise(path){
	return new Promise(function(resolve,reject){
		fs.readFile(path, {encoding : 'utf8'} , function(err,data){
			if(err){
				reject(err);
			}
			else{
				resolve(data);
			}
		})
	});
}

// Cach 1

// co(function*(){
// 	var song1 = yield readFilePromise('Song1.txt');
// 	var song2 = yield readFilePromise('Song2.txt');
// 	var song3 = yield readFilePromise('Song3.txt');
// 	return [song1,song2,song3];
// })
// .then(function(values){
// 	console.log(values);
// })
// .catch(function(err){
// 	console.log(err);
// })

// Cach 2
co(function*(){
	var values = yield[readFilePromise('Song1.txt'),readFilePromise('Song2.txt'),readFilePromise('Song3.txt')];
	return values;
})
.then (function(values){
	console.log(values);
})
.catch(function(err){
	console.log(err);
})

var readFile = co.wrap(function*(files){
	// [String] --> [Promise]
	var values = yield files.map(function(file){
		return readFilePromise(file);
	});
});

readFile(['Song1.txt','Song2.txt','Song3.txt']);