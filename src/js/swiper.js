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
	var homeBanner = new Swiper(`.home-banner-swiper .swiper`, {
		modules: [Autoplay, Pagination],
		slidesPerView: 1,
		// autoplay: {
		// 	delay: 5000,
		// },
		pagination: {
			el: `.home-banner-swiper .swiper-pagination`,
			type: "bullets",
			clickable: true,
		},
	});

	var home1 = new Swiper(`.product-other-swiper .swiper`, {
		modules: [Autoplay, Pagination, Navigation],
		slidesPerView: 1,
		spaceBetween: 32,
		// autoplay: {
		// 	delay: 5000,
		// },
		pagination: {
			el: `.product-other-swiper .swiper-pagination`,
			type: "bullets",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			prevEl: `.product-other-swiper .btn-prev`,
			nextEl: `.product-other-swiper .btn-next`,
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
	});

	var home3 = new Swiper(`.home-3-swiper .swiper`, {
		loop: true,
		modules: [Autoplay, Navigation],
		slidesPerView: 1,
		// autoplay: {
		// 	delay: 5000,
		// },
		navigation: {
			prevEl: `.home-3-swiper .btn-prev`,
			nextEl: `.home-3-swiper .btn-next`,
		},
	});

	if ($(`.home-3-swiper .swiper`).length != 0) {
		const totalItem = $(".home-3-swiper .swiper-slide").length;
		let currentItem = 1;

		$(".home-3-swiper .btn-prev").on("click", function () {
			if (currentItem <= 1) {
				currentItem = totalItem;
				$(".home-3-swiper .number-index").html(currentItem);
			} else {
				currentItem--;
				$(".home-3-swiper .number-index").html(currentItem);
			}
		});

		$(".home-3-swiper .btn-next").on("click", function () {
			if (currentItem >= totalItem) {
				currentItem = 1;
				$(".home-3-swiper .number-index").html(currentItem);
			} else {
				currentItem++;
				$(".home-3-swiper .number-index").html(currentItem);
			}
		});

		$(".home-3-swiper .number-index").html(currentItem);
		$(".home-3-swiper .total-index").html(totalItem);
	}

	var home4 = new Swiper(`.home-4-swiper .swiper`, {
		modules: [Autoplay, Pagination, Navigation],
		slidesPerView: 2,
		spaceBetween: 15,
		// autoplay: {
		// 	delay: 5000,
		// },
		pagination: {
			el: `.home-4-swiper .swiper-pagination`,
			type: "bullets",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			prevEl: `.home-4-swiper .btn-prev`,
			nextEl: `.home-4-swiper .btn-next`,
		},
		breakpoints: {
			576: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 120,
			},
		},
	});

	var home5 = new Swiper(`.home-5-swiper .swiper`, {
		modules: [Autoplay, Pagination, Navigation],
		slidesPerView: 2,
		spaceBetween: 15,
		// autoplay: {
		// 	delay: 5000,
		// },
		pagination: {
			el: `.home-5-swiper .swiper-pagination`,
			type: "bullets",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			prevEl: `.home-5-swiper .btn-prev`,
			nextEl: `.home-5-swiper .btn-next`,
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
	});

	var about2Thumb = new Swiper(`.about-2 .swiper-thumb .swiper`, {
		modules: [],
		slidesPerView: 5,
	});

	var about2Main = new Swiper(`.about-2 .swiper-main .swiper`, {
		modules: [Autoplay, Pagination, Navigation, Thumbs],
		slidesPerView: 3,
		spaceBetween: 32,
		// autoplay: {
		// 	delay: 5000,
		// },
		thumbs: {
			swiper: about2Thumb,
		},
		pagination: {
			el: `.about-2 .swiper-main .swiper-pagination`,
			type: "bullets",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			prevEl: `.about-2 .swiper-main .btn-prev`,
			nextEl: `.about-2 .swiper-main .btn-next`,
		},
	});

	var about6 = new Swiper(`.about-6-swiper .swiper`, {
		modules: [Autoplay, Pagination, Navigation, Thumbs],
		slidesPerView: 4,
		spaceBetween: 32,
		// autoplay: {
		// 	delay: 5000,
		// },
		pagination: {
			el: `.about-6-swiper .swiper-pagination`,
			type: "bullets",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			prevEl: `.about-6-swiper .btn-prev`,
			nextEl: `.about-6-swiper .btn-next`,
		},
	});

	var aquaculture = new Swiper(`.aquaculture-swiper .swiper`, {
		modules: [Pagination],
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: `.aquaculture-swiper .swiper-pagination`,
			type: "bullets",
			clickable: true,
			dynamicBullets: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1024: {
				spaceBetween: 100,
				slidesPerView: 3,
			},
			1920: {
				spaceBetween: 198,
				slidesPerView: 3,
			},
		},
	});

	var productList = new Swiper(`.box-top-swiper .swiper`, {
		modules: [Autoplay, Pagination, Navigation],
		slidesPerView: 2,
		spaceBetween: 15,
		// autoplay: {
		// 	delay: 5000,
		// },
		pagination: {
			el: `.box-top-swiper .swiper-pagination`,
			type: "bullets",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			prevEl: `.box-top-swiper .btn-prev`,
			nextEl: `.box-top-swiper .btn-next`,
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 32,
			},
			1024: {
				slidesPerView: 6,
			},
		},
	});

	var productThumb = new Swiper(`.swiper-thumb .swiper`, {
		modules: [Autoplay, Navigation, Grid],
		slidesPerView: 1,
		spaceBetween: 12,
		// autoplay: {
		// 	delay: 5000,
		// },
		grid: {
			rows: 5,
		},
		navigation: {
			prevEl: `.swiper-thumb .btn-prev`,
			nextEl: `.swiper-thumb .btn-next`,
		},
	});

	var productMain = new Swiper(`.swiper-main .swiper`, {
		modules: [Autoplay, Navigation, Thumbs],
		slidesPerView: 1,
		// autoplay: {
		// 	delay: 5000,
		// },
		thumbs: {
			swiper: productThumb,
		},
		navigation: {
			prevEl: `.swiper-main  .btn-prev`,
			nextEl: `.swiper-main  .btn-next`,
		},
	});

	var productOther = new Swiper(`.home-1-swiper .swiper`, {
		modules: [Autoplay, Pagination, Navigation],
		slidesPerView: 2,
		spaceBetween: 15,
		// autoplay: {
		// 	delay: 5000,
		// },
		pagination: {
			el: `.home-1-swiper .swiper-pagination`,
			type: "bullets",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			prevEl: `.home-1-swiper .btn-prev`,
			nextEl: `.home-1-swiper .btn-next`,
		},
		breakpoints: {
			576: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 32,
			},
		},
	});
}
