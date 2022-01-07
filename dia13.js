const wrapGifts = (gifts) => {
    let res = []
    let init = []
        //se evalua si no está vacío
    if (gifts.length > 0) {
        //se le agrega un * al inicio y al final 
        gifts.forEach(e => {
            res.push(`*${e}*`)
        });
        // se crea un nuevo string con la longitud que necesitamos 
        for (let i = 0; i < (gifts[0].length + 2); i++) {
            init.push('*')
        }
        //se convierte el array a string sin las  ,
        //se le agrega a la respuesta un string con la cantidad de * necesarios

        res.push(init.join(''))
        res.unshift(init.join(''))
    }
    //return res
    console.log(res)

}

wrapGifts(["📷", "⚽️"])
wrapGifts(["🏈🎸", "🎮🧸"])
wrapGifts([])