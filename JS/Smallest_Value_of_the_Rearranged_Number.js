/*
        You are given an integer num. Rearrange the digits of num such that its value is minimized and it does not contain any leading zeros.
        Return the rearranged number with minimal value.
        Note that the sign of the number does not change after rearranging the digits.

        Example 1:
                Input: num = 310
                Output: 103
                Explanation: The possible arrangements for the digits of 310 are 013, 031, 103, 130, 301, 310. 
                The arrangement with the smallest value that does not contain any leading zeros is 103.
        
        Example 2:
                Input: num = -7605
                Output: -7650
                Explanation: Some possible arrangements for the digits of -7605 are -7650, -6705, -5076, -0567.
                The arrangement with the smallest value that does not contain any leading zeros is -7650.

        Constraints:
                1) -10^15 <= num <= 10^15
*/

/*
 * @param { number } num
 * @return { number }
*/

var smallestNumber = function( num ) {
        var n = num;
        num = Array.from( num.toString() );
        if( n > 0 ) {
                num = num.map( Number ).sort( ( a, b ) => a - b );
                let index = -1;
                if( num[ 0 ] === 0 ) {
                        index = num.lastIndexOf( 0 ) + 1;
                        [ num[ 0 ], num[ index ] ] = [ num[ index ], num[ 0 ] ];
                }
                return num.join('');
        } 
        else if( n < 0 ) {
                num = num.slice(1).map( Number ).sort( ( a, b ) => b - a );
                return -num.join("");
        } 
        return n;
};