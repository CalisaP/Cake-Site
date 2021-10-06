window .onload = function(){
    // For header hamburger menu; source: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger = document.querySelector(".hamburger");
    const closeIcon = document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");

    function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
    }
    hamburger.addEventListener("click", toggleMenu);


    menuItems.forEach( 
        function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
        }
    )

    // For header scroll movement; source: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    var  prevScrollPos= window.pageYOffset;
    window.onscroll = function(){
        var  currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos){
            document.getElementById("header").style.top = "0";
            document.getElementById("hamburgerMenu").style.top = ".4rem";

        } else {
            document.getElementById("header").style.top = "-60px";
            document.getElementById("hamburgerMenu").style.top = "-60px";
        }
        prevScrollPos = currentScrollPos;
    }
}
