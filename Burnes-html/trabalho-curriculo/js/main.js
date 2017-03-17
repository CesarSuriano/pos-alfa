var toggle = document.getElementById("toggle");
var overlay = document.getElementById("overlay");

toggle.onclick = function(){
    this.classList.toggle('active');
    overlay.classList.toggle('open');
}
// var link_mouse = document.getElementById('#click-mouse');
//   link_mouse.onclick = function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   }

//  function mouseClick(tag_link){
//      scrollTo(document.body, 0, 1250);
//         if (tag_link.hash !== "") {
//       // Prevent default anchor click behavior
//       //event.preventDefault();

//       // Store hash
//       var hash = tag_link.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } 
 //}

// document.getElementById('teste').onclick = function () {
//     scrollTo(document.body, 0, 1000);
// }

//     function scrollTo(element, to, duration) {
//         if (duration < 0) return;
//         var difference = to - element.scrollTop;
//         var perTick = difference / duration * 2;

//     setTimeout(function() {
//         element.scrollTop = element.scrollTop + perTick;
//         scrollTo(element, to, duration - 2);
//     }, 10);
// }

