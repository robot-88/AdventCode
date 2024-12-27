//import { MulData } from "./mulData";
const MulData= 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))#mul(2,5}]ghtaqmul(9,2)';

const patterData=MulData.match(/mul\((\d+),(\d+)\)/g);
console.log('patterData',patterData);

// Function to extract and multiply the numbers
const multiplyMulValues = (array) => {
    return array.map(item => {
        // Use a regular expression to extract the numbers
        const matches = item.match(/mul\((\d+),(\d+)\)/);
        if (matches) {
            // Convert the extracted strings to numbers and multiply them
            return Number(matches[1]) * Number(matches[2]);
        }
        return 0; // Return 0 if the format is not correct
    });
};

// Call the function and log the result
const results = multiplyMulValues(patterData);
const addResults= results.reduce((a,b)=>{return a+b ;})
console.log('addResults',addResults);




