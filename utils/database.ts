import mongoose from 'mongoose';

let isConnected = false; //check out connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('welcome from mongo');
    return;
  }

  console.log('trying to connect');
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION_KEY!, {
      dbName: 'share_prompt',
    });
    isConnected = true;
    console.log('mongodb is connected successfully');
  } catch (error) {
    console.warn(error);
  }
};
