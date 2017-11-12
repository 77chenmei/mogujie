//页面加载完成
$(document).ready(function(){
	//点击关闭按钮，关闭遮罩层
	$('.close').click(function(){
		$('.cover').hide();
	})
	//点击我要免单，跳转首页
	$('.free').click(function(){
		self.location = 'list.html';
	})
	//获取购物车中有多少商品
	var a = $('.boxMain').length;
	//购物车总数目
	$('.top b').html(a);
	//点击商品 选中 或 取消
	$("input[class^='ch']").on('click',function(){
		// console.log($(this).parent().parent().siblings('.boxTit').find('input').is(':checked'))
		if($(this).is(':checked')){
			$(this).css({'background-position':'0 0'});
			$(this).attr('checked','checked');	
		}else {
			$(this).css({'background-position':'0 100%'});
			$(this).removeAttr('checked');
			console.log($(this).is(':checked'))
		}
		//获取选中的商品总数
		getGoodsChecked();
		//店铺名称 选中 取消
		shopNameChecked(this);
	})
	//点击店铺  选中 或 取消 
	$('.boxTit input').on('click',function(){ 
		console.log($(this).is(':checked'))
		if($(this).is(':checked')){
			$(this).css({'background-position':'0 0'});
			$(this).attr('checked','checked');
			$(this).parent().parent().siblings('.boxMain').find('input').css({'background-position':'0 0'});
			$(this).parent().parent().siblings('.boxMain').find('input').attr('checked','checked');
		}else{
			$(this).css({'background-position':'0 100%'});
			$(this).removeAttr('checked');
			$(this).parent().parent().siblings('.boxMain').find('input').css({'background-position':'0 100%'});
			$(this).parent().parent().siblings('.boxMain').find('input').removeAttr('checked');
			//console.log($(this).parent().parent().siblings('.boxMain').find('input').is(':checked'))
		}
		goodsChecked(this);
		getGoodsChecked();
	})
	//点击全部 选中 或 取消
	$('.checktotal').click(function(){
		if($(this).is(':checked')){
			$(this).css({'background-position':'0 0'});
			$('.radiobox input').css({'background-position':'0 0'});
			$('.radiobox input').attr('checked','checked');
		}else{
			$('.radiobox input').css({'background-position':'0 100%'});
			$(this).css({'background-position':'0 100%'})
			$('.radiobox input').removeAttr('checked');
		}
		getGoodsChecked();
	})
	//选中商品的总数
	function getGoodsChecked(){
		$(".allnum").html($(".boxMain input:checked").length);
	}
	//店铺名称 选中 与 取消
	function shopNameChecked(that){
    	if($(that).is(':checked')){
    		$(that).parent().parent().siblings('.boxTit').find('input').css({'background-position':'0 0'});
    		$(that).parent().parent().siblings('.boxTit').find('input').attr('checked','checked');
    	}else {
    		var b = $(that).parent().parent().parent().find('.boxMain input:checked').length;
    		if(b == 0){
    			$(that).parent().parent().siblings('.boxTit').find('input').css({'background-position':'0 100%'});
    			$(that).parent().parent().siblings('.boxTit').find('input').removeAttr('checked');
    		}
    	}
	}
	//商品 选中  或 取消
	function goodsChecked(that){
		if($(that).is(':checked')){
    		$(that).parent().parent().siblings('.boxMain').find('input').css({'background-position':'0 0'});
    		$(that).parent().parent().siblings('.boxMain').find('input').attr('checked','checked');
    	}else {
			$(that).parent().parent().siblings('.boxMain').find('input').css({'background-position':'0 100%'});
			$(that).parent().parent().siblings('.boxMain').find('input').removeAttr('checked');	
    	}
	}
	//点击跳转到店铺
	$('.big').click(function(){
		self.location = 'details.html'
	})
	$('.top i').click(function(){
		self.location = 'details.html';
	})
})