import mongoose from "mongoose";
//Track connection status
let isConnected = false;

export const connectToDb = async () => {
  mongoose.set('strictQuery', true);

  if(!process.env.MONGODB_URI)return console.log('MONGO_URI is not defined');

  if(isConnected) return console.log('=> using existing database connected');

  try{
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;
    console.log('MongoDb Connected')
  }catch (error){
    console.log(error)
  }
}