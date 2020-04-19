function intanceMax(arr,max){
	var counts = [];
	for(var i=0;i<arr.length;i++){
		if(isNaN(counts[arr[i]])) counts[arr[i]] = 0;
		counts[arr[i]] ++;
		if(counts[arr[i]] > max) max = counts[arr[i]];
	}
	return counts;
}

function outPut(arr,max){
	var result = [];
	intanceMax(arr,max);
	for(var i=0;i<arr.length;i++){
		if(arr[i] == max) result.push(i);
	}
	return result;
}

console.log(outPut([1,3,4,6,1,3],0));