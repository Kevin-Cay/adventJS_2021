function sumasPares(numbers, result) {
    let res = []
        //for para evaluar todo el arreglo de una mejor manera pero aún necesita más lógioca
    for (let i = 1; 0 < (numbers.length); i++) {
        // console.log(`${numbers[0]} + ${numbers[i]}`)
        // console.log(i)

        //si los números si se peuden sumar los agrega al arreglo de respuesta
        if (numbers[0] + numbers[i] === result) {
            res.push(numbers[0], numbers[i])
            break

        } else if (i === (numbers.length + 1)) {
            //se reiniciará el valor de i para que se puede evaluiar de nuevo 
            i = 0;
            //se sacará el primer termino del arreglo 
            numbers.shift()
        } else if (numbers.length === 0) {
            //si queda vacío el arreglo mejor se sale ya que es seguro que no tendrá respuesta 
            break
        }
    }

    if (res.length > 0) {
        //return res
        console.log(res)
    } else {
        //return null
        console.log(null)
    }

}

sumasPares([3, 5, 7, 2], 10)
sumasPares([-3, -2, 7, -5], 10)
sumasPares([2, 2, 3, 1], 4)
sumasPares([6, 7, 1, 2], 8)
sumasPares([0, 2, 2, 3, -1, 1, 5], 6)