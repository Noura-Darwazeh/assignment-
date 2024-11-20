// Task 2

function calculateSumAndAverageOfNumbers(nums) {
    if (nums.length === 0) {
        return { sum: 0, average: 0 };
    }

    const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
    const average = sum / nums.length;

    return { sum, average };
}

const numbers = [10, 20, 30, 40, 50];
const result = calculateSumAndAverageOfNumbers(numbers);

console.log(`Sum: ${result.sum}, Average: ${result.average}`);

