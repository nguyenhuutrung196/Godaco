import Swiper, {
	Autoplay,
	EffectFade,
	Grid,
	Navigation,
	Pagination,
	Thumbs,
} from "swiper";
/**
 * @param swiperInit
 */
export default function swiperInit() {
	var homeBanner = new Swiper(".home-banner-swiper .swiper", {
		modules: [Autoplay, Pagination],
		slidesPerView: 1,
		// autoplay: {
		// 	delay: 5000,
		// },
		pagination: {
			el: ".home-banner-swiper .swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});

	var home_2 = new Swiper(".home-2-bottom .swiper", {
		modules: [Pagination],
		slidesPerView: 1,
		pagination: {
			el: ".home-2-bottom .swiper-pagination",
			type: "bullets",
			clickable: true,
		},

		breakpoints: {
			// when window width is >= 768px
			768: {
				slidesPerView: 3,
			},
		},
	});

	var home_5 = new Swiper(".home-5-swiper .swiper", {
		modules: [Pagination],
		slidesPerView: 2,
		spaceBetween: 15,
		pagination: {
			el: ".home-5-swiper .swiper-pagination",
			type: "bullets",
			clickable: true,
		},

		breakpoints: {
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 5,
			},
		},
	});
	var company_history = new Swiper(".company-3-history .swiper", {
		modules: [Navigation],
		slidesPerView: 1,
		navigation: {
			nextEl: `.company-3-history .btn-next`,
			prevEl: `.company-3-history .btn-prev`,
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	});

	$(".company-3 .tabslet-content").each(function (index) {
		let nameClass = "company-slide-" + index;
		$(this).addClass(nameClass);
		new Swiper(`.company-3 .${nameClass}  .company-3-list .swiper`, {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: `.${nameClass} .company-3-list .btn-next`,
				prevEl: `.${nameClass} .company-3-list .btn-prev`,
			},
			pagination: {
				el: `.${nameClass} .company-3-list .swiper-pagination`,
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
					spaceBetween: 7.5,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		});
	});

	var product_thumb = new Swiper(".swiper-thumb .swiper", {
		slidesPerView: 3,
		spaceBetween: 5,
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1024: {
				spaceBetween: 33,
			},
		},
	});

	var product_main = new Swiper(".swiper-main .swiper", {
		modules: [Navigation, Thumbs],
		slidesPerView: 1,
		thumbs: {
			swiper: product_thumb,
		},
		navigation: {
			nextEl: `.swiper-main .btn-next`,
			prevEl: `.swiper-main .btn-prev`,
		},
	});

	var product_other = new Swiper(".product-other-swiper .swiper", {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		navigation: {
			nextEl: `.product-other-swiper .btn-next`,
			prevEl: `.product-other-swiper .btn-prev`,
		},
		pagination: {
			el: ".product-other-swiper .swiper-pagination",
			type: "bullets",
			clickable: true,
			dynamicBullets: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 7.5,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
	});

	var news = new Swiper(".news1", {
		modules: [Navigation],
		slidesPerView: 1,
		spaceBetween: 32,
		pagination: {
			clickable: true,
		},
		breakpoints: {
			768: {
			slidesPerView: 1,
			spaceBetween: 16,
		},
			1024: {
			slidesPerView: 2,
			spaceBetween: 32,
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}
