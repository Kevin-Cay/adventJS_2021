function countDecorations(bigTree) {
    let answ = 0

    const findNumbers = (obj) => {
        for (const key in obj) {
            // typeof(obj[key]["value"]) !== "undefined" ? answ += obj[key]["value"]: null
            if (typeof(obj[key]) === "object" && obj[key] !== null) {
                // console.log(obj[key])
                findNumbers(obj[key])
            } else if (typeof(obj[key]) === "number") {
                answ += obj[key]
            }
        }
    }
    findNumbers(bigTree)
        //return answ
    console.log(answ)
}

const tree = {
    value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
    left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
    },
    right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
    }
}
const bigTree = {
    value: 1,
    left: {
        value: 5,
        left: {
            value: 7,
            left: {
                value: 3,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    },
    right: {
        value: 6,
        left: {
            value: 5,
            left: null,
            right: null
        },
        right: {
            value: 1,
            left: null,
            right: null
        }
    }
}

countDecorations(tree) // 6
countDecorations(bigTree) // 28