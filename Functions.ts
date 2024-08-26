
// function declaration and definition
// function product_of_numbers(x : number, y : number): number
// {
//     return x*y;
// }
// console.log(product_of_numbers(458,567));


// //anonymous funciton
// var add = function(a : number, b : number): number
// {
//         return a+b;
// }
// console.log(add(340,560));



// params
function greet_some_one(greeting : string, name : string) : string{
    return (greeting +" "+"to"+" "+ name);
}

console.log(greet_some_one("Welcome", "India"));

//Funciton with optional params
function greet_Some_body(greet : string, name1? : string) : string{
   return (greet +" "+"to"+" "+ name1);

}
console.log(greet_Some_body("Welcome", "TPT"));
console.log(greet_Some_body("welcome"));

//Function with default params
function greeting(name : string, greetTo : string = "Hello"): string{
    return(greetTo +" "+ name);
}
console.log(greeting("India", "Welcome"));
console.log(greeting("India"));

//Arrow funcitons
var display = ()=>{
    console.log("Welcome to typescript");
}
display();
var sum = (num1 : number, num2 : number)=> num1+num2;
console.log(sum(457,345));

//Function overloading allows functions with same name and 
//different arg data types, but not different number of args in the list

// rest params defined using ... ellipsis
// used when the number of params that function will receive is not known or vary,
function show_time(msg : string, ...name2 : string[]){
    return(msg + ""+ name2.join(", ")); //to add space
    }
console.log("hello", "sai");
console.log("hello");
console.log("hello", "sai","sreshta")

