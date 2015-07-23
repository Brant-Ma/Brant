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

// 函数：生成占位元素
function holdPlace(){
	// 创建图片占位
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.gif");
	placeholder.setAttribute("alt","my image gallery");
	// 创建图片描述
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var text=document.createTextNode("Choose an image.");
	description.appendChild(text);
	// 将占位和描述插入到文档
	//document.getElementsByTagName("body")[0].appendChild(placeholder);
	//document.getElementsByTagName("body")[0].appendChild(description);
	var gallery=document.getElementById("gallery");
	gallery.parentNode.insertBefore(placeholder,gallery);
	insertAfter(description,placeholder);
}

// 函数：处理点击事件
function clickLink(){
	var gallery=document.getElementById("gallery");
	var links=gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onClick=function(){
			return showPicture(this)?false:true;
		}
	}
}

// 函数：实现切换效果
function showPicture(which){
	// 图片切换
	if(!document.getElementById("placeholder"))return false;
	var placeholder=document.getElementById("placeholder");
	var source=which.getAttribute("src");
	placeholder.setAttribute("src",source);
	// 描述切换
	if(document.getElementById("description")){
	var description=document.getElementById("description");
	var text=which.getAttribute("title")?which.getAttribute("title"):"";
	description.firstChild.nodeValue=text;
	}
	return true;
}

// 调用函数实现图片切换
addLoadEvent(holdPlace);
addLoadEvent(clickLink);
