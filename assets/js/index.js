
function tampil() {
  const elemenTampilkan = document.querySelectorAll('.top, .left, .right, .bottom');
  let tinggiJendela = window.innerHeight;
  let titikMuncul = 100;

  for (let i = 0; i < elemenTampilkan.length; i++) {
    const titikAtas = elemenTampilkan[i].getBoundingClientRect().top;

    if (titikAtas < tinggiJendela - titikMuncul) {
      elemenTampilkan[i].classList.add('active');
    } else {
      elemenTampilkan[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', tampil);
tampil();
