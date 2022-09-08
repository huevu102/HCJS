function update(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        // console.log(this.responseText);
        // Convert to obj of JS:
        var data = JSON.parse(this.responseText);
        // console.log(data.main.temp);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;

        document.getElementById("city").innerText = data.name + ", " + data.sys.country;
        document.getElementById("press").innerText = data.main.pressure;
    };
    var link = "https://api.openweathermap.org/data/2.5/weather?q=new york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", link, true); //async: chạy theo phương thức đồng bộ hoá
    xhttp.send();
}