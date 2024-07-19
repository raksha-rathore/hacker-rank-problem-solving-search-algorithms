// the problem statement can also be found on hacker rack

/**
 * 
 * Watson gives Sherlock an array of integers. 
 * His challenge is to find an element of the array such that the sum of all elements to the left is equal to 
 * the sum of all elements to the right.
 * Example:
 * arr = [5,6,8,11]
 * 8 is between two subarrays that sum to 11.
 * You will be given arrays of integers and must determine whether there is an element that meets the criterion. 
 * If there is, return YES. Otherwise, return NO.
 */


/*
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


/**
 * the approach is to find the total sum of the array
 * then loop again and find the sum of the the values that are on the left hand side of index position
 * the corresponding sum of the right hand side values of the idex position will be 
 * (total sum - left hand side sum - the value at the index position)
 * if these left and right end side values become equal then retun yes else after loop ends return no
 */
function balancedSums(arr) {
    const totalSumOfArray = arr.reduce((acc, each) => (acc + each), 0);
    let leftSum = 0;
    let rightSum = 0;
    const lengthOfarray = arr.length;

    if(lengthOfarray === 1) return "YES";
    
    for(let i = 0; i < arr.length; i++) {
        rightSum = totalSumOfArray - arr[i] - leftSum;
        if(rightSum === leftSum) {
            return "YES"
        }
        leftSum += arr[i];
    }
    return "NO"

}