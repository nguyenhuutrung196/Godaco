export function setBackgroundDesktopElement() {
	$("[setBackgroundDesktop]").each(function () {
		var background = $(this).attr("setBackgroundDesktop");
		if (window.screen.width >= 1024) {
			$(this).css({
				"background-image": "url(" + background + ")",
				"background-size": "cover",
				"background-position": "center center",
			});
		}
	});

	$("[setBackgroundMobile]").each(function () {
		var background = $(this).attr("setBackgroundMobile");
		if (window.screen.width < 1024) {
			$(this).css({
				"background-image": "url(" + background + ")",
				"background-size": "cover",
				"background-position": "center center",
			});
		}
	});
}
export function detectCloseElement(ele, ele2, funcRemove) {
	// close
	$(document).on("click", function (e) {
		console.log();
		if (!$(e.target).closest(ele).length && !$(e.target).hasClass(ele2)) {
			funcRemove();
		}
	});
	// esc
	$(document).keyup(function (e) {
		if (e.key === "Escape") {
			funcRemove();
		}
	});
	// overlay-blur
}
export function buttonToTop() {
	let windowHeight = $(window).height();
	$(document).on("scroll", function () {
		let scrollTop = $(window).scrollTop();
		let documentHeight = $(document).height();
		const isNearBottom =
			scrollTop + windowHeight > documentHeight - windowHeight;
		const isHalfScreen = scrollTop > windowHeight;
		if (isHalfScreen) {
			$(".button-to-top").addClass("active");
		} else {
			$(".button-to-top").removeClass("active");
		}
	});
	$(document).on("click", ".button-to-top", function () {
		$("html, body").animate({ scrollTop: 0 });
	});
}

export function ToggleItem() {
	const nodeParent = $(".wrap-item-toggle");
	const nodeItem = nodeParent.find(".item-toggle");
	const nodeTitle = nodeItem.find(".title");
	nodeTitle.on("click", function () {
		$(this)
			.toggleClass("active")
			.next()
			.slideToggle()
			.closest(".item-toggle")
			.siblings()
			.find(".title")
			.removeClass("active")
			.next()
			.slideUp();
	});
}

/**
 * parent, children, item, button, initItem
 * @param { parent, children, item, button, initItem} listNode
 */
export function funcExpandContent(listNode) {
	const { parent, children, item, button, initItem, gap = 0 } = listNode;
	if (!$(parent).length) return;
	let itemHeight = $(item).outerHeight();
	let gapCalculate = gap
		? Number($(parent).find(children).css("column-gap").slice(0, -2)) * gap
		: 0;
	let initHeight = itemHeight * initItem + gapCalculate;
	let originalHeight = $(parent).find(children).outerHeight();
	if (originalHeight < initHeight) {
		$(button).remove();
	} else {
		$(parent).css("height", initHeight);
	}
	$(button).on("click", function () {
		if ($(this).hasClass("expand")) {
			$(parent).css("height", initHeight);
			$(this).find("span").text("Xem thêm");
		} else {
			$(parent).css("height", originalHeight);
			// setTimeout(() => {
			// 	$(parent).css("height", "auto");
			// }, 1000);
			$(this).find("span").text("Rút gọn");
		}
		$(this).toggleClass("expand");
	});
}

export function clickScrollToDiv(nodeEle, heightSpacing = () => {}) {
	$(nodeEle).on("click", function (event) {
		let height = 0;
		$(this).parent().addClass("active").siblings().removeClass("active");
		if (heightSpacing) {
			height = heightSpacing();
		} else {
			height = 0;
		}
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top - height,
				},
				800
			);
		}
	});
}

export function appendCaptchaASP() {
	if (!$("#ctl00_mainContent_ctl01_pnlFormWizard").length) return;
	// Select the div element you want to observe
	const myDiv = document.querySelector(
		"#ctl00_mainContent_ctl01_pnlFormWizard"
	);
	// Create a new MutationObserver object
	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			console.log("Run");
			appendCaptcha();
		});
	});
	// Configure the observer to listen for changes to the "class" attribute
	const config = { attributes: true, characterData: true, childList: true };
	// Start observing the target div element
	observer.observe(myDiv, config);
	function appendCaptcha() {
		$(".form-group.frm-captcha").appendTo(".wrap-form-submit");
		$(".form-group.frm-btnwrap").appendTo(".wrap-form-submit");
	}
	appendCaptcha();
}

export function clickScroll() {
	var sectionArray = [1, 2, 3, 4, 5];

	$.each(sectionArray, function (index, value) {
		$(document).scroll(function () {
			var offsetSection = $("#" + "section_" + value).offset().top
			var docScroll = $(document).scrollTop();
			var docScroll1 = docScroll + 1;

			if (docScroll1 >= offsetSection) {
				$(".menu-innert-company li a").removeClass("active");
				$(".menu-innert-company li a:link").addClass("inactive");
				$(".menu-innert-company li a").eq(index).addClass("active");
				$(".menu-innert-company li a:link").eq(index).removeClass("inactive");
			}
		});

		$(".menu-innert-company li a")
			.eq(index)
			.click(function (e) {
				var offsetClick = $("#" + "section_" + value).offset().top - 100;
				e.preventDefault();
				$("html, body").animate(
					{
						scrollTop: offsetClick,
					},
					300
				);
			});
	});

	$(document).ready(function () {
		$(".menu-innert-company li a:link").addClass("inactive");
		$(".menu-innert-company li a").eq(0).addClass("active");
		$(".menu-innert-company li a:link").eq(0).removeClass("inactive");
	});
}