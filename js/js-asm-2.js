var n;
function checkPrime(n){
    if(n<2){
        return false;
    }else if(n==2 || n==3){
        return true;
    }else{
        for(var i=2; i<=n/2; i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
}

function nextPrime(n){
    for(var i=n+1; true; i++){
        if(checkPrime(i)){
            return i;
        }
    }
}

var num = 3;
function printNextPrime(){
    var i = document.getElementById("prime");
    i.innerText += " " + num;
    num = nextPrime(num);
}