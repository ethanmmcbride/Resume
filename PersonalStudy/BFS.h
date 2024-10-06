#ifndef BFS_H
#define BFS_H

#include "BinaryTree.h"
#include "Graph.h"
#include <vector>

bool bfs(vector<vector<int>>& adj, int s, vector<bool>& visited, int key);

#endif