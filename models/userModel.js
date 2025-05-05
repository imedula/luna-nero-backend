import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    approved: { type: Boolean, default: false },
    cartData: { type: Object, default:{}}
},{minimize:false});

const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;


// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true }, // Добавляем username
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ['admin', 'user'], default: 'user' }, // Добавляем role
//     approved: { type: Boolean, default: false }, // Добавляем approved
//     cartData: { type: Object, default: {} }
// }, { minimize: false });

// const userModel = mongoose.models.user || mongoose.model("user", userSchema);

// export default userModel;

