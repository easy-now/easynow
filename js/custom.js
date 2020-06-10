$(function(){
	$("#logo1").click(function(){
		$("#pop").show();		
	});
	$("#pop span").click(function(){
		$("#pop").hide();
	});
	
	$("#main li a").mouseenter(function(){
		$(this).addClass("hover");
		$(".menu li a").removeClass("hover");
		$("#main li a").next().stop().slideDown(500);
		$("#mainBack").stop().slideDown(500);
	});
	
	$("#main li a").mouseleave(function(){
		$(this).removeClass("hover");
		$("#main li a").next().stop().slideUp(500);
		$("#mainBack").stop().slideUp(500);
	});
	$("#imgslide img").each(function(aa){
		$(this).css({top:aa*250});
	});
	setInterval(function(){
	$("#imgslide img").each(function(){
		var nowTop = parseInt($(this).css("top"));
		//console.log($(this).css("top"));
		var movePos = nowTop-250;
		$(this).animate({top:movePos},1000, function(){
			if(movePos<=-250){ 
				$(this).css("top",500);
			}
		});
	});
},3000);
$("#dimg li a").mouseenter(function(){
		var aa= $(this).parent().index();
		console.log(aa);
		$(this).find("span").hide();
		$(this).css({
			width:285,
			height:380,
			"margin-top":"134px",
			backgroundImage:"url('img/doorall.PNG')",
			backgroundPosition:"left top",
			transform:"skewY(-20deg)",
		});
		$("#ho li").eq(aa).fadeIn("fast");
		if($(this).parent().index() ==0){$(this).css({"margin-top":16});}
		if($(this).parent().index() ==1 || $(this).parent().index() ==3 || $(this).parent().index() ==5){$(this).css({
			"margin-top":"-240px",
			"margin-right":"-15px",
			backgroundImage:"url('img/doorall2.png')",
			backgroundPosition:"right top",
			transform:"skewY(20deg)"});
		}
		$(this).parent().children("p").css({"margin-top":"-41px"});
		if($(this).parent().index() ==2 || $(this).parent().index() ==4){$(this).parent().children("p").css({"margin-top":"-39px"});}
		if($(this).parent().index() ==1 || $(this).parent().index() ==3 || $(this).parent().index() ==5){$(this).parent().children("p").css({"margin-top":"95px", "margin-right":"-188px"});}
	});
	$("#dimg li a").mouseleave(function(){
		var aa= $(this).parent().index();
		$("#ho li").eq(aa).hide();
		$(this).find("span").show();
		$(this).css({
			width:165,
			height:345,
			"margin-top":160,
			backgroundImage:"url('img/doorall.png')",
			backgroundPosition:"left bottom",
			transform:"skewY(-20deg)",
		});
		if($(this).parent().index() ==0){$(this).css({"margin-top":40});}
		if($(this).parent().index() ==1 || $(this).parent().index() ==3 || $(this).parent().index() ==5){$(this).css({"margin-top":"-220px","margin-right":"-5px",backgroundImage:"url('img/doorall2.png')",
			backgroundPosition:"right bottom",
			transform:"skewY(20deg)"});}
		$(this).parent().children("p").css({"margin-top":"-30px",});
		if($(this).parent().index() ==1 || $(this).parent().index() ==3 || $(this).parent().index() ==5){$(this).parent().children("p").css({"margin-top":"95px", "margin-right":"-80px"});}
	});
});