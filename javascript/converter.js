$( document ).ready(function() {
	
	$('#hex-to-rgb-convert').click(function() {
		var regEx = /(^[0-9A-F]{3}$)|(^[0-9A-F]{6}$)/i; 
		var color = $('#hex-to-rgb-input').val();
		var result;
		
		if (regEx.test(color) == false) {
			$('#hex-to-rgb-group').addClass('has-error');
			$('#hex-to-rgb-icon').removeClass('icon-visible');
			return;
		}
		
		result = hexToRgb(color);
		
		var hashtag = "#";
		var bgcolor = hashtag.concat(color);
		
		$('#hex-to-rgb-result').val(result);
		$('#hex-to-rgb-color').css('background-color', bgcolor);
		$('#hex-to-rgb-group').removeClass('has-error');
		$('#hex-to-rgb-icon').addClass('icon-visible');
	});
	
	$('#rgb-to-hex-convert').click(function() {
		var regEx = /^[0-9][0-9]?[0-9]?,\s?[0-9][0-9]?[0-9]?,\s?[0-9][0-9]?[0-9]?$/;
		var color = $('#rgb-to-hex-input').val();
		var result;
		
		if (regEx.test(color) == false) {
			$('#rgb-to-hex-group').addClass('has-error');
			$('#rgb-to-hex-icon').removeClass('icon-visible');
			return;
		}
		
		var rgb = "rgb(";
		var end = ")";
		var bgcolor = rgb.concat(color).concat(end);
		
		$('#rgb-to-hex-color').css('background-color', bgcolor);
		$('#rgb-to-hex-group').removeClass('has-error');
		$('#rgb-to-hex-icon').addClass('icon-visible');
	});
});

function hexToRgb(color) {
		var rVal;
		var gVal;
		var bVal;
		
		if (color.length == 3) {
			rVal = parseInt("0x" + color.charAt(0) + color.charAt(0));
			gVal = parseInt("0x" + color.charAt(1) + color.charAt(1));
			bVal = parseInt("0x" + color.charAt(2) + color.charAt(2));
		}
		else {
			rVal = parseInt("0x" + color.substr(0, 2));
			gVal = parseInt("0x" + color.substr(2, 2));
			bVal = parseInt("0x" + color.substr(4, 2));
		}
		
		return rVal.toString() + ", " + gVal.toString() + ", " + bVal.toString();
}
