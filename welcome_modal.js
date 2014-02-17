$('#modalSignup a').addClass('cmoPreventRedirect');
$(".inviteModal-inner").before("<img id=\"optimizely_452823020\" src=\"//cdn.optimizely.com/img/7259088/285a1b5678af4e96a3bd4c5f0d9b9abc.jpg\" />").remove();
$("#optimizely_452823020").before("<div id='x_out' class='modal_link'></div><div id='invite_circle' class='circle modal_link' data-src='https://www.onekingslane.com/invite'></div><div id='email_pref' class='modal_link' data-src='https://www.onekingslane.com/account/email-preferences'></div><div id='shop_todays' class='modal_link'></div>");

$('#invite_circle, #email_pref').click(function(){
    window.location = $(this).data('src');
});

$("#x_out, #shop_todays").live("click", function() { 
     $('.inviteModal').css({"display":"none"});
     $('.inviteModal-inner,.ui-widget-overlay').remove();
     location.replace("#");
     jQuery(document).trigger('welcomeClosed');
});

$('a').not(".cmoPreventRedirect").click(function(){
    window.location.href= $(this).attr('href');
});

$('.inviteModal').css({"top":"100px"});

$('#invite_circle').live("mousedown", function() {
  _gaq.push(['_trackEvent', 'Welcome Modal_New', 'Invite_Friends', '']);
});

$('#email_pref').live("mousedown", function() {
  _gaq.push(['_trackEvent', 'Welcome Modal_New', 'Email Preferences', '']);
});

$('#x_out').live("mousedown", function() {
  _gaq.push(['_trackEvent', 'Welcome Modal_New', 'X-Out', '']);
});

$('#shop_todays').live("mousedown", function() {
  _gaq.push(['_trackEvent', 'Welcome Modal_New', 'Shop Todays', '']);
});