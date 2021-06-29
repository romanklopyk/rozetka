
$(document).on('click', '.header__search-form-but', function(){
	var x =$('.header__search-input input').val();
	alert (x);
});

$(document).on('click', '.header__menu-toggle', function(){
	$(this).toggleClass('opened');
	$('.slide-menu').toggleClass('opened');

});






