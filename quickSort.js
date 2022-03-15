const array = [-14, -11, 34, 38, 9, 23, -39, 35, -40, 8, -42, 6, -11, 18, 50, 19, -16, 34, -27, -46,];

// check sorted

console.log(isSorted(array));
console.log(isSorted([0, 1, 2, 3, 4]))
function isSorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false
        }
    }
    return true
}
