// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// just solve for numbers smaller than 1,000 and don't worry about making it efficient. 

//wikipedia: For a prime factor p of n, the multiplicity of p is the largest exponent a for which pa divides n exactly.

//so we need a way to identify prime factors by plugging in a number.

// Maybe a function that checks for prime factors using modulo? It would take in a number as an argument and return all the prime factors in an array?

var primeFactors = [];

function primeID(num) {
    for (i = 0; i <= 1000; i++) {
		if (num % i === 0) {
			primeFactors.push(i);
		}
	}
}

primeID(600851475143);



//OK, now need to identify the largest number in that array. Will probably search for an array method that does that.
//mdn: The Math.max() function returns the largest of zero or more numbers.

function maxOfArray(array) {
	console.log(Math.max.apply(null, array));
}


maxOfArray(primeFactors);
