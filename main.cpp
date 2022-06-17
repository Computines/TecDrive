#include "Compression/huffman.hpp"
#include "Compression/huffman.cpp"


int main()
{
	string str = "somosloscomputines";

    Huffman *huff =  new Huffman();

    string encodedString, decodedString;

    encodedString = huff->encode(str);

    char* queue = huff->getQueue();

    decodedString = huff->decode(queue, encodedString);

    cout << "\nEncoded Huffman data:\n" << encodedString << endl;

    cout << "\nQueque Huffman data:\n" << queue << endl;

	cout << "\nDecoded Huffman Data:\n" << decodedString << endl;

    huff->~Huffman();

    huff = new Huffman();

    cout<<"------------------------------"<<endl;

    string nuevoStr = "hola";

    encodedString = huff->encode(nuevoStr);

    queue = huff->getQueue();

    decodedString = huff->decode(queue, encodedString);

    cout << "\nEncoded Huffman data:\n" << encodedString << endl;

    cout << "\nQueque Huffman data:\n" << queue << endl;

	cout << "\nDecoded Huffman Data:\n" << decodedString << endl;

    return 0;
}