"use strict";
window.addEventListener("DOMContentLoaded", function(){
const tabsParent = document.querySelectorAll("#videomp4"),
        slider = document.querySelector('#slider');


        function hideTabContent() {
            tabContent.forEach((item) => {
                item.style.display = "none";
            });
            tabs.forEach((item) => {
                item.classList.remove("tabheader__item_active");
            });
            }
        
            function showTabContent(i = 0) {
            tabContent[i].style.display = "block";
            tabs[i].classList.add("tabheader__item_active");
            }
        
            hideTabContent();
            showTabContent();
        
            headerParents.addEventListener("click", (event) => {
            console.log(event);
            const target = event.target;
            if (target && target.classList.contains("tabheader__item")) {
                tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
                });
            }
            });
        });
        