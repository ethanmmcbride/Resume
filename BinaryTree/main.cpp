#include <iostream>
#include <vector>
#include <cstdlib>
#include <map>

#include "BinaryTree.h"

using namespace std;

int main()
{
    // BINARY TREE & INORDER TRAVERSAL
    BinaryTree btree;
    cout << "\nData inserted into tree: ";
    for (int i = 0; i < 20; ++i)
    {
        int num = rand() % 100 + 1;
        btree.insertNode(num);
        cout << num << " ";
    }
    cout << "\nInorder traversal: ";
    btree.printInorder();
    cout << "\nBreadth First Search: ";
    int treeKey = 91;
    bool foundKey = btree.bfs(treeKey);
    if (foundKey)
    {
        cout << "\nThe key --> " << treeKey << " was found in the Binary Tree.";
    }
    else
    {
        cout << "\nThe key --> " << treeKey << " was NOT found in the Binary Tree.";
    }
    cout << "\n";

    BinaryTree btree1; 
    btree1 = btree; //Copy Assignment Operator 
    BinaryTree btree4(btree1); //Copy Constructor
    BinaryTree btree2 = btree; //Copy Constructor
    BinaryTree btree3(move(btree2)); //Move Constructor        
    btree4 = move(btree); //Move Assignment Operator
    cout << "\n";

    // //BFS on a GRAPH
    // int numOfVertices = 5;
    // Graph g(numOfVertices);
    // g.addEdge(0, 1);
    // g.addEdge(0, 2);
    // g.addEdge(1, 3);
    // g.addEdge(1, 4);
    // g.addEdge(2, 4);
    // vector<bool> visited(numOfVertices, false);
    // int startValue = 0;
    // vector<vector<int>> adj = g.getAdjList();
    // int graphKey = 4;
    // foundKey = bfs(adj, startValue, visited, graphKey);
    // if (foundKey)
    // {
    //     cout << "\nThe key --> " << graphKey << " was found in the graph.";
    // }
    // else
    // {
    //     cout << "\nThe key --> " << graphKey << " was NOT found in the graph.";
    // }
    // cout << "\n";

    return 0;
}