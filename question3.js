const obj = {num:2};

const addToThis = function(a, b, c){
    return this.num + a + b + c;
};

const bound = addToThis.bind(obj);

console.log(bound(1, 2, 3));