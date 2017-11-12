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
$(document).ready(function(){
	$('.sty_left').click(function(){
		self.location = 'username.html';
	})
	$('.sty_right').click(function(){
		self.location = 'withoutCode.html';
	})
})