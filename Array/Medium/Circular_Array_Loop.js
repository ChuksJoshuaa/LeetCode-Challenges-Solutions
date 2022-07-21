// Leetcode: https://leetcode.com/problems/circular-array-loop/

// SOLUTION 1

function findNegativeIndex( index, array ) {
        let value = index + array[index];
        while( value < 0 ) {
                value = array.length + value;
        }
        return value;
}

function findPositiveIndex( index, array ) {
        let value = index + array[index];
        while( value >= array.length ) {
                value = value - array.length ;
        }
        return value;
}

var circularArrayLoop = function( array ) {
        for( let i = 0; i < array.length; i++ ) {
                let hash_map = { };
                hash_map[ i ] = array[ i ];
                let index = i;
            
                while( true ) {
                        if( array[ index ] > 0 ) {
                                if( index + array[ index ] > array.length - 1 ) {
                                        index = findPositiveIndex( index, array );
                                } else {
                                        index = index + array[ index ];
                                }
                        }
                        else if( array[ index ] < 0 ) {
                                if( index + array[ index ] < 0 ) {
                                        index = findNegativeIndex( index, array );
                                } else {
                                        index = index + array[ index ];
                                }
                        }
                        
                        if( 
                                ( array[ i ] > 0 && array[ index ] < 0 )
                                        ||
                                ( array[ i ] < 0 && array[ index ] > 0 )
                        ) {
                                break;
                        }
                        
                        if( index in hash_map ) {
                                if( i === index && Object.keys( hash_map ).length > 1 ) {
                                        return true;  
                                }
                                else  {
                                        break;
                                }
                        }

                        hash_map[ index ] = array[ index ];
                }
    
        }
        return false;
};

// SOLUTION 2

var circularArrayLoop = function( array ) {
        for( let i = 0; i < array.length; i++ ) {
                let hash_map = { };
                hash_map[ i ] = array[ i ];
                let index = i;
            
                while( true ) {
                        index = ( index + array[index] ) % array.length;
                        if( index < 0 ) {
                                index = index + array.length;
                        }
                        
                        if( 
                                ( array[ i ] > 0 && array[ index ] < 0 )
                                        ||
                                ( array[ i ] < 0 && array[ index ] > 0 )
                        ) {
                                break;
                        }
                        
                        if( index in hash_map ) {
                                if( i === index && Object.keys( hash_map ).length > 1 ) {
                                        return true;  
                                }
                                else  {
                                        break;
                                }
                        }

                        hash_map[ index ] = array[ index ];
                }
    
        }
        return false;
};