window.onload=function(){
	//导航条准备工作
var banner=document.querySelector('.banner');
var width1=document.body.offsetWidth;
//获取轮播图的li
var liWidth=document.querySelector('#li').offsetWidth;
console.log(liWidth);
var imgBox=document.querySelector('.box1');
var imgBox1=document.querySelectorAll('.box1 li')
var Box=document.querySelector('ul:last-child');
var Box1=document.querySelectorAll('ul:last-child li');
var banner1=document.querySelector('.banner');
//获取回顶部添加回顶部事件
var top1=document.querySelector('#top1');
console.log(top1);
//添加滑动事件
//注册页面获取并添加点击事件
var fast1=document.querySelector('#fast');
var timer=null;
var index=1;
	window.addEventListener('load', function() {
FastClick.attach(document.body);
}, false);
//注册页面
//fast1.addEventListener('click',function(){
//	
//})
//下面小圆点的动态设置的函数
var setPoint=function(){
for(var i=0;i<Box1.length;i++)
{
Box1[i].classList.remove('now');							
}
//	1-8 0-7
Box1[index-1].classList.add('now');						
}

//自动播放的函数
var banner=function(){
timer=setInterval(function(){
	 index++;
	//加过渡
	imgBox.style.transition='all 0.2s';
	imgBox.style.webkitTransition='all 0.2s';
	//平移
	imgBox.style.transform='translateX('+(-index*liWidth)+'px)';
	imgBox.style.webkitTransform='translateX('+(-index*liWidth)+'px)';},1000);
//ul过渡的时候添加过渡事件（当过渡的时候触发transitionend）判断index的值（0/9）
imgBox.addEventListener('transitionend',function(){
                 if(index>=9)
					{
						index=1;
//清除过渡效果使快速返回效果结束默认的第一张
	                imgBox.style.transition='none';
		            imgBox.style.webkitTransition='none';
							//位移							
				    imgBox.style.transform='translateX('+(-index*liWidth)+'px)';
					imgBox.style.webkitTransform='translateX('+(-index*liWidth)+'px)';
						
					}
					else if(index<=0)
					{
						index=8;
						imgBox.style.transition='none';
		               imgBox.style.webkitTransition='none';
							//位移	
				    imgBox.style.transform='translateX('+(-index*liWidth)+'px)';
					imgBox.style.webkitTransform='translateX('+(-index*liWidth)+'px)';
                   	}
		    setPoint();
				});
			
              }
	var touchBanner=function()
	{
		var  startX=0;
		var endX=0;
		var distance=0
  imgBox.addEventListener('touchstart',function(event){
  	        clearInterval(timer);
	startX=event.targetTouches[0].clientX;				
  });
  imgBox.addEventListener('touchmove',function(event){
  
  		endX=event.targetTouches[0].clientX;
  		distance=endX-startX;
  		imgBox.style.transition='none';
  	imgBox.style.transform='translateX('+(-index*liWidth+distance)+'px)';
	imgBox.style.webkitTransform='translateX('+(-index*liWidth+distance)+'px)';

  });


  //添加触屏结束事件
imgBox.addEventListener('touchend',function(event){
	if(Math.abs(distance)>100)
	{
		
		if(distance>0)
		{
			index--;
		}
		else{
			index++;
		}
		imgBox.style.transition='all 0.2s';
	imgBox.style.transform='translateX('+(-index*liWidth)+'px)';
		
	}
	else if(Math.abs(distance)>0)
	{//回弹效果
	imgBox.style.transition='all 0.2s';
	imgBox.style.transform='translateX('+(-index*liWidth)+'px)';
	}
            startX=0;
          endX=0;
        distance=0;
        setPoint();
	
	
});
	}
touchBanner();		
banner();
Time();
//Logo();
}
//秒杀函数建立(1)先定义秒杀事件为毫秒---毫秒再进行转换为时分秒为0的时候结束 所用方法时定时器  wei
 function Time(){
 	 var span=document.querySelectorAll('.time_2 span');
// 	 console.log(time2);
 	var Minutes=8800;
   	var time1=setInterval(function(){
   		--Minutes;
   		 var hourse=Math.floor(Minutes/3600);
   		 var minute=Math.floor(Minutes%3600/60);
   		 var second=(Minutes%60);
   		  span[0].innerHTML=Math.floor(hourse/10);
   		  span[1].innerHTML=Math.floor(hourse%10);
   		  span[3].innerHTML=Math.floor(minute/10);
   		  span[4].innerHTML=Math.floor(minute%10);
   		  span[6].innerHTML=Math.floor(second/10);
   		  span[7].innerHTML=Math.floor(second%10);
   		  if(Minutes<=0)
   		  {
   		  	clearInterval(time1);
   		  }
   	},1000)
 	
 }

