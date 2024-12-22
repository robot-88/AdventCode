import { locationID1, locationID2 } from "./List.js";

let leftSideLocationID = [];
let rightSideLocationID = [];

const distanceCalculation = (args0, args1) => {
  const sortedArray1 = [...args0].sort((a, b) => {
    return a - b;
  });
  const sortedArray2 = [...args1].sort((a, b) => {
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
    console.log("sum", sum);
  }
};

distanceCalculation(locationID1, locationID2);
