import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const connectDb = () => mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

export { connectDb }
