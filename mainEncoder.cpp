#include "Encoder.hpp"
#include "Encoder.cpp"

int main()
{
    string str = "somosloscomputines";
    string str1 = "somosingenieros";

    Encoder *encoder = new Encoder();

    string encodedString, decodedString, encodedString1, decodedString1;

    encodedString = encoder->HuffmanEncode(str);

    char* queue = encoder->getHuffmanQueue();
    
    encodedString1 = encoder->HuffmanEncode(str1);

    char* queue1 = encoder->getHuffmanQueue();

    decodedString = encoder->HuffmanDecode(queue, encodedString);

    decodedString1 = encoder->HuffmanDecode(queue1, encodedString1);

    cout << "\nEncoded Huffman data:\n" << encodedString << endl;

    cout << "\nQueque Huffman data:\n" << queue << endl;

	cout << "\nDecoded Huffman Data:\n" << decodedString << endl;

    cout << "---------------------------------------------------------" << endl;

    cout << "\nEncoded2 Huffman data:\n" << encodedString1 << endl;

    cout << "\nQueque2 Huffman data:\n" << queue1 << endl;

	cout << "\nDecoded2 Huffman Data:\n" << decodedString1 << endl;

    return 0;
}