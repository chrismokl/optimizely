/*
 *	Test Name: Remove MSRP on certain products
 *	Author: Chris Mo ~ chrismo@onekingslane.com
 */

// VARIATION CODE
window.jQuery.ajax({
		url:"/tracking",
 	 	data:{
    	action_type:"partner_tracking",
    	action_name:"Optimizely",
    	params_json:{
      		"campaign_name": 'EDP-32114_MSRP removal',
      		"variation_name": 'BUI MSRP removal'
    		}
  		}
	});

var d = $('.sortable-container li.product');

for (var item in d){
  var x = d.eq(item).find('img[src]').attr('src');
  var y;
  if (x != undefined){
  	y = x.split('_')[1].substring(0,3);
  }
  if ( y == "BUI")
  {
    d.eq(item).find('div > del').hide();
  }
} // END OF VARIATION CODE

// CONTROL CODE
window.jQuery.ajax({
		url:"/tracking",
 	 	data:{
    	action_type:"partner_tracking",
    	action_name:"Optimizely",
    	params_json:{
      		"campaign_name": 'EDP-32114_MSRP removal',
      		"variation_name": 'Control'
    		}
  		}
	});
// END OF CONTROL CODE
