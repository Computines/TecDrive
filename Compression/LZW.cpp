#include "LZW.hpp"

using namespace std;


string LZW::Encode(string input)
{
    Node *dictionary = new Node;
    string result;
    int length, last_seen, index = 128;

    setNode(dictionary, 32, " ");
    for (int i = 33; i < 128; i++)
    {
        string data;
        data = i;
        insertNode(dictionary, i, data);
    }

    length = (int)input.length();

    for (int i = 0; i < length; i++)
    {
        Node *searched;
        string search;
        search = input[i];

    re_search:
        searched = getNode(dictionary, search);
        if (searched)
        {
            i++;
            search += input[i];
            last_seen = searched->index;
            if (i != length)
                goto re_search;
            else
                goto print;
        }
        else
        {
            insertNode(dictionary, index, search);
            index++;

        print:
            result += to_string(last_seen) + " ";
            i--;
        }
    }

    return result;
}

string LZW::Decode(string input)
{
    Node *dictionary = new Node;
    string result;
    int index = 128;

    setNode(dictionary, 32, " ");
    for (int i = 33; i < 128; i++)
    {
        string data;
        data = i;
        insertNode(dictionary, i, data);
    }

    vector <string> s_input = split(input, ' ');
    for (int i = 0; i < s_input.size(); i++)
    {
        Node *searched;
        int search;
        search = stoi(s_input[i]);

        searched = getNode(dictionary, search);

        string cur, prev, data;
        if (searched)
            cur = getNode(dictionary, stoi(s_input[i]))->data;
        if (i != 0)
            prev = getNode(dictionary, stoi(s_input[i - 1]))->data;
        else
            prev = cur;

        int show = 0;
        if (searched)
        {
            result += searched->data;

            if (i != 0)
            {
                data = prev + cur[0];
                if (show != 1)
                {
                    insertNode(dictionary, index, data);
                    index++;
                }
            }
            show = 0;
        }
        else
        {
            data = prev + prev[0];
            insertNode(dictionary, index, data);
            index++;
            show = 1;
            result += data;
        }
    }

    return result;
}