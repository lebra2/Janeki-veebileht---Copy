
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