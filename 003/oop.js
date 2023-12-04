console.clear();

console.log('oop - Object Oriented Programming');

class Movie {
    constructor(title){
        this.title = title;
        console.log('Movie constructor');
    }

    show(){
        console.log('Show movie ' + this.title);
    }
}


const terminator = new Movie('Terminator');
const matrix = new Movie('Matrix');

// const arr1 = [];            //sutrumpintas uzsarymas
// const arr2 = new Array();   //originalus uzsarymas

// terminator.show();
// matrix.show();

console.log(terminator);
console.log(matrix);


class Box{
    constructor(){
        this.item = '';
    }
    put(what){
        this.item = what;
    }
    empty(){
        this.item = '';
    }
}

const box1 = new Box();
const box2 = new Box();

box1.put('pen');
box2.put('pencil');
box1.put('eraser');

box1.empty();
box2.empty();

console.log(box1, box2);


class RandomDigit{

    constructor(){
        this.digit = this.rand(0, 9)
    }
    
    rand(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
}

const digit1 = new RandomDigit();

console.log(digit1);



const arr = new Array(10)
    .fill(null)
    .map(_ => new RandomDigit())
    .map(el => console.log(el.digit) || el.digit);
console.log(arr);