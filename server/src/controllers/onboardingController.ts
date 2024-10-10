import { Request, Response } from 'express';
import OnboardingService from '../services/onboardingService';

class OnboardingController {
  public async onboarding(req: Request, res: Response) {
    try {
      const onboardingDetails = req.body;
      const { email } = req.user; // Get email from the token
      const updatedDetails = await OnboardingService.completeOnboarding(email, onboardingDetails);
      res.status(200).json({ message: "Onboarding completed", onboardingDetails: updatedDetails });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
  }
}

export default new OnboardingController();
