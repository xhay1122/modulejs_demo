/*//AMD requireJS
define(function(){
	var add = function(x,y){
		return x+y;
	};

	return {
		add:add
	};
});*/

//CMD seaJS
define(function(require, exports, module){
	exports.add = function(x,y){
		return x+y;
	};
});