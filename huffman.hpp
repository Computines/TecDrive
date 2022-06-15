#ifndef myHuffman_hpp
#define myHuffman_hpp

#include <bits/stdc++.h>
#define MAX_TREE_HT 256
using namespace std;

// A Huffman tree node
struct MinHeapNode
{
    char data;                 // One of the input characters
    int freq;                  // Frequency of the character
    MinHeapNode *left, *right; // Left and right child

    MinHeapNode(char data, int freq)
    {
        left = right = NULL;
        this->data = data;
        this->freq = freq;
    }
};
struct compare
{
    bool operator()(MinHeapNode *l, MinHeapNode *r)
    {
        return (l->freq > r->freq);
    }
};
class Huffman
{

private:
    string fileString;
    int stringSize;
    string encodeString;
    string decodeString;
    map<char, string> codes;
    map<char, int> freq;
    priority_queue<MinHeapNode *, vector<MinHeapNode *>, compare> minHeap;
    string decode_file(struct MinHeapNode *root, string s);
    void calcFreq();
    void HuffmanCodes();
    void storeCodes(struct MinHeapNode *root, string str);
    void printCodes(struct MinHeapNode *root, string str);

public:
    Huffman(string fileString, int stringSize);
    string getEncodeString();
    string getDecodeString();
};

#endif
