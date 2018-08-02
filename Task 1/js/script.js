
//1/1
function converterUah(valNum) {
    document.getElementById("outuah").innerHTML=valNum*26;
 }
function converterUsd(valNum) {
    document.getElementById("outusd").innerHTML=valNum/26;
 }



//1.2
function getMaxMin(numbers) {
    var max = Math.max.apply(null, numbers);
    var min = Math.min.apply(null, numbers);
    return {max: max, min: min};
}

console.log(getMaxMin([1, 23, -5, 11]));



//1/3
function midl(arr) {
  const sum = arr.reduce(function(a, b) {
    return a + b;
  });
    return sum/arr.length;
}
  
console.log(midl([1, 4, 2]));





