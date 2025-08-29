const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connesso a MongoDB');
  } catch (error) {
    console.error('Errore connessione MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
