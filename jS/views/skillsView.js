define([
	"jquery",
	"underscore",
	"backbone"], function($, _, Backbone){
	/*
	Backbone Skills View
		I understand that it is an unwritten role of not combining JS and HTML.
			Until I determine a proper means of implementing this content, this works
			for me. Thanks - @bTanz5(5/2015)
					*/
	var SkillsView = Backbone.View.extend({
		tagName: "div",
		className: "pageContent",
		id: "benSkills",

		render: function(){
			this.$el.html("<div id='benSkills' class='pageContent'><p> I currently have hone my skills in the following areas:</p><ul><li class='certClass'>HTML5</li><li class='certClass'>CSS3</li><li class='certClass'>JavaScript</li><li class='certClass'>JQuery</li><li class='certClass'>PHP</li></ul><a href='http://www.refsnesdata.no/certification/w3certified.asp?email=tanz785@gmail.com'><img src='images/w3cert.gif' alt='W3Schools Certified' class='w3cert'/></a><p> I am always learning and expanding on the most current forms of technology. This enables  me to be relevant in the ever changing field of web development. Entail, allowing for the creation of highly functional and dynamic websites. Putting User Interface, User Experience, and Responsive Device Design at the forefront.</p></div>");	
			return this;
		}
	});
	return SkillsView; 
	
});