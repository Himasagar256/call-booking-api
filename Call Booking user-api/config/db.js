const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017", err => {
            if (err) throw err;
            console.log('connected to MongoDB')
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;
