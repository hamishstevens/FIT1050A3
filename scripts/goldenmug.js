

// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

    // This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 70){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }

document.getElementById("btn_menu").addEventListener("click", function(){
    document.getElementById("full_menu_title").scrollIntoView({block: "start", behavior: "smooth"})
})

document.getElementById("btn_location").addEventListener("click", function(){
    document.getElementById("location").scrollIntoView({block: "start", behavior: "smooth"})
})

document.getElementById("btn_about").addEventListener("click", function(){
    document.getElementById("about").scrollIntoView({block: "start", behavior: "smooth"})
})

document.getElementById("btn_order").addEventListener("click", function(){
    document.getElementById("delivery").scrollIntoView({block: "start", behavior: "smooth"})
})

// Fancybox settings
Fancybox.bind("[data-fancybox]")
Fancybox.bind('[data-fancybox="pop-items"]')
Fancybox.bind('[data-fancybox="full-menus"]');