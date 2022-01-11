function countPackages(carriers, carrierID) {
    let total = 0;
    let subordinados = [carrierID]
        // let persona = carriers.find(element => element[0] === carrierID)
        // total += persona[1]
        // subordinados = [...persona[2]]

    //recorrer todo el arreglo y buscar si es arreglo o es un string 
    //para poder desués sumar el total de paquetes que puede manejar 
    const find = (arr) => {
        arr.forEach(element => {
            let indiv = carriers.find(e => e[0] === element)
                // console.log(indiv)
            total += indiv[1]
            if (typeof(indiv[2]) === "object") {
                subordinados = [...indiv[2]]
                find(indiv[2])
            } else if (typeof(indiv[2]) === "string") {
                subordinados.push(indiv[2])
            }
        });
    }
    find(subordinados)
    console.log(total)
}

const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []]
]
const carriers2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
]

countPackages(carriers2, 'camila')
countPackages(carriers, 'dapelu')