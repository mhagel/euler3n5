var n1 = 0;  // for sum of squares
var n2 = 0;  // for square of sum
var result = n1 - n2;
var sqArray = [];

//step 1: square each natural number and put into an array
for(var i = 0; i < 100; i++) {
	n1 = i * i;
	sqArray.push(n1);
}


//step 2: sum up all the values in that array
var sumOfSquares = 0;

for(i = 0; i < sqArray.length; i++) {
 	sumOfSquares += sqArray[i];
 }
alert(sumOfSquares);