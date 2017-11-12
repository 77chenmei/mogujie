//判断手机号码是否输入正确
var pattern = /^[1]\d{10}$/;
//页面加载
$(document).ready(function(){
	//点击顶部的<符号，进入蘑菇街
	$('.top i').click(function(){
		self.location ='./login.html';
	})
	//点击账户登录进入账户登录界面
	$('.namer').click(function(){
		self.location ='./username.html';	
	})
	//点击免密登录进入免密登录界面
	$('.without').click(function(){
		self.location = './withoutCode.html';
	})
	//点击QQ登录，进入QQ网页的登录
	$('.cir').click(function(){
		self.location = 'https://graph.qq.com/oauth/show?which=Login&display=pc&scope=all&display=pc&response_type=code&redirect_uri=http%3A%2F%2Fwww.mogujie.com%2Fuser%2Fthirdtransfer%3Fthird%3Dqq%26platform%3Dpc%26ptp%3Dm1.DCjmLb.0.0.CfErpQX&state=TAS19mmp2slfjuk&client_id=201293&redirect_url=https%3A%2F%2Fh5.mogujie.com%2Fpersonal%2Fpersonal.html%3Fptp%3Dm1.4XW5j.0.0.KVsyXXp&ptp=m1.DCjmLb.0.0.CfErpQX';
	})
	//input框绑定监听属性值改变事件
	$('#telp input').bind('input propertychange',function(){
		//input值判断
		if($(this).val() == ''){
			//input为空，x隐藏
			$('#telp i').hide();
		}else{
			//input不为空，x出现
			$('#telp i').show();
		}
	})
	//点击input框后面的X
	$('#telp i').click(function(){
		//input值为空
		$('#telp input').val('');
		//X隐藏
		$(this).hide();
	})
	//点击一键注册
	$('.btn').click(function(){
		//判断手机号码输入
		if($('#telp input').val()==''){
			//手机号码输入不符合规范，显示提示
			$('#telp h5').html('手机号码不能为空');
			$('#telp h5').css({color:'#FF1877'});
		}else if((pattern.test($('#telp input').val()))==false){
			//手机号码输入不符合规范，显示提示
			$('#telp h5').html('手机号码有误');
			$('#telp h5').css({color:'#FF1877'});			
		}
		//设定定时器，提示消失，同时清空input值
		setTimeout(function(){
			$('#telp h5').html('你的手机号码是');
	        $('#telp h5').css({color:'#898989'});
	        $('#telp input').val('');
	        $('#telp i').hide();
		},1000);	
	})
})