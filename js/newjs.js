let items = document.querySelectorAll(".nav-item");
let subMenu = document.querySelector(".new-menu");
items.forEach((element) => {
  element.addEventListener("mouseover", function handlehover(event) {
    subMenu.style.opacity = "100";
    subMenu.style.top = "140px";
    subMenu.style.visibility = "visible";
  });
});
items.forEach((element) => {
  element.addEventListener("mouseleave", function handlehover(event) {
    subMenu.style.opacity = "0";
    subMenu.style.top = "165px";
    subMenu.style.visibility = "hidden";
  });
});
// newProducts.addEventListener('mouseover', () => {
//     subMenu.style.opacity = '100';
//     subMenu.style.top = '140px';
//     subMenu.style.visibility = 'visible';
//     alert('jks')
// })
// newProducts.addEventListener('mouseleave', () => {
//     subMenu.style.opacity = '0';
//     subMenu.style.top = '165px';
//     subMenu.style.visibility = 'hidden';
// })

// let man = document.querySelector('#man')
// let manMenu = document.querySelector('.man-menu')
// man.addEventListener('mouseover', () => {
//     manMenu.style.opacity = '100';
//     manMenu.style.top = '145px';
//     manMenu.style.visibility = 'visible';
// })
// man.addEventListener('mouseleave', () => {
//     manMenu.style.opacity = '0';
//     manMenu.style.top = '165px';
//     manMenu.style.visibility = 'hidden';
// })

// let woman = document.querySelector('#woman')
// let womanMenu = document.querySelector('.woman-menu')
// woman.addEventListener('mouseover', () => {
//     womanMenu.style.opacity = '100';
//     womanMenu.style.top = '145px';
//     womanMenu.style.visibility = 'visible';
// })
// woman.addEventListener('mouseleave', () => {
//     womanMenu.style.opacity = '0';
//     womanMenu.style.top = '165px';
//     womanMenu.style.visibility = 'hidden';
// })

// let tajhis = document.querySelector('#tajhis')
// let tajhisMenu = document.querySelector('.tajhis-menu')
// tajhis.addEventListener('mouseover', () => {
//     tajhisMenu.style.opacity = '100';
//     tajhisMenu.style.top = '145px';
//     tajhisMenu.style.visibility = 'visible';
// })
// tajhis.addEventListener('mouseleave', () => {
//     tajhisMenu.style.opacity = '0';
//     tajhisMenu.style.top = '165px';
//     tajhisMenu.style.visibility = 'hidden';
// })

// let hamrah = document.querySelector('#hamrah')
// let hamrahMenu = document.querySelector('.hamrah-menu')
// hamrah.addEventListener('mouseover', () => {
//     hamrahMenu.style.opacity = '100';
//     hamrahMenu.style.top = '145px';
//     hamrahMenu.style.visibility = 'visible';
// })
// hamrah.addEventListener('mouseleave', () => {
//     hamrahMenu.style.opacity = '0';
//     hamrahMenu.style.top = '165px';
//     hamrahMenu.style.visibility = 'hidden';
// })

// let shoes = document.querySelector('#shoes')
// let shoesMenu = document.querySelector('.shoes-menu')

// shoes.addEventListener('mouseover', () => {
//     shoesMenu.style.opacity = '100';
//     shoesMenu.style.top = '145px';
//     shoesMenu.style.visibility = 'visible';
// })
// shoes.addEventListener('mouseleave', () => {
//     shoesMenu.style.opacity = '0';
//     shoesMenu.style.top = '165px';
//     shoesMenu.style.visibility = 'hidden';
// })

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
});
