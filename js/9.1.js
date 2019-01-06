//库存
function add(){
	var input=document.getElementById("input");
	if(input.value!=5){
		input.value++;
	}
	else{
		input.value=5;
	}
}
function minus(){
	var input=document.getElementById("input");
	if(input.value!=1){
		input.value--;
	}
	else{
		input.value=1;
	}
}

//选择大小
function choose(){
	var s5=document.getElementById("s5");
	var sp1=document.getElementById("sp1");
	var ss5=document.getElementById("ss5");
	var sp=document.getElementById("sp");
	s5.setAttribute("style","border:1px solid #fe0d4a");
	sp1.style.display="block";
	sp.style.display="none";
	ss5.style.border="none";
}
function choose1(){
	var s5=document.getElementById("s5");
	var sp1=document.getElementById("sp1");
	var ss5=document.getElementById("ss5");
	var sp=document.getElementById("sp");
	ss5.setAttribute("style","border:1px solid #fe0d4a");
	sp.style.display="block";
	sp1.style.display="none";
	s5.style.border="none";
}

//加入购物车
function buy(){
	var box6=document.getElementById("box6");
	box6.style.display = "block";
}
function liwen(){
	var box6=document.getElementById("box6");
	box6.style.display = "none";
}
//选择图片
function found(){
	var dimg1=document.getElementById("dimg1");
	var cimg1=document.getElementById("cimg1");
	dimg1.style.border="2px solid #ff9003";
	cimg.src="img/pp0.jpeg";
	// cimg1.src="img/pp0.jpeg";
	var dimg2=document.getElementById("dimg2");
	dimg2.style.border="none";
}

function found3(){
	var dimg2=document.getElementById("dimg2");
	var cimg=document.getElementById("cimg");
	var cimg1=document.getElementById("cimg1");
	dimg2.style.border="2px solid #ff9003";
	cimg.src="img/pp1.jpeg";
	// cimg1.src="img/pp1.jpeg";
	var dimg1=document.getElementById("dimg1");
	dimg1.style.border="none";
}
