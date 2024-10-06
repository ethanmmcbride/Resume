#include "BinaryTree.h"

#include <iostream>
#include <stack>

using namespace std;

BinaryTree::BinaryTree(const BinaryTree& other)
{
    cout << "\nCopy Constructor!\n";
    count = other.count;
    root = copyTree(other.root, nullptr);
}

BinaryTree& BinaryTree::operator=(const BinaryTree& other)
{
    cout << "\nCopy Assignment Operator!\n";
    count = other.count;
    root = copyTree(other.root, nullptr);
    return *this;
}

BinaryTree::BinaryTree(BinaryTree&& other) noexcept
{
    cout << "\nMove Constructor!\n";
    if (this != &other)
    {
        count = other.count;
        root = other.root;
        other.root = nullptr;
        other.count = 0;
    }
}

BinaryTree& BinaryTree::operator=(BinaryTree&& other) noexcept
{
    cout << "\nMove Assignment Operator!\n";
    if (this != &other)
    {
        clearTree(root);
        count = other.count;
        root = other.root;
        other.root = nullptr;
        other.count = 0;
    }
    return *this;
}

void BinaryTree::insertNode(int newData)
{
    if (root == nullptr)
    {
        root = new Node(newData, nullptr, nullptr, nullptr);
    }
    else
    {
        Node* current = root;
        Node* parent = nullptr;
        while (current != nullptr)
        {
            parent = current;
            if (current->getData() > newData)
            {
                current = current->getLlink();
            }
            else if (current->getData() < newData)
            {
                current = current->getRlink();
            }
            else
            {
                return;
            }
        }

        if (parent->getData() > newData)
        {
            parent->setLlink(new Node(newData, parent, nullptr, nullptr));
        }
        else
        {
            parent->setRlink(new Node(newData, parent, nullptr, nullptr));
        }
    }
    ++count;
}

void BinaryTree::clearTree(Node* root) //Maybe do a postorder delete method?
{ 	
    if (root == nullptr) {return;}
    clearTree(root->getLlink());
    clearTree(root->getRlink());
    
    delete root; // this was giving an error "free(): invalid pointer"
    //root = nullptr;
}    

Node* BinaryTree::copyTree(Node* node, Node* parent)
{
    if (node == nullptr)
    {
        return nullptr;
    }
    Node* newNode = new Node(node->getData(), parent, nullptr, nullptr);
    newNode->setLlink(copyTree(node->getLlink(), newNode));
    newNode->setRlink(copyTree(node->getRlink(), newNode));
    return newNode;
}

void BinaryTree::printInorder() const
{
    Node* current = root;
    stack<Node*> next;
    while (current != nullptr || !next.empty())
    {
        while (current != nullptr)
        {
            next.push(current);
            current = current->getLlink();
        }

        current = next.top();
        next.pop();
        cout << current->getData() << " ";
        current = current->getRlink();
    }
}

BinaryTree::~BinaryTree()
{
    cout << "\nDestructor!\n";
    if (root != nullptr)
    {
        clearTree(root);
    }
    count = 0;
}