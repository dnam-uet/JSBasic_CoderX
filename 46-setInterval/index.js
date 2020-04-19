function countFrom(a,b){
	return new Promise(function(resolve,reject){
		var intervalId = setInterval(function(){
		console.log(a);
		if(a==b) {
			clearInterval(intervalId);
			resolve();
		}
		a++;
		},1000);
	})
}

countFrom(1,10).then(function(){
	console.log('Done');
})