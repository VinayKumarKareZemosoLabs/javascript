// alert('File is attached')

// console.log(document.documentURI);

// console.log(document.title)

// document.title='I got changed';

// console.log(document.title)

// console.log(document.getElementById('idone'));

// // document.getElementById('idone')='Some this is diffrent' --wrong


// console.log(document.getElementsByClassName('calssone'))

// const myElement = document.querySelectorAll('p')

// console.log(myElement[0])

// const myElement = document.querySelectorAll('#idone')
// console.log(myElement[0])
// const myElement = document.querySelectorAll('.classone')
// console.log(myElement[0])
// const myElement = document.querySelector('p')

// myElement.textContent = 'I am being using js'


const myPElements = document.querySelectorAll('p')

// myPElements.forEach(function(p){
//     p.textContent='I am changed using loop in js' //changes every text with tag p
//     // p.remove()   //Removes all text in all tags with p
// })

// myPElements.forEach((p)=>p.textContent='I am changed using loop in js')

const myNewPara = document.createElement('p')

myNewPara.textContent = 'I was added by JS';

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click', (event)=>{
    // console.log('Button was pressed')
    // console.log(event)
    event.target.textContent = 'I was clicked'
})

//for id #
//for class . just like CSS

//track input form

document.querySelector('#myForm').addEventListener('input', (event)=>{
    console.log(event.target.value)
})