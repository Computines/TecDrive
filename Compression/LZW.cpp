#include "LZW.hpp"

using namespace std;

// struct Node{
// 	int index;
// 	string data;
// 	Node *next;
// };

// vector<string> split(string input, char delimiter)
// {
//     vector<string> tokens;
//     string token;
//     stringstream stream(input);

//     while (getline(stream, token, delimiter))
//     {
//         tokens.push_back(token);
//     }

//     return tokens;
// }

// void setNode(Node *head, int index, string data){
// 	head->index = index;
// 	head->data = data;
// 	head->next = NULL;
// }

// void insertNode(Node *head, int index, string data){
// 	Node *new_Node = new Node;
// 	new_Node->index = index;
// 	new_Node->data = data;
// 	new_Node->next = NULL;

// 	Node *current = head;
// 	while (current != NULL)
// 	{
// 		if (current->next == NULL)
// 		{
// 			current->next = new_Node;
// 			return;
// 		}
// 		current = current->next;
// 	}
// }

// Node *getNode(Node *head, string data)
// {
// 	Node *current = head;
// 	while (current != NULL)
// 	{
// 		if (data.compare(current->data) == 0)
// 			return current;
// 		else
// 			current = current->next;
// 	}
// 	return NULL;
// }

// Node *getNode(Node *head, int index)
// {
// 	Node *current = head;
// 	while (current != NULL)
// 	{
// 		if (index == current->index)
// 			return current;
// 		else
// 			current = current->next;
// 	}
// 	return NULL;
// }

// bool deleteNode(Node *head, Node *to_delete){
// 	if (to_delete == NULL)
// 		return false;
// 	else if (to_delete == head)
// 	{
// 		head = to_delete->next;
// 		delete to_delete;
// 		return true;
// 	}
// 	else{
// 		Node *current = head;
// 		while (current)
// 		{
// 			if (current->next == to_delete)
// 			{
// 				current->next = to_delete->next;
// 				delete to_delete;
// 				return true;
// 			}
// 			current = current->next;
// 		}
// 		return false;
// 	}
// }

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