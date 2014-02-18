/*
$('#modalSignup-join-a form').submit(function(){
	console.log('join a submit success');
	var $field = $('#modalSignup-join-b p');
	var $buttonb = $('#modalSignup-join-b button:eq(0)')
	$('#signupModal').hide();
	$field.find(':eq(0)').attr('value','email@email.com');
	$field.find(':eq(1)').attr('value','test');
	$field.find(':eq(2)').attr('value','asdfasfd123456');
	$buttonb.click();
});

var email = $('#modalSignup-join-a #email').val().split('@')
var name = email[0];
var suffix = '@' + email[1];




$('#modalSignup-join-a form').submit(function(){
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
$('#modalSignup-join-a form').submit(function(){
	$.ajax({
		success: function(){
			console.log('success');
		},
		error: function(){
			console.log('failure');
		}
	});
});

