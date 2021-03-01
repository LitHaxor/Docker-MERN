import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Movie = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
    }, 
    {
        timestamps: true
    }
);

const movieModel = mongoose.model('movies', Movie );

export default movieModel;

// Can you see me here?
