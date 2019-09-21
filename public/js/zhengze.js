function yanzheng(Id,regex)
{    
var id=document.querySelector(Id);
id.addEventListener('keyup',function(){
//	alert();
     var span=this.nextElementSibling;
        if(regex.test(this.value))
          {
             span.innerHTML='正确';
             span.style.color='green';
          }
         else{                    
         span.innerHTML='格式错误';
          span.style.color='red';

            }
});
}
