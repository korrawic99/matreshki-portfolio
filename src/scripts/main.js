$(document).ready(function() {
	$(document).on('click','.work-show', function(e){
		$(document).find('.work-hide').toggleClass('active'); 
		e.preventDefault();
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
				$(this).html('Скрыть <img class="work-show__arr" src="assets/images/work-arrow-small.svg", alt="Arrow">');
		} else {
				$(this).html('Показать все <img class="work-show__arr" src="assets/images/work-arrow.svg", alt="Arrow">');
		}
		return false;
	});

	var tabContainers = $('div.process-block-tabs > div');
	tabContainers.hide().filter(':first').show();
	$('div.process-block-tabs ul.process-block-navigation a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		$('div.process-block-tabs ul.process-block-navigation a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();

		var $status = $('.order-main-right-nav__current');
		var $slickElement = $('.order-main-right-slider-inn');
		$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
				//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				var i = (currentSlide ? currentSlide : 0) + 1;
				$status.text(i + ' / ' + slick.slideCount);
		});
		var aboutSlider = $slickElement.slick({
			arrows:false
		});
		$(document).on('click', '.order-main-right-nav-arrow.prev', function () {
			aboutSlider.slick('slickPrev');
		});
		$(document).on('click', '.order-main-right-nav-arrow.next', function () {
			aboutSlider.slick('slickNext');
		});

		$(document).find("#tel").inputmask({
			mask : "+7 999 999 99 99",
			showMaskOnHover: false,
			showMaskOnFocus: true
		});
});