function getData(uId) {
    let promise = new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
        }, 2000);
    });
    return promise;
}

console.log("start");
document.getElementById("pro").innerHTML="start";
getData("skc").then(email =>{
    console.log("Email id of the user id is: " + email);
    console.log("end");
    document.getElementById("pro").innerHTML="Fetching Data<br>"+"Email id of the user id is: " + email;
}).catch(err => console.log(err));
