/*
        Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? 
        Find all unique quadruplets in the array which gives the sum of target.
        
        Note: The solution set must not contain duplicate quadruplets.
        Example:
                Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
                A solution set is:
                        [
                                [-1,  0, 0, 1],
                                [-2, -1, 1, 2],
                                [-2,  0, 0, 2]
                        ]
*/

/*
 * @param { number[] } nums
 * @param { number } target
 * @return { number[][] }
*/
 
var fourSum = function( nums, target ) {
        nums.sort( (a, b) => a - b );
        let hash_table = {};
        for (let u = 0; u < nums.length; u++) {
                for( let i = u + 1; i<nums.length; i++ ) {
                        let leftIndex = i+1;
                        let rightIndex = nums.length-1;

                        while( leftIndex < rightIndex ) {
                                if( nums[u] + nums[leftIndex] + nums[rightIndex] + nums[i] < target) {
                                        leftIndex++;
                                }
                                else if( nums[u] + nums[leftIndex] + nums[rightIndex] + nums[i] > target) {
                                        rightIndex--;
                                }
                                else if( nums[u] + nums[leftIndex] + nums[rightIndex] + nums[i] === target) {
                                        // quadruplets.push( [ nums[u], nums[i], nums[leftIndex], nums[rightIndex] ] );
                                        hash_table[ nums[i] + "," + nums[u] + "," + nums[leftIndex] + "," + nums[rightIndex] ] = true;
                                        leftIndex++;
                                        rightIndex--;
                                }
                        }
                }
        }
        let quadruplets = [];
        for( const key of Object.keys( hash_table ) ) {
		quadruplets.push( key.split(",").map( Number ) );     
        }
        return quadruplets;
};