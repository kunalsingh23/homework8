$('#subscribe').change(function(){
	if ($(this).prop('checked') == true){
		console.log('show')
		$('#emailField').show();
	}
	else {
		console.log('hide')
		$('#emailField').hide();

	}
})