$(document).ready(function(){
	$(".piao-tab>div>p").click(function(){
		$(this).addClass("newtab-set").siblings().removeClass("newtab-set")
		var index = $(this).index();
		$(".piaotab-list>div").eq(index).show().siblings().hide();
	})
	$(".click-coupon").click(function(){
		$(".box-foot").hide();
		$(".ppiao").addClass("coupon-new");
		$(".ppiao").slideDown();
	})
	$(".click-piao").click(function(){
		$(".box-foot").hide();
		$(".labao").addClass("coupon-new");
		$(".labao").slideDown();
	})
	$(".piao-none").click(function(){
		$(".labao").slideUp();
		$(".box-foot").show();
	})
	$(".coupon-none").click(function(){
		$(".ppiao").slideUp();
		$(".box-foot").hide();
	})
	$(".ways-list").click(function(){
		$(this).addClass("one-way").siblings().removeClass("one-way")
	})
	$(".id-address").click(function(){
		$(".box-foot").hide();
		$(".new-ha").addClass("new-hanew");
		$(".new-ha").slideDown();
	})
	$(".address").click(function(){
		$(".box-foot").show();
		$(".new-ha").slideUp();
	})
	$(".address-add").click(function(){
		$(".click-box").slideDown();
	})
	$(".add-head>a").click(function(){
		$(".click-box").hide();
	})
})