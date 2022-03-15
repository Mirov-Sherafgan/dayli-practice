//find the double words from string

const text = 'Anuusshervoon sheraaaavgan uuuuh sheravgann'

console.time('for')
const arr = []
for (let i = 0; i < text.length; i++) {
    const letter = text[i]
    if (letter === text[i + 1]) {
        arr.push(letter)
    }
}
console.log(arr);
console.timeEnd('for')