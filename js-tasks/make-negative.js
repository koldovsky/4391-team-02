//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// Oleksandr Romaniuk
function makeNegative(num) {
  if(num > 0) {
    return num * -1;
  }
  return num;
}

//Stefania
function makeNegative(num) {
  let finalNum = 0;
  if (num > 0) {
    finalNum = num * -1;
  } else if (num < 0) {
    finalNum = num;
  }
  return finalNum;
}
