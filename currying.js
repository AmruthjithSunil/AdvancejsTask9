/*Commented currying using bind
const multiply = function(x, y){
    console.log(x*y);
}

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

const multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);
*/

//Currying using closure below

const multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

const multiplyByTwo = multiply(2);
multiplyByTwo(3);

const multiplyByThree = multiply(3);
multiplyByThree(5);