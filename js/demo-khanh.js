function forecast(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);

        var time = data.list[0].dt_txt;
        var temp = data.list[0].main.temp;
        var des = data.list[0].weather[0].description;
        var iconNumber = data.list[0].weather[0].icon;
        var icon = `<img src="https://openweathermap.org/img/wn/${iconNumber}@2x.png"/>`;

        document.getElementById("time").innerText = time;
        document.getElementById("temp").innerText = temp;
        document.getElementById("des").innerText = des;
        document.getElementById("icon").innerHTML = icon;
    };
    var url = "http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", url, true);
    xhttp.send();
}
forecast();