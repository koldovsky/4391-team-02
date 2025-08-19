// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  list.sort(function (a, b) {
    return a - b;
  });
  return list[0];
};

var max = function (list) {
  list.sort(function (a, b) {
    return a - b;
  });
  return list[list.length - 1];
};



function min(arr, toReturn) {
  const minValue = Math.min(...arr);
  if (toReturn === "index") return arr.indexOf(minValue);
  return minValue;
}
