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

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  const minValue = Math.min(...arr);

  if (toReturn === "index") return arr.indexOf(minValue);
  return minValue;
}

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  const ageDifference = dadYearsOld - sonYearsOld;
  const years = ageDifference - sonYearsOld;

  return years < 0 ? -years : years;
}

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
  return n * 2 - 2;
}

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  if (n > 0) {
    return n < 13 ? n - 1 : n - 2;
  }
  return n;
}

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
  return 1000 * (h * 3600 + m * 60 + s);
}
