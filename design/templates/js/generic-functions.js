window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);	
})

function togglePopup(){
	document.getElementById("registration-popup").classList.toggle("active");
}
function togglePopu(){
	document.getElementById("login-popup").classList.toggle("active");
}


//toggle menu
var menu = document.getElementById("menu-list");
menu.style.maxHeight = "0px";

function toggleMenu(){
	if(menu.style.maxHeight == "0px")
		{
			menu.style.maxHeight = "350px";
		}
	else
		{
			menu.style.maxHeight = "0px"; 
		}
}
	