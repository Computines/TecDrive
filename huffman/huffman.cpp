#include "huffman.hpp"

Huffman::Huffman(string fileString, int stringSize)
{
    this->fileString = fileString;
    this->stringSize = stringSize;

    this->calcFreq();
    this->HuffmanCodes();
}

void Huffman::printCodes(struct MinHeapNode *root, string str)
{
    if (!root)
        return;
    if (root->data != '$')
        cout << root->data << ": " << str << "\n";
    printCodes(root->left, str + "0");
    printCodes(root->right, str + "1");
}

void Huffman::storeCodes(struct MinHeapNode *root, string str)
{
    if (root == NULL)
        return;
    if (root->data != '$')
        codes[root->data] = str;
    storeCodes(root->left, str + "0");
    storeCodes(root->right, str + "1");
}

void Huffman::HuffmanCodes()
{
    struct MinHeapNode *left, *right, *top;
    for (map<char, int>::iterator v = freq.begin(); v != freq.end(); v++)
        minHeap.push(new MinHeapNode(v->first, v->second));

    while (minHeap.size() != 1)
    {
        left = minHeap.top();
        minHeap.pop();
        right = minHeap.top();
        minHeap.pop();
        top = new MinHeapNode('$', left->freq + right->freq);
        top->left = left;
        top->right = right;
        minHeap.push(top);
    }
    storeCodes(minHeap.top(), "");
}

void Huffman::calcFreq()
{
    for (int i = 0; i < this->stringSize; i++)
        freq[this->fileString[i]]++;
}

string Huffman::decode_file(struct MinHeapNode *root, string s)
{
    string ans = "";
    struct MinHeapNode *curr = root;
    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] == '0')
            curr = curr->left;
        else
            curr = curr->right;

        // reached leaf node
        if (curr->left == NULL and curr->right == NULL)
        {
            ans += curr->data;
            curr = root;
        }
    }
    // cout<<ans<<endl;
    return ans + '\0';
}

string Huffman::getEncodeString()
{
    for (auto i : fileString)
        this->encodeString += codes[i];
    return this->encodeString;
}

string Huffman::getDecodeString()
{
    this->decodeString = this->decode_file(minHeap.top(), this->encodeString);
    return this->decodeString;
}
