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

var bImg = document.querySelector('.banner_img');
var num = document.querySelector('.num');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var banner = document.querySelector('.banner');
var time;
timer();
var i = 1;
function timer(){	
	time = setInterval(function(){	
		change();
	},1000)
}
right.onclick = function(){
	change();
}
banner.addEventListener('touchstart',function(){
	clearInterval(time);
},false)
banner.addEventListener('touchend',function(){
	timer()
},false)
left.onclick = function(){
	i--;
	if(i>=1){
		bImg.src = './img/details/'+ i +'.jpg';
		num.innerHTML = i;
	}else{
		i = 5;
		bImg.src = './img/details/'+ i +'.jpg';
		num.innerHTML = i;
	}
}
function change(){
	i++;
	if(i <= 5){
		bImg.src = './img/details/'+ i +'.jpg';
		num.innerHTML = i;
	}else{
		i = 1;
		bImg.src = './img/details/'+ i +'.jpg';
		num.innerHTML = i;
	}
}
