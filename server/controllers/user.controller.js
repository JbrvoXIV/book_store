const { User } = require('../models/user.model.js');

// get user from userName
const getUserByUserNameController = async (req, res) => {
    try {
        const {userName} = req.query;
        const user = await User.find({ user_name: userName })
        return res.status(200).json(user);
    } catch(e) {
        console.log(e);
        return res.status(201).json({ status: 'failed', message: 'user_name not found in database' });
    }
};

const createUserController = async (req, res) => {
    try {
        const user = req.body;
        const newUser = new User({
            name: user.name,
            user_name: user.user_name,
            email: user.email,
            address: {
                city: user.city,
                state: user.state,
                street: user.street,
                zip: user.zip
            }
        });
        await newUser.save();
        res.status(201).json({ 
            status: 201, message: "User successfully created", user: newUser
        });
    } catch(e) {
        res.status(401).json({ status: 401, message: e.message })
    }
};

module.exports = { getUserByUserNameController, createUserController };