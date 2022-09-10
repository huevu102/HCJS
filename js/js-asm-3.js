function update(name){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);

        document.getElementById("city").innerText = data.name + ", " + data.sys.country;
        document.getElementById("temp").innerText = data.main.temp;
        document.getElementById("pres").innerText = data.main.pressure;
    };
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+name+"&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", url, true);
    xhttp.send();
}