// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let mark = 76;
if( mark>=90 && mark <=100)
        console.log('A')
else if(mark >= 70 && mark<=89)
        console.log('B')
else if(mark >= 60 && mark <=69)
        console.log('C')
else if (mark >= 50 && mark <=59)
        console.log('D')
else if (mark >= 0 && mark <=49)
        console.log('E')
    else{
        console.log("enter valid marks")
    }
