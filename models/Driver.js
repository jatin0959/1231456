const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    model: { type: String, required: true },
    driverName: { type: String, required: true },
    downloadLink: { type: String, required: true },
    version: { type: String, required: true },
    releaseDate: { type: Date, required: true }
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
