#include "Encoder.hpp"

using namespace std;


string Encoder::HuffmanEncode(string input)
{
    huffman = new Huffman();
    string encode = huffman->encode(input);
    this->queue = huffman->getQueue();
    return encode;

}

char* Encoder::getHuffmanQueue()
{
    return this->queue;
}

string Encoder::HuffmanDecode(char* queue, string input)
{
    Huffman *huffmanForDecode = new Huffman();
    string decode = huffmanForDecode->decode(queue, input);
    huffmanForDecode->~Huffman();
    return decode;
}

string Encoder::LZ77Encode(string input)
{
    return lz77->Encode(input);
}

string Encoder::LZ77Decode(string input)
{
    return lz77->Decode(input);
}

string Encoder::LZ78Encode(string input)
{
    return lz78->Encode(input);
}

string Encoder::LZ78Decode(string input)
{
    return lz78->Decode(input);
}

string Encoder::LZWEncode(string input)
{
    return lzw->Encode(input);
}

string Encoder::LZWDecode(string input)
{
    return lzw->Decode(input);
}