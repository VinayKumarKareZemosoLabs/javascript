let sayHello = function(name){
    console.log(`Greetiing message for ${name}`);
    console.log(`Hey ${name}`);
}

// sayHello("John");

let fullNameMaker = function(firstName, lastName){
    console.log('Welcome to JS ');
    console.log(`Happy to have you, ${firstName} ${lastName}`);
}

// fullNameMaker("John", "Doe")


let myAddr = function(num1, num2){
    let added = num1+num2;
    return added;
}

// console.log(myAddr(1,2));

let myMul = function (num1, num2){
    return num1*num2;
}
// console.log(myAddr(11,2));


let guestUser = function(name="UnName", courseCount=0){
    return 'Hello ' + name + ' and your course count is ' +courseCount;
}
console.log(guestUser("John", 10));