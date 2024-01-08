myvar = 45
console.log(myvar);
                                   //Hoisting
var myvar;




// console.log(mylet);                 // Temporal Dead Zone

let mylet
mylet = 45                        
console.log(mylet);

hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
} 


function randomFunc(){
    var obj1 = {name:"Vivian", age:45};
  
    return function(){
      console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed
  
    }
  }
  
  var initialiseClosure = randomFunc(); // Returns a function
  
  initialiseClosure(); 


// Callback
function callback() 
{
  console.log(
"hello"
  );
}

function main(func){
  console.log("hi");
  func();
}

main(callback)