const express = require('express');
const router = express.Router();
const { YourModel } = require('../models'); // Define your Mongoose model

// POST route to handle form submissions
router.post('/submitForm', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Create a new instance of your model
    const newData = new YourModel({ name, email, message });
    // Save data to the database
    await newData.save();
    res.status(201).json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Failed to save data.' });
  }
});

module.exports = router;
