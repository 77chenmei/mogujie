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

//banner 轮播图
var bImg = document.querySelector('.banner_img');
//获取img标签
var num = document.querySelector('.num');
//获取banner上的数字
var left = document.querySelector('.left');
//banner左边的块
var right = document.querySelector('.right');
//banner右边的块
var banner = document.querySelector('.banner');
//获取banner
var time;
//定义全局变量，用于设定定时器
timer();//调用函数，让定时器不停的运作
var i = 1;//定义全局变量
//设定定时器函数
function timer(){	
	time = setInterval(function(){	
		change();//调用函数
	},1000)
}
//当右边的块被点击，触发函数
right.onclick = function(){
	change();
}
//事件监听
banner.addEventListener('touchstart',function(){
	clearInterval(time);
	//banner发生触摸事件，定时器停止
},false)
banner.addEventListener('touchend',function(){
	timer()
	//触摸事件结束，定时器启动
},false)
//当左边的块被点击，触发函数
left.onclick = function(){
	i--;//每点击一次图片倒退一张
	if(i>=1){
		bImg.src = './img/details/'+ i +'.jpg';
		num.innerHTML = i;
		//同时banner中的num值也在发生改变
	}else{
		i = 5;
		bImg.src = './img/details/'+ i +'.jpg';
		num.innerHTML = i;
	}
}
//图片轮播或者点击右侧均调用该函数
function change(){
	i++;//图片播放下一张
	if(i <= 5){
		bImg.src = './img/details/'+ i +'.jpg';
		num.innerHTML = i;
		//同时banner中的num值也在发生改变
	}else{
		i = 1;
		bImg.src = './img/details/'+ i +'.jpg';
		num.innerHTML = i;
	}
}
//右侧导航
//获取导航按钮
$(document).ready(function(){
	var ishiden = true;
	$('.shortcut').click(function(){
		if(ishiden){
			$('.shortcutN').show();
			$('.shortcover').show();
			$('.cover').show();
			ishiden = false;
		}else{
			$('.shortcutN').hide();
			$('.cover').hide();
			$('.shortcover').hide();
			ishiden = true;
		}	
		console.log(ishiden)
	})
	//点击立即购买跳转
	$('.shop').click(function(){
		self.location = 'shop.html';
	})
	//点击购物车
	$('.shopcar').click(function(){
		$('.shopcover').show();
		$('.cover').show();
	})
	$('.gcount button').click(function(){
		$('.shopcover').hide();
		$('.cover').hide();
	})
	//点击购物车中的color
	$('.color span').click(function(){
		$(this).css({color:'#ed4566',border:'num(1rem) solid #ed4566'})
	})
	//点击首页跳转index
	$('.index').click(function(){
		self.location = 'index.html';
	})
	//点击购物车跳转到购物车
	$('.shopp').click(function(){
		self.location = 'shop.html';
	})
	$('.buy').click(function(){
		self.location = 'login.html';
	})
})
 

//页面滚动到nav固定在页面中不在滚动
window.onload = function(){
	$('.toTop').hide();
	var navH = document.querySelector('.nav');
	//获取nav
	var H = 0;
	//获取navH到顶部的距离
    while(navH){
    	H += navH.offsetTop;//获取navH距离父集的顶部的距离；
    	navH =  navH.offsetParent;
    }
	//offsetParent的结果为离自身元素最近的经过定位的父级元素，当搜索到body或者html时，返回为null
  	//元素自身有fixed定位，offsetParent的结果为null
  	//元素自身无fixed定位，且父级元素都未经过定位，offsetParent的结果为<body>
  	//元素自身无fixed定位，且父级元素存在经过定位的元素，offsetParent的结果为离自身元素最近的经过定位的父级元素
  	//<body>元素的parentNode是null
    //获取sale2距离整个body顶部的距离
  	var toH = $('.sale2').offset().top;
  	var coatH = $('#coat').offset().top;
  	var comParH = $('#comPar').offset().top; 
  	var recoH = $('#reco').offset().top; 
    //当窗口发生滚动的时候
    console.log(toH)
	window.onscroll = function(){
		//窗口滚动的距离(兼容) 
   		var s = document.body.scrollTop || document.documentElement.scrollTop;
   		//比较窗口滚动的距离和navH距离顶部的距离
        if(s>H) {
	       $('.nav').css({'position':'fixed','top':'-1px'})
            //滚动的距离大于navH距离顶部的距离时，navH此时需固定定位，一直固定在顶部  
        } 
        else{
        	$('.nav').css({'position':'static'})
        }
        if(s > toH){
        	//页面滚动超过这个距离是，totop出现
        	$('.toTop').show();
        }else{
        	//否则隐藏
        	$('.toTop').hide();
        }
        if(s>coatH && s<comParH){
        	$('.a1').css({color:'#ff5577','border-bottom':'num(1rem) solid #ff5577'})		
        }else{
        	$('.a1').css({color:'#000','border-bottom':'none'})	
        }
        if(s>comParH && s<recoH){
        	$('.a2').css({color:'#ff5577','border-bottom':'num(1rem) solid #ff5577'})		
        }else{
        	$('.a2').css({color:'#000','border-bottom':'none'})	
        }
        if(s>recoH){
        	$('.a3').css({color:'#ff5577','border-bottom':'num(1rem) solid #ff5577'})		
        }else{
        	$('.a3').css({color:'#000','border-bottom':'none'})	
        }
	}
}