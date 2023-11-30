console.clear();

const farm = [
    'Cow',
    'Pig',
    'Chicken',
    'Dog',
    'Cat',
    'Cow',
    'Horse',
    'Sheep',
    'Goat',
    'Cow',
    'Duck',
    'Cat',
    'Turkey',
];

// Kindergarden
let cowsSum1 = 0;
for (let i = 0; i < farm.length; i++) {
    if(farm[i] === 'Cow'){
        cowsSum1++;
    }
}  
console.log('cowsSum1',cowsSum1);

// Middle school
let cowsSum2 = 0;
for(const animal of farm){
    if(animal === 'Cow'){
        cowsSum2++;
    }
}
console.log('cowsSum2',cowsSum2);

// High school
let cowsSum3 = 0;
farm.forEach(animal => { animal === 'Cow' ? cowsSum3++ : null});
console.log('cowsSum3',cowsSum3);

// University
let cowsSum4 = 0;
farm.forEach(animal => { animal === 'Cow' && cowsSum4++});
console.log('cowsSum4',cowsSum4);

console.clear();

const farm2 = [
    { name: 'Cow', age: 5 },
    { name: 'Pig', age: 3 },
    { name: 'Chicken', age: 1 },
    { name: 'Dog', age: 2 },
    { name: 'Cat', age: 4 },
    { name: 'Cow', age: 7 },
    { name: 'Horse', age: 4 },
    { name: 'Sheep', age: 6 },
    { name: 'Goat', age: 3 },
    { name: 'Cow', age: 2 },
    { name: 'Duck', age: 1 },
    { name: 'Cat', age: 2 },
    { name: 'Turkey', age: 3 },
];

// Kindergarden
let cowsAgeSum5  = 0;
for (let i = 0; i < farm2.length; i++) {
    if (farm2[i].name === 'Cow') {  
        cowsAgeSum5  += farm2[i].age;
    }    
}
console.log('For loop',cowsAgeSum5 );

// Middle school
let cowsAgeSum6 = 0;
for(const animal of farm2){
    if(animal.name === 'Cow'){
        cowsAgeSum6 += animal.age
    }
}
console.log('For of',cowsAgeSum6);

// High school
let cowsAgeSum7 = 0;
farm2.forEach(animal => animal.name === 'Cow' ? cowsAgeSum7 += animal.age : null);
console.log('forEach',cowsAgeSum7);

// University
let cowsAgeSum58 = 0;
farm2.forEach(animal => animal.name === 'Cow' && (cowsAgeSum58 += animal.age));
console.log('forEach && operator',cowsAgeSum58);

console.clear();


let a = 5;
let b = a; // by value

a = 10

console.log('By value');
console.log('A',a);
console.log('B',b);


let c = {value: 5};
let d = c;            //by reference

c.value = 10

console.log('By reference');
console.log('C', c);
console.log('D', d);



// ,,,,,,,,,,, => [] rest
// {} => ,,,,,,,,,,,, spread


//      rest operator ...
const sum = (...numbers) => {
    console.log(numbers);
    let total = 0
    for(const num of numbers){
        total += num;
    };
    console.log(total);
}
sum(5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23);


let V = { value: 5, name: 'Vasya', age: 25, hasCat: true };
let N = {...V, age: 5, hasDog: true};

console.log('V', V);
console.log('N', N);


const mas1 = [1, 2, 3, 4, 5];

const [A, B, ...C] = mas1;

console.log(A);
console.log(B);
console.log(C);


const obj = {name: 'Tom', age: 12};

const {name, labas} = obj;

console.log(name, labas, obj);
