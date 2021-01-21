var close = document.getElementById("close");
var modal = document.getElementById("modalbox");
var imgs = document.getElementsByTagName("img");
var expand = document.getElementById("expandedImg");
var btn = document.getElementById("button");
var dropdown = document.getElementById("dropdown");


for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function(event) {
    modal.style.display = "block";
    expand.src = event.target.src;
  })
}

//toggle dropdown menu

btn.addEventListener("click", function() {
  dropdown.classList.toggle("show");
})

//close the modal

close.addEventListener("click", function() {
  modal.style.display = "none";
})
