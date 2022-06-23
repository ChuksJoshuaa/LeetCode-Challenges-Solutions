# Leetcode: https://leetcode.com/problems/path-sum/

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution( object ):
        def hasPathSum( self, root, targetSum ):
                """
                :type root: TreeNode
                :type targetSum: int
                :rtype: bool
                """
                if root is None:
                        return False
                paths = [ ]
                stack = [ [ root, str( root.val ) ]  ]

                while len( stack ) > 0:
                        currentNode, path = stack.pop()
                        if currentNode.left is None and currentNode.right is None:
                                paths.append( path )
                        if currentNode.right:
                                stack.append( [ currentNode.right, path + "->" + str( currentNode.right.val ) ] )
                        if currentNode.left:
                                stack.append( [ currentNode.left, path + "->" + str( currentNode.left.val ) ] )

                for path in paths:
                        temp = map(int, path.split("->") )
                        if sum( temp ) == targetSum:
                                return True
                
                return False