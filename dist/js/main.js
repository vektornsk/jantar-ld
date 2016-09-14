$(function() {
	/*page scroll*/
	$('#fullpage').fullpage({
		anchors: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'],
		menu: '#nav',
		normalScrollElements: '#map',
		afterLoad: function(menuanchor){
			logo();
			opacity(menuanchor);
			telList();
			colorTxtMap();
		}
	});

	/* list menu - opasity*/
	function opacity(menuanchor){
		var
		$nav = $('#nav'),
		$mass = $('#nav').find('[data-menuanchor]'),
		$currentEl = $nav.find('.active'),
		curIndex = $currentEl.index();
		$mass.css('opacity',1);

		for(i=0;i<curIndex;i++){
			$mass.eq(curIndex-i-1).css('opacity',(100 - (i+1) * 10)/100 );
		}
		for(i=curIndex+1;i<$mass.length;i++){
			$mass.eq(i).css('opacity',(100 - (i-curIndex) * 10)/100 );
		}
	}
	/* txt-color map*/
	function colorTxtMap() {
		if ($('.map-layout').hasClass('active')){
			$('#nav li a').css('color','#000');
			$('.tel').css('color','#000');
			$('.tel a').css('color','#000');
		} else {
			$('#nav li a').css('color','#fff');
			$('.tel').css('color','#fff');
			$('.tel a').css('color','#fff');
		}
	}
	/* tel-list*/
	function telList(){
		if ($('.section.wash').hasClass('active')){
			$('.tel').hide();
		}else {
			$('.tel').show();
		}
	}
	/*logo*/
	function logo() {
		if ($('.section.azc').hasClass('active') || $('.section.map-layout').hasClass('active')){
			$('.logo__img').attr('src','/images/icons/logo-black.svg')
		}else {
			$('.logo__img').attr('src','/images/icons/logo.svg')
		}
	}
	/*carousel*/
	$('#carousel').slick({
		infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000,
		responsive: [
		{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
		},
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
		}]

	});
	
/*map-yandex*/
	var mapImageWash = '/images/icons/pin_wash.svg';
	var mapImageAzs = '/images/icons/pin_azs.svg';
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
						center: [55.0303526, 82.9357327],
						controls: [],
						zoom: 12
		}),
		wash1 = new ymaps.Placemark([54.99579461, 82.96729642], {
				balloonContent: 'улица Большевистская, 52'
		}, {
				iconLayout: 'default#image',
				iconImageHref: mapImageWash,
		}),
		wash2 = new ymaps.Placemark([55.010407, 82.8768759], {
				balloonContent: 'проезд Энергетиков, 1/1'
		}, {
				iconLayout: 'default#image',
				iconImageHref: mapImageWash,
		}),
		wash3 = new ymaps.Placemark([55.03021591, 82.93790286], {
				balloonContent: 'Военная улица, 8А'
		}, {
				iconLayout: 'default#image',
				iconImageHref: mapImageWash,
		}),
		azc1 = new ymaps.Placemark([55.05786761, 82.98089241], {
				balloonContent: 'улица Бродского, 1/1'
		}, {
				iconLayout: 'default#image',
				iconImageHref: mapImageAzs,
		}),
		azc2 = new ymaps.Placemark([55.050426, 82.899546], {
				balloonContent: 'улица Нарымская, 100к1'
		}, {
				iconLayout: 'default#image',
				iconImageHref: mapImageAzs,
		}),
		azc3 = new ymaps.Placemark([55.01015989, 82.87607662], {
				balloonContent: 'проезд Энергетиков, 1'
		}, {
				iconLayout: 'default#image',
				iconImageHref: mapImageAzs,
				iconImageSize: [80, 60],
				iconImageOffset: [-40, -60]
		}),
		azc4 = new ymaps.Placemark([54.99601814, 82.96658595], {
				balloonContent: 'улица Большевистская, 50'
		}, {
				iconLayout: 'default#image',
				iconImageHref: mapImageAzs,
				iconImageSize: [80, 60],
				iconImageOffset: [-40, -60]
		});
		myMap.behaviors.disable('scrollZoom');

		myMap.geoObjects.add(azc1)
										.add(azc2)
										.add(azc3)
										.add(azc4)
										.add(wash1)
										.add(wash2)
										.add(wash3);
		if ($(window).width() <= '759'){
			myMap.behaviors.enable('scrollZoom');
			console.log(1);
		} else {
			myMap.behaviors.disable('scrollZoom');
		}
	});
/* tel button*/
	function windowSize(){
    if ($(window).width() <= '759'){
			$('.tel').on('click', function(){
				$(this).children(".tel-list").toggle()
			});
    }
	}
	$(window).on('load resize',windowSize);


/*carusel wash*/
	$('.wash-carusel').slick({

		infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000,
	});


});
