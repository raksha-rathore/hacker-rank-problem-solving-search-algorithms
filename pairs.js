/** 
 * Question: Given an array of integers, 
 * find the number of pairs of array elements that have a difference equal to the target value.
 * Example:
 * Input:
 * arr[ ] = {1, 2, 3, 4}
 * k = 1
 * Output: 3
 * 
 * In the above case, you can see a total of 3 pairs which have the target difference of 1.
 * 2−1=1
 * 3−2=1
 * 4−3=1
 * Hence, the output of the above test case is 3.
*/

/*
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function pairs(k, arr) {
    let countOfPairs = 0;
    for(let eachNumber of arr) {
        //  find the complimentary integer to the number  that would make the difference equal to the target value.
        // will be = eachNumber + k
        // check if the compliment number exists in array
        countOfPairs += arr.includes((eachNumber+k)) ? 1 :0;
    }
    return countOfPairs;
}