#ifndef BINARYTREE_H
#define BINARYTREE_H

class Node
{
public:
	Node() : data(0), parent(nullptr), llink(nullptr), rlink(nullptr) {}
	Node(int theData, Node* parentLink, Node* leftLink, Node* rightLink)
		: data(theData), parent(parentLink), llink(leftLink), rlink(rightLink) {}

	int getData() const { return data; }
	Node* getParent() const { return parent; }
	Node* getLlink() const { return llink; }
	Node* getRlink() const { return rlink; }
	
	void setData(int theData) { data = theData; }
	void setParent(Node* parentLink) { parent = parentLink; }
	void setLlink(Node* leftLink) { llink = leftLink; }
	void setRlink(Node* rightLink) { rlink = rightLink; }
	
	~Node(){}
private:
	int data; 
	Node* parent;
	Node* llink;
	Node* rlink;
};

class BinaryTree
{
public:
	BinaryTree() : root(nullptr), count(0) {}
	
	BinaryTree(const BinaryTree& other);
	BinaryTree& operator=(const BinaryTree& other);
	
	BinaryTree(BinaryTree&& other) noexcept;
	BinaryTree& operator=(BinaryTree&& other) noexcept;
	
	void insertNode(int newData);
	void printInorder() const;
	void clearTree(Node* tree);
	Node* copyTree(Node* child, Node* parent);
	bool bfs(int value);
	
	~BinaryTree();

private:
    // Pointer to the first node in the list.
	Node* root;
	// Number of nodes in the list.
	int count;			
};

#endif