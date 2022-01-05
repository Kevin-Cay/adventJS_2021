const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]
const pricesAda = [3, 3, 3, 3, 3]
const pricesDoge = [18, 15, 12, 11, 9, 7]

const maxProfit = (prices) => {
    //find the middle of the array
    let middle = Math.trunc(prices.length / 2)
        //slice in two parts
    let part1 = prices.slice(0, middle)
    let part2 = prices.slice(middle, prices.length)

    //find the max and min 
    const max = Math.max(...part2)
    const min = Math.min(...part1)


    //compare
    if (max > min) {
        // return max-min
        console.log(max - min)
    } else {
        // return -1
        console.log(-1)
    }
}

maxProfit(pricesBtc)
maxProfit(pricesEth)
maxProfit(pricesAda)
maxProfit(pricesDoge)