$('#ch3form').submit(function(event){
	
	if ($('input[name=standing]:checked').val() && ($('input[name=fruit]:checked').val())) {
		return;
	}
	alert('You must pick both a standing and a fruit');
	event.preventDefault();

})