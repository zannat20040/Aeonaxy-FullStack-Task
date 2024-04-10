const User = require('../modals/User');

exports.updateUser = async (req, res) => {
    try {
        const username = req.params.id;
        const updateFields = req.body;
        console.log(updateFields)

        const updatedUser = await User.findOneAndUpdate(
            { username: username },
            { $set: updateFields },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'Profile data updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating profile data:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
};
