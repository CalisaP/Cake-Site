window.addEventListener("load", (event) => {
    // FOR MENU PAGE CAKE ROTATION
    const cakeOne = document.getElementById("cake-1");
    const cakeOneCaption = document.getElementById("cake-1-caption");
    const cakeTwo = document.getElementById("cake-2");
    const cakeTwoCaption = document.getElementById("cake-2-caption");
    const cakeThree = document.getElementById("cake-3");
    const cakeThreeCaption = document.getElementById("cake-3-caption");
    const cakes = document.getElementsByClassName("cake-img");
    const captions = document.getElementsByClassName("cake-caption");
    const sliderRightArrow = document.getElementById("slider-right-arrow");

    function cakeOneClockwise(cake, caption){
        if (cake.classList.contains("rotate-cake-cw")){
            cake.classList.remove("rotate-cake-cw");
            caption.classList.remove("rotate-cake-cw");
            cake.classList.add("cw-rotate-cake-1-right");
            caption.classList.add("cw-rotate-cake-caption-1-right");
        } else if (cake.classList.contains("cw-rotate-cake-1-right")){
            cake.classList.remove("cw-rotate-cake-1-right");
            caption.classList.remove("cw-rotate-cake-caption-1-right");    
            cake.classList.add("cw-rotate-cake-1-front");
            caption.classList.add("cw-rotate-cake-caption-1-front");
            cake.style.left = "36.5rem";
            caption.style.left = "66.5rem";
        } else if (cake.classList.contains("cw-rotate-cake-1-front")){
            cake.classList.remove("cw-rotate-cake-1-front");
            caption.classList.remove("cw-rotate-cake-caption-1-front");    
            cake.classList.add("cw-rotate-cake-1-left");
            caption.classList.add("cw-rotate-cake-caption-1-left");
            cake.style.left = "3.5rem";
            cake.style.top = "8rem";
            caption.style.left = "33.5rem";
            caption.style.top = "8rem";
        } else if (cake.classList.contains("cw-rotate-cake-1-left")){
            cake.classList.remove("cw-rotate-cake-1-left");
            caption.classList.remove("cw-rotate-cake-caption-1-left");    
            cake.classList.add("cw-rotate-cake-1-right");
            caption.classList.add("cw-rotate-cake-caption-1-right");
            cake.style.left = "-30rem";
            cake.style.top = "-.5rem";
            caption.style.left = ".5rem";
            caption.style.top = "0rem";                
        }
    }
    function cakeTwoClockwise(cake, caption){
        if (cake.classList.contains("rotate-cake-cw")){
            cake.classList.remove("rotate-cake-cw");
            caption.classList.remove("rotate-cake-cw");
            cake.classList.add("cw-rotate-cake-2-left");
            caption.classList.add("cw-rotate-cake-2-left");
            } else if (cake.classList.contains("cw-rotate-cake-2-left")){
            cake.classList.remove("cw-rotate-cake-2-left");
            caption.classList.remove("cw-rotate-cake-2-left");
            cake.classList.add("cw-rotate-cake-2-right");
            caption.classList.add("cw-rotate-cake-2-right");
            cake.style.left = "-33.5rem";
            cake.style.top = "-8rem";
            caption.style.left = "-33.5rem";
            caption.style.top = "-8rem";
            } else if (cake.classList.contains("cw-rotate-cake-2-right")){
            cake.classList.remove("cw-rotate-cake-2-right");
            caption.classList.remove("cw-rotate-cake-2-right");    
            caption.classList.add("cw-rotate-cake-2-front");
            cake.classList.add("cw-rotate-cake-2-front");
            cake.style.left = "33rem";
            caption.style.left = "33rem";
            } else if (cake.classList.contains("cw-rotate-cake-2-front")){
            cake.classList.remove("cw-rotate-cake-2-front");
            caption.classList.remove("cw-rotate-cake-2-front");    
            cake.classList.add("cw-rotate-cake-2-left");
            caption.classList.add("cw-rotate-cake-2-left");
            cake.style.left = "0rem";
            cake.style.top = "0rem";
            caption.style.left = "0rem";
            caption.style.top = "0rem";
            }
    }
    function cakeThreeClockwise(cake, caption){
        if (cake.classList.contains("rotate-cake-cw")){
            cake.classList.remove("rotate-cake-cw");
            caption.classList.remove("rotate-cake-cw");
            cake.classList.add("cw-rotate-cake-3-front");
            caption.classList.add("cw-rotate-cake-caption-3-front");
            console.log("going front");
            var rect = caption.getBoundingClientRect();
            console.log("left ",rect.left, "top ", rect.top, "right ", rect.right, "bottom ", rect.bottom);
        } else if(cake.classList.contains("cw-rotate-cake-3-front")){
            cake.classList.remove("cw-rotate-cake-3-front");
            caption.classList.remove("cw-rotate-cake-caption-3-front");    
            cake.classList.add("cw-rotate-cake-3-left");
            caption.classList.add("cw-rotate-cake-caption-3-left");
            cake.style.left = "-3rem";
            cake.style.top = "8rem";
            caption.style.left = "-33rem";
            caption.style.top = "8rem";
            console.log("going left");
            var rect = caption.getBoundingClientRect();
            console.log("left ",rect.left, "top ", rect.top, "right ", rect.right, "bottom ", rect.bottom);
        } else if(cake.classList.contains("cw-rotate-cake-3-left")){
            cake.classList.remove("cw-rotate-cake-3-left");
            caption.classList.remove("cw-rotate-cake-caption-3-left");
            cake.classList.add("cw-rotate-cake-3-right");
            caption.classList.add("cw-rotate-cake-caption-3-right");
            cake.style.left = "-36.5rem";
            cake.style.top = "0rem";
            caption.style.left = "-66rem";
            caption.style.top = "0rem";
            console.log("going right");
            var rect = caption.getBoundingClientRect();
            console.log("left ",rect.left, "top ", rect.top, "right ", rect.right, "bottom ", rect.bottom);
        } else if(cake.classList.contains("cw-rotate-cake-3-right")){
            cake.classList.remove("cw-rotate-cake-3-right");
            caption.classList.remove("cw-rotate-cake-caption-3-right");    
            cake.classList.add("cw-rotate-cake-3-front");
            caption.classList.add("cw-rotate-cake-caption-3-front");
            cake.style.left = "30rem";
            caption.style.left = "0rem";
            caption.style.top = "0rem";
            console.log("going home");
            var rect = caption.getBoundingClientRect();
            console.log("left ",rect.left, "top ", rect.top, "right ", rect.right, "bottom ", rect.bottom);
        }
    }
       
    sliderRightArrow.addEventListener("click", () => {
        cakeOneClockwise(cakeOne, cakeOneCaption);
        cakeTwoClockwise(cakeTwo, cakeTwoCaption);
        cakeThreeClockwise(cakeThree, cakeThreeCaption);
    });
});