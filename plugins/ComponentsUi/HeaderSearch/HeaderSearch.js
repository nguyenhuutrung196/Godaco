import $ from "jquery";
export function headerSearch() {
	function closeSearch() {
		$(".header-search-form").removeClass("active");
		$("body").removeClass("disable");
	}
	$(".header-menu-search .icon-search").on("click", function () {
		$(".header-search-form").addClass("active");
		$("body").addClass("disable");
		setTimeout(() => {
			$(".header-search-form .searchinput").focus();
		}, 400);
	});
	$(".header-search-form .close").on("click", function () {
		closeSearch();
	});
	$(document).keyup(function (e) {
		if (e.key === "Escape") {
			closeSearch();
		}
	});
	$(document).on("click", function (e) {
		if ($(".header-search-form").hasClass("active")) {
			console.log(e.target);
			if (!$(e.target).closest(".productsearchbox").length && !$(e.target).closest(".icon-search").length) {
				closeSearch();
			}
		}
	});
}
