$(document).ready(function () {
	$(".newmegamenu li").on("mouseenter", function () {
		$(this).find("a").addClass("result_hover")
		$(this).find(".grid").css('display', 'grid')
	}).on("mouseleave", function () {
		$(this).find("a").removeClass("result_hover")
		$(this).find(".grid").css('display', 'none')
	});
});

$('.box1slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	rtl: true,
	autoplay: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
			}
		},
	]
});
$('.aboutlider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	rtl: true,
	autoplay: true,
	fade: true,
});
$('.mortabetslider').slick({
	slidesToShow: 5,
	slidesToScroll: 3,
	arrows: false,
	dots: true,
	rtl: true,
	autoplay: true,
	responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 2,
				dots: true,
			}
		},
		{
			breakpoint: 1119,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				dots: true,
			}
		},
		{
			breakpoint: 883,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				dots: true,
			}
		},
		{
			breakpoint: 710,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
			}
		},
		{
			breakpoint: 606,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			}
		},
	]
});
$('.box2resslider1').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	rtl: true,
	autoplay: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				dots: true,
			}
		},
		{
			breakpoint: 934,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
			}
		},
		{
			breakpoint: 710,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: true,
			}
		},
		{
			breakpoint: 629,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			}
		},
	]
});

$('.box2resslider2').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	rtl: true,
	autoplay: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				dots: true,
			}
		},
		{
			breakpoint: 934,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
			}
		},
		{
			breakpoint: 710,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: true,
			}
		},
		{
			breakpoint: 629,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			}
		},
	]
});

