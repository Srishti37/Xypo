var sideNav = document.getElementById("side-nav");
var menuBtn = document.getElementById("menuBtn");

sideNav.style.right ="-250px";
menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
    }else{
        sideNav.style.right = "-250px";
    }
}

// scroll 

var scroll = new SmoothScroll('a[href*="#"]');