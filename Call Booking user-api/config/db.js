const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/mydb", err => {
            if (err) throw err;
            console.log('connected to MongoDB')
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;
