const sum = [189,1000].reduce(add, 0); 
function add(accumulator, a) {
  return accumulator + a;
}

console.log(sum);
