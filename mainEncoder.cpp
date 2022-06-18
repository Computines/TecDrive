#include "Encoder.hpp"
#include "Encoder.cpp"

int main()
{
    string str = "somosloscomputines";
    string str1 = "somosingenieros";

    Encoder *encoder = new Encoder();



    //HUFFMAN
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

    cout << "---------------------------------------------------------" << endl;

    //LZ78

    string resutlLZ78 = encoder->LZ78Encode(str) ;

    cout << "\nEncoded LZ78 data:\n" << resutlLZ78 << endl;

	cout << "\nDecoded LZ78 Data:\n" << encoder->LZ78Decode(resutlLZ78) << endl;

    cout << "---------------------------------------------------------" << endl;

    //LZW

    string resultLZW = encoder->LZWEncode(str);

    cout << "\nEncoded2 LZW data:\n" << resultLZW << endl;

	cout << "\nDecoded2 lZW Data:\n" << encoder->LZWDecode(resultLZW) << endl;

    cout << "---------------------------------------------------------" << endl;


    //LZ77

    string resultLZ77 = encoder->LZ77Encode(str);

    cout << "\nEncoded LZ77 data:\n" << resultLZ77 << endl;

	cout << "\nDecoded LZ77 Data:\n" << encoder->LZ77Decode(resultLZ77) << endl;




    return 0;
}