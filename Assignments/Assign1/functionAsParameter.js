// Write a program to demonstrate how a function can be passed as a parameter to another function

function greetings() {
    return 'Hi';
}

// passing function greet() as a parameter
function greetUser(user, func)
{

    // accessing passed function
    const message = func();

    console.log(`${message} ${user}`);
}

greetUser('Sathish', greetings);
greetUser('Praveen', greetings);
greetUser('Sudhir', greetings);
greetUser('Ananda', greetings);
    