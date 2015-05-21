define(["jquery", "underscore", "backbone", "formVal"], function($, _, Backbone){
	/*
	Backbone Contact View
		I understand that it is an unwritten role of not combining JS and HTML.
			Until I determine a proper means of implementing this content, this works
			for me. Thanks - @bTanz5(5/2015)
					*/
	var ContactView = Backbone.View.extend({
		tagName: "div",
		className: "pageContent",
		id: "inquiryForm",

		render: function(){
			this.$el.html("<div id='inquiryForm' class='pageContent'><form action='FormToEmail.php' method='post' name='myForm' onsubmit='return(validate());'><span id='valConf'></span><br><!--Validation message if Name, Email, Or Phone are empty--><label for='name' class='form'>Name:</label><br><input type='text' name='name' size='40' class='form'/><br><label for='email' class='form'>Email:</label><br><input type='text' name='email' size='40' class='form' /><br><label for='phone' class='form'>Phone(###-###-####):</label><br><input type='text' name='phone' size='40' class='form' /><br><label for='comments' class='form'>Comments:</label><br><textarea type='text' name='comments' rows='5' cols='40' class='form'></textarea><br><input type='submit' name='send' value='Submit' nclick='validate()'><input type='reset' name='reset' value='Reset' onclick='resetForm()'></form></div>");	
			return this;
		}
	});

	return ContactView; 

});