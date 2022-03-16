
// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.getElementById('nav');
let toggle = false;

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    if(toggle == false) {
        nav.style.height = "150px";
        toggle = true;
    }
    else{
        nav.style.height = "0px";
        toggle = false;
    }
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});

