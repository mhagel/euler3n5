var n1 = 0;  // for sum of squares
var n2 = 0;  // for square of sum
var sqArray = [];

//step 1: square each natural number and put into an array
for(var i = 0; i <= 100; i++) {
	n1 = i * i;
	sqArray.push(n1);
}


//step 2: sum up all the values in that array
var sumOfSquares = 0;

for(i = 0; i < sqArray.length; i++) {
 	sumOfSquares += sqArray[i];
 }
console.log("The sum of the squares is " + sumOfSquares);
//step 3: sum up all of the natural numbers 1 - 100.

for(i = 0; i <= 100; i++) {
    n2 += i;
}
var squareOfSum  = 0;
squareOfSum =  n2 * n2;
console.log("The square of the sum is " + squareOfSum);


//step 4: find the difference between the sum of squares and the square of sums

var result = 0;
result = squareOfSum - sumOfSquares;

console.log("The difference between the sum of squares of the first 100 natural number and the square of the sum is " + result);