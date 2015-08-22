var request = require('request')
module.exports = function(message, tumblrname, photoUrl, myoauth, callback){
	/*var myoauth = {
		  consumer_key: ____,
		  consumer_secret: ____,
		  token: ___,
		  token_secret: ___
	};*/

	var myurl = "http://api.tumblr.com/v2/blog/"+tumblrname+".tumblr.com/post";

	if (photoUrl){
		var myform = {
	      	body: message,
	      	source: photoUrl
	    };
	} else {
		var myform = {
	      	body: message
	    };
	}


    options = {
      url: myurl,
      method: 'POST',
      followRedirect: false,
      json: false,
      oauth:myoauth,
      timeout:20000,
      form: myform
    };
    request(options, function(error, response, body) {
      if (error){
      	callback(error, null)
      } else {///do json parse
      	body = JSON.parse(body)
      	if (body && body.meta && body.meta.status && body.meta.status==201){
      		callback(null, body)
      	} else {
      		var resp = {
      			err: error,
      			res: body
      		}
      		callback(resp, null)
      	}
      }
    });
};