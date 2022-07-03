let youtubeVideoOne = {

    title : 'Loops in Js',
    videoLength : 15,
    videoCreator: 'John',
    videoDesc : 'This is video desc'

}

let youtubeVideoTwo = {

    title : 'Fuctionss in Js',
    videoLength : 10,
    videoCreator: 'John',
    videoDesc : 'This is video desc'

}
// console.log(youtubeVideo)

// console.log(`Hey new Vide on ${youtubeVideo.title} by ${youtubeVideo.videoCreator}`)


// let course = {
//     courseName: 'JavaScript',
//     coursePrice : 200,
//     courseDesc : 'Desc'

// }

// console.log(`Hey there is a new course ${course.courseName} by ${youtubeVideo.videoCreator} at a price ${course.coursePrice} and a description ${course.courseDesc}`)




// youtubeVideo.title ='ForEach loop in JS';


let changeVideoLength = function(myObject){
    // return `Time of this Video is: ${myObject.videoLength +2}`;
    return {
        formatOne : `Time of this Video is: ${myObject.videoLength +2}`,
        formatTwo : `Time of this Video is: ${myObject.videoLength + 1}`
    }
}

console.log(changeVideoLength(youtubeVideoTwo));
