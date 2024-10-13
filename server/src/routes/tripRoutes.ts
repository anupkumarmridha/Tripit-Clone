import { Router } from 'express';
import TripController from '../controllers/tripController';
import AuthMiddleware from '../middlewares/authMiddleware';


const router = Router();

router.post('/', AuthMiddleware.authenticate, TripController.saveTrip);
router.get('/:tripId', AuthMiddleware.authenticate, TripController.fetchTrip);
router.get('/', AuthMiddleware.authenticate, TripController.fetchAllTrips);
router.put('/:tripId', AuthMiddleware.authenticate, TripController.updateTrip);
router.delete('/:tripId', AuthMiddleware.authenticate, TripController.deleteTrip);

export default router;