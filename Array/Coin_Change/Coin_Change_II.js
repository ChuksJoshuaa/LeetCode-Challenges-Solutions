/**
 * @param { number } amount
 * @param { number[] } coins
 * @return { number }
 */

var change = function (amount, coins) {
        nums = coins;
        target = amount;

        let count = 0;

        nums.sort((a, b) => a - b);

        function combinationSum(sum = 0, idx = 0) {
                if (sum < 0 || sum > target) {
                        return 0;
                }

                if (sum == target) {
                        return ++count;
                }

                for (let i = idx; i < nums.length; i++) {
                        combinationSum(sum + nums[i], i);
                }
        }

        combinationSum();
        return count;
};
