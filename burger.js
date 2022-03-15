
<<<<<<< HEAD
// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});

=======
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

const myLinks = document.querySelector('.menu-btn');
let menuOpen = false;
myLinks.addEventListener('click', () => {
  if(!menuOpen) {
    myLinks.classList.add('open');
    menuOpen = true;
  } else {
    myLinks.classList.remove('open');
    menuOpen = false;
  }
});
>>>>>>> origin/master
