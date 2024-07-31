// toggle class active
const navbarNav = document.querySelector('.navbar');
// click to activate the toggle
document.querySelector('#ham-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

// menghilangkan toggle 
const hamburger = document.querySelector('#ham-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
} )