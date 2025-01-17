   const Square = require("../models/square");

   const seedData = async () => {
     const count = await Square.countDocuments();
     if (count === 0) {
       await Square.create([
         {
           length: 3,
           color: "red",
           isFilled: true,
           text: "Hello",
           textColor: "white",
         },
         {
           length: 5,
           color: "blue",
           isFilled: false,
           text: "Square",
           textColor: "black",
         },
         {
           length: 7,
           color: "green",
           isFilled: true,
           text: "World",
           textColor: "yellow",
         },
       ]);
       console.log("Seed data added!");
     }
   };

   module.exports = seedData;