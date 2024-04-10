const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { Resend } = require('resend');
const resend = new Resend('re_ACbEh3CH_HiFUeb6z3tytxXLRXkgEVraR');

const userRoutes = require('./routes/userRoutes');
const app = express();

// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://shanzidadisha1234:IMViqEyWdeSV7nuJ@cluster0.2stqidu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Use user routes
app.use(userRoutes);

// email send

app.post('/send-email', async (req, res) => {
    const { from, to, subject, body } = req.body;
    try {
      // Send email using Resend SDK
      const response = await resend.emails.send({from, to, subject, body });
      console.log('Email sent successfully:', response);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    }
  });



// Default route handler
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
