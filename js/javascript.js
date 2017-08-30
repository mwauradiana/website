
//Loading Screen
document.addEventListener("DOMContentLoaded", function(){
    var loading = document.querySelector('.loading-screen');
    loading.style.opacity = "0";

    setTimeout(function(){
        loading.style.display = "none";
    }, 1000);

    console.log("Loader-removed!!");
});


var menu = {
    mobile: document.querySelector('.mobile-menu'),
    desktop: document.querySelector('.navigation'),
    text: document.querySelector('.menu-text'),
    barOne: document.querySelector('.menu-bar1'),
    barTwo: document.querySelector('.menu-bar2'),
    barThree: document.querySelector('.menu-bar3')
};

function navigationToggle() {
    menu.desktop.classList.toggle('show-nav');
    menu.barOne.classList.toggle('exit-menu-left');
    menu.barTwo.classList.toggle('exit-menu-center');
    menu.barThree.classList.toggle('exit-menu-right');
}


var contactCard = {
    contactButton: document.getElementById('contact'),
    element: document.querySelector('.contact-card'),
    exit: document.querySelector(".exit-menu"),

    showContactCard: function() {
        this.element.style.transform = "translate3d(0px, 0px, 0px)";
    },

    hideContactCard: function() {
        this.element.style.transform = "translate3d(0px, -200%, 0px)";
    }
};

contactCard.contactButton.addEventListener("click", function(){
    contactCard.showContactCard();
});


contactCard.exit.addEventListener("click", function(){
    contactCard.hideContactCard();
});


menu.mobile.addEventListener('click', function (e) {
    window.requestAnimationFrame(navigationToggle);
    e.preventDefault();
});

menu.text.addEventListener('click', function (e) {
    window.requestAnimationFrame(navigationToggle);
    e.preventDefault();

});

var itemRow = document.querySelectorAll('.service-item');
var elem = document.querySelector(".midway-banner");
var image = document.querySelector(".iPhone-doctor");




function parallaxScroll() {

    var scrollHeight = window.pageYOffset;
    var elemBox = elem.getBoundingClientRect();
    var lag = document.querySelector('.iPhone-doctor').getAttribute("data-lag");
    var elemHeight = image.getBoundingClientRect();


    if(elemBox.top >= window.innerHeight || elemBox.bottom <= 0) {
        image.removeAttribute("style");

    }
        else {
            //console.log(elemBox.height, window.innerHeight, window.innerWidth, scrollHeight, elemBox);
            image.style.transform = "translate3d(0px, " + Math.round(elemBox.top / -(lag)) + "px, 0px)";
            
        }

}
document.addEventListener("scroll", function() {
    window.requestAnimationFrame(parallaxScroll);
});

