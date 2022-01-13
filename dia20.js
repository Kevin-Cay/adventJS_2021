function pangram(letter) {

    letter = letter.toLowerCase().normalize('NFKC')
    let answ = 'abcdefghijklmnñopqrstuvwxyz'.split('').every(function(a) {
        return letter.includes(a)
    })
    console.log(answ)
}

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true
pangram('De la a a la z, nos faltan letras') //false