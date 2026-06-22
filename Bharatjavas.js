let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll =   () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');
window.addEventListener('scroll',() => {
    header.classList.toggle('shadow', window.scrollY > 0 );
});



let buttons = document.querySelectorAll(".menu-btn");
let menuBoxes = document.querySelectorAll(".menu-box");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    // ACTIVE BUTTON REMOVE

    buttons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    // CATEGORY

    let category = button.getAttribute("data-category");

    // HIDE ALL

    menuBoxes.forEach(box => {
      box.classList.remove("show");
    });

    // SHOW SELECTED

    document.querySelector("." + category)
    .classList.add("show");

  });

});





