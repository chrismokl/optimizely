
/*$('#modalSignup-join-a form').submit(function(){
	$('#modalSignup-join-a form').ajaxSuccess(function(){
	console.log('got into first ajaxsuccess');
	  $('#signupModal').hide();
	  var $button_b = $('#modalSignup-join-b button:eq(0)')
	  var email = $('#modalSignup-join-a #email').val().split('@')
	  var name = email[0];
	  var suffix = '@' + email[1];
	  var $field = $('#modalSignup-join-b p');
	  $field.find(':eq(0)').attr('value',name);
	  $field.find(':eq(1)').attr('value',suffix);
	  $field.find(':eq(2)').attr('value', 'nopa55word!');
	});
});
*/
$('.formBtns.clearfix.join button').replaceWith('<button type="submit" id="shop-now-button">Shop Now</button>');
$('#shop-now-button').submit(function(e){
	e.preventDefault();
	console.log('giberish');
	$(this).off('submit');
	$.post('/customers/sign-up-step-one.json',function(data){
		console.log(data);
		if (data.status == '1'){
			console.log('success');
		}	
		else {
			console.log('failure');
		}	
	});
});



