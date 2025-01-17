const inquirer = require("inquirer");
const Square = require("../models/square");

const menu = async () => {
  let isRunning = true;
  while (isRunning) {
    try {
      // Fetch all squares from the database
      const items = await Square.find({}, null, null);

      // Display all squares in table format
      console.log("\nCurrent Squares:");
      console.table(items.map((item, index) => ({
        Index: index + 1, // One-based index
        ID: item._id.toString(),
        Length: item.length,
        Color: item.color,
        Filled: item.isFilled ? "Yes" : "No",
        Text: item.text,
        TextColor: item.textColor,
      })));

      // Show available actions with numbers
      console.log("\nWhat would you like to do?");
      console.log("1: Add Square");
      console.log("2: Update Square");
      console.log("3: Delete Square");
      console.log("4: Exit");

      // Prompt user to enter a number for their choice
      const { choice } = await inquirer.prompt([
        {
          type: "input",
          name: "choice",
          message: "Enter the number corresponding to your choice:",
          validate: (input) => {
            const num = parseInt(input);
            if (num >= 1 && num <= 4) return true;
            return "Please enter a valid number between 1 and 4.";
          },
        },
      ]);

      // Convert choice to number
      switch (parseInt(choice)) {
        case 1:
          await addSquare();
          break;
        case 2:
          await updateSquare(items);
          break;
        case 3:
          await deleteSquare(items);
          break;
        case 4:
          console.log("Exiting...");
          isRunning = false; // Stop the loop
          break;
      }
    } catch (error) {
      console.log("An error occurred:", error.message);
    }
  }
};

const addSquare = async () => {
  try {
    // Prompt user to input all required square properties
    const answers = await inquirer.prompt([
      {
        type: "number",
        name: "length",
        message: "Enter the length of the square:",
        validate: (input) => input > 0 || "Length must be a positive number!",
      },
      {
        type: "input",
        name: "color",
        message: "Enter the color of the square:",
        validate: (input) => input.trim() !== "" || "Color cannot be empty!",
      },
      { type: "confirm", name: "isFilled", message: "Is the square filled?" },
      {
        type: "input",
        name: "text",
        message: "Enter the text inside the square:",
        validate: (input) => input.trim() !== "" || "Text cannot be empty!",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color:",
        validate: (input) => input.trim() !== "" || "Text color cannot be empty!",
      },
    ]);

    // Create and save the new square in the database
    await Square.create(answers, null);
    console.log("Square added successfully!");
  } catch (error) {
    console.log("Failed to add square:", error.message);
  }
};

const updateSquare = async (items) => {
  try {
    if (items.length === 0) {
      console.log("No squares to update!");
      return;
    }

    const { itemNumber } = await inquirer.prompt([
      {
        type: "number",
        name: "itemNumber",
        message: "Enter the number of the square to update:",
        validate: (input) => input > 0 && input <= items.length || "Invalid square number!",
      },
    ]);

    const selectedItem = items[itemNumber - 1];

    const updates = await inquirer.prompt([
      {
        type: "number",
        name: "length",
        message: `Update length (${selectedItem.length}):`,
        default: selectedItem.length,
        validate: (input) => input > 0 || "Length must be a positive number!",
      },
      {
        type: "input",
        name: "color",
        message: `Update color (${selectedItem.color}):`,
        default: selectedItem.color,
        validate: (input) => input.trim() !== "" || "Color cannot be empty!",
      },
      {
        type: "confirm",
        name: "isFilled",
        message: `Is it filled? (${selectedItem.isFilled}):`,
        default: selectedItem.isFilled,
      },
      {
        type: "input",
        name: "text",
        message: `Update text (${selectedItem.text}):`,
        default: selectedItem.text,
        validate: (input) => input.trim() !== "" || "Text cannot be empty!",
      },
      {
        type: "input",
        name: "textColor",
        message: `Update text color (${selectedItem.textColor}):`,
        default: selectedItem.textColor,
        validate: (input) => input.trim() !== "" || "Text color cannot be empty!",
      },
    ]);

    await Square.findByIdAndUpdate(selectedItem._id, updates, null);
    console.log("Square updated successfully!");
  } catch (error) {
    console.log("Failed to update square:", error.message);
  }
};

const deleteSquare = async (items) => {
  try {
    if (items.length === 0) {
      console.log("No squares to delete!");
      return;
    }

    const { itemNumber } = await inquirer.prompt([
      {
        type: "number",
        name: "itemNumber",
        message: "Enter the number of the square to delete:",
        validate: (input) => input > 0 && input <= items.length || "Invalid square number!",
      },
    ]);

    const selectedItem = items[itemNumber - 1];
    await Square.findByIdAndDelete(selectedItem._id, null);
    console.log("Square deleted successfully!");
  } catch (error) {
    console.log("Failed to delete square:", error.message);
  }
};

module.exports = menu;