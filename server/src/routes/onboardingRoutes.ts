import { Router } from 'express';
import OnboardingController from '../controllers/onboardingController';
import AuthMiddleware from '../middlewares/authMiddleware';

const router = Router();

// Call the instance method
router.post('/', AuthMiddleware.authenticate, OnboardingController.onboarding);

export default router;
