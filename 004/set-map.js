console.clear();

const array = [];

array.push(10);
array.push(10);
array.push(10);
array.push(7);

console.log(array);

const set = new Set();

set.add(10);
set.add(10);
set.add(10);
set.add(10);
set.add(101);
set.add(111);
set.add(111);
set.add(150);
set.add(7);
set.add(6);
set.add(5);
set.add({a:1})
set.add({a:1})

set.delete(7)

console.log(set);

console.log(set.has(10), set.size);


//itterate over a set
for(const item of set){
    console.log(item);
}

set.forEach(item => console.log(item));

//convert set to array
const setArray = [...set];
console.log(setArray);


setArray.sort((a, b) => a - b);
console.log(setArray);
set.clear()


setArray.forEach(item => set.add(item));
console.log(set);



// randSet = new Set();
// while (randSet.size < 10){
//     randSet.add(rand(0, 11));
// }
// console.log(randSet);


console.log('MAP');

const map = new Map();

map.set('Petras', 40);
map.set('Jonas', 39);
map.set('Maryte', 39);
map.set('Jonas', 50);  // overwrites the previous value

map.set({a:1}, 44)
map.set([1, 2, 3], 44)

map.set(function(){return 8}, 55);

console.log(map);



const fancyMap = new Map();

fancyMap.set(function(a) {return a + 5}, 32);
fancyMap.set(function(a) {return a / 5}, 33);
fancyMap.set(function(a) {return a * 5}, 34);

for(const item of fancyMap){
    console.log(item[0](item[1]));
}


const mapArray = [...fancyMap];
console.log(mapArray);