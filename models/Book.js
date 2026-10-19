import mongoose from 'mongoose';
const schema=new mongoose.Schema({title:{type:String,required:true,trim:true},author:{type:String,required:true},category:{type:String,default:'General'},isbn:{type:String,trim:true},copies:{type:Number,required:true,min:0},available:{type:Number,required:true,min:0},link:{type:String,default:''}},{timestamps:true});
export default mongoose.model('Book',schema);
