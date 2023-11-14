
// color change
function darkMode() {

    let hide = document.querySelectorAll(".hidden-area");

    defaultMode();

    document.body.style.backgroundColor = "#11130c";
    document.querySelector(".background-image").classList.add("img-dark");
    document.querySelector("main").classList.add("sub-topic-dark");
    document.querySelector(".empty-area").classList.add("img-dark");
    document.querySelector("footer").classList.add("footer-dark");
    document.querySelector("nav").classList.add("nav-scroll-dark");

    for(let index = 0 ; index < hide.length ; ++index){
        hide[index].classList.add('hidden-dark');
    }
}

function lightMode() {

    let hide = document.querySelectorAll(".hidden-area");

    defaultMode();

    document.body.style.backgroundColor = "#fff8ee";
    document.querySelector(".background-image").classList.add("img-light");
    document.querySelector("main").classList.add("sub-topic-light");
    document.querySelector(".empty-area").classList.add("img-light");
    document.querySelector("footer").classList.add("footer-light");
    document.querySelector("nav").classList.add("nav-scroll-light");

    for(let index = 0 ; index < hide.length ; ++index){
        hide[index].classList.add('hidden-light');
    }
}

function defaultMode(){

    let hide = document.querySelectorAll(".hidden-area");

    document.body.style.backgroundColor = "white";
    document.querySelector(".background-image").classList.remove("img-dark","img-light");
    document.querySelector("main").classList.remove("sub-topic-dark","sub-topic-light");
    document.querySelector(".empty-area").classList.remove("img-dark","img-light");
    document.querySelector("footer").classList.remove("footer-dark", "footer-light");
    document.querySelector("nav").classList.remove("nav-scroll-dark", "nav-scroll-light");

    for(let index = 0 ; index < hide.length ; ++index){
        hide[index].classList.remove('hidden-dark','hidden-light');
    }
}

// font change
function smallFont() {
    let font = document.querySelectorAll("p");
    defaultFont();
    for(let index = 0 ; index < font.length ; ++index){
        font[index].style.fontSize = "x-small";
    }   
}
  
function mediumFont() {
    let font = document.querySelectorAll("p");
    defaultFont();
    for(let index = 0 ; index < font.length ; ++index){
        font[index].style.fontSize = "medium";
    }   
}

function defaultFont() {
    let font = document.querySelectorAll("p");
    for(let index = 0 ; index < font.length ; ++index){
        font[index].style.fontSize = "small";
    }   
}

// color picker
function colorPicker() {
    let colorPicker = document.querySelector("#color-picker").value;
    document.body.style.backgroundColor = colorPicker;

};

