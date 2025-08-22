/* https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
   Povstianyi D */

function circleCircumference(circle) {
  return 2 * circle.radius * Math.PI;
}

/* https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
   Povstianyi D */
//    Vasyliev add more checks

function giveMeFive(obj) {
  const result = [];
  for (const key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (typeof obj[key] === "string" && obj[key].length === 5) {
      result.push(obj[key]);
    }
  }

  return result;
}

/*  https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
Vasyliev M*/

function buildFun(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(function () {
      console.log(i);
    });
  }
  return res;
}

/* 
https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
Vasyliev M*/

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
