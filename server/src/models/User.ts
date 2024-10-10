import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  homeCity: string;
  onboardingDetails: Record<string, any>;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  homeCity: { type: String, required: true },
  onboardingDetails: { type: Object, default: {} },
});

// Transform the output of the toJSON method
userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password; // Remove password from the output
    return ret; 
  }
});

const User = mongoose.model<IUser>('User', userSchema);

export { User, IUser };
