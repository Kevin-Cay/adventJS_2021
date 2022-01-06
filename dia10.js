const getCoins = (change) => {
    //crear nuestro arr guía 
    let values = [50, 20, 10, 5, 2, 1]
    let i = 0
    let anw = []

    //hacer recursividad para poder averiguar cual será la menor cantidad de fichas 
    const getChange = (amount) => {
        //crear la variable que llevará la cantidad de fichas 
        let total = 0
            //mientras el iterador sea menor que el length de nuestra guía 
        if (values.length > i) {
            //la mayur cantidad de fichas posibles y menor a la vez 
            total = Math.trunc(amount / values[i])
            anw.push(total)
            i = i + 1
            getChange(amount - (total * values[i - 1]))
        }
    }
    getChange(change)
    anw.reverse()
        //return anw
    console.log(anw)
}

getCoins(51)
getCoins(3)
getCoins(5)
getCoins(16)
getCoins(100)