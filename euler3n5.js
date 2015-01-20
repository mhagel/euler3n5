//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
function range(i) {
    return i?range(i-1).concat(i):[]
    
}

range1 = range(1000);

var euler = [];


for (i=0; i<range1.length; i++) {
	if (i % 3 == 0) {
		euler.push(i);
	}
	else if (i % 5 ==0) {
		euler.push(i);
	}
}

var eulerSum = 0;

for (i=0; i< euler.length; i++) {
	eulerSum += euler[i];
}

console.log(eulerSum);

