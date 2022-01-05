const day = new Date("Jan 2, 2022 23:59:59")
const day2 = new Date("December 01, 2021 03:24:00")
const day3 = new Date("December 31, 2021 03:24:00")
const day4 = new Date("December 25, 2021 03:24:00")
const day5 = new Date("Dec 24, 2021 23:59:59")
const days = (date) => {

    const xmas = new Date("December 25, 2021")
        //diferencia entre los días y se divide para poder sacar la cantiodad de días 
    let diff = (xmas - date) / (1000 * 60 * 60 * 24);
    if (diff > 0) {

        //retornará el valor del día que este más cerca del siguiente por el ceil 
        // return Math.ceil(diff) 
        console.log(Math.round(diff))
        console.log(Math.ceil(diff))
        console.log(diff)
    } else {
        //retornará el numero negativco pero sin decimales 
        // return Math.trunc(diff) 
        console.log(Math.trunc(diff))
    }
}

days(day)
days(day2)
days(day3)
days(day4)
days(day5)