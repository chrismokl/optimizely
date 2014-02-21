var $join_a = $('#modalSignup-join-a');
var $join_b = $('#modalSignup-join-b');
var $form_b = $join_b.find('form');
var $email_a = $('#modalSignup-join-a #email');
var keylist="abcdefghijklmnopqrstuvwxyz123456789"
var temp=''

function generatepass(plength){
temp=''
for (i=0;i<plength;i++)
temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
return temp
}

join_b_submit = function() {
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
			$('#lastName').val(suffix);
			var pw = generatepass(9);
			$('#password').val(pw);
			$.post('/customers/sign-up-step-two.json',
				{	email: $email_a.val() , 
					confirmEmail: $email_a.val(),
					acceptTerms: '1',
					firstName: name,
					lastName: suffix,
					password: pw
				},	function(obj){
						if (obj.status == 1){
							var navWelcomeMarkup = '<span>Welcome, ' + obj.messages[0].firstName + '!</span>';
	                        if ($('.page-header').length) {
	                            $('.page-header .welcome-guest').html(navWelcomeMarkup);
	                        } else {
	                            $('.okl-header .welcome-guest').html(navWelcomeMarkup);
	                        }
	                        if (obj.messages[0].refereeAward) {
	                            var nyeaavCreditMarkup = '<li><a href="/account/credits-offers">My Credits $'+ obj.messages[0].refereeAward +'</a></li>';
	                            $('.okl-header .welcome').after(navCreditMarkup);
	                        }
	                        /* begin Tealium */
	                        if (obj.messages[0].customerId) {
	                            var signupTmParam  = {
	                                bucket: obj.messages[0].test_bucket,
	                                is_user: "1",
	                                is_shopper: "0",
	                                recency_segment: "MNI",
	                                page_type: "Registration Confirmation",
	                                page_name: "Registration Confirmation",
	                                customer_id: obj.messages[0].customerId
	                            }
	                            jQuery.extend(window.tmParam, signupTmParam);
	                        }
	                        /* end Tealium */

	                        if ($('.joinC').length) {
	                            $(location).attr('href','/#invite-friends');
	                        } else {
	                            OKL.Account.inviteModal.init(); //Put up viral loop invite modal, invite modal JS will take care of firing the Tealium pixel.
	                        }	
						}
					}
				);
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