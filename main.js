// get prices of all items
// get sum of prices
// divide number of items
//
const sumOfPrices = items.reduce(function(sum, item) {
  return sum + item.price;
},0);

const avgPrice = `The average price is ${(sumOfPrices / items.length).toFixed(2)}.`

console.log(avgPrice);
console.log('\n');

// -----------------------------------------------------


const cheapItems = items.filter(function(item){
  return item.price >= 14 && item.price <= 18 && item.currency_code === 'USD';
});

cheapItems.forEach(function(item){
  console.log(item.title);
});

// -----------------------------------------------------

const britishItems = items.filter(function(item){
  return item.currency_code === 'GBP';
});

britishItems.forEach(function(item){
  console.log(item.title);
});

// -----------------------------------------------------

const woodFind = items.filter(function(item){
  return item.materials.includes('wood');
});

const woodLog = woodFind.forEach(function(item){
  console.log(`${item.title} is made of wood`)
})

// -----------------------------------------------------

const moreThanEight = items.filter(function(item){
  return item.materials.length >= 8;
});

// -----------------------------------------------------

const madeBySeller = items.filter(function(item){
  return item.who_made === 'i_did';
});

console.log(madeBySeller.length + ' items were made by their sellers.');
