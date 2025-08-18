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