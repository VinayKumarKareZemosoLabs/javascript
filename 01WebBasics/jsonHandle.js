const student = {
    name : 'John',
    age : 23,
    isActive : true

}

const studnetObjToString = JSON.stringify(student);

console.log(typeof studnetObjToString);

console.log(typeof student);

// localStorage.setItem('student', studnetObjToString);

const stringToJSON = JSON.parse(studnetObjToString);

console.log(typeof stringToJSON);
console.log()