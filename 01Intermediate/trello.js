// const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']

// console.log(days[0]);


// days.forEach(function(day, index){
//     console.log(`starts with ${index+1} --${day}`);
// })



// let months = ['Jan', 'Feb', 'Mar','Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

// months.forEach(function(month, indx){
//  console.log(month + " " +indx);
// })


// for(let index = days.length-1; index>=0; index--){
//     console.log(days[index]);
// }

const myTodos = []

myTodos.push('Buy bread');
myTodos.push('Learn JS Course');
myTodos.push("Go to Gym");


myTodos.forEach(function(todo, index){
    console.log(`Yours task no. ${index} is: ${todo}`);
})