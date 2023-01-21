// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let areaOfCircle = (r) =>{
    return (Math.PI * r * r);
}
let circumferenceOfCircle = (r) =>{
    return (2*Math.PI * r);
}
console.log(areaOfCircle(10));
console.log(circumferenceOfCircle(10));
