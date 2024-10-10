import { Request, Response } from 'express';
import AuthService from '../services/authService';

class AuthController {
  public async signup(req: Request, res: Response) {
    try {
      const { email, password, homeCity } = req.body;
      const { user, token } = await AuthService.register(email, password, homeCity);
      res.status(201).json({ message: "User created", user, token });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { user, token } = await AuthService.login(email, password);
      res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}

export default new AuthController();
