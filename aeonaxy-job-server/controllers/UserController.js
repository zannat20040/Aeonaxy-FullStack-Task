
const User = require('../modals/User');

// Function to create a new user
exports.createUser = async (req, res) => {
    try {
        const { name, username, email, pass } = req.body;

        const existingUsername = await User.findOne({ username });

        if (existingUsername ) {
            return res.status(400).json({ message: 'Username has already been taken' });
        }

        // Create a new user
        const newUser = new User({
            name,
            username,
            email,
            pass
        });

        // Save the user to the database
        await newUser.save();

        res.status(200).json({ message: 'You have created an account successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
