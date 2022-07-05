//Refactor the following function into a one-liner:
// const printName = (name) => {
//              return “Hi” + name;
//    }
const printName = (name) => "Hi " + name;

//Rewrite the following code using template literals
// const printBill = (name, bill) => {
//              return “Hi “ + name + “, please pay: “ + bill;
//    }
const printBill = (name, bill) => "Hi " + name + ", please pay: " + bill;
const printBill1 = (name, bill) => `Hi ${name}, Please pay: ${bill}` ;

//Modify the following code such that the object properties are destructured and logged.
const person = {
    name: "Noam Chomsky",
    age: 92
}

let {name,age} = person;
let msg;
msg = ""+name +"<br>"+age+"<br>"+printName(name)+"<br>"+printBill(name,550)+"";
document.querySelector('h1').innerHTML = msg;
console.log(name);
console.log(age);
console.log(printName(name));
console.log(printBill(name,550));
console.log(printBill1(name,455));