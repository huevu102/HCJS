function listMenu(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);
        var list = data.data; //array
        for(var i=0; i<list.length; i++){
            var name = list[i].name;
            var img = list[i].icon;
            var str = `<li><img width="50" src="${img}"/>${name}</li>`;
            // trong nháy `` thì viết nguyên nội dung như html, chỗ nào cần truyền giá trị thì cho vào trong ${}
            // var str = "<li>" + name + "</li>";
            var ul = document.getElementById("menu");
            ul.innerHTML += str;
        }
    };
    var url = "https://foodgroup.herokuapp.com/api/menu";
    xhttp.open("get", url, true);
    xhttp.send();
}
listMenu();