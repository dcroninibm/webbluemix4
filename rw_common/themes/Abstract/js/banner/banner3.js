elixir.bannerBackgroundImage = {};
elixir.bannerBackgroundImage = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function bannerBackgroundImageFunction() {
		$elixir('#banner').addClass('banner3');
	}
	
	$elixir(document).ready(function() {
		bannerBackgroundImageFunction();
	});	

})(elixir.bannerBackgroundImage);