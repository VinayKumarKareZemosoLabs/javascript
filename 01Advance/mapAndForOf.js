var john={
    name : ' I am John',
    age : 24,
    isActive: true
}

var mary={
    name : ' I am mary',
    age : 23,
    isActive: true
}

var sam={
    name : ' I am sam',
    age : 29,
    isActive: false
}

let users = new Map()

users.set('john', john)
users.set('mary', mary)
users.set('sam', sam)

// console.log(users)
// console.log(users.size)

// console.log(users.get('sam'))

// console.log(users.keys())

// console.log(users.values())

for (const values of users.values()) {
    console.log(values.name)
}