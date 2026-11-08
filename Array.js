var marks=Array(6)
var marks =new Array(68,99,88,33,44,22,11)
var marks=[100,34,56,76,88,99,9]
submarks=marks.slice(3,6)
console.log(submarks)
/*
console.log(marks[3])
 marks[4]=100
 console.log(marks)
 marks.push(33)
 console.log(marks)
 marks.pop()  // delete last index
 console.log(marks)
 marks.unshift(11)  // adding in the first index
 console.log(marks)
 */
console.log(marks.length)

console.log(marks.indexOf(9))
console.log(marks.includes(93))// very important

var sum=0
for(var i=0;i<marks.length;i++){
    sum=sum+marks[i]
   console.log(marks[i])
}
console.log(sum)

// Reduce/filter

var total=marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

var evenNum=[12,13,14,15,16]
var even=[]
for (var i=0;i<evenNum.length;i++){
    if(evenNum[i]%2==0){
        even.push(evenNum[i])
    }
}
console.log(even)

var evenNumbers=evenNum.filter(evenNumber=>evenNumber%2==0)
console.log(evenNumbers)
//map
var maptripple=evenNumbers.map(score=>score*3)
console.log(maptripple)

var totalaaraysum=maptripple.reduce((sum,ss)=>sum+ss,0)
console.log(totalaaraysum)

var evenNum1=[12,13,14,15,16]

var inoneline=evenNum1.filter(evenNumber=>evenNumber%2==0).map(score=>score*3).reduce((sum,ss)=>sum+ss,0)  // important
console.log(inoneline)

//Sort

var Holyname=["Hari","Krishna","Hare","Rama","Narshima","Jagnath"]
Holyname.sort()
console.log(Holyname)

Holyname.reverse()
console.log(Holyname)

var number=[108,16,27,192]

number.sort((a,b)=>a-b)
console.log(number)
number.sort((a,b)=>b-a)
console.log(number)
