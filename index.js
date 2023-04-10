let open_menu = document.getElementById("open_mobile_menu");
let close_menu = document.getElementById("close_mobile_menu");
let mobile_menu = document.getElementById("mobile_container");
let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
let quantity = document.getElementById("counter");
let count = 0;

open_menu.onclick = function(){
    mobile_menu.style.left = "0";
    document.getElementById("mob").style.left = "70%";
    // document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    // document.body.style.filter = "grayscale(70%)";
}

close_menu.onclick = function(){
    mobile_menu.style.left = "-100%";
    mobile_container.style.left = "-100%";
    document.getElementById("mob").style.left = "-100%";
    // document.body.style.backgroundColor = "white";
    // document.body.style.filter = "grayscale(0%)";
}

decrease.onclick = function(){
    if(count<=0){
        quantity.innerHTML = 0;    
    }
    else{
        count -= 1;
        quantity.innerHTML = count;
    }

}

increase.onclick = function(){
    count += 1;
    quantity.innerHTML = count;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("product_img");
    var dots = document.getElementsByClassName("thumb");
    if(n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

}

const cartButton = document.querySelector('.cart');
const cartDropdown = document.querySelector('.main_cart');

cartButton.addEventListener('click', function() {
  cartDropdown.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    if (!cartButton.contains(event.target) && !cartDropdown.contains(event.target)) {
      cartDropdown.classList.remove('show');
    }
});


// document.getElementById('cartItems').on = function() {
//     document.getElementById('itemsContainier').style.display = 'block';
// }


function openModal() {
    if(window.matchMedia('(min-width: 900px)').matches){
        document.getElementById("myModal").style.display = "flex";
    }
}
  
  // Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex1 = 1;
showSlides1(slideIndex);
  
function plusSlides1(n) {
  showSlides1(slideIndex += n);
}
  
function currentSlide1(n) {
  showSlides1(slideIndex = n);
}
  
function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("slide_img");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}