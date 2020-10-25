/**
 * @typedef Data
 * @type {Number}
 */

class BinaryTreeNode {
  /**
   * @param  {...Data} items
   * @returns {BinaryTreeNode}
   */
  static create(...items) {
    const root = new BinaryTreeNode(items[0]);
    return items.slice(1).reduce((node, data) => node.insert(data), root);
  }

  /**
   * @param {Data} data
   */
  constructor(data) {
    /**
     * @type {Data}
     */
    this.data = data;
    this.left = null;
    this.right = null;
  }

  /**
   * Вставляет данные в ноду.
   * Проходит по всем детям, чтобы найти верное место для вставки.
   *
   * @param {Date} data
   * @returns {BinaryTreeNode}
   */
  insert(data) {
    if (data < this.data) {
      if (this.left === null) {
        this.left = new BinaryTreeNode(data);
      } else {
        this.left.insert(data);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTreeNode(data);
      } else {
        this.right.insert(data);
      }
    }

    return this;
  }

  /**
   * Ищет ноду по переданным данным.
   *
   * @param {Data} data
   * @returns {BinaryTreeNode | null}
   */
  search(data) {
    console.log(data);
    if (data > this.data) {
      return this.left.search(data);
    }
    if (data < this.data) {
      return this.right.search(data);
    }
    return this;
  }

  /**
   * Удаляет ноду по переданным данным.
   * Обходит всех детей, чтобы найти ноду.
   *
   * @param {Data} data
   * @returns {BinaryTreeNode | null}
   */
  remove(data) {
    if (data > this.data) this.left = this.left.remove(data);
    else if (data < this.data) this.right = this.right.remove(data);
    else if (this.left === null && this.right === null) return null;

    if (this.left === null) return this.right;
    else if (this.right === null) return this.left;

    const aux = findMinNode(this.right);
    this.data = aux.data;

    this.right = this.right.remove(aux.data);
  }

  /**
   * Обход дерева по порядку, начиная рекурсивно с левой ветви через вершину и к правой ветви.
   * Данные получаются в отсортированном порядке.
   *
   * @param {Function} callback
   * @returns {BinaryTreeNode}
   */
  inorder(callback) {
    if (this.left !== null) {
      this.left.inorder(callback);
    }

    callback(this.data);

    if (this.right !== null) {
      this.right.inorder(callback);
    }

    return this;
  }

  /**
   * Прямой обход дерева, начиная с вершины и двигаясь рекурсивно от левой ветви к правой.
   *
   * @param {Function} callback
   * @returns {BinaryTreeNode}
   */
  preorder(callback) {
    callback(this.data);

    if (this.left !== null) {
      this.left.preorder(callback);
    }

    if (this.right !== null) {
      this.right.preorder(callback);
    }

    return this;
  }

  /**
   * Обратный обход дерева, начиная с левой ветви и двигаясь рекурсивно через правую ветвь к вершине.
   *
   * @param {Function} callback
   * @returns {BinaryTreeNode}
   */
  postorder(callback) {
    if (this.left !== null) {
      this.left.postorder(callback);
    }

    if (this.right !== null) {
      this.right.postorder(callback);
    }

    callback(this.data);

    return this;
  }
}

/**
 * Находит минимальную ноду, начиная с переданной.
 *
 * @param {BinaryTreeNode} node
 * @returns {BinaryTreeNode}
 */
function findMinNode(node) {
  return (node.left = null ? findMinNode(node.left) : node);
}

let output = '';

BinaryTreeNode.create(10, 5, 13, 7, 20, 12).inorder((data) => {
  output += data + '-';
});

output = output + '\n';

BinaryTreeNode.create(10, 5, 13, 7, 20, 12).preorder((data) => {
  output += data + '-';
});

output = output + '\n';

BinaryTreeNode.create(10, 5, 13, 7, 20, 12).postorder((data) => {
  output += data + '-';
});

output = output + '\n';

BinaryTreeNode.create(10, 5, 13, 7, 20, 12).search(13);

// output = output + '\n';
//
// BinaryTreeNode.create(10, 5, 13, 7, 20, 12).remove(13);

console.log(output);
