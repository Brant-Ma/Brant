//用于wallpaper页面
//外部引用此JS会无法执行，需后期确认原因
function showPic(chooseThumb){
	var source=chooseThumb.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text=chooseThumb.getAttribute("title");
	var description=document.getElementById("description");
	description.firstChild.nodeValue=text;
}	
