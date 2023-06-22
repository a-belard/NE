#include <iostream>
#include <string>
#include <vector>
#include <fstream>
#include <sstream>
#include <algorithm>
#include <regex>

using namespace std;

const string filename = "items.csv";

// Convert string to integer
int stringToInt(const string &str)
{
  stringstream ss(str);
  int number = 0;
  ss >> number;
  return number;
}

// Save data to file
void saveToFile(const string &filename, const string &data)
{
  ofstream outputfile(filename, ios::app);
  outputfile << data << endl;
  outputfile.close();
}

// Read data from file
vector<string> readFromFile(const string &filename)
{
  ifstream inputfile(filename);
  string line;
  vector<string> data;
  while (getline(inputfile, line))
  {
    data.push_back(line);
  }
  inputfile.close();
  return data;
}

// Check if a string represents an integer
bool checkIfIsInt(const string &input)
{
  if (input.empty())
    return false;

  for (size_t i = 0; i < input.length(); i++)
  {
    if (!isdigit(input[i]))
      return false;
  }

  return true;
}

// check if a string contain only alphabets
bool checkIfIsAlphabet(const string &input)
{
  if (input.empty())
    return false;

  for (size_t i = 0; i < input.length(); i++)
  {
    if (!isalpha(input[i]))
      return false;
  }

  return true;
}

// Display invalid input message
void invalidInputException(const string &message)
{
  cout << "Invalid input: " << message << endl;
}

// validate date input
bool isValidateDate(const std::string &date)
{
  // Regular expression pattern for dd-mm-yyyy format
  regex pattern("\\b(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\\d{4})\\b");

  return regex_match(date, pattern);
}

// Check if an item already exists
bool itemExists(const string &filename, const string &item_id)
{
  ifstream inputfile(filename);
  string line;
  while (getline(inputfile, line))
  {
    stringstream ss(line);
    string id;
    getline(ss, id, ',');
    if (id == item_id)
    {
      inputfile.close();
      return true;
    }
  }
  return false;
}

// add a new item
void addItem(const string &item_id, const string &item_name, const string &item_quantity, const string &item_registration_date)
{

  // validations
  if (!checkIfIsInt(item_id))
  {
    invalidInputException("Item id must be a number!");
    return;
  }

  if (!checkIfIsAlphabet(item_name))
  {
    invalidInputException("Item name must be letters only!");
    return;
  }

  if (!checkIfIsInt(item_quantity))
  {
    invalidInputException("Item quantity must be a number!");
    return;
  }

  if (!isValidateDate(item_registration_date))
  {
    invalidInputException("Item registration date must be in dd-mm-yyyy format!");
    return;
  }

  if (itemExists(filename, item_id))
  {
    cout << "Item with the same ID already exists!" << endl;
    return;
  }

  // Item doesn't exist, add new item
  string data = item_id + "," + item_name + "," + item_quantity + "," + item_registration_date;
  saveToFile(filename, data);
  cout << "Item registered successfully!" << endl;
}

// Sort items based on item name
vector<string> sortItems(vector<string> items)
{
  for (int i = 0; i < items.size(); i++)
  {
    for (int j = 0; j < items.size() - 1; j++)
    {
      stringstream ss1(items[j]);
      stringstream ss2(items[j + 1]);
      string item_id1, item_name1, item_quantity1, item_registration_date1;
      string item_id2, item_name2, item_quantity2, item_registration_date2;
      getline(ss1, item_id1, ',');
      getline(ss1, item_name1, ',');
      getline(ss1, item_quantity1, ',');
      getline(ss1, item_registration_date1);
      getline(ss2, item_id2, ',');
      getline(ss2, item_name2, ',');
      getline(ss2, item_quantity2, ',');
      getline(ss2, item_registration_date2);
      transform(item_name1.begin(), item_name1.end(), item_name1.begin(), ::tolower);
      transform(item_name2.begin(), item_name2.end(), item_name2.begin(), ::tolower);
      if (item_name1 > item_name2)
      {
        string temp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = temp;
      }
    }
  }
  return items;
}

