const ovejas = require('./dia1_test.js')

const rTest = /[an]/i;

const result = ovejas.filter((oveja) => {
    return oveja.color === "rojo" && rTest.test(oveja.name)
})

console.log(result);