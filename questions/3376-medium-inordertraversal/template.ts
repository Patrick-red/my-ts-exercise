interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
type InorderTraversal<T extends TreeNode | null> = T extends TreeNode
  ? T['left'] extends TreeNode
    ? T['right'] extends TreeNode
      ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
      : [...InorderTraversal<T['left']>, T['val']]
    : T['right'] extends TreeNode
      ? [T['val'], ...InorderTraversal<T['right']>]
      : [T['val']]
  : []

// 因为T 可能是null，所以取val前需要先约束一下