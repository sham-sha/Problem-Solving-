
// creating the hash map 
// add values to hash map 

let arr = [10, 20, 30, 40, 50]
let  map= new Map()  

for (let key in arr) map.set(key, arr[key])

// for getting key 
console.log("Keys");

for(let key of map.keys()) console.log(key);
for(let key of map) console.log(key[0]);

// for getting value
console.log("Values");
for(let key of map.values()) console.log(key);
for(let key of map) console.log(key[1]);


for(let key of map.values()) console.log(key);


// for delete key  