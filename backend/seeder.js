import mongoose from "mongoose";
import dotenv from "dotenv"; // for using .env
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import { dot } from "node:test/reporters";

dotenv.config(); // initialize .env
await connectDB(); // connect to our database


// import data:
const importData = async () =>  {
    try {
        await Order.deleteMany(); // delete all orders
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users); // insert the users from users.js in data folder
        const adminUser = createdUsers[0]._id;// the admin user

        // created a variable with all the products ( including the admin user)
        const sampleProducts = products.map((product) => {
            return {...product, user: adminUser};
        })

        //insert all the products into the database:
        await Product.insertMany(sampleProducts);

        console.log('Data imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}
// delete all data from the database:
const destroyData = async () => {
    try {
        await Order.deleteMany(); // delete all orders
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
    } catch (error){
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

// if we run seeder.js like that: node seeder.js -d(or - npm run data:destroy):
if(process.argv[2] === '-d') {
    destroyData();

// else, we run: node seeder.js(or - npm run data:import):
} else {
    importData();
}