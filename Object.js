// Object is the collection of property

let person={
    firstName:'Srihari',
    lastName:'Das',
    age:29,
    fullname:function () {
        console.log(this.firstName+this.lastName)
    }

}
console.log(person.fullname())
console.log(person.firstName)
console.log(person['lastName'])
person.firstName='Akarshak'
console.log(person.firstName)
person.gender='male'
console.log(person)
console.log('gender' in person)
delete person.gender
console.log(person)
console.log('gender' in person)
// print all the value in the property

for(let key in person){
    console.log(person[key])
}