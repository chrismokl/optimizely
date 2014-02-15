var p = $('.price');

// No Price
p.find(' del').addClass('retail');
p.find(' em').hide();

$(document).on('welcomeClosed',function(){
    p.find(' em').show();
});

// No Price or retail
p.remove();

// Emphasized Price
p.find(' em').addClass('discounted');

// Sign up for price
