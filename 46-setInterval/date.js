function capitalize(str) {
	// viết code ở đây
	var elements = str.split(' ');
	elements.map(function(element){
	    var first = element.substring(0,1).toUpperCase();
	    var rest = element.substring(1);
	    return first + rest + '';
	});
	elements.join(' ');
	return elements;
}

console.log(capitalize('nam'));