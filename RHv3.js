/*
/***		Right Hero for A1 & A2 
/****		Version 3
/***		Author: Chris Mo ~ chrismo@onekingslane.com
*/

// ----------------- Checks to see if there is a right hero, and if so, give it custom class ------------------
if ($('#contextualContent').length > 0){
		$('#contextualContent').addClass('olyRightHero');
}

// ----------------- Cookie & Tracking functions ------------------
window.setCookie = function(c_name,value,exdays,c_domain) {
    c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
}
window.getCookie = function(name) {
    var parts = document.cookie.split(name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
// ----------------- Function that performs the replacing of the right hero ------------------
new_rightHero = function(a,b,c){
// a = href
// b = image src
// c = event
	/* _optimizely_evaluate=force */
	var campaign = 'IM_Right_Hero_v3' +c;
	var variation = c;
	/* _optimizely_evaluate=safe */
	
	$('.olyRightHero img').replaceWith("<a class="+c+" href="+a+" target='_self'><img src="+b+"></a>");
	if ($('#contextualContent').length > 0){
		_gaq.push(['_trackEvent','Right Hero v3', c+' - Offered','']);
	}
	window.jQuery.ajax({
		url:"/tracking",
 	 	data:{
    	action_type:"partner_tracking",
    	action_name:"Optimizely",
    	params_json:{
      		"campaign_name": campaign,
      		"variation_name": variation
    		}
  		}
	});
	
	
	$('.olyRightHero a').live('mousedown', function(){
		_gaq.push(['_trackEvent','Right Hero v3', c+' - Clicked','']);
		
		window.jQuery.ajax({
			url:"/tracking",
    		data:{
     		 action_type:"partner_tracking",
     		 action_name:"Optimizely",
     		 params_json:{
     		   "campaign_name": campaign,
      			"variation_name": variation,
        		"event_name": c+ "_click"
      			}
      		}
      	});
      });
}

// ----------------- Function that tells the above which version of the right hero to use ------------------
// ----------------- Lifestyle or Picks ------------------
swap_RH = function (a){
	switch(a){
		//*****************************
		/*  TO DO
			- ADD "rh_lp" for e3 header
		*/
		case 1: //  Top Picks ~ has e3 header
			new_rightHero("/discover?results=102", "https://cdn.optimizely.com/img/7259088/7fd5485040cb47c59376b48284cfb8ca.png","Top Picks");
			break;	
		//*****************************

		//*****************************
		/*  TO DO
			- ADD "rh_lp" for e3 header
			- Find new landing page
		*/
		case 2: // Picks under 50 ~ has e3 header
			new_rightHero("/discover?category2=Decorative%20Throws%20OR%20Candles%20OR%20Baby%20OR%20Pets%20OR%20Accents&results=102&retail_max=50", "https://cdn.optimizely.com/img/7259088/3ec8d742cfe04648a6b4f7d2b117e744.png","Picks Under 50");
			break;
		//*****************************
		
		//******** READY FOR V3
		case 3: // throws  ~ Updated for v3
			new_rightHero("/discover?category2=Decorative%20Throws&results=102&is_vmf=0&rh_lp=throws", "http://cdn.optimizely.com/img/7259088/33d47741b8cc438ca7eae48d79d33432.png", "Throws We Love");
			break;
		//*****************************

		//*****************************
		/*  TO DO
			- ADD "rh_lp" for e3 header
		*/
		case 4: // Members Pick ~ has e3 header
			new_rightHero("/discover?results=102", "https://cdn.optimizely.com/img/7259088/0d8e4ea8055e45c38692d071ff1ca02f.png","Members Pick 1");
			break;
		//*****************************

	
		// *********** READY FOR V3 *********
		case 5: //  Popular Prints ~ Updated for v3
			new_rightHero("/sales/22853", "https://cdn.optimizely.com/img/7259088/7914b360fdf64c1c84d774968773f003.png", "Popular Prints");
			break;  
		// **************************************


		/*  TO DO
			- FIND NEW LANDING PAGE 
			- Keep rh_lp=gifts
		*/
		case 6: // Gifts We Love ~ Updated for v3
			new_rightHero("", "https://cdn.optimizely.com/img/7259088/78ba11350ec341af8b583cf365450259.png", "Gifts We Love");
			break; 
	}
}
CMO_randomize = function(){
	var start = Math.floor((Math.random()*6)+1);
		window.setCookie('RH_LS', start, 365, '.onekingslane.com');
		window.setCookie('RH_C', start, 2, '.onekingslane.com');
}
change_right_hero = function(){
	if (typeof window.getCookie('RH_LS') === "undefined"){
		var start = Math.floor((Math.random()*6)+1);
		window.setCookie('RH_LS', start, 365, '.onekingslane.com');
		window.setCookie('RH_C', start, 2, '.onekingslane.com');
		swap_RH(start);
	}
	else { // meaning you have the Last seen cookie
		var last_seen = Number(window.getCookie('RH_LS'));
		if (typeof window.getCookie('RH_C') === "undefined"){
			if ( window.getCookie('RH_LS') == 6){
				window.setCookie('RH_LS', 1, 365, '.onekingslane.com');
				window.setCookie('RH_C', 1, 2, '.onekingslane.com');
				swap_RH(1);
			}
			else {
				var current = Number(window.getCookie('RH_LS'))+ 1;
				swap_RH(current);
				current = current.toString();
				window.setCookie('RH_LS', current, 365, '.onekingslane.com');
				window.setCookie('RH_C', current, 2, '.onekingslane.com');
				
			}
		}
		else {
			swap_RH(last_seen);
		}
	}
}