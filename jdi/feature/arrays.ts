const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const car0 = carMakers[0];
const myCar = carMakers.pop();
// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates: (Date | string)[] = [];
importantDates.push("2020-1-1");
importantDates.push(new Date());
