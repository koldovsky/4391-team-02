/* https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
   Povstianyi D */
function circleCircumference(circle) {
    return 2 * circle.radius * Math.PI;
}

/* https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
   Povstianyi D */
function giveMeFive(obj) {
    const array = [];
    for (var key in obj) {
        if (key.length === 5) {
            array.push(key);
        }
        if (obj[key].length === 5) {
            array.push(obj[key]);
        }
    }
    return array;
}