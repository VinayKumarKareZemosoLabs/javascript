const userLeft = false;
const userWatchingCatMeme = true;


// function watchTutorialCallBack(callback, errorCallback){
//     if(userLeft){
//         errorCallback({
//             name:'user Left',
//             message: 'sad to see'
//         })
//     }else if(userWatchingCatMeme){
//         errorCallback({
//             name : 'User watching cat Meme',
//             message : 'Greate to see cat meme'
//         })
//     }else{
//         callback('Thumbs Up')
//     }
// }

// watchTutorialCallBack((message)=>{
//     console.log('Success: '+message)  
// }, (error) =>{
//     console.log(error.name + ' '+error.message)
// }
// )

function watchTutorialPromise(){
    return new Promise((resolve, reject)=>{
        if(userLeft){
            reject({
                name:'user Left',
                message: 'sad to see'
            })
        }else if(userWatchingCatMeme){
            reject({
                name : 'User watching cat Meme',
                message : 'Greate to see cat meme'
            })
        }else{
            resolve('Thumbs Up')
        }

    })
    
}

watchTutorialPromise().then((message) => {
    console.log('Success: '+message)  
}).catch((error) =>{
    console.log(error.name + ' '+error.message)
}
)


const watchJsCourse= new Promise((resolve, reject)=>{
    resolve('JS Course Completed')
})

const watchReactCourse=new Promise((resolve, reject)=>{
    resolve('React Course Completed')
})

const completeAssignments = new Promise((resolve, reject)=>{
    resolve('Assignments Completed')
})

// Promise.all([
//     watchJsCourse,
//     watchReactCourse,
//     completeAssignments
// ]).then((messages)=>{
//     console.log(messages)
// })

Promise.race([
    watchJsCourse,
    watchReactCourse,
    completeAssignments
]).then((message)=>{
    console.log(message)
})