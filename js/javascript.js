
//Loading Screen
document.addEventListener("DOMContentLoaded", function(){
    var loading = document.querySelector('.loading-screen');
    loading.style.opacity = "0";

    setTimeout(function(){
        loading.style.display = "none";
    }, 1000);

    console.log("Loader-removed!!");
})


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
        this.element.style.transform = "translate3d(0px, -200%, 0px)"
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

var lazyloadServices = {
    itemRowArray: [''],

    log: function() {
        console.log(lazyloadServices.itemRow.length);
    },

    load: function() {
        for (i = 0; i <= element.length; i++) {
            console.log(element[i].classList);
        }
    }
    
};

