#include "LZ78.hpp"

using namespace std;


string LZ78::Encode(string input)
{
    Node *dictionary = new Node;
    string word, result;
    int length, last_seen, index = 1;

    length = (int)input.length();
    word = input[0];
    setNode(dictionary, 1, word);
    result += "0," + word;

    for (int i = 1; i < length; i++)
    {
        string data;
        data = input[i];

    re_check:
    
        Node *search = getNode(dictionary, data);

        if (search)
        {
            i++;
            data += input[i];
            last_seen = search->index;
            goto re_check;
        }
        else
        {
            char zero;
            if (input[i] == ' ')
                zero = '0';
            else
                zero = input[i];

            if ((int)data.length() < 2)
                result += " " + to_string(0) + "," + zero;
            else
                result += " " + to_string(last_seen) + "," + zero;

            index++;
            if (i != length)
                insertNode(dictionary, index, data);
        }
    }

    return result;
}

string LZ78::Decode(string input)
{
    Node *dictionary = new Node;
    string result;

    vector <string> s_input = split(input, ' ');
    int zz = 2;
    for (int i = 0; i < s_input.size(); i++)
    {
        vector <string> ss_input = split(s_input[i], ',');

        if (i == 0)
        {
            setNode(dictionary, 1, ss_input[1]);
            result += ss_input[1];
        }
        else
        {
            Node *searched;
            string get_search = ss_input[1];
            searched = getNode(dictionary, stoi(ss_input[0]));
            
            if (searched)
            {
                result += searched->data + get_search;
                get_search = searched->data + split(s_input[i], ',')[1];
                insertNode(dictionary, zz, get_search);
            }
            else
            {
                if (stoi(ss_input[0]) == 0)
                    insertNode(dictionary, zz, get_search);
                else
                    insertNode(dictionary, zz, get_search);

                result += get_search;
            }
            zz++;
        }
    }

    if (result[(int)result.length() - 1] == '0')
        result = result.substr(0, result.size() - 1);
    
    return result;
}