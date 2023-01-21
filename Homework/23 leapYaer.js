// 23. Write a program which tells the number of days in a month, now consider leap year.

let month = 4;
if(month ==2)
    console.log('28')
else if(month%2 == 0)
    console.log("30")
else
    console.log('31')
