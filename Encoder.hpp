#ifndef ENCODER_H
#define ENCODER_H

#include <iostream>
#include <string>
#include <iterator>
#include <vector>
#include <algorithm>
#include <sstream>
#include "Compression/LZ77.hpp"
#include "Compression/LZ78.hpp"
#include "Compression/LZW.hpp"
#include "Compression/huffman.hpp"
#include "Compression/LZ77.cpp"
#include "Compression/LZ78.cpp"
#include "Compression/LZW.cpp"
#include "Compression/huffman.cpp"


using namespace std;

class Encoder

{

private:
    Huffman *huffman;
    LZ77 *lz77 = new LZ77;
    LZ78 *lz78 = new LZ78;
    LZW *lzw = new LZW;
    char* queue;

public:
    Encoder(){};
    char* getHuffmanQueue();
    string HuffmanEncode(string input);
    string HuffmanDecode(char* queue,string input);
    string LZ77Encode(string input);
    string LZ77Decode(string input);
    string LZ78Encode(string input);
    string LZ78Decode(string input);
    string LZWEncode(string input);
    string LZWDecode(string input);
};

#endif