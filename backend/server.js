import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js';
import { connect } from 'node:http2';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5000;

connectDB(); // connect to mongoDB

const app = express();

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser Middleware
app.use(cookieParser());




app.use('/api/products', productRoutes); // anytime we go to this path - it goes to productRoutes file
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req,res) => 
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID }));


// make "uploads" a static folder
const __dirname = path.resolve(); // Set __dirname to current directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


// for production:
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    // any route that is not api(the ones above) will be redirected to index.html
    app.get('*', (req,res) => 
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    )
} else { // in development:
    app.get("/", (req,res) => {
        res.send('API is running...');
    })
}

//error middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})