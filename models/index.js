import mongoose from 'mongoose';

const connectDb = () => mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

export { connectDb }