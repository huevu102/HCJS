function update(city){
    var bg = document.getElementById("bg-fade");
    bg.style.display = "block"; // Hiện ảnh gif loading... trong khi chờ tải dữ liệu
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
        bg.style.display = "none"; //Ẩn ảnh gif loading khi đã lấy đc dữ liệu
    };
    var link = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", link, true); //async: chạy theo phương thức đồng bộ hoá
    xhttp.send();
}