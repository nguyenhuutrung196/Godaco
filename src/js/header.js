import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
	scrollActive: function () {
		let height = $("header").height();
		if ($(window).scrollTop() > height) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	},
	mobile: function () {
		$(".header-hambuger").on("click", function () {
			$(this).toggleClass("active")
			$('.header-menu-mobile').toggleClass("active")

		});
		if (window.matchMedia("(max-width: 1279px)").matches) {
			$(".header-menu").appendTo(".header-menu-mobile");
			$(".header-menu li").each(function () {
				if ($(this).hasClass("has-child")) {
					$(this).append('<span class="dropdown-button"><em class="fa-light fa-chevron-right"></em></span>');
				}
			});
			$("li.has-child .dropdown-button").on("click", function () {
				$(this).toggleClass('active')
				$(this).parent().children(".drop-down").slideToggle();
			});
			$(".header-language").appendTo(".header-menu-mobile");
		}
	},
	init: function () {
		headerSearch();
		header.scrollActive();
		header.mobile();
	},
};
document.addEventListener(
	"scroll",
	function (e) {
		header.scrollActive();
	},
	true
);
