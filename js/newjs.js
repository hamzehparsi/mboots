let items = document.querySelectorAll(".nav-item");
items.forEach((element) => {
  element.addEventListener("mouseover", function handlehover(event) {
    subMenu = element.children[1];
    subMenu.style.opacity = "100";
    subMenu.style.top = "100px";
    subMenu.style.visibility = "visible";
  });
});
items.forEach((element) => {
  element.addEventListener("mouseleave", function handlehover(event) {
    subMenu = element.children[1];
    subMenu.style.opacity = "0";
    subMenu.style.top = "100px";
    subMenu.style.visibility = "hidden";
  });
});

let sub = document.querySelector(".new-menu");

// console.log(document.documentElement.clientHeight);
document.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    sub.style.visibility = "hidden";
  }
});
let modalContent = document.querySelector('.modal-content-search-result')
let modalBox = document.querySelector('.modal')
modalContent.addEventListener('click', () => {
  modalBox.classList.toggle('show')
})








$(document).ready(function () {
  $(".owl-one").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    rtl: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".owl-two").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    rtl: true,
    responsive: {
      0: {
        margin: 10,
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".owl-slider").owlCarousel({
    loop: true,
    // margin: 10,
    nav: true,
    stagePadding: 50,
    rtl: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        stagePadding: 10,
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-s").owlCarousel({
    loop: true,
    // margin: 10,
    // nav: true,
    // stagePadding: 50,
    rtl: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-blog").owlCarousel({
    // loop: true,
    margin: 0,
    nav: true,
    stagePadding: 0,
    rtl: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-search").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    rtl: true,
    dots: false,
    stagePadding: 50,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  $(".owl-product-inside").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    rtl: true,
    dots: false,
    stagePadding: 50,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items:4,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".owl-pish").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    rtl: true,
    dots: false,
    stagePadding: 50,
    responsive: {
      0: {
        items: 1,
        stagePadding: 10,
      },
      600: {
        items:1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
