var fs = require('fs');

function readFilePromise(path){
	return new Promise(function(resolve,reject){
		fs.readFile(path,{encoding : 'utf-8'}, function(err,data){
			if(err){
				reject(err);
			}
			else{
				resolve(data);
			}
		})
	})
}


// Đối tượng Promise sẽ trả về 1 callback với 2 đối số resolve và reject 
// resolve sẽ được xử lý khi ta không có lỗi và reject thì ngược lại
// Sau đó resovle sẽ được gửi xuống hàm then bên trong lời gọi promise (async ở đây)
// Còn nếu gặp lỗi thì reject sẽ được ném xuống hàm catch để xử lý


readFilePromise('data.txt')
.then(function(data){
	console.log(data);
})
.then(function(){
	return readFilePromise('test.txt');
})
.then(function(data){
	console.log(data);
})
.catch(function(err){
	console.log(err);
})
;