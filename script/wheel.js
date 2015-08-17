// bug：切换前的初次进入为空白页，url切换时不变
// 归档页面的部分内容显示效果
function showArchive(sectionId) {
	var article=document.getElementsByTagName("article")[0];
	var sections=article.getElementsByTagName("section");
	for (var i = 0; i < sections.length; i++) {
		var id=sections[i].getAttribute("id");
		if (id!=sectionId) {
			sections[i].style.display="none";
		} else {
			sections[i].style.display="block";
		}
	}
}
function matchArchive() {
	var header=document.getElementsByTagName("header")[0];
	var nav=header.getElementsByTagName("nav")[0];
	var links=nav.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		var match=links[i].getAttribute("href").split("#")[1];
		if (!document.getElementById(match)) continue;
		document.getElementById(match).style.display="none";
		// 将局部变量设为全局属性
		links[i].target=match;
		links[i].onclick=function() {
			showArchive(this.target);
			return false;
		}
	}
}
addLoadEvent(matchArchive);

// --------------------------------------------------------------------small wheels-------------------------------------------------------------------------------------

// 轮子：新增加载事件
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;		
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

// 轮子：向后插入节点
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

// 轮子：追加元素的类
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		newClassName=element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className=newClassName;
	}
}

// 轮子：定时移动元素
function moveElement(elementID, x_final, y_final, interval){
	var element=document.getElementById(elementID);
	if(element.movement) clearTimeout(element.movement);
	var distance=0;
	if(!element.style.left) element.style.left="0px";
	if(!element.style.top) element.style.top="0px";
	var x=parseInt(element.style.left);
	var y=parseInt(element.style.top);
	if(x==x_final&&y==y_final) return true;
	if(x<x_final){
		distance=Math.ceil((x_final-x)/10);
		x=x+distance;
	} 
	if(x>x_final){
		distance=Math.ceil((x-x_final)/10);
		x=x-distance;
	} 
	if(y<y_final){
		distance=Math.ceil((y_final-y)/10);
		y=y+distance;
	} 
	if(y>y_final){
		distance=Math.ceil((y-y_final)/10);
		y=y-distance;
	} 
	element.style.left=x+"px";
	element.style.top=y+"px";
	var temp="moveElement"+"('"+elementID+"',"+x_final+","+y_final+","+interval+")";
	element.movement=setTimeout(temp,interval);
}

// 轮子：范围随机取值
function selectFrom(lowerValue, upperValue){
	var choices=upperValue-lowerValue+1;
	return Math.floor(Math.random()*choices+lowerValue);
}