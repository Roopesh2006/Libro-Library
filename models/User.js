import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true,trim:true},phone:{type:String,default:''},password:{type:String,select:false},googleId:{type:String,unique:true,sparse:true,index:true},resetCodeHash:{type:String,select:false},resetCodeExpiresAt:{type:Date,select:false},role:{type:String,enum:['admin','member'],default:'member'}},{timestamps:true});
export default mongoose.model('User',schema);
