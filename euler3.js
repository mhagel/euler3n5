// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// just solve for numbers smaller than 1,000 and don't worry about making it efficient. 

//Step 1: Put prime factors (under 1,000) into an array:

var primeFactors = [];

function primeID(num) {
    for (i = 0; i <= 1000; i++) {
		if (num % i === 0) {
			primeFactors.push(i);
		}
	}
}

primeID(600851475143);



//Step 2: Identify the largest value in the array and print the results:

function maxOfArray(array) {
	console.log(Math.max.apply(null, array));
}

maxOfArray(primeFactors);