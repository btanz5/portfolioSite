
/*==============================RequireJS================================*/
/*
* Initialization page to load modules using require.js
* Thank you 
*	@bTanz5(5/2015)
*/

require.config({
	paths: {
		jquery: "jSLibs/jquery-1.11.2.min",
		underscore: "jSLibs/underscore-min",
		backbone: "jSLibs/backbone-min",
		jQ: "jQ",
		formVal: "formVal"
	}
});
require(["app"], function(App){
	App.initialize();
});


	