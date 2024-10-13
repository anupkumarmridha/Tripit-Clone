import Trip from '../models/Trip';
import { ITrip } from '../models/Trip';

class TripService {
    public async saveTrip(userId: string, tripDetails: ITrip) {
      const trip = new Trip({ ...tripDetails, userId });
      await trip.save();
      return trip;
    }
  
    public async fetchTrip(userId: string, tripId: string) {
      const trip = await Trip.findOne({ _id: tripId, userId });
      if (!trip) throw new Error('Trip not found');
      return trip;
    }
  
    public async fetchAllTrips(userId: string) {
      return await Trip.find({ userId });
    }
  
    public async updateTrip(userId: string, tripId: string, tripDetails: Partial<ITrip>) {
      const trip = await Trip.findOneAndUpdate({ _id: tripId, userId }, tripDetails, { new: true });
      if (!trip) throw new Error('Trip not found');
      return trip;
    }
  
    public async deleteTrip(userId: string, tripId: string) {
      const trip = await Trip.findOneAndDelete({ _id: tripId, userId });
      if (!trip) throw new Error('Trip not found');
      return trip;
    }
  }
  
  export default new TripService();
  