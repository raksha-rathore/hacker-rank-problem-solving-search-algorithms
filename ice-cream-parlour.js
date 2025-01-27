// Problem statement can also be found on hacker rank
/**
 * Ice Cream Parlor
 *Two friends like to pool their money and go to the ice cream parlor. They always choose two distinct flavors and they spend all of their money.
 Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

 Example. m = 6 and arr = [1,3,4,5,6] 
 The two flavors that cost  and  meet the criteria. Using -based indexing, they are at indices 1 and 4.
 */



function icecreamParlor(m, arr) {
   const costs = [];
   for (let i = 0; i < arr.length; i++) {
    //for every value in the array
       for(let j = i+1; j < arr.length; j++) {
          // any item on position i should only be sumed up to next positions i+1 onwards
          // hence no need to initialize j = 0 , instead initialize it to j = i+1 
           if(arr[i] + arr[j] === m) {
               costs.push(i +1);
               costs.push(j +1);
           }
       }
   }
   return costs;
}
