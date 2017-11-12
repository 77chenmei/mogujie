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
var btn1 = document.querySelector('.btn1');
console.log(btn1)
var pasp = document.querySelector('.passinp1');
var w1 = document.querySelector('.w1');
var w2 = document.querySelector('.w2');
var warn =document.querySelector('.warn');
//验证手机号码是否输入正确
var pattern1 = /^[1]\d{10}$/;
btn1.onclick = function(){
	//判断手机号是否为空，输入是否正确
	if(pasp.value ==''||(pattern1.test(pasp.value) == false)){
		//输入有误，出现警示框
		warn.style.display = 'block';
		warn.innerHTML = '请输入正确的手机号';
		time(warn);//调用计时器函数
		return;
	}
}
//点击返回到登录界面
$('.top i').click(function(){
	self.location = 'login.html';
})
function time(a){
	setTimeout(function(){
		a.style.display = 'none';
	},2000);
}
