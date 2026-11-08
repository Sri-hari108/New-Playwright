// Var -global level/function level
// let - global level per hoga nhi to /block level{} per hoga--therefore we generally use let

var greet="Jai Jagnath"

if(1==1){
   var greet="Gaur-Nitai" 
   //let greet="Gaur-Nitai" 
}

function add(a,b) {
    var greet="Hare Krishna"
  //  let greet="Hare Krishna"
   return a+b
}
let sum=add(3,8)
console.log(sum)
console.log(greet)

// don not have name=> Anonymus funtion----function expressions

let sumofInteger=function (c,d) {
    return c+d
} 
console.log(sumofInteger(4,4))

//

let sumofNumber=(c,d) =>c+d
console.log(sumofNumber(5,4))
