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

rh_header_swap = function(src,page){
	if ( page == 'kdp'){
		$("#okl-product div#okl-bio").replaceWith('<img id="oly-rh-header-kdp" src='+src+' />');
	}
	else if (page == "edp"){
		$('.story header img').before('<img alt="" src="'+src+'" style="width: 1140px; position: absolute; left: 0px;">').remove();
	}
}
 
swap = function(page){
	switch(rh_destination){
		case 'toppicks': // STILL NEEDS IMAGE
			rh_header_swap('//cdn.optimizely.com/img/7259088/b1463a58c381428e8036e0a9e7170e36.png',page);
			break;
		case 'throws': // GOOD TO GO
			rh_header_swap('//cdn.optimizely.com/img/7259088/437a8289dd4f445aa3f15ad444e55307.png',page);
			break;
		case 'memberspicks': // STILL NEEDS IMAGE
			rh_header_swap('//cdn.optimizely.com/img/7259088/a777b16d7c0a46a79a8e4729f5052526.png',page);
			break;
		case 'picks50': // STILL NEEDS IMAGE
			rh_header_swap('//cdn.optimizely.com/img/7259088/a777b16d7c0a46a79a8e4729f5052526.png',page);
			break;
		case 'gifts': // GOOD TO GO
			rh_header_swap('//cdn.optimizely.com/img/7259088/c9ed5c6065c84b6091cbedd305161331.png',page);
			break;
		case 'prints': // GOOD TO GO
			rh_header_swap('//cdn.optimizely.com/img/7259088/31c4d41fef64458a83ca6165738ef9dd.png',page);
			break;
	}
}

