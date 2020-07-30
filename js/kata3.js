//array difference
//link https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) { 
    var result = [];
  for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      result.push(a[i]);
    }
  }
  return result;
}