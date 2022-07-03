const convertToRs=(dollar)=>{
    if(typeof dollar === 'number'){
       return dollar*78;
    }else{
        throw Error('Amount needs to be number')
    }
}

try {
    const myValue = convertToRs(5)
    // const myValue1 = convertToRs('five')
    console.log(myValue)
} catch (error) {
    console.log(error)
    
}

console.log('I will not run if program crashes')
// const myValue = convertToRs(5)

// const myValue = convertToRs('five')
// console.log(myValue)