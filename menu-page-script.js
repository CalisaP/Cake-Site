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
        if (cake.classList.contains("rotate-cake")){
            cake.classList.remove("rotate-cake");
            caption.classList.remove("rotate-cake");
            cake.classList.add("rotate-cake-1-right");
            caption.classList.add("rotate-cake-caption-1-right");
        } else if (cake.classList.contains("rotate-cake-1-right")){
            cake.classList.remove("rotate-cake-1-right");
            caption.classList.remove("rotate-cake-caption-1-right");    
            cake.classList.add("rotate-cake-1-front");
            caption.classList.add("rotate-cake-caption-1-front");
            cake.style.left = "33.5rem";
            caption.style.left = "66.5rem";
        } else if (cake.classList.contains("rotate-cake-1-front")){
            cake.classList.remove("rotate-cake-1-front");
            caption.classList.remove("rotate-cake-caption-1-front");    
            cake.classList.add("rotate-cake-1-left");
            caption.classList.add("rotate-cake-caption-1-left");
            cake.style.left = "0rem";
            cake.style.top = "8rem";
            caption.style.left = "33rem";
            caption.style.top = "8rem";
        } else if (cake.classList.contains("rotate-cake-1-left")){
            cake.classList.remove("rotate-cake-1-left");
            caption.classList.remove("rotate-cake-caption-1-left");    
            cake.classList.add("rotate-cake-1-right");
            caption.classList.add("rotate-cake-caption-1-right");
            cake.style.left = "-30rem";
            cake.style.top = "-.5rem";
            caption.style.left = ".5rem";
            caption.style.top = "0rem";                
        }
    }
    function cakeTwoClockwise(cake, caption){
        if (cake.classList.contains("rotate-cake")){
            cake.classList.remove("rotate-cake");
            caption.classList.remove("rotate-cake");
            cake.classList.add("rotate-cake-2-left");
            caption.classList.add("rotate-cake-2-left");
            } else if (cake.classList.contains("rotate-cake-2-left")){
            cake.classList.remove("rotate-cake-2-left");
            caption.classList.remove("rotate-cake-2-left");
            cake.classList.add("rotate-cake-2-right");
            caption.classList.add("rotate-cake-2-right");
            cake.style.left = "-33.5rem";
            cake.style.top = "-8rem";
            caption.style.left = "-33.5rem";
            caption.style.top = "-8rem";
            } else if (cake.classList.contains("rotate-cake-2-right")){
            cake.classList.remove("rotate-cake-2-right");
            caption.classList.remove("rotate-cake-2-right");    
            caption.classList.add("rotate-cake-2-front");
            cake.classList.add("rotate-cake-2-front");
            cake.style.left = "30rem";
            caption.style.left = "30rem";
            } else if (cake.classList.contains("rotate-cake-2-front")){
            cake.classList.remove("rotate-cake-2-front");
            caption.classList.remove("rotate-cake-2-front");    
            cake.classList.add("rotate-cake-2-left");
            caption.classList.add("rotate-cake-2-left");
            cake.style.left = "0rem";
            cake.style.top = "0rem";
            caption.style.left = "0rem";
            caption.style.top = "0rem";
            }
    }
    function cakeThreeClockwise(cake, caption){
        if (cake.classList.contains("rotate-cake")){
            cake.classList.remove("rotate-cake");
            caption.classList.remove("rotate-cake");
            cake.classList.add("rotate-cake-3-front");
            caption.classList.add("rotate-cake-caption-3-front");
            console.log("going front");
            var rect = caption.getBoundingClientRect();
            console.log("left ",rect.left, "top ", rect.top, "right ", rect.right, "bottom ", rect.bottom);
        } else if(cake.classList.contains("rotate-cake-3-front")){
            cake.classList.remove("rotate-cake-3-front");
            caption.classList.remove("rotate-cake-caption-3-front");    
            cake.classList.add("rotate-cake-3-left");
            caption.classList.add("rotate-cake-caption-3-left");
            cake.style.left = "-3rem";
            cake.style.top = "8rem";
            caption.style.left = "-33rem";
            caption.style.top = "8rem";
            console.log("going left");
            var rect = caption.getBoundingClientRect();
            console.log("left ",rect.left, "top ", rect.top, "right ", rect.right, "bottom ", rect.bottom);
        } else if(cake.classList.contains("rotate-cake-3-left")){
            cake.classList.remove("rotate-cake-3-left");
            caption.classList.remove("rotate-cake-caption-3-left");
            cake.classList.add("rotate-cake-3-right");
            caption.classList.add("rotate-cake-caption-3-right");
            cake.style.left = "-36.5rem";
            cake.style.top = "0rem";
            caption.style.left = "-66rem";
            caption.style.top = "0rem";
            console.log("going right");
            var rect = caption.getBoundingClientRect();
            console.log("left ",rect.left, "top ", rect.top, "right ", rect.right, "bottom ", rect.bottom);
        } else if(cake.classList.contains("rotate-cake-3-right")){
            cake.classList.remove("rotate-cake-3-right");
            caption.classList.remove("rotate-cake-caption-3-right");    
            cake.classList.add("rotate-cake-3-front");
            caption.classList.add("rotate-cake-caption-3-front");
            cake.style.left = "30rem";
            caption.style.left = "0rem";
            caption.style.top = "0rem";
            console.log("going home");
            var rect = caption.getBoundingClientRect();
            console.log("left ",rect.left, "top ", rect.top, "right ", rect.right, "bottom ", rect.bottom);
        }
    }

    function clockwiseCakeRotations(i){
        for (let i = 0; i < cakes.length; i++){
            if (cakes[i].classList.contains("rotate-cake")){
                cakeLeft(cakes[i]);
            } else if (cakes[i].classList.contains("rotate-cake-left")){
                cakeRight(cakes[i]);
            } else if (cakes[i].classList.contains("rotate-cake-right")){
                cakeFront(cakes[i]);
            } else if (cakes[i].classList.contains("rotate-cake-front")){
                cakeHome(cakes[i]);
            }
        }
    }
    function clockwiseCaptionsRotations(i){
        for (let i = 0; i < captions.length; i++){
            if (captions[i].classList.contains("rotate-cake")){
                captionLeft(captions[i]);
            } else if (captions[i].classList.contains("rotate-cake-left")){
                captionRight(captions[i]);
            } else if (captions[i].classList.contains("rotate-cake-right")){
                captionFront(captions[i]);
            } else if (captions[i].classList.contains("rotate-cake-front")){
                captionHome(captions[i]);
            }
        }
    }
    

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
        cakeOneClockwise(cakeOne, cakeOneCaption);
        cakeTwoClockwise(cakeTwo, cakeTwoCaption);
        cakeThreeClockwise(cakeThree, cakeThreeCaption);
    });
});