const palabra1 = "bici coche (balón) bici coche peluche"
const palabra2 = "(peluche() (bici [coche]) bici [coche] balón)"
const palabra3 = "(peluche() {) bici"

const validacion = {
    "{": "}",
    "[": "]",
    "(": ")"
}

const validate = (letter) => {
    let arr = [];
    let current = ""
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === "{" || letter[i] === "[" || letter[i] === "(") {
            if (validacion[letter[i]] !== letter[i + 1]) {
                arr.push(validacion[letter[i]])
                continue;
            }
            return false
        } else if (letter[i] === "}" || letter[i] === "]" || letter[i] === ")") {
            current = arr.pop()
            if (current !== letter[i]) {
                return false
            }
        }
    }

    if (arr.length > 0) {
        return false
    } else {
        return true
    }
}

const res = validate(palabra2)


console.log(res)
console.log(validate(palabra1))
console.log(validate(palabra3))