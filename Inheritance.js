const Person=require('./Class')
class Pet extends Person{
    // constructor(firstName,lastName){
    //    super(firstName,lastName) 
    // }
}
let pet=new Pet("Hari","Bol")
console.log(pet.fullName())
console.log(pet.location)