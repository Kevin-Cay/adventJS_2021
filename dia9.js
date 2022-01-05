function groupBy(collection, it) {

    let res = {}

    if (typeof(it) === "function") {

        collection.forEach(element => {
            // console.log(it(element))
            res.hasOwnProperty(`${it(element)}`) ? res[`${it(element)}`].push(element) : res[`${it(element)}`] = [element]
        });

    } else {
        let newValue = collection[0]
        console.log(newValue[it])
        console.log(collection[0])
            // if (typeof(collection[0] === "object")) {
            //     console.log("object")
            // } else {
            //     console.log("not a object")
            // }
    }



    console.log(res)
    console.log("_____________________")
}


groupBy([6.1, 4.2, 6.3], Math.floor)
groupBy([{ age: 23 }, { age: 24 }], 'age')
groupBy(['one', 'two', 'three'], 'length')
groupBy(
    [1397639141184, 1363223700000],
    timestamp => new Date(timestamp).getFullYear()
)

// console.log(typeof(newe))
// console.log(typeof(lg))
// console.log(newe(6.4))
// console.log(ys.lg)
// console.log(obj[ys])