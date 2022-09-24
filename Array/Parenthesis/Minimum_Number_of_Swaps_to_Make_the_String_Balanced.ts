// Leetcode: https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/

/*
        In the case of are even number of pairs. Simplying using integer division by 2 returns the the number of switches needed to matched the unmatched pair.
        In the case of odd numbers, even after switching the half of the unmatched pairs, you will be left with one pair which needs an additional swapping. Hence, you either add + 1 or use a ceiling function to round the number up.
*/

function minSwaps(str: string): number {
        let stack: Array<string> = [];
        for (let i: number = 0; i < str.length; i++) {
                let bracket: string = str[i];
                if (bracket === "[") {
                        stack.push(bracket);
                } else {
                        if (stack[stack.length - 1] === "[") {
                                stack.pop();
                        } else {
                                stack.push(bracket);
                        }
                }
        }
        let length = stack.length / 2;
        return length % 2 === 0 ? length / 2 : Math.floor(length / 2) + 1;
}
