$(function(){
	
	$("#pop span").click(function(){
		$("#pop").hide();
	});
		//logo 변화/background
		$(".get a").mousedown(function(){
			$(this).parent(".get").toggleClass("change");
			$("#wrapper").toggleClass("back");
		});
	
		//등장인물 slide
		$("#casting .right").click(function(){
			var left=parseInt($("#cast").css("left"));//3268
			if(left<=-1614){
				return;
			}
			console.log(left);
			var move=left-538;
			$("#cast").animate({left:move},"slow");
		});
		$("#casting .left").click(function(){
			var left=parseInt($("#cast").css("left"));//3268
			if(left>=0){
				return;
			}
			var move=left+538;
			$("#cast").animate({left:move},"slow");
		});
		
		
	// 페이지씩 넘어가기
		var ht=$(window).height();
		$(".move").height(ht);
		
		$(window).on("resize",function(){
			var ht=$(window).height();
			$(".move").height(ht);		
		}); 
				
		$(".menu li").click(function(e){
			e.preventDefault();
			var ht=$(window).height();
			var n=$(this).index();
			n--;
				$("html, body").stop().animate({scrollTop:n*ht},1000);
		});
		
				$(".move").mousewheel(function(e,delta){
					if(delta>0){
						m=$(this).prev().offset().top;
						$("html, body").stop().animate({scrollTop:m});
						
					} else {
						m=$(this).next().offset().top;
						$("html, body").stop().animate({scrollTop:m});
					}
				});
			//마우스 휠 시 메뉴 백그라운드 변화
			$(window).on("scroll",function(){
				var ht=$(window).height();//변수 ht에 현재 브라우저의 넓이값 저장
				var scroll=$(window).scrollTop();//변수 scroll에 현재 문서가 스크롤된 거리 저장
				//scrollTop() - 현재 스크롤된 거리 값
				for(var i=0; i<6;i++){
					if(scroll>=ht*i && scroll<ht*(i+1)){
						$(".menu li").removeClass();
						$(".menu li").eq(i+1).addClass("on");
					};
				}
			});
				//menu 백그라운드
			$(".menu li").mousedown(function(){
				$(this).addClass("on");
				$(this).siblings().removeClass("on");
			});
			
			//갤러리 슬라이드(클릭시)
				var n=2;
				$("#slide").css({left:-1640});// 2장 바깥으로 !
				var imgCount=$("#slide li").last().index()+1; //13
				$("#gallery .right").click(function(){
					n++;
					if(n==12){
						$("#slide").css({left:0});
						n=1;
					}
					$("#slide").stop(true).animate({left:-820*n});
				});	
				
				$("#gallery .left").click(function(){
					n--;
					if(n==-1){
						$("#slide").css({left:-820*(imgCount-2)});
						n=10;
					}
					$("#slide").stop(true).animate({left:-820*n});
				});		
				
				//video
				$("#video h2:eq(1)").parent().next().children("span").show();
				$("#video h2:eq(1)").parent().prevAll().find("span").hide();
				$("#video h2:eq(1)").parent().next().addClass("indent");
				$(".vid2").show();
				$(".vid1").hide();
				$("#video h2:eq(1)").parent().prevAll().removeClass();
				$("#video h2:eq(1)").css({color:"#f2f2f2"});
				$("#video h2:eq(1)").parent().prevAll().children().css({color:"#b5b5b5"});
				$("#video h2").eq(0).click(function(){
					$(".vid1").show();
					$(".vid2").hide();
					$(this).parent().nextAll().children("span").hide();
					$(this).parent().nextAll().removeClass();
					$(this).parent().next().children("span").show();
					$(this).parent().next().addClass("indent");
					$(this).css({color:"#f2f2f2"});
					$(this).parent().nextAll().children().css({color:"#b5b5b5"});
					
				});
				$("#video h2").eq(1).click(function(){
					$(".vid2").show();
					$(".vid1").hide();
					$(this).parent().next().children("span").show();
					$(this).parent().prevAll().find("span").hide();
					$(this).parent().next().addClass("indent");
					$(this).parent().prevAll().removeClass();
					$(this).css({color:"#f2f2f2"});
					$(this).parent().prevAll().children().css({color:"#b5b5b5"});
				});
			
			//footer logo 클릭시 toggleClass
			$("#footer h6").mousedown(function(){
				$(".get").toggleClass("change");
				$("#wrapper").toggleClass("back");
		});
		
});