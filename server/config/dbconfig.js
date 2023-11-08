import mongoose from "mongoose";

const connectToDatabase = async ()=>{
    const {connection} = await mongoose.connect(
`mongodb+srv://antaranitdgp11:${process.env.DATABASE_PASSWORD}@cluster0.wqvijmq.mongodb.net/Assignment`
    );

    if (connection){
        console.log(`1connected to database ${connection.host}`)
    }
}
export default connectToDatabase 