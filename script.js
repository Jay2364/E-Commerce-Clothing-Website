let flag = 0;

// main function call
slideshow(flag);
setInterval(nextSlide,3000);//call it

// on click listener

function controller(x){
    flag += x;
    slideshow(flag);
}

// auto slideshow
function nextSlide(){
    flag += 1;
    slideshow(flag);
}

function slideshow(num){
    let slides = document.getElementsByClassName("slider");
    // handle flag length exeeded case
    if (num == slides.length){
        flag = 0;
        num = 0;
    }
    else if (num == -1){
        flag = slides.length-1;
        num = slides.length-1;
    }
    //hide unnecessary images
    for(let i of slides){
        i.style.display = "none";
    }
    //display image
    slides[num].style.display = "block";
}

// image/card scroller
let scrollContainer = document.querySelector('.gallery');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

scrollContainer.addEventListener("wheel",(event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
});



