function playbtn(obj){
    var audio = document.getElementById('myAudio');
    
    if(obj.style.backgroundImage.includes('resource/play.png')){
        obj.style.backgroundImage = "url('resource/pause.png')";
        audio.play();
    }else{
        obj.style.backgroundImage = "url('resource/play.png')";
        audio.pause();
    }
}

    

function popup(){
    var search = document.querySelector('.search');
    var searchBtn = document.getElementById('search-btn');
    var isPopUp;
    if(searchBtn.innerHTML=='&gt;'){
        isPopUp=true;
    }else{
        isPopUp=false;
    }

    if(isPopUp){
        search.classList.remove('popup');
        searchBtn.innerHTML = '&lt;';
    }else{
        
        search.classList.add('popup');
        searchBtn.innerHTML = '&gt;';
    }
    
}


function searchWord(str){
    var strFound = false;
    if (window.find) {
        strFound = window.find(str);
        if (!strFound) {
            strFound = window.find(str, 0, 1);
            while (window.find(str, 0, 1)) continue;
        }
    } else {
        alert("This feature is supported only in Chrome browser.");
        return;
    }
    if (!strFound) alert("String '" + str + "' not found!");
}


function showDiv(divId){
    var overlay = document.querySelector('.overlay');
    var div = document.getElementById(divId);

    overlay.style.display = 'block';
    div.style.display = 'block';

    document.body.style.overflow='hidden';
}

function hideDiv(){
    var overlay = document.querySelector('.overlay');
    var moreComments = document.querySelectorAll('.moreComment');

    overlay.style.display = 'none';
    moreComments.forEach(function(moreComment) {
        moreComment.style.display = 'none';
    });

    document.body.style.overflow = 'auto';
}

window.addEventListener('DOMContentLoaded', function (){
    var pb = new Array(2);
    var nb = new Array(2);
    pb = document.getElementsByClassName('pb');
    nb = document.getElementsByClassName('nb');
    var prevCanvas = document.createElement('canvas');
    var nextCanvas = document.createElement('canvas');
    var prevCtx = prevCanvas.getContext('2d');
    var nextCtx = nextCanvas.getContext('2d');

    prevCanvas.width = nextCanvas.width =100;
    prevCanvas.height = nextCanvas.height=100;

    prevCtx.beginPath();
    prevCtx.moveTo(40,0);
    prevCtx.lineTo(15,25);
    prevCtx.moveTo(15,25);
    prevCtx.lineTo(40,50);
    prevCtx.strokeStyle='black';
    prevCtx.stroke();
    
    nextCtx.beginPath();
    nextCtx.moveTo(10,0);
    nextCtx.lineTo(35,25);
    nextCtx.moveTo(35,25);
    nextCtx.lineTo(10,50);
    nextCtx.strokeStyle="black";
    nextCtx.stroke();

    for(var i=0;i<pb.length;i++){
        pb[i].style.backgroundImage= `url(${prevCanvas.toDataURL()})`;
        nb[i].style.backgroundImage= `url(${nextCanvas.toDataURL()})`;
    }

});

window.addEventListener('DOMContentLoaded', function(){
    var currentIndex = 0;
    var contents = document.getElementsByClassName('study-content');
    var container = document.querySelector('.study-content-container');
    var prev = document.querySelector('.st-prev-button');
    var next = document.querySelector('.st-next-button');
    
    showSlide(currentIndex);
    
    function showSlide(index){
        if(index>=0 && index<contents.length){
            currentIndex=index;
            updateSlideVisibility();
        }
    }
    
    function prevM(){
        var prevIndex = currentIndex-1;
        showSlide(prevIndex);
    }
    
    function nextM(){
        var nextIndex = currentIndex+1;
        showSlide(nextIndex);
    }
    
    function updateSlideVisibility(){
        for(var i=0;i<contents.length;i++){
            contents[i].classList.remove('active');
        }
        contents[currentIndex].classList.add('active');
    }
    
    prev.addEventListener('click', prevM);
    next.addEventListener('click', nextM);
});


window.addEventListener('DOMContentLoaded', function(){
    var currentIndex = 0;
    var contents = document.getElementsByClassName('employment-content');
    var container = document.querySelector('.employment-content-container');
    var prev = document.querySelector('.em-prev-button');
    var next = document.querySelector('.em-next-button');
    
    showSlide(currentIndex);
    
    function showSlide(index){
        if(index>=0 && index<contents.length){
            currentIndex=index;
            updateSlideVisibility();
        }
    }
    
    function prevM(){
        var prevIndex = currentIndex-1;
        showSlide(prevIndex);
    }
    
    function nextM(){
        var nextIndex = currentIndex+1;
        showSlide(nextIndex);
    }
    
    function updateSlideVisibility(){
        for(var i=0;i<contents.length;i++){
            contents[i].classList.remove('active');
        }
        contents[currentIndex].classList.add('active');
    }
    
    prev.addEventListener('click', prevM);
    next.addEventListener('click', nextM);
});

