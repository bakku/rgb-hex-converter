$( document ).ready(function() {
	
	$('#hex-to-rgb-convert').click(function() {
		var hashtag = "#";
		var color = $('#hex-to-rgb-input').val();
		var bgcolor = hashtag.concat(color);
		
		$('#hex-to-rgb-result').val('hallo');
		$('#hex-to-rgb-color').css('background-color', bgcolor);
	});
	
});
