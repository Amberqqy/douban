$(document).ready(function(){
	//加的效果
	$(".add").click(function(){
		var n=$(this).siblings(".text_box").val();
		console.log(n);
		var num=parseInt(n)+1;
		if(num==0){ return;}
		$(this).siblings(".text_box").val(num);
	});
	//减的效果
	$(".min").click(function(){
		var n=$(this).siblings(".text_box").val();
		var num=parseInt(n)-1;
		if(num==0){ return}
		$(this).siblings(".text_box").val(num);
	});
	boxbox = [];
	newbox = [];
	$(".cars-list>label").click(function() {
        var val= $(this).attr("class");
        if(val == 'labelId'){
            $(this).addClass("label-select").removeClass("labelId");
			var prices = $(this).parent().siblings().children("").children("span").text();
            boxbox.push(prices)
            var kadd = 0;
            boxbox.forEach(function(i){
                var lengha = i.length;
                bb = i.substr(1,lengha-1);
                kadd += Number(bb);
            })
			$(".select-show").children("b").text("￥"+kadd)
			$(".select-show").addClass("new-select");
			var but = $(".label-select");
     	    var butlength = but.length;
        	if(butlength !== 0){
	            $(".car-true").addClass("car-newtrue");
	     	}else {
                $(".car-true").removeClass("car-newtrue");
	     	}
            gaga()
        }else{
        	$(this).addClass("labelId").removeClass("label-select");
            $(".all-select>label").addClass("labelId").removeClass("label-select");
            var pricelian = $(this).parent().siblings().children("").children("span").text();
            console.log(pricelian)
            var kadd = 0;
            boxbox.forEach(function(i,index){
                console.log(i)
                if(i == pricelian){
                    boxbox.splice(index, 1);
                    var lengha = i.length;
                    bb = i.substr(1,lengha-1);
                    console.log(bb)
                }else{
                }
            })
            console.log(boxbox)
            var newbox = boxbox;
            var kjian = 0;
            newbox.forEach(function(k){
                var lengha = k.length;
                bq = k.substr(1,lengha-1);
                kjian += Number(bq);
            })
            $(".select-show").children("b").text("￥"+kjian)
            $(".select-show").addClass("new-select");
            var but = $(".label-select");
     	    var butlength = but.length;
            if(butlength !== 0){
	            $(".car-true").addClass("car-newtrue");
	     	}else {
                $(".car-true").removeClass("car-newtrue");
	     	}
        }
	})
	$(".all-select>label").click(function(){
		var val= $(".cars-list>label").attr("class");
        var valthis = $(".all-select>label").attr("class");
        if(valthis == 'labelId'){
            boxbox = [];
            $(".all-select>label").addClass("label-select").removeClass("labelId");
            $(".cars-list>label").addClass("label-select").removeClass("labelId");
            var but = $(".label-select");
     	    var butlength = but.length;
            console.log(butlength)
            if(butlength !== 0){
	            $(".car-true").addClass("car-newtrue");
	     	}else {
                $(".car-true").removeClass("car-newtrue");
	     	}
            var ko = $(".cars-content>span").text();
            var b = ko.split("￥");
            var mk = 0;
            b.forEach(function(l){
                boxbox.push("￥"+l);
                console.log(boxbox)
                mk += Number(l);
                $(".select-show").children("b").text("￥"+mk)
            })
            $(".select-show").addClass("new-select");
        }else {
        	$(".all-select>label").addClass("labelId").removeClass("label-select")
        	$(".cars-list>label").addClass("labelId").removeClass("label-select")
        	var but = $(".label-select");
     	    var butlength = but.length;
     	    console.log(butlength)
            if(butlength !== 0){
	            $(".car-true").addClass("car-newtrue");
	     	}else {
                $(".car-true").removeClass("car-newtrue");
	     	}
            $(".select-show").children("b").text("￥"+0);
            boxbox =[];
        }
	})
	$(".deleta").click(function(){
		console.log(111)
		$(this).parents(".cars-buy").addClass("haha");
		$(this).parents(".cars-buy").empty();
	})
    function gaga(){
        var valqq = $(".biubiu .label-select").length;
        var valqqlength = $(".biubiu").length;
        console.log(valqqlength)
        console.log(valqq)
        if(valqq == valqqlength){
            $(".all-select>label").addClass("label-select").removeClass("labelId");
        }else {
            
        }
    }
    gaga();
})