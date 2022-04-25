const menuList = document.getElementById('menuList');
const menuIcon = document.getElementById('menu-icon');

menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px";
        menuIcon.style.rotate = "45deg";
    } else {
        menuList.style.maxHeight = "0px";
        menuIcon.style.rotate = "0deg";
    }
}

// GSAP Animation
//Nav
gsap.from('.logo', {opacity: 0, duration: 1, delay: 2, y:10});
gsap.from('li', {opacity: 0, duration: 1, delay: 2.1, y:30, stagger: 0.4});

// Main
// row - col1
gsap.from('h2', {opacity: 0, duration: 1, delay: 1, x:30});
gsap.from('h3', {opacity: 0, duration: 1, delay: 1.2, x:30});
gsap.from('p', {opacity: 0, duration: 1, delay: 1.4, x:30});
gsap.from('h4', {opacity: 0, duration: 1, delay: 1.6, x:30});
gsap.from('button', {opacity: 0, duration: 1, delay: 1.8, x:30});

// var rule = CSSRulePlugin.getRule(".col-1:after");
// gsap.from($(rule), {opacity: 0, duration: 1, delay: 1.6, y:30});

// row - col2
gsap.from('.controller', {opacity: 0, duration: 2.5, delay: 2, x:30});
gsap.from('.color-box', {opacity: 0, duration: 3.5, delay: 1.6, x:30});
gsap.from('.add-btn', {opacity: 0, duration: 1, delay: 1.8, x:30});