$(document).ready(function () {
	$(document).ready(function () {
		$('.res-icon .res-open').click(
			function () {
				$(".res-menu").css("right", "0");
				$(".res-menu").css("opacity", "1");
				$(".res-open").hide();
				$(".res-close").show();
			}
		)
	});
	$(document).ready(function () {
		$('.res-close').click(
			function () {
				$(".res-menu").css("right", "-1500px");
				$(".res-menu").css("opacity", "0");
				$(".res-open").show();
				$(".res-close").hide();
			}
		)
	});
});
$('.singleconslider1').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	fade: true,
	asNavFor: '.singleconslider2',
	infinite: true,
	rtl: true,
});
$('.singleconslider2').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	asNavFor: '.singleconslider1',
	dots: false,
	arrows: false,
	focusOnSelect: true,
	infinite: false,
	rtl: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 1,
				dots: true,
			}
		},
		{
			breakpoint: 710,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 606,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 511,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
	]
});
$('.hero').slick({
	arrows: true,
	prevArrow: ".heroprev",
	nextArrow: ".heronext",
	dots: true,
	rtl: true,
	fade: true,
	autoplay: true,
});
$('.b2slider').slick({
	arrows: false,
	dots: true,
	rtl: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
});
$('.b3slider').slick({
	arrows: false,
	dots: true,
	rtl: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
});
$('.box3slider').slick({
	arrows: false,
	dots: false,
	rtl: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	responsive: [
		{
			breakpoint: 710,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true,
			}
		},
		{
			breakpoint: 450,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
			}
		},
	]
});
$('.slick').slick({
	dots: true,
	touchThreshold: 100,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	centerMode: true,
	infinite: false,
	rtl: true,
	autoplay: true,
	responsive: [
		{
			breakpoint: 570,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				centerMode: true,
			}
		},
	]
});
$('.box7slider').slick({
	dots: true,
	slidesToShow: 1,
	rtl: true,
	fade: true,
	arrows: false,
	autoplay: true,
});
$('.box6res1').slick({
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	rtl: true,
	autoplay: true,
	responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 943,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 710,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
$('.box6slider1').slick({
	dots: true,
	slidesToShow: 1,
	rtl: true,
	arrows: false,
});
$('.box6slider2').slick({
	dots: true,
	slidesToShow: 1,
	rtl: true,
	arrows: false,
});


$(document).ready(function () {
	$('.res-menu ul li').before().click(
		function () {
			$(this).find('ul').slideToggle(300);
		}
	)
});
$(document).ready(function () {
	$('.f-menu .menu-has-child2').before().click(
		function () {
			$(this).find('ul').slideToggle(300);
		}
	)
});


$(document).ready(function () {
	$('.searchbtn').click(
		function () {
			$(".searchbox").css("top", "0");
			$(".searchbox").css("visibility", "visible");
		}
	)
});

$(document).ready(function () {
	$('.searchboxclose').click(
		function () {
			$(".searchbox").css("top", "-500px");
			$(".searchbox").css("visibility", "hidden");
		}
	)
});

$(document).ready(function () {
	$('#d1btn').click(
		function () {
			$(".d1").css("visibility", "visible");
			$(".d1").css("opacity", "1");
			$(".d2").css("visibility", "hidden");
			$(".d2").css("opacity", "0");
			$(".box2resslider1").css("visibility", "visible");
			$(".box2resslider1").css("opacity", "1");
			$(".box2resslider2").css("visibility", "hidden");
			$(".box2resslider2").css("opacity", "0");
			$('#d2btn').removeClass('active');
			$('#d1btn').addClass('active');
		}
	)
});

$(document).ready(function () {
	$('#d2btn').click(
		function () {
			$(".d2").css("visibility", "visible");
			$(".d2").css("opacity", "1");
			$(".d1").css("visibility", "hidden");
			$(".d1").css("opacity", "0");
			$(".box2resslider2").css("visibility", "visible");
			$(".box2resslider2").css("opacity", "1");
			$(".box2resslider1").css("visibility", "hidden");
			$(".box2resslider1").css("opacity", "0");
			$('#d1btn').removeClass('active');
			$('#d2btn').addClass('active');
		}
	)
});




$(document).ready(function () {
	$('#box6d1btn').click(
		function () {
			$("#b2d1").css("visibility", "visible");
			$("#b2d1").css("opacity", "1");
			$("#b2d2").css("visibility", "hidden");
			$("#b2d2").css("opacity", "0");
			$("#myb1").css("visibility", "visible");
			$("#myb1").css("opacity", "1");
			$("#myb2").css("visibility", "hidden");
			$("#myb2").css("opacity", "0");
			$('#box6d2btn').removeClass('active');
			$('#box6d1btn').addClass('active');
		}
	)
});

$(document).ready(function () {
	$('#box6d2btn').click(
		function () {
			$("#b2d2").css("visibility", "visible");
			$("#b2d2").css("opacity", "1");
			$("#b2d1").css("visibility", "hidden");
			$("#b2d1").css("opacity", "0");
			$("#myb2").css("visibility", "visible");
			$("#myb2").css("opacity", "1");
			$("#myb1").css("visibility", "hidden");
			$("#myb1").css("opacity", "0");
			$('#box6d1btn').removeClass('active');
			$('#box6d2btn').addClass('active');
		}
	)
});

$(document).ready(function () {
	$('.resopenmenu').click(
		function () {
			$(".resmenu").css("visibility", "visible");
			$(".resmenu").css("opacity", "1");
			$(".resmenu").css("right", "0");
			$(".resclosemenu").css("visibility", "visible");
			$(".resclosemenu").css("opacity", "1");
		}
	)
});

$(document).ready(function () {
	$('.box5btn').click(
		function () {
			$(".dream").css("visibility", "visible");
			$(".dream").css("opacity", "1");
			$(".dream").css("top", "50%");
			$(".closedream").css("visibility", "visible");
			$(".closedream").css("opacity", "1");
		}
	)
});

$(document).ready(function () {
	$('.closedream').click(
		function () {
			$(".dream").css("visibility", "hidden");
			$(".dream").css("opacity", "0");
			$(".dream").css("top", "40%");
			$(".closedream").css("visibility", "hidden");
			$(".closedream").css("opacity", "0");
		}
	)
});

$(document).ready(function () {
	$('.resclosemenu').click(
		function () {
			$(".resmenu").css("visibility", "hidden");
			$(".resmenu").css("opacity", "0");
			$(".resmenu").css("right", "-500px");
			$(".resclosemenu").css("visibility", "hidden");
			$(".resclosemenu").css("opacity", "0");
		}
	)
});

$(document).ready(function () {
	$('.resclosemenubtn').click(
		function () {
			$(".resmenu").css("visibility", "hidden");
			$(".resmenu").css("opacity", "0");
			$(".resmenu").css("right", "-500px");
			$(".resclosemenu").css("visibility", "hidden");
			$(".resclosemenu").css("opacity", "0");
		}
	)
});

$(document).ready(function () {
	$('.langbtn').click(
		function () {
			$(".langs").fadeToggle();
		}
	)
});

$(document).ready(function () {
	$('.filterres').click(
		function () {
			$(".resfilterbox").css("visibility", "visible");
			$(".resfilterbox").css("right", "0");
			$(".resfilterbox").css("opacity", "1");
			$(".closeresfilter").css("visibility", "visible");
			$(".closeresfilter").css("opacity", "1");
		}
	)
});

$(document).ready(function () {
	$('.closeresfilter').click(
		function () {
			$(".resfilterbox").css("visibility", "hidden");
			$(".resfilterbox").css("right", "-500px");
			$(".resfilterbox").css("opacity", "0");
			$(".closeresfilter").css("visibility", "hidden");
			$(".closeresfilter").css("opacity", "0");
		}
	)
});

$(document).ready(function () {
	$('.closefiltersvg').click(
		function () {
			$(".resfilterbox").css("visibility", "hidden");
			$(".resfilterbox").css("right", "-500px");
			$(".resfilterbox").css("opacity", "0");
			$(".closeresfilter").css("visibility", "hidden");
			$(".closeresfilter").css("opacity", "0");
		}
	)
});


$('.resmenu .menu-item-has-children > a').on('click', function (e) {
	e.preventDefault();
	var submenu = $(this).parent().children('.resmenu .sub-menu');
	if ($(submenu).is(':hidden')) {
		$(submenu).slideDown(200);
	} else {
		$(submenu).slideUp(200);
	}
});

$('.sidebarcat .menu-item-has-children > a').on('click', function (e) {
	e.preventDefault();
	var submenu = $(this).parent().children('.sidebarcat .sub-menu');
	if ($(submenu).is(':hidden')) {
		$(submenu).slideDown(200);
	} else {
		$(submenu).slideUp(200);
	}
});

$(document).ready(function () {
	var password = document.getElementById("password");
	$('.showpass').click(
		function () {
			password.type = "text";
			$(".showpass").css("display", "none");
			$(".hidepass").css("display", "block");
		}
	);
	$('.hidepass').click(
		function () {
			password.type = "password";
			$(".showpass").css("display", "block");
			$(".hidepass").css("display", "none");
		}
	);
});

$(document).ready(function () {
	var password = document.getElementById("spassword1");
	$('.showsvg1').click(
		function () {
			password.type = "text";
			$(".showsvg1").css("display", "none");
			$(".hidesvg1").css("display", "block");
		}
	);
	$('.hidesvg1').click(
		function () {
			password.type = "password";
			$(".hidesvg1").css("display", "none");
			$(".showsvg1").css("display", "block");
		}
	);
});

$(document).ready(function () {
	var password = document.getElementById("spassword2");
	$('.showsvg2').click(
		function () {
			password.type = "text";
			$(".showsvg2").css("display", "none");
			$(".hidesvg2").css("display", "block");
		}
	);
	$('.hidesvg2').click(
		function () {
			password.type = "password";
			$(".hidesvg2").css("display", "none");
			$(".showsvg2").css("display", "block");
		}
	);
});



$(document).ready(function () {
	$('.login').click(
		function () {
			$(".popuplogin").css("visibility", "visible");
			$(".popuplogin").css("opacity", "1");
			$(".closepopup").css("opacity", "1");
			$(".closepopup").css("visibility", "visible");
		}
	)
});

$(document).ready(function () {
	$('.reslogin').click(
		function () {
			$(".popuplogin").css("visibility", "visible");
			$(".popuplogin").css("opacity", "1");
			$(".closepopup").css("opacity", "1");
			$(".closepopup").css("visibility", "visible");
		}
	)
});

$(document).ready(function () {
	$('.loginbtn').click(
		function () {
			$(".popuplogin").css("visibility", "visible");
			$(".popuplogin").css("opacity", "1");
			$(".closepopup").css("opacity", "1");
			$(".closepopup").css("visibility", "visible");
			$(".popupsignup").css("opacity", "0");
			$(".popupsignup").css("visibility", "hidden");
		}
	)
});


$(document).ready(function () {
	$('.signup').click(
		function () {
			$(".popuplogin").css("visibility", "hidden");
			$(".popuplogin").css("opacity", "0");
			$(".closepopup").css("opacity", "1");
			$(".closepopup").css("visibility", "visible");
			$(".popupsignup").css("opacity", "1");
			$(".popupsignup").css("visibility", "visible");
		}
	)
});

$(document).ready(function () {
	$('.closepopup').click(
		function () {
			$(".popuplogin").css("visibility", "hidden");
			$(".popuplogin").css("opacity", "0");
			$(".closepopup").css("opacity", "0");
			$(".closepopup").css("visibility", "hidden");
			$(".popupsignup").css("opacity", "0");
			$(".popupsignup").css("visibility", "hidden");
		}
	)
});

$(document).ready(function () {
	$('.profileedit').click(
		function () {
			$(".userinformation").css("visibility", "visible");
			$(".userinformation").css("opacity", "1");
			$(".userinformation").css("top", "50%");
			$(".userinfoclose").css("opacity", "1");
			$(".userinfoclose").css("visibility", "visible");
		}
	)
});

$(document).ready(function () {
	$('.userinfoclose').click(
		function () {
			$(".userinformation").css("visibility", "hidden");
			$(".userinformation").css("opacity", "0");
			$(".userinformation").css("top", "60%");
			$(".userinfoclose").css("opacity", "0");
			$(".userinfoclose").css("visibility", "hidden");
		}
	)
});

$(document).ready(function () {
	$('.hogh').click(
		function () {
			$(".hoghughiinfo").css("visibility", "visible");
			$(".hoghughiinfo").css("opacity", "1");
			$(".hoghughiinfo").css("top", "50%");
			$(".hoghughiinfoclose").css("opacity", "1");
			$(".hoghughiinfoclose").css("visibility", "visible");
		}
	)
});

$(document).ready(function () {
	$('.hoghughiinfoclose').click(
		function () {
			$(".hoghughiinfo").css("visibility", "hidden");
			$(".hoghughiinfo").css("opacity", "0");
			$(".hoghughiinfo").css("top", "60%");
			$(".hoghughiinfoclose").css("opacity", "0");
			$(".hoghughiinfoclose").css("visibility", "hidden");
		}
	)
});

$(document).ready(function () {
	$('.sidebarprice h6').click(
		function () {
			$(".pricetoggle").slideToggle('fast');
		}
	)
});

$(document).ready(function () {
	$('.catbtn').click(
		function () {
			$(".sidebarcat").css("display", "block");
			$(".sidebarfilter").css("display", "none");
			$('.filterbtn').removeClass('active');
			$('.catbtn').addClass('active');
		}
	)
});

$(document).ready(function () {
	$('.filterbtn').click(
		function () {
			$(".sidebarcat").css("display", "none");
			$(".sidebarfilter").css("display", "block");
			$('.catbtn').removeClass('active');
			$('.filterbtn').addClass('active');
		}
	)
});

$(document).ready(function () {
	$('.sidebarcolor h6').click(
		function () {
			$(".sidebarcolor ul").slideToggle("fast");
		}
	)
});


$(document).ready(function () {
	$('.shopsize h6').click(
		function () {
			$(".shopsize ul").slideToggle("fast");
		}
	)
});



$(document).ready(function () {
	$('.sidebarcolorshort h6').click(
		function () {
			$(".sidebarcolorshort ul").slideToggle("fast");
		}
	)
});

$(document).ready(function () {
	$('.sidebarshostoshoo h6').click(
		function () {
			$(".sidebarshostoshoo ul").slideToggle("fast");
		}
	)
});

$(".dots").click(function () {
	$(this).closest(".cmpost").children(".edit").slideToggle("fast");
});

$(document).ready(function () {
	$('.userbtn').click(
		function () {
			$('.usermenu').slideToggle();
		}
	)
});

$(document).ready(function () {
	$('.cardbtn').click(
		function () {
			$('.singleaddtocard').fadeIn();
			$('.addtocartbox').hide();
		}
	)
});

$(document).ready(function () {
	$('.deletefromcart').click(
		function () {
			$('.addtocartbox').fadeIn();
			$('.singleaddtocard').hide();
		}
	)
});

$(".success").click(function () {
	$(this).closest(".successbox").children(".successname").fadeToggle("fast");
});


$(".singlesize input:checkbox").on('click', function () {
	var $box = $(this);
	if ($box.is(":checked")) {
		var group = "input:checkbox[name='" + $box.attr("name") + "']";
		$(group).prop("checked", false);
		$box.prop("checked", true);
	} else {
		$box.prop("checked", false);
	}
});

var sidebar = new StickySidebar('#sidebar', {
	containerSelector: '#main-content',
	innerWrapperSelector: 'sidebar__inner',
	topSpacing: 20,
	bottomSpacing: 20
});



let rangeMin = 0;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");
rangeInput.forEach((input) => {
	input.addEventListener("input", (e) => {
		let minRange = parseInt(rangeInput[0].value);
		let maxRange = parseInt(rangeInput[1].value);
		if (maxRange - minRange < rangeMin) {
			if (e.target.className === "min") {
				rangeInput[0].value = maxRange - rangeMin;
			} else {
				rangeInput[1].value = minRange + rangeMin;
			}
		} else {
			rangePrice[0].value = minRange;
			rangePrice[1].value = maxRange;
			range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
			range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
		}
	});
});
rangePrice.forEach((input) => {
	input.addEventListener("input", (e) => {
		let minPrice = rangePrice[0].value;
		let maxPrice = rangePrice[1].value;
		if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
			if (e.target.className === "min") {
				rangeInput[0].value = minPrice;
				range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
			} else {
				rangeInput[1].value = maxPrice;
				range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
			}
		}
	});
});





// (بعد از این خط چیزی قرار ندید) //

$('#myb2').slick({
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	rtl: true,
	autoplay: true,
	responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 943,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 710,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});


let searchInput = document.querySelector('#search-top')
let resultSearch = document.querySelector('.result-search')
searchInput.addEventListener('input', () => {
	resultSearch.style.display = 'block'
})
searchInput.addEventListener('input', (e) => {
	if (e.target.value == '') {
		resultSearch.style.display = 'none'
	}
})
