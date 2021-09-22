function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
window.onscroll = function() {myFu()};
let x1 = document.getElementById('going_down')
let x2 = document.getElementById('going_up')
let lastScrollTop = 0;

function myFu() {
   let st = window.pageYOffset; 
   if (st > lastScrollTop && window.scrollY > 500 ){
      x1.style.display = "block"
      x2.style.display = "none"
   } else {
    x2.style.display = "block"
    x1.style.display = "none"
   }
}  