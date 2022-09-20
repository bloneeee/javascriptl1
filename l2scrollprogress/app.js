var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
    scrollpoint();
};

function scrollpoint(){
    // console.log('i am working');

    // scolltop
    // project height
    // current height

    // project height - current height

    // scrolltop * 100 / (project height - current height)

    // console.log(document.documentElement);

    var getscrollTop = document.documentElement.scrollTop;
    var getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight,getscrollTop);
    var getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);

    var calcheight = getscrollheight - getclientheight;

    // var getfinal = Math.round((getscrollTop * 100) /  calcheight);
    // console.log(getfinal);

    var getfinal = Math.round((getscrollTop / calcheight) * 100);
    // console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;
}

function printme(){
    window.print();
}