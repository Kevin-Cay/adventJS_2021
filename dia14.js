const missingReindeer = (ids) => {
    const lastId = Math.max(...ids)
    const numbers = Array.from(Array(lastId).keys())
        // let newArr = ids.sort(function(a, b) { return a - b })
    console.log(numbers)
    let ans = numbers.find(id => !ids.includes(id))
    console.log(ans);
}

missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
    // missingReindeer([0, 1]) // -> 2
    // missingReindeer([3, 0, 1]) // -> 2
    // missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
    // missingReindeer([1])