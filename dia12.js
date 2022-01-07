const getMinJump = (obstacles) => {
    //ordenar el arreglo que entra
    let newArr = obstacles.sort(function(a, b) { return a - b })
    let camino = []
    let count = 0
        //llenar nuestro camino con . o X dependiendo lo que necesitemos 
        //se le resta uno al length para que sea el valor final del arreglo 
        // se utiliza el valor <= para que pueda llenar la última fila 
    for (let i = 0; i <= newArr[newArr.length - 1]; i++) {
        if (newArr[count] === i) {
            camino.push('X')
            count += 1
        } else {
            camino.push(".")
        }
    }
    //se empieza todo de 1 ya que el valor 2 siempre será camino 
    //mienstras no encuentre X seguíra evaluando el contador, si llega al final es el que retonará
    count = 1
    let multi = 1
    for (let j = 1; j < camino.length; j++) {
        if (camino[count * multi] === ".") {
            multi += 1
        } else if (camino[count * multi] === "X") {
            j = 1
            multi = 1
            count += 1
        }
    }
    //return count
    console.log(camino)
    console.log(count)
}

// getMinJump([5, 3, 6, 7, 9])
// getMinJump([5, 3, 6, 8])
// getMinJump([2, 4, 6, 8, 10])
getMinJump([1, 2, 3, 5])
getMinJump([3, 7, 5])
getMinJump([9, 5, 1])