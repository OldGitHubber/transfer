let x = 3, y = 4;

if (x < y) console.log(`x is less than y`);
else console.log(`x is greater than or equal to y`);

// In a block of statements inside {}, all statements are executed

if (x + 1 == y) {
  console.log(`This is a block statement in the true block`);
  console.log(`x+1 is equal to y`);
}
else {
  console.log(`This is a block statement in the false block`);
  console.log(`x+1 is not equal to y`);
}

// A switch statement is used for selection of multiple outcomes avoiding nested if else blocks
// Will switch on anything. If condition is a string then it will look for a match on that
let dayNum = Math.floor(Math.random() * 7) + 1; // Generate a number from 1 to 7

switch(dayNum) {
  case 1: console.log(`Sunday`);    break;
  case 2: console.log(`Monday`);    break;
  case 3: console.log(`Tuesday`);   break;
  case 4: console.log(`Wednesday`); break;
  case 5: console.log(`Thursday`);  break;
  case 6: console.log(`Friday`);    break;
  case 7: console.log(`Saturday`);  break;
}



