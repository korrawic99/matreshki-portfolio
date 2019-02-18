$(document).ready(function () {
	$(document).on('click', '.portfolio-tabs-tab-show', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).html('Скрыть <img class="portfolio-tabs-tab-show__arr" src="assets/images/work-arrow-small.svg", alt="Arrow">');
		} else {
			$(this).html('Показать еще <img class="portfolio-tabs-tab-show__arr" src="assets/images/work-arrow.svg", alt="Arrow">');
		}
		return false;
	});

	var shopTabContainers = $('div.shop-tabs > div');
	shopTabContainers.hide().filter(':first').show();
	$('div.shop-tabs ul.shop-tabs-navigation a').click(function () {
		shopTabContainers.hide();
		shopTabContainers.filter(this.hash).show();
		$('div.shop-tabs ul.shop-tabs-navigation a').removeClass('selected');
		$(this).addClass('selected');
		var a = shopTabContainers.filter(this.hash);
		for (let i = 0; i < shopTabContainers.length; i++) {
			if (shopTabContainers.eq(i).find('.shop-tabs-tab-inn').hasClass('slick-initialized')) {
				shopTabContainers.eq(i).find('.shop-tabs-tab-inn').slick('unslick');
			}
		}
		if (a.attr('style') == '' && screen.width < 768){
			a.find('.shop-tabs-tab-inn').slick({
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			});
		}
		return false;
	}).filter(':first').click();

	var processTabContainers = $('div.process-block-tabs > div');
	processTabContainers.hide().filter(':first').show();
	$('ul.process-block-navigation a').click(function () {
		processTabContainers.hide();
		processTabContainers.filter(this.hash).show();
		$('ul.process-block-navigation a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();

	var portfolioTabContainers = $('div.portfolio-tabs > div');
	portfolioTabContainers.hide().filter(':first').show();
	$('div.portfolio-tabs ul.portfolio-tabs-navigation a').click(function () {
		portfolioTabContainers.hide();
		portfolioTabContainers.filter(this.hash).show();
		$('div.portfolio-tabs ul.portfolio-tabs-navigation a').removeClass('selected');
		$(this).addClass('selected');
		if($(this).closest('.portfolio-tabs__activeTab').length > 0){
			$(this).closest('.portfolio-tabs__activeTab').removeClass('active');
			$(this).closest('.portfolio-tabs-navigation').attr('style', 'display: none');
		}
		$(document).find('.portfolio-tabs__activeTab span').text($(this).text());
		var porfolioLinks = $(document).find('.portfolio-tabs-navigation__item');
		var currentLink = $('.portfolio-tabs__activeTab').find('span').text();
		for (let i = 0; i < porfolioLinks.length; i++) {
			if(porfolioLinks.eq(i).text() == currentLink){
				porfolioLinks.eq(i).addClass('selected');
			}
		}
		return false;
	}).filter(':first').click();

	var masterTabContainers = $('div.master-class-tabs > div');
	masterTabContainers.hide().filter(':first').show();
	$('div.master-class-tabs ul.master-class-tabs-navigation a').click(function () {
		masterTabContainers.hide();
		masterTabContainers.filter(this.hash).show();
		$('div.master-class-tabs ul.master-class-tabs-navigation a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();

	var $status = $('.order-main-right-nav__current');
	var $slickElement = $('.order-main-right-slider-inn');
	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(i + ' / ' + slick.slideCount);
	});
	var aboutSlider = $slickElement.slick({
		arrows: false
	});
	$(document).on('click', '.order-main-right-nav-arrow.prev', function () {
		aboutSlider.slick('slickPrev');
	});
	$(document).on('click', '.order-main-right-nav-arrow.next', function () {
		aboutSlider.slick('slickNext');
	});

	$(document).find("#tel").inputmask({
		mask: "+7 (999) 999-99-99",
		showMaskOnHover: false,
		showMaskOnFocus: true
	});

	$(document).on('click', '.hamburger', function () {
		$(document).find('.header-menu').addClass('active fadeInDown animated');
		if ($(this).hasClass('is-active')) {
			$(document).find('.header-menu').removeClass('fadeInDown');
			$(document).find('.header-menu').addClass('fadeOutUp');
		} else {
			$(document).find('.header-menu').removeClass('fadeOutUp');
		}
		$(this).toggleClass('is-active');
	});

	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $('.header-menu'); // тут указываем сласс элемента
		if ($('.hamburger').is(e.target) || $('.hamburger-box').is(e.target) || $('.hamburger-inner').is(e.target)) {
			return;
		}
		if (!div.is(e.target) && div.has(e.target).length === 0) { // если клик был не по нашему блоку и не по его дочерним элементам
			div.removeClass('fadeInDown');
			div.addClass('fadeOutUp'); // скрываем его
			$(document).find('.hamburger').removeClass('is-active'); // меняем значок гамбургера
		}
	});

	$(document).find('.trend-banner-left-slider-inn').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	if (screen.width < 768) {
		$(document).find('.work-main-inn').slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
		var masterTabs = $(document).find('.master-class-tabs-tab');
		for (let i = 0; i < masterTabs.length; i++) {
			masterTabs.eq(i).attr('style', '');
		};
		$(document).find('.master-class-tabs-tab-main-inn').slick({
			arrows: true,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false
		});
	}

	$(document).on('click', '.work-main__arrow.arrow-prev', function (e) {
		$(document).find('.work-main-inn').slick('slickPrev');
	});
	$(document).on('click', '.work-main__arrow.arrow-next', function (e) {
		$(document).find('.work-main-inn').slick('slickNext');
	});
	$(document).on('click', '.shop-tabs-tab__arrow.arrow-prev', function (e) {
		$(document).find('.shop-tabs-tab-inn.slick-initialized').slick('slickPrev');
	});
	$(document).on('click', '.shop-tabs-tab__arrow.arrow-next', function (e) {
		$(document).find('.shop-tabs-tab-inn.slick-initialized').slick('slickNext');
	});

	pickmeup('#date', {
		position       : 'bottom',
		hide_on_select : true
	});

	$('.portfolio-tabs__activeTab').find('.portfolio-tabs-navigation__item').eq(0).addClass('selected');
	$(document).on('click', '.portfolio-tabs__activeTab', function (e) {
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).find('.portfolio-tabs-navigation').attr('style', 'display: none');
		} else {
			$(this).addClass('active');
			$(this).find('.portfolio-tabs-navigation').attr('style', 'display: flex');
		}
	});

	$(document).on('click', '.fancybox-content', function () {
		return false;
	});
	$(document).on('click', '.fancybox-slide', function () {
		$.fancybox.close();
	});
});

