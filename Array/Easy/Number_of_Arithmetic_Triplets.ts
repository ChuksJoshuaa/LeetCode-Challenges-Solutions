function arithmeticTriplets( nums: number[], diff: number ): number {
        let numberOfArithmeticTriplets: number = 0;
        let hash_table: {
                [ key: string ]: boolean
        } = { 

        };
        
        for( let i: number = 0; i < nums.length; i++ ) {
                if( !hash_table[ nums[ i ] ] ) {
                        hash_table[ nums[ i ] ] = true;
                }
        }
        
        for( let i: number = 0; i < nums.length; i++ ) {
                if( hash_table[ nums[ i ] + diff ] && hash_table[ nums[ i ] + diff + diff ] ) {
                        numberOfArithmeticTriplets++;
                }
        }
        
        return numberOfArithmeticTriplets;
};