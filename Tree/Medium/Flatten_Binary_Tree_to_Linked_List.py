# Leetcode: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
        def flatten(self, root):
                """
                :type root: TreeNode
                :rtype: None Do not return anything, modify root in-place instead.
                """
                self.prev = None
                return self.flattenBinaryTreeToLinkedList( root )
        
        def flattenBinaryTreeToLinkedList( self, root ):
                if root is None:
                        return None
                
                self.flattenBinaryTreeToLinkedList( root.right )
                self.flattenBinaryTreeToLinkedList( root.left )
                
                root.right = self.prev
                root.left = None
                self.prev = root

