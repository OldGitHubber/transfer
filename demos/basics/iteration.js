console.log(`For loop 0 to 9`);
for (let i=0; i < 10; i++) {
  console.log(`i=${i}`);
}

let i=0; // i is not part of the loop construct

console.log(`While loop 0 to 9`);
while (i < 10) {
  console.log(`i=${i}`);
  i++; // This will eventually terminate the loop
}


i=0;

console.log(`Do loop 0 to 9`);
do {
  console.log(`i=${i}`);
  i++; // This will eventually terminate the loop
} while (i < 10)

