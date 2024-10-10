import { User } from '../models/User';

class OnboardingService {
  public async completeOnboarding(email: string, onboardingDetails: Record<string, any>) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    user.onboardingDetails = onboardingDetails;
    await user.save();
    return user.onboardingDetails;
  }
}

export default new OnboardingService();
