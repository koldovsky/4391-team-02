// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/solutions/javascript

function move(position, roll) {
  return position + roll * 2;
}

//Mykhailo Vasilyev


//Game move
//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

// Oleksandr Romaniuk
function move (position, roll) {
  return position + roll * 2;
}

//Stefania
function move(position, roll) {
  const newPosition = position + roll * 2;
  return newPosition;
}

//Mykhailo Vasilyev
function move (position, roll) {
return position + (roll*2);
}


//Keep hydrated
//https://www.codewars.com/kata/keep-hydrated-1/train/javascript

// Oleksandr Romaniuk
function litres(time) {
  return Math.floor(time * 0.5);
}

//Stefania
function litres(time) {
  const totalLitres = Math.floor(0.5 * time);
  return totalLitres;
}

//Mykhailo Vasilyev
function litres(time) {
 
  const water = time * 0.5;

  return Math.floor(water);
}


//Make negative
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

//Mykhailo Vasilyev
function makeNegative(num) {
if (num > 0) {
    return num * -1;
  } else {
    return num;
  }
}


//Messi goals
//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

// Oleksandr Romaniuk
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Stefania
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return totalGoals;
}
//Mykhailo Vasilyev
function goals(laLigaGoals, copaDelReyGoals, championsGoals) {

  return laLigaGoals + copaDelReyGoals + championsGoals;
}
console.log(goals(5, 10, 2));   // 17
console.log(goals(15, 5, 8));   // 28
console.log(goals(0, 0, 0));    // 0


//Opposites attract
//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

// Oleksandr Romaniuk
function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1;
}
//Stefania
function lovefunc(flower1, flower2) {
  if (flower1 % 2 !== flower2 % 2) {
    return true;
  } else {
    return false;
  }
}

//Mykhailo Vasilyev
function lovefunc(flower1, flower2) {
  
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


//Personalized message
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

//Mykhailo Vasilyev
function greet(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}
