 
##tumblr-post

Simple text posting to tumblr, lacking on the main API.


 ###Example usage
 ```js
var tumblr-post = require('tumblr-post');


	
	var myoauth = {
		  consumer_key: ____,
		  consumer_secret: ____,
		  token: ___,
		  token_secret: ___
	};

	var message = 'test';

	var tumblrname = 'blogname'; //The name of the blog to post to, ie XXXXX.tumblr.com

	var photoUrl = 'http://test.test/test.jpg'; //photoUrl optional if image post, else null

	tumblr-post(message, tumblrname, photoUrl,  myoauth, function (error, response){

	});


 ```

