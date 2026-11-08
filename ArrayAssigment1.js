

let expenses=[12,33,65,88,100]


let sum=0;
let highest=expenses[0];
let lowest=expenses[0];
for(let i=0;i<expenses.length;i++){
    sum=sum+expenses[i]
    if(expenses[i]>highest){
     highest=expenses[i]
     }
     if(expenses[i]<lowest){
        lowest=expenses[i]
     }
}
console.log(sum)
console.log(`Lowest Expense: $${lowest}`);  
console.log(`Highest Expense: $${highest}`);

// Second Method using reduce and sort

let totalSum=expenses.reduce((sum,expense)=>sum+expense,0)
console.log(totalSum)


 
let highestExpanse=expenses.sort((a,b)=>b-a);
console.log(highestExpanse[0])
let LowestExpanse=expenses.sort((a,b)=>a-b);
console.log(LowestExpanse[0])


