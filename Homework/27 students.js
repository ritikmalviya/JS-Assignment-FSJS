// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
console.log(ages[0]+' is min and '+ages[ages.length-1]+' is max age');

if(ages.length % 2 === 0){
    console.log((ages[ages.length / 2] + ages[(ages.length / 2) + 1])/2);
}else{
    console.log(ages[ages.length/2]);
}
let total=0
for(let i of ages){
    total += i;
}
avg = total / ages.length
console.log('avg '+avg)

console.log(`range is  ${Math.max(...ages) - Math.min(...ages)}`)
console.log(Math.abs(Math.min(...ages) - avg)+ ' diffrence is ' + Math.abs(Math.max(...ages) - avg))
