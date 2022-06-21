# Leetcode: https://leetcode.com/problems/binary-tree-inorder-traversal/

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

"""
        SOLUTION 1: RECURSIVE
"""

def inorderRecursiveTraversal( root, answer ):
        if root is None:
                return
        inorderRecursiveTraversal( root.left, answer )
        answer.append( root.val )
        inorderRecursiveTraversal( root.right, answer )
        
class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        answer = []
        inorderRecursiveTraversal( root, answer )
        return answer


"""
        Solution 2: Iterative
"""

class Solution(object):
        def inorderTraversal(self, root):
                """
                :type root: TreeNode
                :rtype: List[int]
                """

                if root is None:
                        return []

                inOrderList = []
                stack = []
                currentNode = root

                while len( stack ) > 0 or currentNode:
                        if currentNode:
                                stack.append( currentNode )
                                currentNode = currentNode.left
                        else:
                                currentNode = stack.pop()
                                inOrderList.append( currentNode.val )
                                currentNode = currentNode.right
                        
                        
                return inOrderList