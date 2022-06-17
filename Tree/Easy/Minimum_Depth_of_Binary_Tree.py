# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


"""
        SOLUTION 1:
                RECURSIVE SOLUTION
"""

class Solution(object):
        def minDepth(self, root):
                """
                :type root: TreeNode
                :rtype: int
                """
                # base case
                if root is None:
                        return 0
                # if there is only right child get depth of it
                if root.left is None:
                        return self.minDepth(root.right) + 1
                # similarly if there is only left child  get depth of it
                elif root.right is None:
                        return self.minDepth(root.left) + 1
                # in case there are both  get the min of both
                else:
                        return 1 + min( self.minDepth(root.right), self.minDepth(root.left) )


"""
        SOLUTION 2:
                ITERATIVE SOLUTION
"""
class Solution(object):
        def minDepth(self, root):
                """
                :type root: TreeNode
                :rtype: int
                """
                if root is None:
                        return 0

                queue = [ root ]
                result = [ ]
                count = 1

                while len( queue ) > 0:
                        temp = []
                        # POP ALL ELEMENTS FROM QUEUE
                        for item in queue:
                                temp.append( item.val )
                        result.append( temp )

                        n = len( queue )
                        for i in range( n ):
                                item = queue.pop(0)
                                if item.left is None and item.right is None:
                                        return count
                                if item.left:
                                        queue.append( item.left )
                                if item.right:
                                        queue.append( item.right )

                        count = count + 1

        