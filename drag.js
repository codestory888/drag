function drag(id){
 	var Obj=document.getElementById(id);
 	Obj.onmousedown=function(ev){
 		disX=ev.pageX-Obj.offsetLeft;
 		disY=ev.pageY-Obj.offsetTop;
 		document.onmousemove=function(ev){
 			Obj.style.left =ev.pageX-disX+'px';
 			Obj.style.top =ev.pageY-disY+'px';
 		}
 		document.onmouseup=function(){
 			document.onmousemove=null;
 			document.onmouseup=null;
 		}
 	}
 	return false;
}