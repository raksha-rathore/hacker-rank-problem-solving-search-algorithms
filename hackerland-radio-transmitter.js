// problem statement can be found on hanckerrank as well
// https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem

/**
 * Hackerland is a one-dimensional city with houses aligned at integral locations along a road. 
 * The Mayor wants to install radio transmitters on the roofs of the city's houses. 
 * Each transmitter has a fixed range meaning it can transmit a signal to all houses within that number of units 
 * distance away. 
 * Given a map of Hackerland and the transmission range, determine the minimum number of transmitters so that 
 * every house is within range of at least one transmitter. 
 * Each transmitter must be installed on top of an existing house.
 * 
 * ex
 * k = [1, 2, 3, 4, 5]  
 * transmiterRange = 1
 * 
 * the required transmitters are 2 . one on array index 1 and other on array index 3
 */



/*
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY k
 *  2. INTEGER transmiterRange
 */

function hackerlandRadioTransmitters(transmiterRange, k) {
    // corner case
    if(!k.length) return 0;
    // pointer which track where is the last trasmitter put
    let indexOfLastTransmitter = 0;
    // sorting the houses on the position will help in easy mathematical calculations
    let houses = k.sort((a,b) => a-b);

    let leftMostHouseCovered = houses[0]; // all the houses that are getting covered using the last transmitter
    
    let transmittersCount = 1; // at least one transmitter is needed which is at index 0
    
    for (let index = 1; index <= houses.length; index++) {

    	const nextHouse = houses[index]
        // check if the new index can not be covered by the last transmitter position
        if(houses[indexOfLastTransmitter] + transmiterRange < nextHouse) 
        {
            // a new transmitter is required for this house
            transmittersCount = transmittersCount + 1;
            // the new transmitter index becomes this index
            indexOfLastTransmitter = index;
            leftMostHouseCovered = nextHouse;
        }
        else 
        {
            // the last trasmitter is covering this house as well
            // see if we can move the previous transmitter to this position 
          
            if(leftMostHouseCovered >= nextHouse - transmiterRange) {
                // moving to current index will still cover the left most house (smallest index)
                indexOfLastTransmitter = index;
            }
        }
    }
    
    return transmittersCount;

}