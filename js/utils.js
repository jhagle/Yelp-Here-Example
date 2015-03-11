
var toReplace = /\+/gi;
var url = window.location.href;

url = unescape(url);
url = url.replace(toReplace, " ");
url = url.toUpperCase();

function getURLParameter(variable)
{
var varUCase = variable.toUpperCase();
var varPos = url.indexOf(varUCase);

if (varPos != -1)
{
var posSep = url.indexOf("&", varPos);

if (posSep != -1)
{
return url.substring(varPos + varUCase.length + 1, posSep);
} else
{
return url.substring(varPos + varUCase.length + 1, url.length);
}
} else
{
return "Not_Found";
}
}
