import mongoose, { Document, Schema } from 'mongoose';

// Define the Trip interface and schema
export interface ITrip extends Document {
    tripName: string;
    destination: string;
    startDate: string;
    endDate: string;
    imagePreview: string;
    userId: string;
  }
  
  const tripSchema: Schema = new Schema({
    tripName: { type: String, required: true },
    destination: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    imagePreview: { type: String, required: true },
    userId: { type: String, required: true },
  });
  
  const Trip = mongoose.model<ITrip>('Trip', tripSchema);

export default Trip;
  