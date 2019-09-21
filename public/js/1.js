//搜索


//轮播图滚动需求分析
//(1)自动滚动(无缝滚动)--------过度--定时器--位移----点盒子对应改变-(改变当前样式)
//(2)手动滚动(无缝滚动)
//(3)手指松开滑距离够不够  ---够下一张--不够上一张
window.onload=function(){
			var banner=document.querySelector('.banner');
				//当前轮播图的宽度
				var width1=banner.offsetWidth;
				//第一个ul
				var imgBox=document.querySelector('.box1');
				//第一个ul的li
				var imgBox1=document.querySelectorAll('.box1 li')
				//(2)第二个ul
				var Box=document.querySelector('ul:last-child');
				//第二个li
				var Box1=document.querySelectorAll('ul:last-child li');
				var timer=null;
	//自动滑动效果
	var index=1;
	   var setPoint=function(){
		for(var i=0;i<Box1.length;i++)
			{
			Box1[i].classList.remove('now');
							
			}
		//				1-8 0-7
		     Box1[index-1].classList.add('now');
						
         }
	var banner=function(){
			 timer=setInterval(function(){
					index++;
				//	加过度
				imgBox.style.transition='all 0.2s';
//				imgBox.style.webkitTransition='all 0.2s';
				//位移
				imgBox.style.transform='translateX('+(-index*width1)+'px)';
				imgBox.style.webkitTransform='translateX('+(-index*width1)+'px)';
					
				},1000);
				//每过度一次执行一次
				imgBox.addEventListener('transitionend',function(){
//					alert();
						if(index>=9)
					{
						index=1;
//						清除过度
	                imgBox.style.transition='none';
		            imgBox.style.webkitTransition='none';
							//位移							
				    imgBox.style.transform='translateX('+(-index*width1)+'px)';
					imgBox.style.webkitTransform='translateX('+(-index*width1)+'px)';
						
					}
					else if(index<=0)
					{
						index=8;
						 imgBox.style.transition='none';
		               imgBox.style.webkitTransition='none';
							//位移	
				    imgBox.style.transform='translateX('+(-index*width1)+'px)';
					imgBox.style.webkitTransform='translateX('+(-index*width1)+'px)';
                   	}
		    setPoint();
				});
			
              }
	var touchBanner=function()
	{
		var isEnd=true;
		var  startX=0;
		var endX=0;
		var distance=0
  imgBox.addEventListener('touchstart',function(event){
  	//关闭定时器
  	        clearInterval(timer);
	startX=event.targetTouches[0].clientX;
//			console.log(startX);
				
  });
  ////////添加触屏移动事件-----------移动的时候模拟滑动跟着走的效果
  imgBox.addEventListener('touchmove',function(event){
  
  		endX=event.targetTouches[0].clientX;
  		distance=endX-startX;
//		console.log(distance);
  		imgBox.style.transition='none';
  		// 实现元素元素的偏移  left参数原始的坐标
			// 重点: 本次的滑动操作 应该基于之前轮播图已经偏移的距离
  	imgBox.style.transform='translateX('+(-index*width1+distance)+'px)';
	imgBox.style.webkitTransform='translateX('+(-index*width1+distance)+'px)';

  });


  //添加触屏结束事件
imgBox.addEventListener('touchend',function(event){
	/*松开手指，标记当前过渡效果正在执行-----看用户滑动的多少进行滑动*/
//	isEnd=false;
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
	imgBox.style.transform='translateX('+(-index*width1)+'px)';
		
	}
	else if(Math.abs(distance)>0)
	{//回弹效果
	imgBox.style.transition='all 0.2s';
	imgBox.style.transform='translateX('+(-index*width1)+'px)';
	}
            startX=0;
          endX=0;
        distance=0;
//     alert(isEnd);
        setPoint();
	
});
	}
touchBanner();		
banner();
Time();
}
//秒杀函数建立(1)先定义秒杀事件为毫秒---毫秒再进行转换为时分秒为0的时候结束 所用方法时定时器  wei
 function Time(){
 	 var span=document.querySelectorAll('.time_2 span');
// 	 console.log(time2);
 	var Minutes=3700;
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
