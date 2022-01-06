const shouldBuyFidelity = (times) => {
    let suscription = 250
    let normalPrice = (12 * times)
    let count = 0
    let totalCount = 0
        //sumar solamente el porcentaje por el cual se estará haciendo la oferta 
    for (let i = 1; i < (times + 1); i++) {
        if (i === 1) {
            count = 12 * 0.75
        } else {
            count = count * 0.75
        }
        totalCount += count
    }

    let ans = ((suscription + totalCount) >= normalPrice ? false : true)
    console.log(ans)
        // console.log(suscription + totalCount)
}

shouldBuyFidelity(1)
    // shouldBuyFidelity(2)
shouldBuyFidelity(3)
    // shouldBuyFidelity(15)
shouldBuyFidelity(100)