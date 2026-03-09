// Array of objects of people
let group = [
  {
    fName: 'Jimmy',
    lName: 'Riddle',
    age:    24 
  },
  {
    fName: 'Jane',
    lName: 'Doe',
    age:    84 
  },
  {
    fName: 'Boaty',
    lName: 'McBoatface',
    age:    7 
  }
]

console.log(`First name is ${group[1].fName}`)

for (let i=0; i<group.length; i++) {
  console.log(`${group[i].fName} ${group[i].lName} is ${group[i].age} years old.`)
}

// Arrays themselves are objects so have properties and methods. e.g.
group.push({fName: 'joe', lName: 'Soap', age: 30 })
console.log('')
for (let i=0; i<group.length; i++) {
  console.log(`${group[i].fName} ${group[i].lName} is ${group[i].age} years old.`)
}