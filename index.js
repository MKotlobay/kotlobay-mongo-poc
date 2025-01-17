   const connectDB = require("./database/db");
   const seedData = require("./database/seed_square_data");
   const menu = require("./menus/menu");

   (async () => {
     await connectDB();
     await seedData();
     await menu();
   })();