function getParameterByName(name)
{	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.search);
	if(results == null)
	return "";
	else
	return decodeURIComponent(results[1].replace(/\+/g, " "));
}
rh_destination = getParameterByName('rh_lp');

swap = function(){
	switch(rh_destination){
		case 'toppicks': // STILL NEEDS IMAGE
			rh_header_swap('//cdn.optimizely.com/img/7259088/61643c68906546e69311af4bd4f51240.png');
			break;
		case 'throws': // STILL NEEDS IMAGE
			rh_header_swap('//cdn.optimizely.com/img/7259088/a777b16d7c0a46a79a8e4729f5052526.png');
			break;
		case 'memberspicks': // STILL NEEDS IMAGE
			rh_header_swap('//cdn.optimizely.com/img/7259088/a777b16d7c0a46a79a8e4729f5052526.png');
			break;
		case 'picks50': // STILL NEEDS IMAGE
			rh_header_swap('//cdn.optimizely.com/img/7259088/a777b16d7c0a46a79a8e4729f5052526.png');
			break;
		case 'picks50': // STILL NEEDS IMAGE
			rh_header_swap('//cdn.optimizely.com/img/7259088/a777b16d7c0a46a79a8e4729f5052526.png');
			break;
	}
}

rh_header_swap = function(src){
	$("#okl-product div#okl-bio").replaceWith('<img id="OLY-RH_E3-Header" src='+src+' />');
}
 