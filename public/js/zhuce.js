window.onload=function(){
	//分析：js功能右上点击显示信息
	
	var show1=document.querySelector('#show');
//	显示的内容
var xiala1=document.querySelector('.xiala');
//密码显示js
	var eye1=document.querySelector('.eye');
	var eyei=eye1.querySelector('i');
//	忧伤首页
     var lii=document.querySelector('#lii1');
//   console.log(lii);
//
//	获取密码栏
var pwd1=document.querySelector('#pwd');
	console.log(show1);
	console.log(xiala1);
	console.log(eye1);
	console.log(eyei);
	console.log(pwd1);
	//让移动端可以有点击事件不延迟
	window.addEventListener('load', function() {
FastClick.attach(document.body);
}, false);
show1.addEventListener('click',function(){
//	alert();
	if(xiala1.style.display=='none'){
		xiala1.style.display='block';
	}
	else{
		xiala1.style.display='none';
	}
});
eye1.addEventListener('click',function(){
	if(eyei.style.left=='0px')
	{
	eyei.style.left=25+'px';
	eye1.style.background='red';
	pwd1.type='text';
	}
	else{
		eyei.style.left=0+'px';
		eye1.style.background='#DDDDDD';
		pwd1.type='password';
	}
})
//验证码获取动画
//(1)获取验证码的标签设置倒计时用定时器
var btn1=document.querySelector('.btn');
//console.log(btn1);
btn1.addEventListener('click',function(){
//	alert();
		var i=10;
		
			btn1.style.background='#ccc';
			btn1.innerHTML='倒计时'+--i;
			var time=setInterval(function(){
				if(i>0)
				{
				btn1.innerHTML='倒计时'+i;
				i--;
				}
				else{
					clearInterval(time);
					btn1.innerHTML='获取验证码'
					btn1.style.background='red';
				}
			},1000)

		
});
//console.log(document.querySelector('#zhuce1'));
//正则验证
document.querySelector('#zhuce2').addEventListener('keyup',function(){
//	alert();
 var span=this.nextElementSibling;
if(this.value=='pp6L')
{
	 span.innerHTML='正确';
             span.style.color='green';
}
else{
	  span.innerHTML='格式错误';
          span.style.color='red';
}
});
//正则验证手机号
//^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$

yanzheng('#zhuce1',/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/);
//验证码验证
//^[0-9]*$
yanzheng('#zhuce3',/^[0-9]{4}$/);
//密码验证^[a-zA-Z][a-zA-Z0-9_]{4,15}$
yanzheng('#pwd',/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/);
}
