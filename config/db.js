import mongoose from "mongoose";
import "dotenv/config";

 const connectDB = async() => {
    await mongoose.connect('mongodb+srv://lunanero:98765432@cluster0.ganjn.mongodb.net/luna-nero').then(()=>console.log("DB Connected"))
}

const dbConnect = async () => {
    try{
    const  connect = await mongoose.connect(process.env.CONNECTION_STRING_ADMIN)
    console.log(
        `Database connected : ${connect.connection.host}, ${connect.connection.name}`
    );
} catch(err) {
    console.log(err)
    process.exit(1)
}
};

export {connectDB, dbConnect}