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

var Usift = document.querySelector('.Usift');
//获取sift中的ul
var siftL = Usift.querySelectorAll('li');
//获取ul下所有的li标签
var com = document.querySelectorAll('.com');
//获取所有的com，即所有的与li标签对应的块标签

for(var i =0;i<siftL.length;i++){
	siftL[i].index = i;
	//当li标签触发点击事件时
	siftL[i].onclick = function(){
		var a = this.index;
		//对应的com出现
		for(var j =0;j<com.length;j++){
			if(a == j){
				com[j].style.display = 'block';
			}else{
				com[j].style.display = 'none';
			}
		}
	}
}