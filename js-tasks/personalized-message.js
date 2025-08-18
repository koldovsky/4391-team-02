//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

// Oleksandr Romaniuk
function greet (name, owner) {
  if(name == owner) {
    return "Hello boss";
  }
  return "Hello guest";
}

//Stefania
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}
