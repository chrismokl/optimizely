var $join_a = $('#modalSignup-join-a');
var $join_b = $('#modalSignup-join-b');
var $form_b = $join_b.find('form');
var $email_a = $('#modalSignup-join-a #email');

join_b_submit = function() {
	$(this).off('submit');
	$('.oly').remove();
	$.post('/customers/sign-up-step-one.json',
	{	email: $join_a.find('#email').val()
	},	function(data){
		if (data.status == '1'){
			$('#signupModal').hide();
			var email = $join_a.find(' #email').val().split('@');
			var name = email[0];
			var suffix = '@' + email[1];
			$form_b.find('input[name=email]').val($email_a.val());
			$form_b.find('input[name=confirmEmail]').val($email_a.val());
			$form_b.find('input[name=acceptTerms]').val('1');
			$('#firstName').val(name);
			$('#lastName').val(name);
			$('#password').val('nopa55word!');
			$form_b.submit();
		}	
		else {
			if ( data.messages[0] && data.messages[0].email)
			error = '<span class="error oly">'+data.messages[0].email+'</span>';
			$(error).insertAfter('input#email');
			
		}	
	});
}
$join_a.find(' form').keydown(function(event){
    if(event.keyCode == 13) {
    	event.preventDefault();
    	join_b_submit();
    	return false;
  	}
});

$('.formBtns.clearfix.join button').replaceWith('<a type="submit" id="shop-now-button">Shop Now</a>').remove();

$('#shop-now-button').click(function(){
	join_b_submit();
});