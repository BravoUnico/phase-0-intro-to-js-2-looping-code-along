

function writeCards(names, surprise) {  //  ✓ returns an array of thank you messages for each name provided to the function
  let newCarts = []
  for ( let i = 0; i < names.length ; i++ ) {
    
    newCarts.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
  }
  return newCarts
}

function countDown(integer) {
  
  while (integer > 0) {
    console.log(integer--);
  }
  console.log(integer)
}
console.log(countDown(10))