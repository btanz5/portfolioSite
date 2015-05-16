define(["jquery"], function($){
	/*=========
			Form Validation
							=========*/
	function validate() {
		//Invaild entry responces.
		var nameConf = "Please provide your Name.";
		var emailConf = "Please provide your Email.";
		var phoneConf = "Please provide a valid Phone Number.";
		
		//Regular Expression validation.
		var phoneNumber = /^\d{10}$/; //validate that the user enters a 10 digit phone number
	
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
	} //form validation to confirm the form isn't empty 
	
	function resetForm() {
		document.myForm.name.focus();
		document.getElementById("valConf").innerHTML = " ";
	}//clears form and validation, also resets the focus to the name input box.

});