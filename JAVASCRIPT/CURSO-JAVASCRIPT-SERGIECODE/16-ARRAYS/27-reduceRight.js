// reduceRight()	Reduce the values of an array to a single value (going right-to-left)

const numbers = [175, 50, 25];

// Subtract the numbers in the array, starting from the end:
function myFunc(total, num) {
    console.log(total , ' ' , num);
    return total - num;
}

console.log(numbers.reduceRight(myFunc));