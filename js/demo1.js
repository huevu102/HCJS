var x;
x = 10;
x = "hello world";
x = 3.14;
var y = 20;
var z = x + y; //23.14
x = "hello";
var k = x + y; //hello20
//hello + 10 = hello10
//10 + hello = 10hello
//hello + world = helloworld
//world + hello = worldhello
console.log(k);

var t = true; //false

for(var i=0; i<10; i++){ //Tương tự C
    console.log("i=" + i);
}

var ar = [];
ar[0] = 1;
ar.push(10); //push: thêm phần tử vào cuối mảng
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push([1,2,3]);
//duyệt mảng theo chỉ mục (index)
for(var i=0; i < ar.length; i++){
    console.log(ar[i]);
}
//duyệt mảng theo kiểu xét từng phần tử đến hết (foreach)
ar.map(xyz=>{ //xyz: tên biến do mình tự đặt
    console.log(xyz);
})

var tk1 = total(5, 3);
var tk2 = total("hello", 10);
function total(a, b){
    return a+b;
}
console.log(tk1);
console.log(tk2);


function demo(){
    console.log("Hello everybody...");
}
setTimeout(demo, 3000); //giá trị tham số truyền vào là 1 function name + 1 giá trị là thời gian trễ (ms)
//demo: callback function
//Chờ 3s sau đó chạy hàm demo
setInterval(demo, 3000);
//Cứ sau 3s lại chạy hàm demo và lặp vô hạn đến khi tắt trình duyệt
console.log("abcxyz..."); //hàm này sẽ chạy trước do bất đồng bộ hoá
var n = 20;
function countdown(){
    var xyz = document.getElementById("heading"); //gọi đến element có id là heading (tham chiếu của 1 phần tử html sang js)
    xyz.innerText = n;
    console.log(n);
    n--;
    if(n<0){
        clearInterval(si); //vòng lặp sẽ dừng lại khi n<0
    }
}
countdown();
var si = setInterval(countdown, 1000); //với js thì phần này viết trc hay sau khai báo function thì code vẫn chạy đúng


//viết 1 chương trình cứ 2s in ra một số chẵn và tăng dần theo thời gian. in tối đa 10 số
var num = 2;
var count = 1;
function even(){
    var abc = document.getElementById("print-even"); //Kiểu dữ liệu object, có sẵn 1 số thông tin
    abc.innerText += " " + num; //thay thế thì sẽ là: abc.innerText = num;
    console.log(num);
    count++;
    num += 2;
    if(count > 10){
        clearInterval(stop);
    }
}
var stop = setInterval(even, 1000);

//viết 1 chương trình cứ 2s in ra một số nguyên tố và tăng dần theo thời gian. in tối đa 10 số
