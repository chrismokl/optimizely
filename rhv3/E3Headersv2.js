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
var rh_destination = getParameterByName('rh_lp');

rh_header_swap = function(src){
	$("#okl-product div#okl-bio").replaceWith('<img id="oly-rh-header" src='+src+' />');
}
 
swap = function(){
	switch(rh_destination){
		case 'toppicks': // STILL NEEDS IMAGE
			rh_header_swap('//cdn.optimizely.com/img/7259088/b1463a58c381428e8036e0a9e7170e36.png');
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
		case 'gifts': // STILL NEEDS IMAGE
			rh_header_swap('//cdn.optimizely.com/img/7259088/b5dc9b8997f344faa18123ac5eb935ab.png');
			break;
	}
}

