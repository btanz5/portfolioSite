define(["jquery", "underscore", "backbone", "jQ"], function($, _, Backbone){
	/*
	Backbone Portfolio View
		I understand that it is an unwritten role of not combining JS and HTML.
			Until I determine a proper means of implementing this content, this works
			for me. Thanks - @bTanz5(5/2015)
					*/
	var PortfolioView = Backbone.View.extend({
		tagName: "div",
		className: "pageContent",
		id: "benPortfolio",

		render: function(){			
			this.$el.html("<div id='benPortfolio' class='pageContent'><p>I am always working on new projects. The best place to see current and past project is at my <span class='gitHubhighlight'>Git Hub account.</span> Please feel free to stop back later to see any new professional additions. Current projects that I have worked on and published can be accessed via the following links.</p><p> Thank You and Enjoy!</p><nav><a href='http://www.jbtbottling.com' class='portfolioLinks'>JBT Mobile Botting</a></nav></div>");
			return this;
		}
	});
	return PortfolioView; 

});