var Mouse = require('./mouse.js');

function Cat(){
	this.stomach = [];
}

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
	mouse.die();
}

var mickey = new Mouse('brown');
var tom = new Cat();

tom.eat(mickey);

console.log(mickey);
console.log(tom);