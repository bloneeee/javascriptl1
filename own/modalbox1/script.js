/* Start Form Label */

const formLabels = Array.from(document.querySelectorAll('.form-label'));

formLabels.forEach(value => {
    const changeArr =  Array.from(value.innerText);
    value.innerText = '';

    let x = 0
    while(x < changeArr.length){
        value.innerHTML += `<span>${changeArr[x]}</span>`;
        x++;
    };
});

/* End Form Label */

/* Start Form Control */

const formControls = [...document.querySelectorAll('.form-control')];

for(let input of formControls){
    input.addEventListener('focusin',()=>{
        
        const spanTags = input.parentElement.querySelectorAll('.form-label > span');
        for(let y=0;  y < spanTags.length; y++) spanTags[y].style.cssText = `transition-delay: ${0.05 * y}s`;

        input.className += ' focused-active';
    });

    input.addEventListener('focusout',()=>{
        if(input.value.length > 0)return;

        const spanTags = input.parentElement.querySelectorAll('.form-label > span');
        let lastDelay = Number(spanTags[spanTags.length - 1].style.transitionDelay.replace('s',''));
        for(let y=0;  y < spanTags.length; y++){
            spanTags[y].style.cssText = `transition-delay: ${lastDelay}s`;
            lastDelay -= 0.05
        };

        input.classList.remove('focused-active');
    });
};

/* End Form Control */

/* Start Modal Box */

const signupBtn = document.getElementById('signup'),
    signupCloseBtn = document.getElementById('signup-close');

let singupModal;
signupBtn.onclick = function(){
    const modalID = this.getAttribute('data-bs-target');
    singupModal = document.querySelector(modalID);
    singupModal.style.display = "block";

    singupModal.onclick = function(e){
        // console.log(e.target)
        if(e.target === singupModal) singupModal.style.display = "none";
    }
};

signupCloseBtn.onclick = function(){
    singupModal.style.display = "none";
}

/* End Modal Box */

/* Start Fullscreen */

const openFullscreenBtn = document.getElementById('open-fullscreen'),
    closeFullscreenBtn = document.getElementById('close-fullscreen');

const getFullscreenElement = () => {
    return document.fullscreenElement
        || document.webkitFullscreenElement
        || document.msFullscreenElement
        || document.mozFullscreenElement;
}

const toggleFullscreen = (toggle) => {
    const fullscreenToggle = +localStorage.getItem('fullscreen');

    // console.log(fullscreenToggle);

    if(fullscreenToggle === 1){
        const de = document.documentElement;
        if(de.requsetFullscreen){
            de.requestFullscreen(); 
        }else if(de.msRequestFullscreen){
            de.msRequestFullscreen();
        }else if(de.webkitRequestFullscreen){
            document.querySelector('body').webkitRequestFullscreen();
        }

        closeFullscreenBtn.className = closeFullscreenBtn.className.replace('hide','show');
    }else{
        if(getFullscreenElement()){
            if(document.exitFullscreen){
                document.exitFullscreen();
            }else if(document.msExitFullscreen){
                document.msExitFullscreen();
            }else if(document.webkitExitFullscreen){
                document.webkitExitFullscreen();
            }
    
            closeFullscreenBtn.className = closeFullscreenBtn.className.replace('show','hide');
        }
    }
};

openFullscreenBtn.addEventListener('click', ()=>{
    localStorage.setItem('fullscreen',1);
    toggleFullscreen();
});

closeFullscreenBtn.addEventListener('click', ()=>{
    localStorage.setItem('fullscreen',0);
    toggleFullscreen();
});

/* End Fullscreen */

/* Start Auto Click */

const autoClick = document.getElementById("auto-click");

autoClick.onclick = function(){
    console.log('hi');
    toggleFullscreen();
}

autoClick.click();

/* End Auto Click */