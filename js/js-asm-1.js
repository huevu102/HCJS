var n;
function checkPrime(n){
    var flag = 0;
    if(n==2 || n==3){
    }else{
        for(var i=2; i<=n/2; i++){
            if(n%i==0){
                flag = 1;
                break;
            }
        }
    }

    if(flag==0){
        return true;
    }else{
        return false;
    }
}

var num = 2;
var count = 1;

function printPrime(){
    var i = document.getElementById("prime");
    if(checkPrime(num)){
        i.innerText += " " + num;
        console.log(num);
        count++;
    }
    num++;
    if(count > 10){
        clearInterval(stop);
    }
}

var stop = setInterval(printPrime, 1000);