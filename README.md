# Contact Management Console Application

This is a console application created for managing a list of contacts. You can add, view, delete contacts, and get information about a specific contact by its ID.

## Screenshots

Here are some screenshots demonstrating the usage of the application: https://monosnap.com/list/64ab10ff8cbb11689b061cd5

## Features

- Add new contacts with name, email, and phone number
- View all contacts in a tabular format
- Get information about a specific contact by its ID
- Delete a contact by its ID

## Requirements

Before using the application, make sure you have the following components installed on your computer:

- [Node.js](https://nodejs.org) (version 12 or higher)

## Installation

1. Clone the repository:

git clone https://github.com/MoskaletsOleksandr/goit-node-hw-01.git

2. Navigate to the project directory:

cd goit-node-hw-01

3. Install the dependencies by running the following command:

npm install

## Usage

To interact with the application, use the command-line interface. Below are examples of command invocations:

1. View the list of all contacts:

npm run getContacts

2. Get information about a contact by its ID:

npm run getContactById -- --id contact-id

3. Add a new contact:

npm run addContact -- --name contact-name --email contact-email --phone contact-phone

4. Delete a contact by its ID:

npm run deleteContactById -- --id contact-id

Replace contact-id, contact-name, contact-email, and contact-phone with the appropriate values.
