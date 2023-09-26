window.onscroll = function () {
  stickynavbar()
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickynavbar() {
  if (window.screenY || document.documentElement.scrollTop >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function openModal(event) {
  let modal = document.getElementById("myModal");
  let images = document.getElementsByClassName("images");
  let modalImg = document.getElementById("img01");
  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.onclick = function (evt) {
      modal.style.display = "block";
      modalImg.src = this.src;
    }
  }
}

function closeModal(event) {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function darkmode() {
  let element = document.body;
  let button = document.getElementById("button")
  element.classList.toggle("dark-mode");
  button.classList.toggle("fa-flip-horizontal");
}