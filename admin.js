let sideBar = document.querySelector('.sideBar');
let menuBtn = document.querySelector('.menu i');

menuBtn.onclick = function(){
    sideBar.classList.toggle("active");
}