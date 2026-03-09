 let names=['Linda','Ryan','Tim','Warren','Martin'];

 //console.log(`First name: ${names[3]}`);
// console.log(`Last name: ${names[names.length-1]}`);
// console.log(`First name: ${names[2]}`);

// Javescript array elements don't need to all be the same type
 let vals=['Linda', 25, true, 7/3, 'Ryan'];

for (let i=(vals.length-1); i >=0 ; i--) {
  console.log(`vals are: ${vals[i]}`);
}

vals[0]=-1.5;
vals[3]='Bannana';

for (let i=0; i < vals.length; i++) {
  console.log(`vals are: ${vals[i]}`);
}
