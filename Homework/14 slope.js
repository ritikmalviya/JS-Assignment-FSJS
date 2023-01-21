// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let slope = (...args)=>{
    let m = (args[3]-args[2])/(args[1]-args[0]);
    console.log(m)
}
slope(2,6,2,10) //2
