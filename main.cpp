#include "huffman/huffman.hpp"
#include "huffman/huffman.cpp"


int main()
{
	string str = "somosloscomputines";
    Huffman *huff =  new Huffman(str, str.size());

    string encodedString, decodedString;

    encodedString = huff->getEncodeString();

    decodedString = huff->getDecodeString();

    cout << "\nEncoded Huffman data:\n" << encodedString << endl;

	cout << "\nDecoded Huffman Data:\n" << decodedString << endl;

    return 0;
}