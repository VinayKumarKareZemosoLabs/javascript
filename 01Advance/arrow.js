// const sayHello = function(){
//     return 'Hello World';
// }

// console.log(sayHello())


// const sayHello = () =>{
//     return "Hello World";
// }

const sayHello = () => "Hello World";


const todos = [{
    title : 'Buy bread',
    isDone : false
}, 
{
    title : 'Go to Gym',
    isDone : true
},
{
    title : 'Complete JS course',
    isDone : false
},
{
    title : 'Attend Standup',
    isDone : true
},
{
    title : 'Buy fruits',
    isDone : true
},
{
    title : 'Go for a Walk',
    isDone : false
}
]

const thinsDone = todos.filter((todo)=> todo.isDone === true)

// console.log(thinsDone)

const camera = {
    price : 600,
    weight : 2000,
    myDesc: function(){
        return `This is a canon camera with price ${this.price} and has weight of ${this.weight}`
    }
}
 
console.log(camera.myDesc())