import mongoose from 'mongoose';

class Database {
  public static async connect() {
    try {
      await mongoose.connect(process.env.MONGODB_URI as string);
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  }
}

export default Database;
