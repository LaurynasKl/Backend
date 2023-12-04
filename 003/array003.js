console.clear();

console.log('Welcome to reduce');


movies = [
    {'title': 'Terminator', 'year': 1984, 'rating': 8.0},
    {'title': 'Commando', 'year': 1985, 'rating': 6.7},
    {'title': 'Predator', 'year': 1987, 'rating': 7.9},
    {'title': 'Total Recall', 'year': 1990, 'rating': 7.5},
    {'title': 'Terminator 2: Judgment Day', 'year': 1991, 'rating': 8.5},
    {'title': 'True Lies', 'year': 1994, 'rating': 7.2}
];

const allRatingsSum = movies.reduce((sum, movie) => sum + movie.rating, 0);
console.log(allRatingsSum);

const maxRating = movies.reduce((max, movie) => movie.rating > max ? movie.rating : max, 0);
console.log(maxRating);

const averageRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log(averageRating);

const averageRating1 = movies.reduce((sum, movie, index, array) => {
    sum += movie.rating;
    if(index === array.length - 1){
        return sum / array.length;
    } else{
        return sum
    }
}, 0);

console.log(averageRating1.toFixed(2));



console.log('--------');
console.log('Welcome to sort');

movies.sort((a, b) => b.rating - a.rating);

// movies.sort((a , b) => {
//     if(a.title < b.title){
//         return -1;
//     }
//     if(b.title < a.title){
//         return 1
//     }
//     return 0
// });

movies.sort((a, b) => b.title.localeCompare(b.title))

console.log(movies);



movies1 = [
    {'title': 'Terminator', 'year': 1984, 'rating': 8.0},
    {'title': 'Commando', 'year': 1984, 'rating': 6.7},
    {'title': 'Predator', 'year': 1987, 'rating': 7.9},
    {'title': 'Total Recall', 'year': 1991, 'rating': 7.5},
    {'title': 'Terminator 2: Judgment Day', 'year': 1991, 'rating': 8.5},
    {'title': 'True Lies', 'year': 1984, 'rating': 7.2}
];

movies1.sort((a, b) => a.rating - b.rating).sort((a, b) => a.year - b.year);
console.log(movies1);

