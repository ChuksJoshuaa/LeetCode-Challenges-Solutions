# Leetcode: https://leetcode.com/problems/combination-sum-ii

class Solution:
        def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
                candidates.sort()
                stack = [ [0, []] ]
                result = []

                while stack:
                        index, combo = stack.pop()
                        comboSum = sum(combo)
                        if comboSum == target and combo not in result:
                                result.append(combo)
                        else:
                                for i in range(index, len(candidates)):
                                        if i != index and candidates[i] == candidates[i-1]:
                                                continue
                                        elif comboSum + candidates[i] > target:
                                                break
                                        elif comboSum + candidates[i] <= target:
                                                stack.append( [i+1, combo + [candidates[i]]] )
                return result