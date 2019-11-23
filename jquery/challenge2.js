$('#useBilling').click(function(){
	if($('#useBilling').prop('checked')){
		console.log('checked')
		$("#home").val($("#billing").val())
		$("#home").prop('disabled', true)
	}

	else{
		console.log('unchecked')
		$('#home').val("")
		$('#home').prop('disabled', false)
	}

})