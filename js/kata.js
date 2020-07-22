//multiples of 3 or 5,(first kata) 
//link(https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript)

function solution(number){
    console.log (number);
   let sum =0;
    for (i=0;i<number;i++){
      if (i%3===0 || i%5===0){
        sum+=i; 
      }
      
    }
    return sum;
    console.log(sum);
  }