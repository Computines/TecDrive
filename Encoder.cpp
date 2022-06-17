#include "Encoder.hpp"

using namespace std;

string Encoder::HuffmanEncode(string input)
{

}

string Encoder::HuffmanDecode(string input)
{

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