const c=true

if(!c){
 console.log("Happy new year")
}else{
   console.log("Happy old year") 
}

let i=0
while(i<10){
    
    console.log(i)
    i++
}
 console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
do{
i++
}while(i>10);
 console.log(i)


console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
// if we know how many times we have to loop then Go for "FOR loop"
// Use"while loop" if we have only condition
// multiple of 2 & 5 in number from 1-100 and we want only 3
let n=0
 for(let k=1;k<=100;k++){
    if(k%2==0 && k%5==0){
        n++
    console.log(k)
    if(n==3)
  break
    }

 }