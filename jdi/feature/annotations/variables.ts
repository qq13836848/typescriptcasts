let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

class Car {}
let car: Car = new Car();

let point: { x: number; y: number } = { x: 10, y: 20 };

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ["red", "green", "blue"];
let foundWord: boolean;

foundWord = words.includes("red");

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

numberAboveZero = numbers.filter((item) => item === 0)[0];
console.log(numberAboveZero);
