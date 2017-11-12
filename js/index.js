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
//当页面加载完成后实现：
window.onload = function(){
	//点击购物车图标
	$('.cart').click(function(){
		self.location = 'shop.html';
	})
	//index banner 轮播图
	var img = document.querySelector('.banner_img');
	//通过获取class名获取img标签
	var circle = document.querySelector('#circle')
	//通过获取圆点的父集ul来获取所有的li标签，即所有的小圆点
	var cir = circle.querySelectorAll('li');
	timer()
	//将定时器放入函数中，通过不停的调用函数，来触发计时器
	function timer(){
		// 定义全局变量，图片的名字从1开始；
		var i =1;
		time = setInterval(function(){
			if(i<=cir.length){
				//图片的数目和小圆点的数目是对等的，
				//圆点的索引是从0开始的，索引图片i对应的是圆点i-1；
				img.src = 'img/banner'+i+'.jpg';
				cir[i-1].style.background = 'red';
			}else{
				//当i大于圆点数目时，重新对i进行赋值
				i=1;
				img.src = 'img/banner'+i+'.jpg';
			}
			//判断小圆点的变色
			for(var j=0;j<cir.length;j++){
				if(j == i-1){
					//小圆点对应着图片的出现改变颜色
					cir[j].style.background ='red';
				}else{
					cir[j].style.background ='#fff';
				}
			}
			i++;//i自增，实现一个循环
		},1000)//图片轮播时间间隔1s
	}
	$('.bag').click(function(){
		self.location = 'details.html';
	})
}
