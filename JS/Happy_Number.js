/*
        Write an algorithm to determine if a number n is happy.
        
        A happy number is a number defined by the following process:
                1) Starting with any positive integer, replace the number by the sum of the squares of its digits.
                2) Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
                3) Those numbers for which this process ends in 1 are happy.
        
        Return true if n is a happy number, and false if not.
*/

/**
 * @param { number } n
 * @return { boolean }
*/

var isHappy = function( n ) {
        let c = 0;
        while( true ) {
                c++;
                if( c > 7 ) {
                        break;
                }
                if( n == 1 ) {
                        return true;
                }
                let str = String( n );
                let splitData = str.split("");
                let sum = 0;
                for( let i = 0; i < splitData.length; i++ ) {
                        sum += Number( splitData[ i ] ) * Number( splitData[ i ] );
                }
                n = sum;
        }
        return false;  
};