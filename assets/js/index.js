

window.addEventListener('scroll', reveal);
reveal();

function reveal() {
  var reveals = document.querySelectorAll('.reveal, .left, .right, .bottom');
  var windowheight = window.innerHeight;
  var revealpoint = 100;

  for (var i = 0; i < reveals.length; i++) {
    var revealtop = reveals[i].getBoundingClientRect().top;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}


const modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
