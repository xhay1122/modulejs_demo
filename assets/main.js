/*
//AMD requireJS
require(['jquery'],function($){
	console.log($("btn").val());

	$('#btn').click(function(){
		require(['calculation'],function(math){
			console.log(math.add(1,2));
		});
	});
});*/


//CMD seaJS
define(function(require, exports, module) {

	require('jquery');
	console.log($("#btn").val());
	
	$("#btn").click(function(){
		var calculation = require('calculation');
		console.log(calculation.add(1, 2));
	});
	
});