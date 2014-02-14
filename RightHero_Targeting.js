var parameterName_1 = "CMutm_medium";
var parameterValueToCheck_medium_1 = "CMdisplay";
var parameterValueToCheck_medium_2 = "CMsearch";
var parameterValueToCheck_medium_3 = "CMsearch|vmf";

var optimizelyMatch = false;
var parameterValue = "";

function getParameterByName(name)
{
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.search);
	if(results == null)
		return "";
	else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
}
parameterValue = getParameterByName(parameterName_1);

window.getCookie = function(name) {
    var parts = document.cookie.split(name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
if
(
	(OKL.vars.tealiumData.is_shopper!=1) 
		
	&&
	(	parameterValue == parameterValueToCheck_medium_1 ||
		parameterValue == parameterValueToCheck_medium_2 ||
		parameterValue == parameterValueToCheck_medium_3 ||
		typeof window.getCookie('RH_LS') != "undefined"
	)
)
{
	optimizelyMatch = true;
}
optimizelyMatch;