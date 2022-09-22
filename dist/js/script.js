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

	// Modal
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn(600);
	});

	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut(400);
	});

	// $('.button__mini').on('click', function () {
	// 	$('.overlay, #order').fadeIn(600);
	// });

	$('.button__mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
			$('.overlay, #order').fadeIn(600);
		});
	});


	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 3
				},
				phone: {
					required: true
				},
				email: {
					required: true,
					email: true
				}
			}
		});
	}
	validateForms('#order form');
	validateForms('#consultation form');
	validateForms('.consultation .consultation__form');


	$('input[type=tel]').inputmask("+7-999-99-99-99", { showMaskOnHover: true });

	$('form').submit(function (e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn();
			$('form').trigger('reset');
		});
		return false;
	});

	//Pageup
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	//Smooth scroll
	$("a[href^='#']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

});