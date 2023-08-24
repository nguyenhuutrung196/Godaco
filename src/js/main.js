import { CountUp } from "countup.js";
import AOS from "aos";
import lozad from "lozad";
import {
	setBackgroundDesktopElement,
	detectCloseElement,
	buttonToTop,
	clickScrollToDiv,
	appendCaptchaASP,
	clickScroll,
} from "./helper";
import { header } from "./header";
import swiperInit from "./swiper";
import { clickLoadMoreAjax } from "./utils";
$(document).ready(function () {
	setBackgroundDesktopElement();
	header.init();
	swiperInit();
	appendCaptchaASP();
	appendBreadcrumb();
	SelectSortProvider();
	AOS.init();
	buttonToTop();
	clickLoadMoreAjax();
	handleReport();
	clickScroll();

	// Custom
	handleToggleFaq();
	handleSlideProductList();
});
function handleReport() {
	if (!$(".section-infomation-disclosure").length) return;
	console.log("Runn");
	$(".swiper-slide-active a").trigger("click");
}
/*==================== SelectSortProvider ====================*/
function SelectSortProvider() {
	function processAjax(url, nodeElement) {
		$.ajax({
			url: url,
			beforeSend: function (data) {
				$(".loading").addClass("active");
			},
			success: async function (data) {
				$(".ajaxResponse").html($(data).find(".ajaxResponse").html());
				if ($(".pages.newspager").length) {
					if ($(data).find(".pages").length) {
						$(".pages.newspager").html($(data).find(".pages.newspager").html());
					} else {
						$(".pages").html("");
					}
				} else {
					$(".ajaxResponse").append($(data).find(".pages.newspager").html());
				}
				$(".loading").removeClass("active");
				observer.observe();
			},
		});
	}
	$(".tab-select-provider select").on("change", function () {
		let value = $(this).val();
		console.log("🚀 ~ file: main.js:47 ~ value:", value);
		processAjax(value);
	});
	let ajaxTimeoutId;
	$(".ajaxLink").on("click", function (e) {
		e.preventDefault();
		let value = $(this).attr("href");
		debounceAjax(value);
		return false;
	});
	function debounceAjax(value) {
		if (ajaxTimeoutId) {
			clearTimeout(ajaxTimeoutId); // clear the previous timeout if it exists
		}
		ajaxTimeoutId = setTimeout(() => {
			processAjax(value); // call the processAjax() function after a debounce
		}, 500); // set a debounce timeout of 500ms (adjust the time as needed)
	}
}

/*==================== Append Breadcrumb ====================*/

function appendBreadcrumb() {
	if (!$(".page-banner-main").length) return;
	$(".global-breadcrumb").appendTo(".page-banner-main .wrap-global-breadcrumb");
}

const observerPhase = new IntersectionObserver(
	(entries, observe) => {
		entries.forEach((entry) => {});
	},
	{
		threshold: [1],
		rootMargin: "0px",
	}
);
const nodeElementsTEst = document.querySelectorAll(
	".wrap-item-phase .text-phase-main"
);
nodeElementsTEst.forEach((ele) => {
	observerPhase.observe(ele);
});

const nodeElements = document.querySelectorAll(".text-phase-main");

window.addEventListener("scroll", function () {
	nodeElements.forEach((nodeElement) => {
		const rect = nodeElement.getBoundingClientRect();
		const position = rect.top + window.scrollY;
		const viewportTop = window.scrollY;
		const threshold = 200;
		const namePhase = $(nodeElement).data("phase");
		if (position <= viewportTop + threshold) {
			nodeElement.classList.add("active");
			$(`a[href="#${namePhase}"]`)
				.addClass("active-scroll")
				.parent()
				.siblings()
				.find("a")
				.removeClass("active-scroll");
			$(".wrap-phase-mobile .wrap-select select").val(namePhase).change();
		} else {
			$(`a[href="#${namePhase}"]`).removeClass("activ-scroll");
			nodeElement.classList.remove("active");
		}
	});
});
/*==================== Policy - Click Expand Content  ====================*/
function clickExpandContentPolicy() {
	if (!$(".section-page-policy").length) return;
	const $nodeBox = $(".wrap-content-main");
	const $button = $(".section-page-policy .btn-view-more");
	const paddingNodeBox = Number($nodeBox.css("padding-top").slice(0, 2));
	const totalHeightInit =
		$(".wrap-content-main .box-content-divide").eq(0).outerHeight() +
		$(".wrap-content-main .box-content-divide").eq(1).outerHeight() +
		paddingNodeBox * 2;
	const totalHeight =
		$nodeBox.find(".hidden-content").outerHeight() + paddingNodeBox * 2;
	$nodeBox.css("height", totalHeightInit);
	// $('.section-page-policy .btn-view-more').on('click', function () {
	// 	$nodeBox.css('height', totalHeight + 80)
	// })
	$button.on("click", function () {
		if ($(this).hasClass("expand")) {
			$nodeBox.css("height", totalHeightInit);
			$(this).find("span").text("Xem thêm");
		} else {
			$nodeBox.css("height", totalHeight);
			$(this).find("span").text("Rút gọn");
		}
		$(this).toggleClass("expand");
	});
}

function handleToggleFaq() {
	const tops = document.querySelectorAll(".top");

	if (top) {
		tops.forEach(function (top) {
			top.addEventListener("click", function () {
				const content = top.parentElement.querySelector(".content");
				let heightContent = content.scrollHeight;
				this.classList.add("active");
				content.style.maxHeight = `${heightContent}px`;
				console.log(content.style.maxHeight);
			});
		});
	}
}

function handleSlideProductList() {
	const $icons = $(".menu-sidebar .icon");

	$.each($icons, function (index, icon) {
		$(icon).click(function () {
			$(this).addClass("active");
			$(this).closest(".item").siblings("ul").slideToggle();
		});
	});
}

/*==================== Lazyload JS ====================*/
var observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
