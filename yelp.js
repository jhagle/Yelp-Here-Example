var auth = {
    //
    // Update with your auth tokens.
    //
    consumerKey : "7hky-KpixOLrZg4jWlaXPQ",
    consumerSecret : "Zp2gC-L6NXdObBQZMqI8ewbMU8E",
    accessToken : "QlsATjO7fzN-3hDBYDYwO8oV5-RgojlZ",
    // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
    // You wouldn't actually want to expose your access token secret like this in a real application.
    accessTokenSecret : "dJY8ZX8Ub-sF-UbGEs-06W3acI4",
    serviceProvider : {
        signatureMethod : "HMAC-SHA1"
    }
};

var terms = 'food';
var near = 'San+Francisco';

var accessor = {
    consumerSecret : auth.consumerSecret,
    tokenSecret : auth.accessTokenSecret
};
parameters = [];
parameters.push(['term', terms]);
parameters.push(['location', near]);
parameters.push(['callback', 'cb']);
parameters.push(['oauth_consumer_key', auth.consumerKey]);
parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
parameters.push(['oauth_token', auth.accessToken]);
parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

var message = {
    'action' : 'http://api.yelp.com/v2/search',
    'method' : 'GET',
    'parameters' : parameters
};

OAuth.setTimestampAndNonce(message);
OAuth.SignatureMethod.sign(message, accessor);

var parameterMap = OAuth.getParameterMap(message.parameters);
//console.log(parameterMap);

$.ajax({
    'url' : message.action,
    'data' : parameterMap,
    'dataType' : 'jsonp',
    'jsonpCallback' : 'cb',
    'success' : function(data, textStats, XMLHttpRequest) {

    }
});

var cb = function(response){
    console.log(response);
    var businesses = response.businesses;
     for(i=0; i<5; i++) {
     var first = businesses[i];
     var add = first.location.address[0];
     var lat = first.location.coordinate.latitude;
     var lng = first.location.coordinate.longitude;
     var rating = first.rating;

     console.log(add);
     document.getElementById('myResults').innerHTML += '<br>' + add;
     }
}