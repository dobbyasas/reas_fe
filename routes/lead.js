const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

// POST /lead
router.post('/', async (req, res) => {
  const { estateType, fullname, phone, email, region, district } = req.body;

  // Basic validation for required fields
  if (!estateType || !fullname || !phone || !email || !region || !district) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Simple phone number and email validation (for Czech numbers and general email)
  const phoneRegex = /^[+]?420? ?\d{3} ?\d{3} ?\d{3}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone format' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    const newLead = new Lead({ estateType, fullname, phone, email, region, district });
    await newLead.save();
    res.status(201).json({ message: 'Lead created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save lead' });
  }
});

module.exports = router;
