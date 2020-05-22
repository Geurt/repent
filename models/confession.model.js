import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

// define confession schema
const confessionSchema = new Schema({
        title: {
            type: String,
            required: [true, 'The title field is required']
        },
        confession: {
            type: String,
            required: [true, 'The confession field is required']
        },
        forgivenCount: {
            type: Number
        },
        unforgivenCount: {
            type: Number
        }
    }, 
    { timestamps: true }
);


// create confession model
const Confession = mongoose.model('confession', confessionSchema);

export default Confession;
