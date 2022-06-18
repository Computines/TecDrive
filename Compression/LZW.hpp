#ifndef LZW_H
#define LZW_H

#include <iostream>
#include <string>
#include <iterator>
#include <vector>
#include <algorithm>
#include <sstream>
#include "utils.cpp"

using namespace std;

class LZW

{

public:
    LZW(){};
    string Encode(string input);
    string Decode(string intput);
};

#endif