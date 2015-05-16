define([
	"jquery",
	"underscore",
	"backbone"], function($, _, Backbone){
	/*
	Backbone Views
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

	var ResumeView = Backbone.View.extend({
		tagName: "div",
		className: "pageContent",
		id: "benResume",

		render: function(){
			this.$el.html("	<div id='benResume' class='pageContent'><a href='BenTanseyResume.pdf' class='benTanseyResume'>Ben Tansey's Resume</a><p class='resumeIntro'>I am a exceptional team player that always puts the customer’s needs first. This is accomplished with excellent communication and on time delivery of projects. My education along with my acquired <a href='http://www.refsnesdata.no/certification/w3certified.asp?email=tanz785@gmail.com'>certifications</a>, and continued desires to learn about the latest technologies. Have prepared me not only for the current marketplace, but the future one as well. I look forward to the chance to help develop both creative and dynamic websites and applications for your company.</p><p class='resumeIntro'>Please feel free to download and review my current resume, <a class='openContactLink'>and I look forward to hearing back from you about setting up a formal interview.</a></p><p class='resumeIntro'>Thank you!</p></div>");	
			return this;
		}
	});

	var PortfolioView = Backbone.View.extend({
		tagName: "div",
		className: "pageContent",
		id: "benPortfolio",

		render: function(){			
			this.$el.html("	<div id='benPortfolio' class='pageContent'><p>I am always working on new projects. Please feel free to stop back later to see any new additions. Current projects that I have worked on and published can be accessed via the following links.</p><p> Thank You and Enjoy!</p><nav><a href='http://www.jbtbottling.com' class='portfolioLinks'>JBT Mobile Botting</a></nav></div>");
			return this;
		}
	});

	var ContactView = Backbone.View.extend({
		tagName: "div",
		className: "pageContent",
		id: "inquiryForm",

		render: function(){
			this.$el.html("<div id='inquiryForm' class='pageContent'><form action='FormToEmail.php' method='post' name='myForm' onsubmit='return(validate());'><span id='valConf'></span><br><!--Validation message if Name, Email, Or Phone are empty--><label for='name' class='form'>Name:</label><br><input type='text' name='name' size='40' class='form'/><br><label for='email' class='form'>Email:</label><br><input type='text' name='email' size='40' class='form' /><br><label for='phone' class='form'>Phone(###-###-####):</label><br><input type='text' name='phone' size='40' class='form' /><br><label for='comments' class='form'>Comments:</label><br><textarea type='text' name='comments' rows='5' cols='40' class='form'></textarea><br><input type='submit' name='send' value='Submit'><input type='reset' name='reset' value='Reset' onclick='resetForm()'></form></div>");	
			return this;
		}
	});

	return SkillsView; 
	// , ResumeView, PortfolioView, ContactView; 

});



