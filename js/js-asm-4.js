function forecast() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);

        var arr = data.list;
        for (var i = 0; i < arr.length; i++) {
            var time = `<div style="font-size: 14px; width: 100%;">${arr[i].dt_txt}</div>`;

            var temp = `<div style="font-size: 28px; font-weight: bold;">${arr[i].main.temp}<sup>o</sup>C</div>`;
            var des = `<div style="font-size: 14px;">${arr[i].weather[0].description}</div>`;
            var weather = `<div style="float: left; width: 50%;">${temp}${des}</div>`;

            var iconNumber = arr[i].weather[0].icon;
            var icon = `<div style="float: right; width: 50%;"><img width="90" src="https://openweathermap.org/img/wn/${iconNumber}@2x.png"/></div>`;

            var forecast = `<div style="float:left; width: calc(25% - 5px - 5px); color: #fafafa; background-color: cadetblue; margin: 5px; padding: 20px; box-sizing: border-box; border-radius: 15px;">${time}${weather}${icon}</div>`;
            document.getElementById("hourly-weather").innerHTML += forecast;
        }
    };
    var url = "http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", url, true);
    xhttp.send();
}
forecast();