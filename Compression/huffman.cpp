#include "huffman.hpp"

Huffman::Huffman()
{
}

string Huffman::encode(string fileString)
{
    this->fileString = fileString;
    this->stringSize = fileString.length();

    this->calcFreq();
    this->HuffmanCodes();


    for (auto i : fileString)
        this->encodeString += codes[i];

    return this->encodeString;

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

string Huffman::decodeFile(struct MinHeapNode *root, string s)
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

string Huffman::decode(char* queue, string s)
{
    priority_queue<MinHeapNode *, vector<MinHeapNode *>, compare> *minHeap1 = (priority_queue<MinHeapNode *, vector<MinHeapNode *>, compare>*)queue;
    string decodeString = this->decodeFile(minHeap1->top(), s);
    return decodeString;
}

char* Huffman::getQueue(){
    char *queue = (char *)malloc(sizeof(minHeap));
    queue = (char *)&minHeap;
    return queue;
}
