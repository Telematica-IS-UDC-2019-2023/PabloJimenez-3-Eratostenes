var primes = [];
var vector = Array()

for(var i=1; i<1000;i++){
    vector.push(true)
}

for(var i = 2; i<= 1000;i++){
    if(vector[i]){
        for(m=i * i; m < 1000; m += i){
            vector[m] = false;
        }
    }
}

for(var i = 2; i<1000; i++){
    if(vector[i]){
        primes.push(i);
    }
}

//console.log(primes)
for (i=0; i< primes.length;i++){
    console.log(primes[i]);
}

