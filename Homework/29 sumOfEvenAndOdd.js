// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let odd=0;
let even=0;

for(i=0;i<=100;i++){
    if(i%2 ==0) even+=i;
    else odd+=i;
}
console.log(`
Even Sum is:${even}
Odd Sum is :${odd}
`)
