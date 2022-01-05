const carta = 'bici coche  balón _playstation bici   coche  peluche'


const list = carta.split(" ");
const newList = list.filter((element) => {
    return element[0] !== "_" && element.length > 0
})
let result = newList.reduce((countWords, Word) => {
    countWords[Word] = ++countWords[Word] || 1;
    return countWords;
}, {});

console.log(result)