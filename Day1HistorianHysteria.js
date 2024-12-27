//import { locationID1, locationID2 } from "./List.js";

let leftSideLocationID = [];
let rightSideLocationID = [];

const distanceCalculation = (args0, args1) => {
  args0 =[];
  args1 =[];
  const sortedArray1 = args0.sort((a, b) => {
    return a - b;
  });
  const sortedArray2 = args1.sort((a, b) => {
    return a - b;
  });
  if (sortedArray1.length != sortedArray2.length)
    console.log("The lenghts of array are not same hence cannot compare");
  else {
    for (let i = 0; i < sortedArray1.length; i++) {
      if (sortedArray1[i] > sortedArray2[i]) {
        leftSideLocationID.push(sortedArray1[i] - sortedArray2[i]);
      } else {
        rightSideLocationID.push(sortedArray2[i] - sortedArray1[i]);
      }
    }
    const sum = rightSideLocationID.reduce(
      (partialSum, a) => partialSum + a,
      0
    );
    return sum;
  }
};



// Example location ID arrays
const locationID1 = [3, 4, 2, 1, 3, 3];
const locationID2 = [4, 3, 5, 3, 9, 3];

// Calculate the distance and log the result
const valueArray = distanceCalculation(locationID1, locationID2);
console.log('data', valueArray);

