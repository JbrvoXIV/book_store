const express = require('express');         // Imports express
const mongoose = require('mongoose');       // Imports mongoose
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;
const server = 'https://localhost:';
<<<<<<< HEAD
const userRouter = require('./routes/movies.route.js');
=======
>>>>>>> 2f5378bc664bc3f34545e33cc8ef94663281fac9
const shoppingCartRouter = require('./routes/shoppingCarts.route.js');
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection.on('error', () => console.log('Connection failed to establish with database'));
mongoose.connection.once('open', () => console.log('Connection with database established'));

app.use(express.json());
app.use(cors());
<<<<<<< HEAD
app.use('/user', userRouter);
=======
>>>>>>> 2f5378bc664bc3f34545e33cc8ef94663281fac9
app.use('/shoppingCart', shoppingCartRouter);

// this gets the server up and running on the port 3000
app.listen(PORT, () => console.log(`Running server on ${server}${PORT}`));  