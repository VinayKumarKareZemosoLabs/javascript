// const myTodos = [ 'Buy bread' , 'Go to Gym', 'Complete JS course']

// console.log(myTodos.indexOf('Buy bread'))

const newTodos = [{
    title : 'Buy bread',
    isDone : false
}, {
    title : 'Go to Gym',
    isDone : true
},{
    title : 'Complete JS course',
    isDone : false
}]


// const index = newTodos.findIndex(function(todo, index){

//     return todo.title === 'Go to Gym';

// })

// console.log(index)


//Method One
const findTodo = function(myTodos, title){
    const index = myTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase() ===title.toLowerCase()
    })

    return myTodos[index]
}

let printMe = findTodo(newTodos, 'Go to gym');
console.log(printMe);