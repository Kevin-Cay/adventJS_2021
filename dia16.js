const decodeNumbers = (symbols) => {
    // ¡No olvides compartir tu solución en redes!
    const valores = {
        ".": 1,
        ",": 5,
        ":": 10,
        ";": 50,
        "!": 100
    }
    const newArr = (symbols.split('')).reverse()
    let result = 0;
    for (let i = 0; i < (newArr.length); i++) {
        if (valores.hasOwnProperty(newArr[i])) {
            if (i === 0) {
                result += valores[newArr[i]]
            } else if (valores[newArr[i]] < valores[newArr[i - 1]]) {
                result -= valores[newArr[i]]
            } else {
                result += valores[newArr[i]]
            }
            // console.log(valores[newArr[i]])
        } else {
            // result = NaN
            console.log(NaN)
            return NaN
        }
    }
    console.log(result)

}




decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107
decodeNumbers(';.W') // NaN