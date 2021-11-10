window.addEventListener("load", (event) => {
    // FOR HEADER HAMBURGER MENU; source: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
    
    //Selects the relevant elements
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger = document.querySelector(".hamburger");
    const cakeIcon = document.querySelector(".cake-figure")
    const closeIcon = document.querySelector(".closeIcon");
    //const menuIcon = document.querySelector(".menuIcon");

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

    // FOR PRIMARY & SECONDARY HEADER FADE-IN AND DROP-IN FUNCTION
    //Handles primary element fade-in (main header, h1)
    const loadVanishedEls = document.querySelectorAll(".onload-disappear");
    const showLoadElement = (element) => {
        element.classList.add("onload-appear");
    };
    loadVanishedEls.forEach((el) => {
        showLoadElement(el);
    });
    // Handles primary element drop-in (main header)
    const loadDropEls = document.querySelectorAll(".onload-to-be-dropped");
    const loadDrop = (element) => {
        element.classList.add("onload-drop");
        element.classList.remove("onload-to-be-dropped");
    };
    loadDropEls.forEach((el) => {
        el.style.top = "0rem";
        loadDrop(el);
    });
    // Handles secondary element fade-in
    const vanishedElements = document.querySelectorAll(".disappear");
    const showElement = (element) => {
        element.classList.add("appear");
    };
    vanishedElements.forEach((el) => {
        showElement(el);
    });
    // Handles secondary element drop-in (secondary header)
    const dropInEls = document.querySelectorAll(".to-be-dropped");
    const dropElement = (element) => {
        element.classList.add("drop-in");
        element.classList.remove("to-be-dropped");
    };
    dropInEls.forEach((el) => {
        dropElement(el);
    });
    // Handles tertiary element fade-in (Menu Page Banner)
    const slowestElements = document.querySelectorAll(".disappear-slowest");
    const showSlowestElement = (element) => {
        element.classList.add("appear-slowest");
    };
    slowestElements.forEach((el) => {
        showSlowestElement(el);
    });
    // Handles tertiary element slide-in (Menu Page Banner)
    const slideLeftEls = document.querySelectorAll(".left");
    const slideLeft = (element) => {
        element.classList.add("slide-right");
        element.classList.remove("left");
    };
    slideLeftEls.forEach((el) => {
        slideLeft(el);
    });
    const slideRightEls = document.querySelectorAll(".right");
    const slideRight = (element) => {
        element.classList.add("slide-left");
        element.classList.remove("right");
    };
    slideRightEls.forEach((el) => {
        slideRight(el);
    });

    // FOR MENU PAGE CAKE ROTATION
    const cakeOne = document.getElementById("cake-figure-1");
    const cakeTwo = document.getElementById("cake-figure-2");
    const cakeThree = document.getElementById("cake-figure-3");
    const sliderRightArrow = document.getElementById("slider-right-arrow");

    function clockwiseRotation(){
        if (cakeOne.classList.contains("rotate-cake")){
            cakeOne.classList.remove("rotate-cake");
            cakeOne.classList.add("rotate-cake-right");
        } else if (cakeOne.classList.contains("rotate-cake-right")){
            cakeOne.classList.remove("rotate-cake-right");
            cakeOne.classList.add("rotate-cake-front");
        } else if (cakeOne.classList.contains("rotate-cake-front")){
            cakeOne.classList.remove("rotate-cake-front");
            cakeOne.classList.add("rotate-cake-left");
        } else {
            cakeOne.classList.remove("rotate-cake-left");
            cakeOne.classList.add("rotate-cake");
        }
    }
    sliderRightArrow.addEventListener("click", clockwiseRotation);

    


   
    // FOR HEADER SCROLL MOVEMENT; source: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp

    // Sets this variable to the page's existing offset/scroll position.
    var  prevScrollPos= window.pageYOffset;

    window.onscroll = function(){
        var  currentScrollPos = window.pageYOffset; // Sets this variable to the pages existing offset/scroll position.
        if (prevScrollPos > currentScrollPos){ // If the previous position is less than the current position (if you're scrolling up)...
            document.getElementById("header").style.top = "0"; 
            hamburger.style.top = ".4rem"; // show the hamburger menu.
        } else { // Otherwise, if you're scrolling down...
            document.getElementById("header").style.top = "-60px";
            hamburger.style.top = "-60px"; // ... hide the hamburger menu
        }
        prevScrollPos = currentScrollPos;
    };

    // FOR SCROLLING MOVEMENT ON TEXT; source: https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671
    
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
});

