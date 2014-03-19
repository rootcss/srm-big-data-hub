$(document).ready(function() {
	
	$("#over").hide();
	$("#whatisbigdata").hide();
	$("#aboutus").hide();
	$("#contactus").hide();
	$("#recruitment").hide();

	$(".text3").click(function() {
		alert("Before filling up the form, Ensure that you have read: \n1. What is Club about? \n2. What is Big Data and related technologies?\n This will help us filtering out only interested people.\n\n (Related content is provided on the website)\n\n\nThank You :)");
		$("#over").fadeIn(100);
	});

	$("#close").click(function() {
		alert("Closing the window.\nMake sure that you have submitted.\n\nThank you :)");
		$("#over").fadeOut(100);
	});

	$("#liii0").click(function() {
		$("#aboutus").hide();
		$("#contactus").hide();
		$("#whatisbigdata").hide();
		$("#recruitment").hide();
		$("#temp").show();
	});
	$("#liii1").click(function() {
		$("#temp").hide();
		$("#aboutus").hide();
		$("#contactus").hide();
			$("#recruitment").hide();
		$("#whatisbigdata").show();
	});
	$("#liii2").click(function() {
		$("#temp").hide();
		$("#whatisbigdata").hide();
		$("#contactus").hide();
		$("#recruitment").hide();
		$("#aboutus").show();
	});
	$("#liii3").click(function() {
		$("#temp").hide();
		$("#whatisbigdata").hide();
		$("#aboutus").hide();
		$("#recruitment").hide();
		$("#contactus").show();
	});
	$("#liii4").click(function() {
		$("#temp").hide();
		$("#whatisbigdata").hide();
		$("#aboutus").hide();
		$("#contactus").hide();
		$("#recruitment").show();
	});

});