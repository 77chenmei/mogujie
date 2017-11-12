!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        }; 
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
}(document, window));
//账户登录界面的功能
$('.btn2').bind('click',function(){
	if($('.userinp1').val()==''){
		$('.warn').show();
		$('.warn').empty();
		$('.warn').html('请输入用户/邮箱/手机号码');
		time($('.warn'));//调用计时器函数
		return;
	}else if($('.userinp2').val() == ''){
		$('.warn').show();
		$('.warn').empty();
		$('.warn').html('密码不能为空');
		time($('.warn'));//调用计时器函数
		return;
	}else if($('.userinp1').val()=='ccmm'&& $('.userinp2').val()=='123123'){
		self.location = './index.html';
	}
})
//账户框绑定属性，监听文本框属性改变事件
$('.passinp1,.userinp1,.userinp2').bind('input propertychange', function() {
	//console.log($(this).val())
	if($(this).val() == ''){
		$(this).next().hide();//值为空，X隐藏
	}else {
		$(this).next().show();//值不为空时，X出现
	}
});
//点击关闭input中内容消失
$('.uclose1').click(function(){
	$('.userinp1').val('');
	$(this).hide();
})
//点击关闭input中内容消失
$('.uclose2').click(function(){
	$('.userinp2').val('');
	$(this).hide();
})
//点击返回到登录界面
$('.top i').click(function(){
	self.location = 'login.html';
})
function time(a){
	setTimeout(function(){
		a.hide();
	},2000);
}
