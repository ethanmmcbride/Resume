#include <iostream>
#include <queue>
#include "BinaryTree.h"
#include "Graph.h"

using namespace std;

bool bfs(vector<vector<int>>& adj, int s, vector<bool>& visited, int key) 
{
    bool found = false;
    queue<int> q;
    visited[s] = true;
    q.push(s);

    while (!q.empty() && !found) 
    {
        int curr = q.front();
        q.pop();
        cout << curr << " ";
        if (curr == key) {found = true;}

        for (int x : adj[curr]) {
            if (!visited[x]) {
                visited[x] = true;
                q.push(x);
            }
        }
    }
    return found;
}

bool BinaryTree::bfs(int value)
{
    bool found = false;
    queue<Node*> q;
    Node* root = this->root;
    q.push(root);
    
    while (!q.empty() && !found) 
    {
        Node* curr = q.front();
        q.pop();
        cout << curr->getData() << " ";
        if (curr->getData() == value) {found = true;}

        Node* left = curr->getLlink();
        Node* right = curr->getRlink();
        if (left != nullptr)
        {
            q.push(left);
        }
        if (right != nullptr)
        {
            q.push(right);
        }
    }
    
    return found;
}
