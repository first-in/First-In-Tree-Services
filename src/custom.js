var $cards = $('.content-card').toArray();
var $trigger = $('.js-content-trigger');
var $closeCard = $('.js-content-close');
var $killClass = function(){ $('.current').removeClass('current'); };

$($trigger).on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();

	var $this = $(this);
	var index = $this.index('.js-content-trigger');

	$killClass();

	$($cards).each(function(i) {

		if(index == i) {
			$($cards[i]).addClass('current');
		}
	})
})

$($closeCard).on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();

	console.log($(this));

	$killClass();
})

