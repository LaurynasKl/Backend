console.clear();
console.log('Hello from array castle!')

const colors = [
    'pink',
    'orange',
    'yellow',
    'pink',
    'blue',
    'indigo',
    'pink'
];

const black = colors.map(color => color.replace('pink', 'black'))
console.log(black);

const skyblue = colors.map(color => color.replace('pink', 'skyblue'));
console.log(skyblue);


const colors1 = [...colors];
const colors2 = [...colors];

colors1.forEach((color, index) => {
    if (color === 'pink') {
        colors1[index] = 'black';
    }
});

console.log(colors1);

colors2.forEach((color, index) => {
    if (color === 'pink') {
        colors2[index] = 'skyblue';
    }
});

console.log(colors2);

const colors3 = colors.map(color => color === 'pink' ? 'black' : color);
const colors4 = colors.map(color => color === 'pink' ? 'skyblue' : color);
console.log(colors3);
console.log(colors4);


const colors22 = [
    { name: 'pink' },
    { name: 'orange' },
    { name: 'yellow' },
    { name: 'pink' },
    { name: 'blue' },
    { name: 'indigo' },
    { name: 'pink' }
];

const black1 = colors22.map(color => color.name === 'pink' ? {name: 'black'} : color );
console.log(black1);
const skyblue1 = colors22.map(color => color.name === 'pink' ? {name: 'skyblue'} : color );
console.log(skyblue1);



const colors44 = [
    {name: 'pink', age: 12},
    {name: 'orange', age: 13},
    {name: 'yellow', age: 14},
    {name: 'pink', age: 15, tractor: 'John deere'},
    {name: 'blue', age: 16},
    {name: 'indigo', age: 17},
    {name: 'pink', age: 18}
];

const black2 = colors44.map((color) => color.name === 'pink' ? {...color, name: 'black'} : {...color});
console.log(black2);

colors44[1].age = 200

const skyblue2 = colors44.map((color) => color.name === 'pink' ? {...color, name: 'skyblue'} : color);
console.log(skyblue2);



const colors55 = [
    {name: 'pink', age: 12},
    {name: 'orange', age: 13},
    {name: 'yellow', age: 14},
    {name: 'pink', age: 15, tractor: 'John Deere'},
    {name: 'blue', age: 16},
    {name: 'indigo', age: 17},
    {name: 'pink', age: 18}
];

const changeCollor = colors55.map(color => color.name ? {...color, name: 'black'} : color);
console.log(changeCollor);

const changeCollor1 = colors55.map(color => color.name && {...color, name: 'black'});
console.log(changeCollor1);

const color66 = colors55.map(color => ({...color, name: 'black'}));
console.log(color66);


console.clear();

const cats = [
    {name: 'Tomas', age: 12},
    {name: 'Pukis', age: 13},
    {name: 'Juodis', age: 14},
    {name: 'Margis', age: 15, tractor: 'John Deere'},
    {name: 'Ryzas', age: 16},
    {name: 'Pukis', age: 17},
    {name: 'Pukis', age: 18}
];

const cats1 = cats.filter(cat => cat.name === 'Pukis' ? false : true);
console.log(cats1);

const noPukis = cats.filter(cat => cat.name !== 'Pukis');
console.log(noPukis);


const cats2 = [
    {name: 'Tomas', age: 12},
    {name: 'Juodis', age: 13},
    {name: 'Juodis', age: 14},
    {name: 'Margis', age: 15, tractor: 'John Deere'},
    {name: 'Ryzas', age: 16},
    {name: 'Pukis', age: 17},
    {name: 'Juodis', age: 18}
];

const cats3 = cats2
    .filter(cat => cat.name !== 'Juodis')
    .map(cat => ({...cat, age: cat.age + 1}));

console.log(cats3);


let counter = 0;
const what = 3;
//  const juodis = cats2.find(cat => {
//     if (cat.name === 'Juodis') {
//         counter++
//     }
//     return counter === what;
// });
// console.log(juodis);

const juodis1 = cats2.find(cat => cat.name === 'Juodis' && ++counter == what)?.age;
console.log(juodis1);

let A = null;

console.log(A?.what);