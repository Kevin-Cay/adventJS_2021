const fun = (height) => {
    const lng = 1 + ((height - 1) * 2)
    const midd = (lng / 2) - .5
    let obj = {}
    let obj2 = {}
    for (let i = 0; i < lng; i++) {
        obj[i] = "_"
        obj2[i] = "_"
    }
    obj2[midd] = "#"
    obj[midd] = "*"
        // console.log(obj);
    let line = [];

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < lng; j++) {
            line.push(obj[j])
        }
        obj[midd - (i + 1)] = "*"
        obj[midd + (i + 1)] = "*"
        line.push("\n")
    }
    console.log(obj2);
    for (let k = 0; k < 2; k++) {
        for (const property in obj2) {
            line.push(obj2[property])
        }
        if (k < 1) {
            line.push("\n")
        }
    }
    console.log(line);
    const res = line.join("")
    console.log(typeof(res));
    console.log(res);
}
fun(3)
fun(5)
fun(9)