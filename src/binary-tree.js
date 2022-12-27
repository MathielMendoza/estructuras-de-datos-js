class BinaryTree {
    constructor(value) {
        this.value= value;
        this.left = null;
        this.right = null;
    }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);

console.log(root)
