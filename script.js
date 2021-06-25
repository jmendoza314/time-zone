const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"accept-encoding": "application/gzip",
		"x-rapidapi-key": "731087d542msh4e208bf26768a2fp108983jsna4e8d1d5ba68",
		"x-rapidapi-host": "google-translate1.p.rapidapi.com"
	},
	"data": {
		"q": "water",
		"target": "ru",
		"source": "en"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
 