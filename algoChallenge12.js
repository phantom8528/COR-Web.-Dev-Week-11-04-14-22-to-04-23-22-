//----------04/19/22------------

/**
 * Write a function that takes in an array of integers and returns 
 * the same array with each value changed to a string of the letter A times the integer.
 * 
For example, [2, 5, 1] should be returned as [‘AA’, ‘AAAAA’, ‘A’]
 */


//-----------Intstructor Solution--------------
let newValue = ' ';

function convertNums (arrayOfNums){
    arrayOfNums.forEach(function(currentNum, currentIndex){
        // console.log(currentNum, currentIndex);
        for (let count = 0; count <currentNum; count++){
            newValue += 'A';
        }
        arrayOfNums[currentIndex] = newValue;
        newValue = ' ';
    });
    console.log(arrayOfNums);
}
const nums = [2,5,1];
// consoloe.log(convertNums(nums));
convertNums(nums);//Returns: [ ' AA', ' AAAAA', ' A' ]
