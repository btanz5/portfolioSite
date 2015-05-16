define(["jquery"], function($){

	/*=========
			Basic jQuery for page UX enhancements 
							=========*/
	$(function() {
		/*On mouse over of "social media" in the greeting paragraph
			the social media links will be highlighted with their :hover color*/
		$(".socialHighlight").mouseover(function(){
			$(".github").addClass("git");
			$(".linkedin").addClass("link");
			$(".facebook").addClass("face");
			$(".googleplus").addClass("google");
		});

		/*On mouse out of "social media" in the greeting paragraph
			the social media links will go back to their orginal state*/	
			$(".socialHighlight").mouseout(function(){
			$(".github").removeClass("git");
			$(".linkedin").removeClass("link");
			$(".facebook").removeClass("face");
			$(".googleplus").removeClass("google");
		});
		
		//Page links changes font size on mouse over.
		$(".siteNavItems").mouseover( function() { 
			$(this).css({fontSize : "2em"});
		});
		
		//Page links changes font size on mouse out.
		$(".siteNavItems").mouseout( function() { 
			$(this).css({fontSize : "1.5em"});
		});
			
		//Return to homepage link font size changes on mouse over.
		$(".returnLink").mouseover( function() { 
			$(this).css({fontSize : "large"});
		});
		
		//Return to homepage link font size changes back on mouse out.
		$(".returnLink").mouseout( function() { 
			$(this).css({fontSize : "medium"});
		});

		//Hover over "contact form" in intro paragraph, "contact" link 
		//fontSize will change.
		$(".contactHighlight").mouseover( function() { 
			$("#contact").css({fontSize : "2em"});
		});
		
		//Hover out "contact form" in intro paragraph, "contact" link 
		//fontSize will change.
		$(".contactHighlight").mouseout( function() { 
			$("#contact").css({fontSize : "1.5em"});
		});
		
	});
});