$( document ).ready(function() {
	
	$('#hex-to-rgb-convert').click(function() {
		var reg = /(^[0-9A-F]{3}$)|(^[0-9A-F]{6}$)/i;
		var color = $('#hex-to-rgb-input').val();
		
		if (reg.test(color) == false) {
			$('#hex-to-rgb-group').addClass('has-error');
			$('#hex-to-rgb-icon').removeClass('icon-visible');
			return;
		}
		
		var hashtag = "#";
		var bgcolor = hashtag.concat(color);
		
		$('#hex-to-rgb-result').val('hallo');
		$('#hex-to-rgb-color').css('background-color', bgcolor);
		$('#hex-to-rgb-group').removeClass('has-error');
		$('#hex-to-rgb-icon').addClass('icon-visible');
	});
	
});
