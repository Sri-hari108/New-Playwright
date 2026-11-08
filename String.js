const Person=require('./Class')

let Name='Hare Krishna'
console.log(Name.length)
let SubName=Name.slice(4,12)
console.log(SubName)

let splitName=Name.split(" ")
console.log(splitName[0])
console.log(splitName[1])

let day='2'
let nextday='11'
let diif=parseInt(nextday-day)
console.log(diif)
let nn=diif.toString()
console.log(nn)

let newquation=Name + " Both Radha Krishna Jai SriKrishna"
console.log(newquation);
/* 1st method
let splitword=newquation.split(" ")

//let newquation = ["Hare", "Krishna", "Both", "Radha", "Krishna"];
console.log(splitword);

let count = 0;
for (let i = 0; i < splitword.length; i++) {
  // 2. Comparison value "Krishna" must be in quotes
  // 3. Use === for strict equality (best practice in JS)
  if (splitword[i] === "Krishna") { 
    count = count + 1;
  }
}
console.log(count);
*/

// 2nd method
//let place=newquation.indexOf("Krishna",6)
//console.log(place)


// By indexOf we can know how many times a word come in the sentence.
let count=0

let placeword=newquation.indexOf("Krishna")
console.log(placeword)

while(placeword !== -1){
    count++
    placeword=newquation.indexOf("Krishna",placeword+1)
}
console.log(count)

console.log("---------------------------------------------")

let person=new Person("Jai","Jaggnath")
console.log(person.fullName())

