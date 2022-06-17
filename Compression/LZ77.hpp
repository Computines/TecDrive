#ifndef LZ77_H
#define LZ77_H

#include <iostream>
#include <string>
#include <iterator>
#include <vector>
#include <algorithm>
#include <sstream>

using namespace std;

class LZ77

{

private:
    string result;
    int length, char_info_selc = 0;

public:
    LZ77(){};
    string Encode(string input);
    string Decode(string intput);
};

#endif