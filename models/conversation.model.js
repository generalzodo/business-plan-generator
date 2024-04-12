import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({

    chats:[],
    // userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
},
{ timestamps: true });

const Todo = mongoose.model('Conversation', conversationSchema);

export default Todo;

