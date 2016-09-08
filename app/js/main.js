$(function() {
	/*page scroll*/
	$('#fullpage').fullpage({
		anchors: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'],
		menu: '#nav',
		afterLoad: function(menuanchor){
			logo();
			opacity(menuanchor);
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
	/*map*/
		var pos1 = new google.maps.LatLng(54.99579461, 82.96729642);
		var pos2 = new google.maps.LatLng(55.01015989, 82.87607662);
		var pos3 = new google.maps.LatLng(55.03021591, 82.93790286);

		var pos4 = new google.maps.LatLng(55.05786761, 82.98089241); //Бродского
		var pos5 = new google.maps.LatLng(55.050426, 82.899546); //нарымская
		var pos6 = new google.maps.LatLng(55.010407, 82.8768759); //Энергетиков
		var pos7 = new google.maps.LatLng(54.99601814, 82.96658595); // большевитская

		var mapCenter = new google.maps.LatLng(55.0303526, 82.9357327);
		var mapOptions = {
		zoom: 13,
		center: mapCenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false
		}
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);

		var mapImageWash = '/images/icons/pin_wash.svg';
		var mapImageAzs = '/images/icons/pin_azs.svg';

		var markerWash1 = new google.maps.Marker({
			position: pos1,
      map: map,
      title: 'улица Большевистская, 52/1',
      icon: mapImageWash
		});
		var markerWash2 = new google.maps.Marker({
			position: pos2,
      map: map,
      title: 'проезд Энергетиков, 1/1',
      icon: mapImageWash
		});
		var markerWash3 = new google.maps.Marker({
			position: pos3,
      map: map,
      title: 'улица Военная, 8а',
      icon: mapImageWash
		});
		var markerAzs1 = new google.maps.Marker({
			position: pos4,
      map: map,
      title: 'улица Бродского, 1/1',
      icon: mapImageAzs
		});
		var markerAzs2 = new google.maps.Marker({
			position: pos5,
      map: map,
      title: 'улица Нарымская, 100',
      icon: mapImageAzs
		});
		var markerAzs3 = new google.maps.Marker({
			position: pos6,
      map: map,
      title: 'проезд Энергетиков, 1',
      icon: mapImageAzs
		});
		var markerAzs4 = new google.maps.Marker({
			position: pos7,
      map: map,
      title: 'Большевистская, 50',
      icon: mapImageAzs
		});
	/*tooltip*/
		var infoWindow = new google.maps.InfoWindow({
         content: 'улица Большевистская, 52/1'
     });
     google.maps.event.addListener(markerWash1, 'click', function () {
         infoWindow.open(map, markerWash1);
     });
		var infoWindow2 = new google.maps.InfoWindow({
        content: 'проезд Энергетиков, 1/1'
      });
    google.maps.event.addListener(markerWash2, 'click', function () {
        infoWindow2.open(map, markerWash2);
    });
		var infoWindow3 = new google.maps.InfoWindow({
        content: 'улица Военная, 8а'
    });
    google.maps.event.addListener(markerWash3, 'click', function () {
        infoWindow3.open(map, markerWash3);
    });
		var infoWindow4 = new google.maps.InfoWindow({
        content: 'улица Бродского, 1/1'
    });
    google.maps.event.addListener(markerAzs1, 'click', function () {
        infoWindow4.open(map, markerAzs1);
    });
		var infoWindow5 = new google.maps.InfoWindow({
        content: 'улица Нарымская, 100'
    });
    google.maps.event.addListener(markerAzs2, 'click', function () {
        infoWindow5.open(map, markerAzs2);
    });
		var infoWindow6 = new google.maps.InfoWindow({
        content: 'проезд Энергетиков, 1'
    });
    google.maps.event.addListener(markerAzs3, 'click', function () {
        infoWindow6.open(map, markerAzs3);
    });
		var infoWindow7 = new google.maps.InfoWindow({
        content: 'Большевистская, 50'
    });
    google.maps.event.addListener(markerAzs4, 'click', function () {
        infoWindow7.open(map, markerAzs4);
    });

});
