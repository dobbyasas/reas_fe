const express = require('express');
const Property = require('../models/Property');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const property = new Property(req.body);
        const savedProperty = await property.save();
        res.status(201).json(savedProperty);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const properties = await Property.find().populate('agent', 'name email');
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
