const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite',
            'cajon3': {
                'producto1': 'coca-cola',
                'producto2': 'fanta',
                'cajon4': {
                    'producto1': 'coca-cola',
                    'producto2': 'fanta',
                    'producto3': 'montain'
                }
            }
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
}
const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}

function contains(store, product) {

    // console.log(store);
    // console.log(product);

    for (const property in store) {
        //validar si existe esa propiedad en la tienda
        if (store.hasOwnProperty(property)) {
            if (typeof store[property] === "object") {
                //utilizar recursividad 
                contains(store[property], product)
            } else {
                if (store[property] === product) {
                    //solo si existe cambiará a true 
                    console.log(true)
                    break
                } else {

                }
            }
        }
    }
    console.log(false)
}




contains(almacen, "montain")
    // contains(almacen, "camiseta")
    // contains(otroAlmacen, "gameboy")
    // contains(otroAlmacen, "cd-rom")