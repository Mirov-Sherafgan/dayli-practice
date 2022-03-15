const arr = [];


console.time('Arr-fill')
Array(10).fill(0)
console.timeEnd('Arr-fill')

//initialize custom method to prototype of Array
Array.prototype.dim = function(dim, init) {
    let a = [];
    for(let i = 0; i < dim; i++) {
        a[i] = init
    }
    return a
}

console.time('Dim function')
const dim = arr.dim(10, 0)
console.log(dim); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
console.timeEnd('Dim function')