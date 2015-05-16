define(["jquery", "underscore", "backbone", "routers", "formVal", "jQ"], function($, _, Backbone, Router){
	var initialize = function(){
		Router.initialize();
	}
	return {
		initialize: initialize
	};
});