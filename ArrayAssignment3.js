let productPrices=[12.5,33.75,65.25,88.5,100.75,99,23]
let discountedPrices=productPrices.map(price=>price*0.9)
console.log(discountedPrices);
let affordableProducts=discountedPrices.filter(price=>price<50)
console.log(affordableProducts)
let totalCost=affordableProducts.reduce((sum,price)=>sum+price,0)
console.log(totalCost);