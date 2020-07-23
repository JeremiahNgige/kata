//Create Phone Number
//link: https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript

function createPhoneNumber(numbers){
    if (numbers.length==10){
    var array = numbers.map(function(number){
      
      if (number<=9 && number>=0){
       var i=number.toString();
      }
      return i;
    }); 
    }
    
     console.log(array); 
    let bracket2 = array.splice(3, 0, ")");
    let space    = array.splice(4, 0, " ");
    let sep      = array.splice(8, 0, "-");
    let bracket1 = array.unshift("(");
      
     console.log(array); 
    let string= array.toString();
    let join  =string.replace(/,/g, "");
      
    return join;
      console.log(join);
      
    }