$(function () {
	$(window).resize(function () {
		if (screen.width > 767) {
			$(document).find('.work-main-inn').slick('unslick');
			$(document).find('.shop-tabs-tab-inn.slick-initialized').slick('unslick');
			$(document).find('.master-class-tabs-tab-main-inn').slick('unslick');
			var masterTabContainers = $('div.master-class-tabs > div');
			masterTabContainers.hide().filter(':first').show();
			$('div.master-class-tabs ul.master-class-tabs-navigation a').click(function () {
				masterTabContainers.hide();
				masterTabContainers.filter(this.hash).show();
				$('div.master-class-tabs ul.master-class-tabs-navigation a').removeClass('selected');
				$(this).addClass('selected');
				return false;
			}).filter(':first').click();
		}
		if (screen.width < 768) {
			$(document).find('.work-main-inn').slick({
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			});
			var tab = $(document).find('.shop-tabs-tab');
			for (let i = 0; i < tab.length; i++) {
				if(tab.eq(i).attr('style') == ''){
					tab.find('.shop-tabs-tab-inn').slick({
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1,
					});
				}
			}
			var masterTabs = $(document).find('.master-class-tabs-tab');
			for (let i = 0; i < masterTabs.length; i++) {
				masterTabs.eq(i).attr('style', '');
			}
			var masterTabsSleders = $(document).find('.master-class-tabs-tab-main-inn');
			for (let i = 0; i < masterTabsSleders.length; i++) {
				if(!masterTabsSleders.eq(i).hasClass('slick-initialized')){
					masterTabsSleders.eq(i).slick({
						arrows: true,
						dots: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false
					});
				}
			}
		}
		if (screen.width > 1024) {
			$(document).find('.hamburger').removeClass('is-active');
			$(document).find('.header-menu').removeClass('active');
			$(document).find('.header-menu').removeClass('fadeOutUp');
			$(document).find('.header-menu').removeClass('animated');
		}
	});
});