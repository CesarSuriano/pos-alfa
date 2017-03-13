var toggle = document.getElementById("toggle");
var overlay = document.getElementById("overlay");

toggle.onclick = function(){
    this.classList.toggle('active');
    overlay.classList.toggle('open');
}