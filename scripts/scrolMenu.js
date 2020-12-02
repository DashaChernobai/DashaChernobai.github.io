
    window.onscroll = function() {
checkMarginToTop();
};

var nav = document.getElementById("nav");

var sticky = nav.offsetTop;

function checkMarginToTop() {
    if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
} else {
    nav.classList.remove("sticky");
}
}
