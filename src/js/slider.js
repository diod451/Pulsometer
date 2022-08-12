$(document).ready(function () {
	$('.carousele__inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1500,
		prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../img/right.png" alt=""></button>',
	});


	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function () {
		$(this)
			.addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
			.closest('section.catalog').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
	});


	// $('.catalog-item__link').each(function (i) {
	// 	$(this).on('click', function (e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
	// 	})
	// });

	// $('.catalog-item__back').each(function (i) {
	// 	$(this).on('click', function (e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
	// 	})
	// });

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
});