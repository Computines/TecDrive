#ifndef LZ78_H
#define LZ78_H

#include <iostream>
#include <string>
#include <iterator>
#include <vector>
#include <algorithm>
#include <sstream>
// #include "utils.cpp"
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

class LZ78

{

public:
    LZ78(){};
    string Encode(string input);
    string Decode(string intput);
};


#endif