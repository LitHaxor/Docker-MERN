import mongoose from 'mongoose';



try{
    mongoose.connect('mongodb://mongo:27017/cinema',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
}
catch(error) {console.log(error)};

const db = mongoose.connection;

export default db;