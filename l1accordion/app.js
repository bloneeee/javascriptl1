var getacctitles = document.getElementsByClassName("acctitle");
// console.log(getacctitles); // HTML Collection
var getacccontent = document.querySelectorAll(".acccontent");
// console.log(getacccontent); // Node List

for(var x = 0; x < getacctitles.length; x++){
    // console.log(x);

    getacctitles[x].addEventListener('click',function(e){
        // console.log(e.target);
        // console.log(this);
        // console.log(x);

        this.classList.toggle("active");
        var getcontent = this.nextElementSibling;
        // console.log(getcontent);

        if(getcontent.style.height){
            // console.log("true");
            // console.log(getcontent.style.height, typeof getcontent.style.height);

            getcontent.style.height = null; // beware can't set 0
        }else{
            // console.log("false");
            // console.log(getcontent.style.height, typeof getcontent.style.height);

            // console.log(getcontent.scrollHeight)
            getcontent.style.height = getcontent.scrollHeight + "px";
        }
    });

    if(getacctitles[x].classList.contains("active")){
        getacccontent[x].style.height = getacccontent[x].scrollHeight + "px";
    }
}