// console.log(" I ");

// console.log(" eat ");

// console.log(" Ice Cream ");

// console.log("I");

// // This will be shown after 2 seconds

// setTimeout(()=>{
//   console.log("eat");
// },2000)

// console.log("Ice Cream")

// setTimeout()

function makeRequest(location){
    return new Promise((resolve, reject)=>{
        console.log(`Making request to ${location}`)
        if(location=== 'Google'){
            resolve('Google says hi')
        }else{
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log("Processing response")
        resolve(`Extra info +  ${response}`)
    })
}

// makeRequest('Google').then(response =>{
//     console.log(`Response received`)
//     return processRequest(response)
// }).then(processResponse=>{
//     console.log(processResponse)
// }).catch(err =>{
//     console.log(err);
// })

async function doWork(){
    try{
        const response = await makeRequest('Google');
        console.log('Response Received')
        const processedRequest = await processRequest(response)
        console.log(processedRequest);
    }catch(err){
        console.log(err)

    }
}
    
doWork();

