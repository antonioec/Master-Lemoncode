const array = [1, 2, 3, 4, 5];

/* Ejercicio 1 Array Operations */

console.log("Ejercicio 1: Array Operations");
/* Head */
const head = (array) => {
    let [newArray] = array;
    return newArray;
}

console.log("Head: " + head(array));

/* Tail */

const tail = (a, ...otherParams) => {
    return otherParams;
}

console.log("Tail: " + tail(1, 2, 3, 4, 5));

/* Init */

const init = (array) => {
    let newArray = [...array];
    newArray.pop();
    return newArray;
}

console.log("Init: " + init(array));

/* Last */

const last = (array) => {
    let newArray = [...array];
    return newArray.pop();
}

console.log("Last: " + last(array));

/* Ejercicio 2: Concat */
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio 2: Concat");

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];
const d = [25, 50, 3.141516];

const concat = (a, b, ...otherParams) => {
    let array = [...a, ...b, ...otherParams];
    return array;
}

console.log("Concat: " + concat(a, b, c, d));

/* Ejercicio 3 Clone Merge */
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio 3: Clone Merge");

/* Función Clone */
function clone(source) {
    let cloned = {};
    let x;

    for (x in source) {
        cloned[x] = source[x];
    }
    return cloned;
}

/* Función Merge */
function merge(source, target) {
    let merged = {};
    let x;

    for (x in target) {
        merged[x] = target[x];
    }

    for (x in source) {
        merged[x] = source[x];
    }

    console.log("Merge: ", merged);
    return merged;
}


let maria = { name: "Maria", surname: "Ibañez", country: "SPA" };
let luisa = { name: "Luisa", age: 31, married: true };

merge(maria, luisa);

/* Ejercicio 4: Read Books */
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio 4: Read Books");

function isBookRead(books, titleToSearch) {

    let filter = books.filter(check); // let filter:object
    let result; // let result:boolean 

    function check(book) {
        if (book.title == titleToSearch)
            return book;
    }

    filter[0] === undefined ? result = false : result = filter[0].isRead;

    result == true ? console.log("El libro \"" + titleToSearch + "\" ha sido leido.") : console.log("El libro \"" + titleToSearch + "\" falta por leer.");
    return;
}

let books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

isBookRead(books, "Devastación");
isBookRead(books, "Canción de hielo y fuego");
isBookRead(books, "Los Pilares de la Tierra");

/* Ejercicio 5: Slot Machine */
console.log("-----------------------------------------------------------------------");
console.log("Ejercicio 5: Slot Machine");

class SlothMachine {
    constructor(coins, results, win) {
        this.coins = 0;
        this.results = [];
        this.win = true;
    }

    play() {
        this.coins++;
        this.results = [Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random())];
        console.log(this.results);
        for (let x in this.results) {
            if (this.results[x] == 0) {
                this.win = false;
                break;
            }
        }

        if (this.win == true) {
            console.log("Congratulations!!!. You won ", this.coins, " coins!!");
            this.coins = 0;
        } else {
            console.log("Good luck next time!!");
            this.win = true;
        }
    }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();