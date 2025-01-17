# Square Manager
`Square Manager` is a simple Node.js-based application designed to manage square entities in a database. This interactive console-based application provides an easy way to perform CRUD (Create, Read, Update, Delete) operations on squares, leveraging tools like **Mongoose**, **Inquirer**, and **Express** for seamless implementation.
## Features
### This project includes the following functionality:
1. **View Squares**:
    - Fetch and display all squares stored in the database.
    - Data is displayed in a clean tabular format, showing each square's:
        - `ID`
        - `Length` (representing the square's side length).
        - `Color`
        - `Filled` status (indicates whether it's filled or not).
        - `Text` (custom text inside the square).
        - `Text Color`.

2. **Add Square**:
    - Prompt the user to input details for a new square (length, color, text, text color, and filled status).
    - Save the new square to the database.

3. **Update Square**:
    - Select an existing square from the list and update its properties (length, color, etc.).

4. **Delete Square**:
    - Select a square to delete it permanently from the database.

5. **Exit**:
    - Exit the application cleanly.

## Technologies Used
- **Node.js**: Main runtime for the application.
- **Mongoose**: Provides MongoDB-based data modeling and schema validation.
- **Inquirer**: Handles user prompts and interactions in the terminal.
- **Express**: Serves as a backend application framework.

## Installation and Setup
Follow the instructions below to get started with the project on your local machine:
### **Clone the Repository**
``` bash
git clone https://github.com/MKotlobay/kotlobay-mongo-poc.git
cd square-manager
```
### **Install Dependencies**
Use `npm` to install all required dependencies:
``` bash
npm install
```
### **Required Dependencies**
The project uses the following npm packages:
1. `mongoose` (version: `^8.9.5`): For MongoDB interactions.
2. `express` (version: `^4.21.2`): For server routing (if needed in future).
3. `inquirer` (version: `^12.3.2`): For terminal-based inputs.

### **Set Up Your Database**
Make sure you have MongoDB installed and running locally or in the cloud. Update your database connection string in your `database.js` or wherever the MongoDB connection is defined.
## How to Use the Application
Run the following command in the terminal to start the application:
``` bash
node app.js
```
Once the application starts, you'll be presented with the following options in a menu:
``` plaintext
What would you like to do?
1: Add Square
2: Update Square
3: Delete Square
4: Exit
```
### Example Usage:
#### 1. Add a Square:
- Select option `1` from the menu.
- Enter the required details for the square, such as:
    - `Length`: (numeric, e.g., `5` for a square of side 5).
    - `Color`: (text, e.g., `red`).
    - `Is Filled`: (Yes or No).
    - `Text`: (e.g., `Hello`).
    - `Text Color`: (e.g., `white`).

- The square will be saved to the database.

#### 2. View Squares:
- The list of all squares will be displayed in a console table format automatically when adding or updating squares is completed.
- Example Table Output:
``` plaintext
Current Squares:
┌─────────────┬──────┬────────┬────────┬───────┬───────────┐
│ ID          │ Length │ Color  │ Filled │ Text  │ TextColor │
├─────────────┼──────┼────────┼────────┼───────┼───────────┤
│ 645fc93...  │ 5    │ red    │ Yes    │ Hello │ white     │
│ 645fc94...  │ 3    │ blue   │ No     │ Hi    │ black     │
└─────────────┴──────┴────────┴────────┴───────┴───────────┘
```
#### 3. Update a Square:
- Select option `2` from the menu.
- Choose a specific square by its displayed ID.
- Update the properties you want, such as length, color, or text.

#### 4. Delete a Square:
- Select option `3` from the menu.
- Choose a square to delete by its ID.

#### 5. Exit:
- Select option `4` to exit the application cleanly.

## Project Structure
Here's a high-level overview of how the project is organized:
``` 
square-manager/
├── app.js              # Entry point for the application
├── square.js           # Mongoose schema for Square objects
├── database.js         # Database connection setup
├── README.md           # Project documentation
└── package.json        # Project metadata and dependencies
```
## Example Workflow
### Adding a Square:
1. Run the application using `node app.js`.
2. Select `1: Add Square` and enter the following inputs when prompted:
    - Length: `5`
    - Color: `Red`
    - Is Filled: `Yes`
    - Text: `Hello`
    - Text Color: `White`

3. The application will save this square to the database.
4. View the updated table showing all squares.

### Updating a Square:
1. Choose `2: Update Square` from the menu.
2. Select the square ID you want to update.
3. Make changes to the desired properties (e.g., change color from Red to Blue).

### Deleting a Square:
1. Select `3: Delete Square` from the menu.
2. Choose the square by its ID to delete.
