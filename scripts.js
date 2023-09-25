function openModal(event) {
  let modal = document.getElementById("myModal");
  let images = document.getElementsByClassName("images");
  let modalImg = document.getElementById("img01");
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    img.onclick = function(evt) {
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