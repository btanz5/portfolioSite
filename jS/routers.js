define(["jquery", "underscore", "backbone", "views/skillsView", "views/resumeView", "views/portfolioView", "views/contactView"], function($, _, Backbone, SkillsView, ResumeView, PortfolioView, ContactView){
		var initialize = function(){
						/*
			Backbone Routers
								*/
			var AppRouter = Backbone.Router.extend({
				routes: {
					"skills": "viewSkills",
					"resume": "viewResume",
					"portfolio": "viewPortfolio",
					"contact": "viewContact"
				},
				viewSkills: function(){
					$(".pageContent").html("");
					var skillsView = new SkillsView({ el: ".contentWrapper"});
					skillsView.render();
				},
				viewResume: function(){
					$(".pageContent").html("");
					var resumeView = new ResumeView({ el: ".contentWrapper"});
					resumeView.render();
				},
				viewPortfolio: function(){
					$(".pageContent").html("");
					var portfolioView = new PortfolioView({ el: ".contentWrapper"});
					portfolioView.render();
				},
				viewContact: function(){
					$(".pageContent").html("");
					var contactView = new ContactView({ el: ".contentWrapper"});
					contactView.render();
				}
			});
			var appRouter = new AppRouter();
			Backbone.history.start();

			var NavView = Backbone.View.extend({
				events: {
					"click": "onListClick"
				},

				onListClick: function(e){
					var $li = $(e.target);
					appRouter.navigate($li.attr("data-url"), {trigger: true});
				}
			});

			var navView = new NavView({ el: ".pageNavs"});
		};
			return{
				initialize: initialize
			};
});


