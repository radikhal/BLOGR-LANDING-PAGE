const menuIcon = document.querySelector(".hamburger-icon");

const navbar = document.querySelector(".nav-bar");
const header = document.querySelector(".header")

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
    header.classList.toggle("change");
})

const navMenu = document.querySelectorAll(".list-container");

navMenu.forEach( (feature) => {

const btn = feature.querySelector(".menu-feature");
    btn.addEventListener("click", () => {
        navMenu.forEach( (item) => {
            if(item !== feature){
                item.classList.remove("show-text");
            }
        })
        
        feature.classList.toggle("show-text");
    })
})
