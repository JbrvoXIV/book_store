const { User } = require('../models/user.model.js');

// get user from userName
const getUserByUserNameController = async (req, res) => {
    try {
        const {userName} = req.query;
<<<<<<< HEAD
        const user = await User.find({ user_name: userName })
=======
        const user = await User.find({ user_name: userName });
>>>>>>> ec88cfc (updated book schema)
        return res.status(200).json(user);
    } catch(e) {
        console.log(e);
        return res.status(201).json({ status: 'failed', message: 'user_name not found in database' });
    }
};

module.exports = { getUserByUserNameController };