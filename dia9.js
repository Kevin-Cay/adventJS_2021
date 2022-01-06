function groupBy(collection, it) {

    let res = {}

    if (typeof(it) === "function") {

        collection.forEach(element => {
            // console.log(it(element))
            res.hasOwnProperty(`${it(element)}`) ? res[`${it(element)}`].push(element) : res[`${it(element)}`] = [element]
        });

    } else {
        collection.map(element => (res.hasOwnProperty(`${element[it]}`) ? res[`${element[it]}`].push(element) : res[`${element[it]}`] = [element]))
            // console.log(newValue[it])
            // console.log(collection[0])

    }
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

// console.log(typeof(newe))
// console.log(typeof(lg))
// console.log(newe(6.4))
// console.log(ys.lg)
// console.log(obj[ys])