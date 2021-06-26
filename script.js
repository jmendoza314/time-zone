var submitBtn = document.querySelector('#submitBtn');
var dateTime = document.querySelector('.input');
// When submit button is clicked translation API will run
submitBtn.addEventListener("click", () => {
	console.log("hello")
	function time() {
		var panama = "/america/panama"

		var timeZone = "http://worldtimeapi.org/api" + panama
		
		fetch(timeZone)
		.then (function (response) {
			return response.json();
		})
		.then(function (data){
			console.log(data.datetime)
			dateTime.value = new Date(data.datetime)
		})
	}
	time()
});


function translation() {
	var chinese = document.getElementById('#zh-CN');
	var fr = document.getElementById('#fr');
	var de = document.getElementById('#de');
	var ja = document.getElementById('#ja');
	var ko = document.getElementById('#ko');
	var es = document.getElementById('#es');

	// translation API 

	// const settings = {
	// 	"async": true,
	// 	"crossDomain": true,
	// 	"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
	// 	"method": "POST",
	// 	"headers": {
	// 		"content-type": "application/x-www-form-urlencoded",
	// 		"accept-encoding": "application/gzip",
	// 		"x-rapidapi-key": "731087d542msh4e208bf26768a2fp108983jsna4e8d1d5ba68",
	// 		"x-rapidapi-host": "google-translate1.p.rapidapi.com"
	// 	},
	// 	"data": {
	// 		"q": "Hello my name is spongebob",
	// 		"target": "zh-CN",
	// 		"source": "en"
	// 	}
	// };

	// $.ajax(settings).done(function (response) {
	// 	console.log(response);
	// });

		
}



translation()