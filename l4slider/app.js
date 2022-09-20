var slides = document.getElementsByClassName('carousel-item');
// console.log(slides); // HTML Collection
var dots = document.querySelectorAll('.dot');
// console.log(dots); // Nodelist

var currslide = 1; // 4

// Previous btn
document.getElementById('prev').addEventListener('click',function(){
    carousel(currslide -= 1);
});

// Next btn
document.getElementById('next').addEventListener('click',function(){
    carousel(currslide += 1);
});

for(var q = 0; q < dots.length; q++){
    // console.log(q);

    dots[q].addEventListener('click',function(){
        // console.log(this.getAttribute("data-bs-slide-to"));

        currslide = this.getAttribute("data-bs-slide-to");
        carousel(currslide);
    })
}

carousel(currslide);

function carousel(slidenum){
    var x, y;

    // hide all slides
    for(x=0; x < slides.length; x++){
        slides[x].style.display = "none";
    }

    // remove .active from all dot
    for(y=0; y < slides.length; y++){
        // dots[y].classList.remove("active");
        // dots[y].className = "dot";
        dots[y].className = dots[y].className.replace("active","");

        // dots[y].className.replace("active","");
        // console.log(dots[y].className.replace("active",""));
    }

    // res for currslide 1 to 3 & 3 to 1 ( 4 to 1 ) ( 0 to 4 )
    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length;
    }

    // console.log(currslide);

    slides[currslide - 1].style.display = "block";

    // dots[currslide - 1].className = "dot active";
    dots[currslide - 1].className += " active";
    // dots[currslide - 1].classList.add("active");
}

// slide        0         1          2
// currentslide 1-1=0     2-1=1      3-1=2