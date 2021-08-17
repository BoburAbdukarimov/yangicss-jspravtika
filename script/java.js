"use strict";
window.addEventListener("DOMContentLoaded", function(){
const videos = document.querySelectorAll("#videomp4"),
    prev = document.querySelector("#prev"),
    next = document.querySelector("#next"),
    menubar = document.querySelector(".menu-bar"),
    bodyContent = document.querySelector(".body-content");

console.log(videos);
videos.forEach((item) =>{
    item.addEventListener("click", function(){
        item.classList.toggle('active');
    });
});
// prev.addEventListener("click", function(){
//     const prevFunk = function() {
//         menubar.classList.toggle("prevactive");
//         bodyContent.classList.add("bodyshow");
//     };
//     prevFunk();

// });

});   
