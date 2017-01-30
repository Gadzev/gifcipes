import mongoose from 'mongoose';

// connect to the database
mongoose.connect('mongodb://localhost/gifcipesdb');

export const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'database connection error: '));
