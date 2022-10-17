const express = require('express');       
const mongoose = require('mongoose');      
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;
const server = 'https://localhost:';
const userRouter = require('./routes/user.route.js');
const shoppingCartRouter = require('./routes/shoppingCarts.route.js');
const bookBrowsingRouter = require('./routes/bookBrowsing.routes.js');
const wishListRouter = require('./routes/wishList.route.js');

const bookRouter = require('./routes/bookDetails.route.js');
const bookRating = require('./routes/ratings.route.js');
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection.on('error', () => console.log('Connection failed to establish with database'));
mongoose.connection.once('open', () => console.log('Connection with database established'));

app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/shoppingCart', shoppingCartRouter);
app.use('/bookBrowsing', bookBrowsingRouter);
app.use('/wishList', wishListRouter)

app.use('/book', bookRouter);
// this gets the server up and running on the port 3000
app.use('/ratings', bookRating);

app.listen(PORT, () => console.log(`Running server on ${server}${PORT}`)); 
