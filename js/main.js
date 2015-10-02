//var light = ('on')
//var numberofclicks = 0;

//$(window).on('click'), function(e) {

//	numberofclicks = numberofclicks +1;

//	$('count')

//	var light = $('on').hasClass('count');

//	if  ( numberofclicks = 2 )  {
//		$('.off');
//	}
//}


$('.switch').on('click', function(e){
	$('body').toggleClass('dark').toggleClass('light');
	$('button').toggleClass('off').toggleClass('on');
	$('.status').text('Hey, who turned the lights off?');

});

//if (.'switch').on

//if ('dark').on('click', function(e) {
//	$('.status').text('Its so bright in here!');

//});

//if ('dark') ('.status' .text Hey, who turned off the lights?));