// List all items
void listItems()
{
  vector<string> items = readFromFile(filename);
  items = sortItems(items);
  cout << "\n";
  int longestId = 0;
  int longestName = 0;
  int longestQuantity = 0;
  int longestRegistrationDate = 0;

  // Calculate the length of the longest strings for formatting
  for (const string &item : items)
  {
    stringstream ss(item);
    string item_id, item_name, item_quantity, item_registration_date;
    getline(ss, item_id, ',');
    getline(ss, item_name, ',');
    getline(ss, item_quantity, ',');
    getline(ss, item_registration_date);

    if (item_id.length() > longestId)
      longestId = item_id.length();
    if (item_name.length() > longestName)
      longestName = item_name.length();
    if (item_quantity.length() > longestQuantity)
      longestQuantity = item_quantity.length();
    if (item_registration_date.length() > longestRegistrationDate)
      longestRegistrationDate = item_registration_date.length();
  }

  // Print the formatted item list
  for (const string &item : items)
  {
    stringstream ss(item);
    string item_id, item_name, item_quantity, item_registration_date;
    getline(ss, item_id, ',');
    getline(ss, item_name, ',');
    getline(ss, item_quantity, ',');
    getline(ss, item_registration_date);

    cout << "Item ID:" << setw(longestId) << left << item_id << "\t";
    cout << "Item Name:" << setw(longestName) << left << item_name << "\t";
    cout << "Quantity:" << setw(longestQuantity) << left << item_quantity << "\t";
    cout << "Reg Date:" << item_registration_date << endl;
  }

  cout << "\n";
}

// Display available commands
void displayHelp()
{
  cout << "-------------------------------------------------------------------------------------------" << endl;
  cout << "*                                      COMMAND SYNTAXES                                   *" << endl;
  cout << "-------------------------------------------------------------------------------------------" << endl;
  cout << "itemadd <item_id> <item_name> <quantity> <registration_date>    : Add a new item           " << endl;
  cout << "itemslist                                                       : List all items           " << endl;
  cout << "help                                                            : Show defined commands    " << endl;
  cout << "exit                                                            : Exit the program         " << endl;
  cout << "-------------------------------------------------------------------------------------------" << endl;
}

// Main program loop
void runProgram()
{
  cout << "=================================================================================" << endl;
  cout << "*                                  RCA INVENTORY SYSTEM                         *" << endl;
  cout << "=================================================================================" << endl;
  cout << "\n";
  cout << "Type 'help' and press Enter to see available commands." << endl;
  cout << "\n";

  string command;
  while (true)
  {
    cout << "Command > ";
    getline(cin, command);

    string tempCommand = command;
    string delimiter = " ";
    vector<string> splittedCommand;

    size_t pos = 0;
    try
    {
      while ((pos = tempCommand.find(delimiter)) != string::npos)
      {
        splittedCommand.push_back(tempCommand.substr(0, pos));
        tempCommand.erase(0, pos + delimiter.size());
      }
      splittedCommand.push_back(tempCommand);

      string mainCommand = splittedCommand[0];
      transform(mainCommand.begin(), mainCommand.end(), mainCommand.begin(), ::tolower);
      if (mainCommand == "itemadd")
      {

        if (splittedCommand.size() < 5)
        {
          cout << "Incomplete command! syntax: item_add <item_id> <item_name> <quantity> <registration_date>" << endl;
          continue;
        }

        string item_id = splittedCommand[1];
        string item_name = splittedCommand[2];
        string item_quantity = splittedCommand[3];
        string item_registration_date = splittedCommand[4];
        addItem(item_id, item_name, item_quantity, item_registration_date);
      }
      else if (mainCommand == "itemslist")
      {
        listItems();
      }
      else if (mainCommand == "help")
      {
        displayHelp();
      }
      else if (mainCommand == "exit")
      {
        cout << "Exiting program... " << __TIME__ << endl;
        break;
      }
      else
      {
        invalidInputException("Please enter a valid commnad! Enter help for available commands.");
      }
    }
    catch (const exception &e)
    {
      cerr << e.what() << '\n';
    }
  }
}

int main()
{
  runProgram();
  return 0;
}
