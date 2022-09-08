var obj = {
    name: "Nam",
    age: 18,
    tel: "+8498876626262",
    girlFriends: ['A', 'B'],
    eat: function(){
        // console.log(obj.name + " is eating noodle.");
        console.log(this.name + " is eating noodle.");
    }
};
console.log(obj.tel);
obj.eat();
obj.name = "Huy";
obj.eat();

var a = document.getElementById("abc");
console.log(a.innerText); //innerText: tác động đến thông tin text
var x = 15;
function changeText(){
    //a.innerText = "Hello everybody!!";
    // a.innerHTML = x + '<p>Hello everybody!!</p>'; //innerHTML: tác động đến cấu trúc HTML
    // a.innerHTML = '<p>Hello everybody!!</p>' + a.innerHTML
    a.style.fontSize = x + "px";
    x++;
    a.style.color = "pink";
    a.classList.add("someClass");
    a.style.transform = "rotate("+x+"deg)";
}
setInterval(changeText, 30);
