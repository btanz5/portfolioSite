define(["jquery", "underscore", "backbone"], function($, _, Backbone){
	/*
	Backbone Contact View
		I understand that it is an unwritten rule of not combining JS and HTML.
			Until I determine a proper means of implementing this content, this works
			for me. Thanks - @bTanz5(5/2015)
					*/
	var ContactView = Backbone.View.extend({
		tagName: "div",
		className: "pageContent",
		id: "inquiryForm",

		events: {
			"click .submitBtn" : "submitClick",
			"click .resetBtn"  : "resetClick"
		},

		submitClick: function(){
			//form validation to confirm the form isn't empty 
			//Invaild entry responces.
			var nameConf = "Please provide your Name.";
			var emailConf = "Please provide your Email.";
			var phoneConf = "Please provide a valid Phone Number.";
			
			//Regular Expression validation.
			//validate that the user enters a 10 digit phone number
			var phoneNumber = /^\d{10}$/; 
		
		   if(document.myForm.name.value === "" ) {
		     document.getElementById("valConf").innerHTML = nameConf;
		     document.myForm.name.focus();
		     return false;
		   }
		   
		   if(document.myForm.email.value === "" ) {
		     document.getElementById("valConf").innerHTML = emailConf;
		     document.myForm.email.focus();
		     return false;
		   }
		   
		   	if(document.myForm.phone.value.match(phoneNumber) ) {
		     document.getElementById("valConf").innerHTML = phoneConf;
		     document.myForm.phone.focus();
		     return false;
		   }
		},

		resetClick: function(){
		//clears form and validation, also resets the focus to the name input box.	
		document.myForm.name.focus();
		document.getElementById("valConf").innerHTML = " ";
		},

		render: function(){
			this.$el.html("<div id='inquiryForm' class='pageContent'><form action='FormToEmail.php' method='post' name='myForm' onsubmit='return(validate());'><span id='valConf'></span><br><!--Validation message if Name, Email, Or Phone are empty--><label for='name' class='form'>Name:</label><br><input type='text' name='name' size='40' class='form'/><br><label for='email' class='form'>Email:</label><br><input type='text' name='email' size='40' class='form' /><br><label for='phone' class='form'>Phone(###-###-####):</label><br><input type='text' name='phone' size='40' class='form' /><br><label for='comments' class='form'>Comments:</label><br><textarea type='text' name='comments' rows='5' cols='40' class='form'></textarea><br><input type='submit' name='send' value='Submit' class='submitBtn'><input type='reset' name='reset' value='Reset' class='resetBtn'></form></div>");	
			return this;
		}
	});

	return ContactView; 

});