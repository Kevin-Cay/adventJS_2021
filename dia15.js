const checkSledJump = (heights) => {
    const maxNum = heights.indexOf(Math.max(...heights));
    // console.log(maxNum)
    const newArr = heights.slice(maxNum, (heights.length))
        // console.log(newArr)
    let anw = true
    if (1 < newArr.length) {
        for (let j = 0; j < maxNum; j++) {
            if (heights[j] >= heights[j + 1]) {
                // console.log(heights[j] + '=>' + heights[j + 1])
                anw = false
                continue
            }
        }

        for (let i = 0; i < (newArr.length - 1); i++) {
            if (newArr[i] <= newArr[i + 1]) {
                // console.log(newArr[i] + '=>' + newArr[i + 1])
                anw = false
                continue
            }
        }
    } else {
        anw = false
    }

    //return anw
    console.log(anw)
}


// checkSledJump([1, 2, 3, 2, 1])
// checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
// checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
// checkSledJump([0, 1000, 1])
// checkSledJump([1, 2, 3, 2, 1, 2, 3])
// checkSledJump([2, 4, 4, 6, 2])
checkSledJump([1, 2, 3])