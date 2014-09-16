// JavaScript Document

/****************************************
Write a function that runs AFTER the page has 
finished loading.

Add a second function that will run each time the 
menu toggle image is clicked. When the function 
runs it checks to see if the nav area is displayed
(css style display:block). If it is not shown then 
the function will display it, else hide it.

Attach the second function to the menu toggle 
with the click event inside your first function.

Make sure you uncomment the CSS file
where it is setting the nav menu to 
display:none;
****************************************/

function toggleMenuVisibility() {
	var navButtonGroup = document.getElementsByClassName("mainnav");
	if (navButtonGroup.length>0)
	{
		if ((navButtonGroup[0].style.display=="")||(navButtonGroup[0].style.display=="none"))
		{
			navButtonGroup[0].style.display="inline";
		}
		else
		{
			navButtonGroup[0].style.display="none";
		}
	}
}


function myFunctionForPageLoading() {
	var toggleMenu=document.getElementsByClassName('menu-toggle');
	if (toggleMenu.length>0)
	{
		toggleMenu[0].addEventListener("click", toggleMenuVisibility);
	}
}



