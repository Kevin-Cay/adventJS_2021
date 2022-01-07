const wrapGifts = (gifts) => {
    let res = []
    let init
        //se evalua si no está vacío
    if (gifts.length > 0) {
        //se le agrega un * al inicio y al final 
        gifts.forEach(e => {
            res.push(`*${e}*`)
        });
        // se crea un nuevo string con la longitud que necesitamos 
        init = "*".repeat(res[0].length)
        res.push(init)
        res.unshift(init)
    }
    //return res
    console.log(res)

}

wrapGifts(["📷", "⚽️"])
wrapGifts(["🏈🎸", "🎮🧸"])
wrapGifts([])