window.addEventListener("load", (event) => {
    // FOR MENU PAGE CAKE ROTATION
    const cakeOne = document.getElementById("cake-figure-1");
    const cakeOneCaption = document.getElementById("cake-1-caption");
    const cakeTwo = document.getElementById("cake-2");
    const cakeTwoCaption = document.getElementById("cake-2-caption");
    const cakeThree = document.getElementById("cake-figure-3");
    const cakeThreeCaption = document.getElementById("cake-3-caption");
    const sliderRightArrow = document.getElementById("slider-right-arrow");

    function clockwiseRotation(){
        if (cakeTwo.classList.contains("rotate-cake")){
            cakeTwo.classList.remove("rotate-cake");
            cakeTwo.classList.add("rotate-cake-left");
            cakeTwoCaption.classList.add("rotate-cake-left");
        } else if (cakeTwo.classList.contains("rotate-cake-left")){
            cakeTwo.classList.remove("rotate-cake-left");
            cakeTwo.classList.add("rotate-cake-right");
            cakeTwo.style.left = "-33.5rem";
            cakeTwo.style.top = "-8rem";
            cakeTwoCaption.classList.remove("rotate-cake-left");
            cakeTwoCaption.classList.add("rotate-cake-right");
            cakeTwoCaption.style.left = "-33.5rem";
            cakeTwoCaption.style.top = "-8rem";
        } else if (cakeTwo.classList.contains("rotate-cake-right")){
            cakeTwo.classList.remove("rotate-cake-right");
            cakeTwo.classList.add("rotate-cake-front");
            cakeTwo.style.left = "33rem";
            cakeTwoCaption.classList.remove("rotate-cake-right");
            cakeTwoCaption.classList.add("rotate-cake-front");
            cakeTwoCaption.style.left = "33rem";
        } else if(cakeTwo.classList.contains("rotate-cake-front")) {
            cakeTwo.classList.remove("rotate-cake-front");
            cakeTwo.classList.add("rotate-cake-left");
            cakeTwo.style.left = "0rem";
            cakeTwo.style.top = "0rem";
            cakeTwoCaption.classList.remove("rotate-cake-front");
            cakeTwoCaption.classList.add("rotate-cake-left");
            cakeTwoCaption.style.left = "0rem";
            cakeTwoCaption.style.top = "0rem";
        }
    }        
    sliderRightArrow.addEventListener("click", () => {
        clockwiseRotation();
    });
});