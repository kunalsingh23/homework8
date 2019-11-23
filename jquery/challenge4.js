$('#ch4form').submit(function(event){
	
	var validInput = true;

	if ($('#fullname').val().length == 0){
		console.log('FullName Blank')
		$('#nameerrormsg').css('display','block');
		validInput = false;
	}

	else{
		console.log('FullName Gucci')
		$('#nameerrormsg').css('display','none');

	}
	
	if ($('#streetaddr').val().length == 0){
		console.log('Street Address Blank')
		$('#addrerrormsg').css('display','block');
		validInput = false;
	}

	else{
		console.log('Address Gucci')
		$('#addrerrormsg').css('display','none');

	}

	console.log(validInput)

	if (validInput == false){
		event.preventDefault();
	}
})