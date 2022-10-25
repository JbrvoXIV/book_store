const { User } = require('../models/user.model.js');

// get user from userName
const getUserByUserNameController = async (req, res) => {
    try {
        const {userName} = req.query;
        const user = await User.find({ user_name: userName });
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
        res.status(401).json({ status: 401, message: e.message });
    }
};

const updateUserController = async (req, res) => {
    let filter = req.query;
    let update = req.body;
    try {
        if(update.hasOwnProperty('email')) // if user wants to update email, return error
            return res.status(400).json({ status: 400, message: 'Email cannot be updated' });
        const updatedUser = await User.findOneAndUpdate(filter, update, { new: true }); // query and update all-in-one, throwns validator errors
        if(!updatedUser) // check if query returns null, throw error
            throw 'The user you are trying to update does not exist';
        await updatedUser.save();
        return res.status(200).json({ status: 200, message: 'User successfully updated', user: updatedUser });
    } catch(e) {
        const msg = e.message ? e.message : e; // if error is thrown by execution, e.message, else, custom message e
        return res.status(404).json({ status: 404, message: msg});
    }
}

module.exports = { getUserByUserNameController, createUserController, updateUserController };