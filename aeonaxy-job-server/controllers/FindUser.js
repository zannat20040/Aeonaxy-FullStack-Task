const User = require('../modals/User');

exports.findUser = async (req, res) => {
    const  username  = req.params.id;
  
    try {
      const user = await User.findOne({ username });
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      res.json(user);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
};
