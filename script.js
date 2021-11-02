window.onload = function(){
    // For header hamburger menu; source: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
    
    //Selects the relevant elements
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger = document.querySelector(".hamburger");
    const cakeIcon = document.querySelector(".cake-figure")
    const closeIcon = document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");

    function toggleMenu() {
    if (menu.classList.contains("showMenu")) { // If the menu is showing...
        menu.classList.remove("showMenu"); // ... hide the menu,
        closeIcon.style.display = "none"; // ... hide the x,
        //menuIcon.style.display = "block"; // ... show the hamburger icon.
        cakeIcon.style.display = "block"; // ... show the cake icon.
    } else { // Otherwise, if the menu is hidden...
        menu.classList.add("showMenu");  // ... show the menu,
        closeIcon.style.display = "block"; // ... show the x icon,
        //menuIcon.style.display = "none"; // ... hide the hamburger icon.
        cakeIcon.style.display = "none"; //v ... hide the cake icon.
    }
    }
    hamburger.addEventListener("click", toggleMenu); // Links the toggleMenu function to the click event.

    // Executes the toggleMenu function when any menu link is clicked.
    menuItems.forEach( 
        function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
        }
    )

    
    // For header scroll movement; source: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp

    // Sets this variable to the page's existing offset/scroll position.
    var  prevScrollPos= window.pageYOffset;

    window.onscroll = function(){
        var  currentScrollPos = window.pageYOffset; // Sets this variable to the pages existing offset/scroll position.
        if (prevScrollPos > currentScrollPos){ // If the previous position is less than the current position (if you're scrolling up)...
            document.getElementById("header").style.top = "0"; //... show the header,
            hamburger.style.top = ".4rem"; // show the hamburger menu.
        } else { // Otherwise, if you're scrolling down...
            document.getElementById("header").style.top = "-60px"; //... hide the header
            hamburger.style.top = "-60px"; // ... hide the hamburger menu
        }
        prevScrollPos = currentScrollPos;
    };

    // For scrolling movement on text; source: https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671
    
    // Selects all js-scroll elements
    const scrollElements = document.querySelectorAll(".js-scroll");


    // Detects when the element has scrolled by the indicated amount into the page. 
    const elementInView = (el, percentageScroll = 100) => {
        // Gets element's distance from the top of the page.
        const elementTop = el.getBoundingClientRect().top;
       
        return (
          elementTop <= 
          ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100)) //Gets height of viewport and multiplies it by the indicated amount.
        );
      }; 

    // Assigns the .scrolled class element.
    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };
    
    // Removes the .scrolled class element.
    const hideScrollElement = (element) => {
        element.classList.remove("scrolled");
    };

    // Makes the element visible/invisible depending on its position in the viewport.
    const handleScrollAnimation = () => {
        // For each element... 
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) { //... if the element is in the viewport,
                displayScrollElement(el); // display the element.  
            } else { // Otherwise, if it's not in the viewport,
                hideScrollElement(el); // hide the element.
            }
        })
    }

    // Passes the above function to an event listener that runs whenever the user scrolls.
    window.addEventListener("scroll", () => {
        throttle (handleScrollAnimation, 250);
    })

    // Throttle Function
    // Initialises the throttleTimer variable as false.
    let throttleTimer = false;

    const throttle = (callback, time) => {
        // Doesn't run the function while throttle timer is true
        if (throttleTimer) return;

        // Sets the throttle time to true so the function doesn't run
        throttleTimer = true;

        setTimeout(() => {
            // Calls the callback function in the setTimout and sets the throttle timer to false after the indicated time has passed.
            callback();
            throttleTimer = false;
        }, time);
    }
}

