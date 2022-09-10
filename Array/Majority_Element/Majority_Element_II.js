// Leetcode: https://leetcode.com/problems/majority-element-ii/

/*
 * @param { number[] } nums
 * @return { number[] }
*/

var majorityElement = function( nums ) {
        let majority = Math.floor( nums.length / 3 );
        let numbers = {
                
        };
        let count = 0;
        let index = 0;
        let result = [];
        for( let i = 0; i < nums.length; i++ ) {
                count = 0;
                if( numbers[nums[i]] ) {
                        continue;
                }
                for( let j = i + 1; j < nums.length; j++ ){
                        if( nums[i] === nums[j] ) {
                                numbers[nums[i]] = true;
                                count++;
                        }
                }
                if( count >= majority ) {
                        index = i;
                        result.push( nums[index] );
                }
        }
        return result;
};