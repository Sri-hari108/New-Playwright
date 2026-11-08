module.exports=

class Person{
    age=32
    //location='Mayapur'
    get location(){
        
        return "Mayapur";
    }

  constructor(firstName,lastName){
  this.firstName=firstName;
  this.lastName=lastName;
 }

 fullName(){
    console.log(this.firstName+this.lastName)
 }


}
// let person=new Person("Srihari","Das")
// let person2=new Person("Gaur","Nitai")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person2.fullName())


