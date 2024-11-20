// Task 3

function removeAllDuplicates(strings) {
    const set = new Set(strings)
    return [...set]
}

const string = ["apple", "apple", "apple", "orange", "banana", "orange", "banana"];
const uniqueArray = removeAllDuplicates(string);

console.log(uniqueArray); 