import mongoose from 'mongoose';
const schema=new mongoose.Schema({book:{type:mongoose.Schema.Types.ObjectId,ref:'Book',required:true},member:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},issueDate:{type:Date,default:Date.now},dueDate:{type:Date,required:true},returnedAt:{type:Date,default:null},issuedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}},{timestamps:true});
schema.index({book:1,member:1,returnedAt:1}); export default mongoose.model('Loan',schema);
