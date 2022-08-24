// declaration function
function add(first,second){
    const total = first + second;
    return total;
}

const number = 30;

//function expression------------oita age ba onno kutay log kora jay na
const add1 = function add1(first,second){
    const total = first + second;
    return total;
}

// function expression with anonymous function karon nam nai 
const add2 = function (first,second){
    const total = first + second;
    return total;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function add4(first,second){
    const total = first + second;
    return total;
}

function add5(first,second){
    return first + second;
}

const add6 = function (first,second){
    return first + second;
}

// arrow function declare 
const add7 = (first,second) => first + second ;

const result = add7(10,20);
console.log(result);


// #####
// interview Q.
// defferent between 
// function declaration , function expression and arrow function