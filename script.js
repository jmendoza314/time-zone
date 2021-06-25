
function time() {
    var timeZone = "http://worldtimeapi.org/api/timezone"
    
    fetch(timeZone)
    .then (function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data)
    })
}
time()