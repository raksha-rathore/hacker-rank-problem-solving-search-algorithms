//  the problem statement can also be found on hackerrank
/**Given two arrays of integers, find which elements in the second array are missing from the first array.
   Example
   arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206]
   brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
   The  array is the orginal list. The numbers missing are : 204 205 206
   the function should return the sorted array
 */


function missingNumbers(arr, brr) {
    const frequencyMap = {};
    // loop through the brr and store the frequency of each number in this array
    for(let eachItem of brr) {
        frequencyMap[eachItem] = frequencyMap[eachItem] ? frequencyMap[eachItem] + 1 : 1;
    }
    //loop through arr and reduce the frequency count of each item that exists in frequencyMap by 1
    for ( let eachItem of arr) {
        if(frequencyMap[eachItem] != undefined) {
            frequencyMap[eachItem] =  frequencyMap[eachItem] - 1;
        }
        if(frequencyMap[eachItem] === 0) delete frequencyMap[eachItem];
    }
    
    const missingNumbers = [];
    for(let eachValue in frequencyMap) {
        const frequency = frequencyMap[eachValue]
        if(frequency) {
            // the numbers whose frequency is not reduced to 0 are the missing numbers
             missingNumbers.push(eachValue)
        }
 
    }
     
    return missingNumbers.sort((a, b) => (a-b))

}