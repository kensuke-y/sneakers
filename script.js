document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".openbtn1");
    const navMenu = document.querySelector(".nav-menu");


    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    
    // カルーセル
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
 });
    
});

