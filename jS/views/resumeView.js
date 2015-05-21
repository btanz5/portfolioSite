define(["jquery", "underscore", "backbone"], function($, _, Backbone){
	/*
	Backbone Resume View
		I understand that it is an unwritten role of not combining JS and HTML.
			Until I determine a proper means of implementing this content, this works
			for me. Thanks - @bTanz5(5/2015)
					*/
	var ResumeView = Backbone.View.extend({
		tagName: "div",
		className: "pageContent",
		id: "benResume",

		render: function(){
			this.$el.html("	<div id='benResume' class='pageContent'><a href='BBenTanseyResume051915.pdf' class='benTanseyResume'>Ben Tansey's Resume</a><p class='resumeIntro'>I am a exceptional team player that always puts the customer’s needs first. This is accomplished with excellent communication and on time delivery of projects. My education along with my acquired <a href='http://www.refsnesdata.no/certification/w3certified.asp?email=tanz785@gmail.com'>certifications</a>, and continued desires to learn about the latest technologies. Have prepared me not only for the current marketplace, but the future one as well. I look forward to the chance to help develop both creative and dynamic websites and applications for your company.</p><p class='resumeIntro'>Please feel free to download and review my current resume, <a class='openContactLink'>and I look forward to hearing back from you about setting up a formal interview.</a></p><p class='resumeIntro'>Thank you!</p></div>");	
			return this;
		}
	});
	return ResumeView; 

});