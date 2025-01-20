const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register endpoint
router.post('/auth/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        return res.status(400).json({ message: 'Username or email already in use.' });
    }

    // Create new user
    const newUser = new User({
        username,
        email,
        password,
    });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong during registration' });
    }
});

module.exports = router;
