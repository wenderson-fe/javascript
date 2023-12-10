/* 
function soma(a=0, b=0){
    return a + b;
}

var x = 10;
var y = 10;

var res = soma(x, y);

console.log(`A soma de ${x} + ${y} é: ${res}`);
*/

/*
function parImpar(n){
    if(n%2 == 0){
        return 'Par';
    } else {
        return 'Impar';
    }
}

console.log(parImpar(2));
*/

/*
let v = function(x){
    return x*2
}

console.log(v(5))
*/

/*
function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
*/

// função recursiva
function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
*/