const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;
const server = 'https://localhost:';
const userRouter = require('./routes/user.route.js');
const MONGO_URI = "mongodb+srv://jbrav058:BookStore123!@cluster0.2wvd82q.mongodb.net/book_store?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection.on('error', () => console.log('Connection failed to establish with database'));
mongoose.connection.once('open', () => console.log('Connection with database established'));

app.use(express.json());
app.use(cors());
app.use('/user', userRouter);

app.listen(PORT, () => console.log(`Running server on ${server}${PORT}`));