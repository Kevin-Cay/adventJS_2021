function groupBy(collection, it) {

    let res = {}
        // validar si propiedad it es una función 
    if (typeof(it) === "function") {
        // evaluar si el resultado del elemento dentro de la función existe o no, para añadir o crearlo 
        collection.forEach(element => {
            // console.log(it(element))
            res.hasOwnProperty(`${it(element)}`) ? res[`${it(element)}`].push(element) : res[`${it(element)}`] = [element]
        });

    } else {
        // evaluar si el elemento . it existe o no para crearlo o añadirlo igual que lo anterior 
        collection.map(element => (res.hasOwnProperty(`${element[it]}`) ? res[`${element[it]}`].push(element) : res[`${element[it]}`] = [element]))
            // console.log(newValue[it])
            // console.log(collection[0])

    }
    //se retorna como objeto o JSON 
    //return res
    console.log(res)
}


groupBy([6.1, 4.2, 6.3], Math.floor)
groupBy([{ age: 23 }, { age: 24 }], 'age')
groupBy(['one', 'two', 'three'], 'length')
groupBy(
    [1397639141184, 1363223700000],
    timestamp => new Date(timestamp).getFullYear()
)
groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
], 'rating')