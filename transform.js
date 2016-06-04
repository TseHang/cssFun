
//實作Jquery選擇器，只能選 #id 和 .className 和 tag <只支援放一個 ， 不支援很多個ＱＱ>;
/*
var $ = function (input){
	if (input.substring(0,1) == "#")
		return document.getElementById(input.substr(1));
	else if (input.substring(0,1) == ".")
		return document.getElementsByClassName(input.substr(1));
	else
		return document.getElementsByTagName(input);
}
*/
////////////////////////////////////////////

var myX ;
var myY ;
var img ;
var img_src ;

$('.content').click(function(e){

	//找到選到content的<img>
	img = $(this).children('img');
	width = 1.5*img.width() ; //圖片因為transform 變1.5倍，現在的width才為現在的圖片尺寸

	//算第一次 圈圈位置 跟 backgroundPosition
	myX = e.pageX;
	myY = e.pageY;
	$('#magic_big').css({
		top:(myY-75),
		left:(myX+20),
	});

	//取得圖片src
	img_src = img.attr('src');

	//更換magic_img 裡面的圖片
	$('#magic_big').css({
		'background-image':'url('+img_src+')',
		'background-size': 2*width+'px auto', //等於比原圖（transform之前)放大3倍
	});

	// 顯示/消失
	$('#magic_big').toggleClass("magic_big_none");

	//取得各content 的 offset偏移
	offset = img.offset();
	x_offset = offset.left+6 ;
	y_offset = offset.top+4;

	//算第一次
	x = -2*(myX - x_offset)+75;
	y = -2*(myY - y_offset)+75;
	$('#magic_big').css('backgroundPosition', x+'px '+y+'px');

	$(this).mousemove(function(e){
		myX = e.pageX;
		myY = e.pageY;

		boxY = myY-75 ;
		boxX = myX+25 ;
		
		if ((boxX+150) >= $('body').width())
			boxX = myX - 25 - 200 ;

		$('#magic_big').css({
			top:boxY,
			left:boxX
		});

		//加75是因為 扣完後圖會在左上角，要+75會變置中
		x = -2*(myX - x_offset)+50;
		y = -2*(myY - y_offset)+50;

		$('#magic_big').css('backgroundPosition', x+'px '+y+'px');
	});

	img.mouseleave(function(e){
		$('#magic_big').addClass("magic_big_none");
	})

	//$('this > img').css("display","none");
});
