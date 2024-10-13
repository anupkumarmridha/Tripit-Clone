
import { Request, Response } from 'express';
import TripService from '../services/tripService';

class TripController {
    public async saveTrip(req: Request, res: Response) {
      try {
        const userId = req.user.id;
        const trip = await TripService.saveTrip(userId, req.body);
        res.status(201).json(trip);
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
    }
  
    public async fetchTrip(req: Request, res: Response) {
      try {
        const userId = req.user.id;
        const tripId = req.params.tripId;
        const trip = await TripService.fetchTrip(userId, tripId);
        res.status(200).json(trip);
      } catch (error: any) {
        res.status(404).json({ error: error.message });
      }
    }
  
    public async fetchAllTrips(req: Request, res: Response) {
      try {
        const userId = req.user.id;
        const trips = await TripService.fetchAllTrips(userId);
        res.status(200).json(trips);
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
    }
  
    public async updateTrip(req: Request, res: Response) {
      try {
        const userId = req.user.id;
        const tripId = req.params.tripId;
        const trip = await TripService.updateTrip(userId, tripId, req.body);
        res.status(200).json(trip);
      } catch (error: any) {
        res.status(404).json({ error: error.message });
      }
    }
  
    public async deleteTrip(req: Request, res: Response) {
      try {
        const userId = req.user.id;
        const tripId = req.params.tripId;
        const trip = await TripService.deleteTrip(userId, tripId);
        res.status(200).json(trip);
      } catch (error: any) {
        res.status(404).json({ error: error.message });
      }
    }
  }
  

export default new TripController();