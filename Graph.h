#ifndef GRAPH_H
#define GRAPH_H

#include <vector>
#include <string>
#include <utility>

using namespace std;

class Graph
{
public:
    Graph() : vertices(0), adjList() {}
    Graph(int numOfVertices) : vertices(numOfVertices), adjList(vertices) {}

    void addEdge(int vertex1, int vertex2)
    {
        adjList[vertex1].push_back(vertex2);
        adjList[vertex2].push_back(vertex1);
    }

    vector<vector<int>> getAdjList() const 
    {
        return adjList;
    }

private:
    int vertices;
    vector<vector<int>> adjList;
};

#endif